import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import PaperCard from "../components/PaperCard";
import Footer from "../components/Footer";
import PortalPopup from "../components/PortalPopup";
import AlertPopup from "../components/AlertPopup";
import Loader from "../components/Loader";
const backendURL = process.env.REACT_APP_BACKEND_URL;


const ProfilePageDesktop = () => {
  const [profile,setProfile] = useState({  username: 'username',
  name: 'name',
  bio: 'bio',
  profilePicture: '',
  coverPicture: '/image-placeholder44@2x.png',
});
  const [editing, setEditing] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [onProfile, setOnProfile] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({
    username: '',
    name: '',
    bio: '',
    profilePicture: '',
    coverPicture: '',
    licenseNumber: '',
  });
  const [imageFiles, setImageFiles] = useState([]);
  const [coverFiles, setCoverFiles] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [onOwned,setOnOwned] = useState(false)
  const [onCreated,setOnCreated] = useState(false)
  const [userOwnedPosts, setUserOwnedPosts] = useState([]);
  const [updatedUsername, setUpdatedUsername] = useState('');
  const [following,setFollowing] = useState(false);
  const [alert,setAlert]= useState('');
  const [isAlertPopupOpen, setAlertPopupOpen] = useState(false);
  const [paperPurchased,setPaperPurchased] = useState(false)
  const [isLoading,setIsLoading] = useState(false);
  const [loadingContent,setLoadingContent] = useState('');
  const token = localStorage.getItem("token");




  const navigate = useNavigate();
  const { username } = useParams();

// Alert Popup Logic
const openAlertPopup = useCallback(() => {
  setAlertPopupOpen(true);
}, []);

const closeAlertPopup = useCallback(() => {
  setAlertPopupOpen(false);
}, []);

// Verify user is logged in
useEffect(()=>
{
  const verifyUserLogin = async() => {
    const response = await fetch(`${backendURL}/verifyUserLogin/${token}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if(data.status === "ok"){
      setLoggedIn(true);
      if(data.username===username){
        setOnProfile(true);
      } else{
        setOnProfile(false);
      }
    }
    else{
      setLoggedIn(false);
      // navigate("/login");
    }
  };
  verifyUserLogin();
}
,[]);

// Check if already following
useEffect(()=>
{

  const checkFollow = async() => {
    if(loggedIn===true){
    const response = await fetch(`${backendURL}/checkFollow/${username}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization":"Bearer "+localStorage.getItem('token')
      },
    });
    const data = await response.json();
    if(data.status === "ok"){
      if(data.message==="1"){
      setFollowing(true);
    }
    else{
      setFollowing(false);
    }
  }
    } else {
      setFollowing(false);
    }
  };
  checkFollow();
}
,[]);

// Created Clicked
const CreatedClicked = () => {
  setOnOwned(false)
}
// Owned Clicked
const OwnedClicked = () => {
  setOnOwned(true)
}
// Copy to clipboard
const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    // You can also display a toast or alert here to let the user know the text has been copied
    setAlert("Copied to clipboard")
    openAlertPopup();
    } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}


// Handle pfp upload
const handlepfpUpload = async (files) => {
  const formData = new FormData();
  Array.from(files).forEach(file => {
    formData.append('pfp', file);
  });

  const response = await fetch(`${backendURL}/upload-pfp`, {
    method: 'POST',
    body: formData
  });
  const data = await response.json();
  setImageFiles(data.urls);
  setUpdatedProfile((prev) => ({
    ...prev,
    profilePicture: data.urls[0], // assuming you're only uploading one image
  }));
};
// Handle cover upload
const handleCoverUpload = async (files) => {
  const formData = new FormData();
  Array.from(files).forEach(file => {
    formData.append('cover', file);
  });

  const response = await fetch(`${backendURL}/upload-cover`, {
    method: 'POST',
    body: formData
  });
  const data = await response.json();
  setCoverFiles(data.urls);
  setUpdatedProfile((prev) => ({
    ...prev,
    coverPicture: data.urls[0], // assuming you're only uploading one image
  }));
};

// Function to remove the uploaded image
const removePfp = () => {
  setImageFiles([]);
  setUpdatedProfile((prev) => ({
    ...prev,
    profilePicture: profile.profilePicture
  }));
};
const removeCover = () => {
  setCoverFiles([]);
  setUpdatedProfile((prev) => ({
    ...prev,
    coverPicture: profile.coverPicture
  }));
};

  // Create a handler to toggle editing mode
const handleEditClick = () => {
  setEditing(!editing);
  setUpdatedProfile(profile); // populate the edit fields with current profile data
};

// Handle the input changes
const handleUserameChange = (e) => {
  const { name, value } = e.target;
  setUpdatedProfile((prev) => ({
    ...prev,
    [name]: value
  }));
};
const handleNameChange = (e) => {
  const { name, value } = e.target;
  setUpdatedProfile((prev) => ({
    ...prev,
    [name]: value
  }));
};
const handleBioChange = (e) => {
  const { name, value } = e.target;
  setUpdatedProfile((prev) => ({
    ...prev,
    [name]: value
  }));
};
const handleLicChange = (e) => {
  const { name, value } = e.target;
  setUpdatedProfile((prev) => ({
    ...prev,
    [name]: value
  }));
};

// Handle follow click
const handleFollowClick = async () => {
  if (!loggedIn) { // Ensure user is logged in
    setAlert('First Log in to follow')
    openAlertPopup();
    // navigate("/login-account");
    return;
  }

  
  try {
    const response = await fetch(`${backendURL}/follow/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,  // Assuming the token is used for authorization
      },
    });
  
    const data = await response.json();
    if (data.status === 'ok') {
      setProfile(prev => ({
        ...prev,
        followers: prev.followers + 1  // Assuming the profile object has a `follow` field that stores the count
      }));
      setFollowing(true)
    } else {
      console.log('Failed to follow', data.error);
    }
  } catch (error) {
    console.error('There was an error following the user', error);
  }
};

// Handle unfollow click
const handleUnfollowClick = async () => {
  // if (!loggedIn) { // Ensure user is logged in
  //   console.log('User needs to be logged in to follow');
  //   // navigate("/login-account");
  //   return;
  // }

  
  try {
    const response = await fetch(`${backendURL}/unfollow/${username}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,  // Assuming the token is used for authorization
      },
    });
  
    const data = await response.json();
  
    if (data.status === 'ok') {
      setProfile(prev => ({
        ...prev,
        followers: prev.followers - 1  // Assuming the profile object has a `follow` field that stores the count
      }));
      setFollowing(false)
    } else {
      console.log('Failed to unfollow', data.error);
    }
  } catch (error) {
    console.error('There was an error unfollowing the user', error);
  }
};

  


// Handle saving the updated profile
const handleSaveClick = async () => {
  try {
    const response = await fetch(`${backendURL}/profile/${token}/edit`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    });
    const data = await response.json();
    if (data.status === "ok") {
      setProfile(updatedProfile); // update the displayed profile
      // update localstorage username
      localStorage.setItem("username",updatedProfile.username);
      setUpdatedUsername(updatedProfile.username)
      setEditing(false); // exit editing mode
      setAlert("Profile Saved!")
      openAlertPopup();
    } else {
      // Handle any errors from the backend here
    }
  } catch (error) {
    // Handle request error here
  }
};

  const onNavLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRankingsContainerClick = useCallback(() => {
    navigate("/rankings");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

 


  const dummyProfile = {
    "username": "username",
    "profilePicture": ["/profile-placeholder.webp"],
    "coverPicture": [""],
    // "coverPicture": ["/image-placeholder44@2x.png"],
  }
  
  // Fetch Profile and posts of user
  useEffect(() => {
    setLoadingContent("Loading Profile");
    setIsLoading(true);
    setProfile(dummyProfile);
    const fetchProfile = async() => {
      const response = await fetch(`${backendURL}/profile/${username}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProfile(data.profile)
      setIsLoading(false);
      // Fetch posts by user
      const response1 = await fetch(`${backendURL}/post/email/${data.profile.email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response1.ok) {
        throw new Error('Network response 1 was not ok');
      }
      const data1 = await response1.json();
      setUserPosts(data1.posts.reverse())

      // Fetch posts owned by user
      const response2 = await fetch(`${backendURL}/post/owned/${data.profile._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
    });
    if (!response2.ok) {
      throw new Error('Network response 2 was not ok');
    }
    const data2 = await response2.json();
    setUserOwnedPosts(data2.posts.reverse())
    };
    fetchProfile();
  },[]);

  const onGlobeIconClick = useCallback(() => {
    window.open("https://www.curewrite.com");
  }, []);

  const onDiscordLogoIconClick = useCallback(() => {
    window.open("https://www.curewrite.com");
  }, []);

  const onYoutubeLogoIconClick = useCallback(() => {
    window.open("https://www.curewrite.com");
  }, []);

  const onTwitterLogoIconClick = useCallback(() => {
    window.open("https://www.curewrite.com");
  }, []);

  const onInstagramLogoIconClick = useCallback(() => {
    window.open("https://www.curewrite.com");
  }, []);

  return (
    <div className="relative bg-background w-full flex flex-col items-start justify-start text-left text-3xl text-text font-base-body-space-mono">
            <Loader isOpen={isLoading} content={loadingContent} />
      <Navigation1
        navigationPosition="unset"
        navigationWidth="unset"
        navigationTop="unset"
        navigationRight="unset"
        navigationLeft="unset"
        navigationAlignSelf="stretch"
        onNavLogoClick={onNavLogoClick}
        horizontalLogo1="/cwLogo@2x.png"
        rocketLaunch="/rocketlaunch9.svg"
        rocketLaunchIcon
        onRankingsContainerClick={onRankingsContainerClick}
        rankingsCursor="pointer"
        rocketLaunch1="/rocketlaunch10.svg"
        rocketLaunchIcon1
        rocketLaunch2="/rocketlaunch9.svg"
        onSignUpContainerClick={onSignUpContainerClick}
        signUpCursor="pointer"
        plus="/plus2.svg"
        navLogoCursor="pointer"
        hasLeftIcon
        hasText
        // updatedUsername={updatedUsername}
      />
      <div className="self-stretch flex flex-col items-center justify-start relative">
  <img
    className="self-stretch relative max-w-full overflow-hidden h-80 shrink-0 object-cover"
    alt=""
    src={coverFiles.length > 0 ? coverFiles[0] : profile.coverPicture[0]}
    />

  {coverFiles.length > 0 ? ( editing ? 
    <button onClick={removeCover} className="absolute bottom-4 right-4 cursor-pointer">
      <img
        className="h-[30px] w-[30px] rounded-xl"
        alt="Remove Cover"
        src="/delete.jpeg"  
      />
    </button> : null
  ) : ( editing && loggedIn ? 
    <label htmlFor="image-upload-cover" className="absolute bottom-4 right-4 cursor-pointer">
      <img
        className="h-[30px] w-[30px] rounded-xl"
        alt="Edit profile"
        src="/edit.png"
      />
    </label> : null
  )}
  <input 
    id="image-upload-cover"
    type="file" 
    onChange={(e) => handleCoverUpload(e.target.files)} 
    style={{ display: 'none' }}
  />
        <div className="w-[1050px] flex flex-row items-start justify-start mt-[-70px]">
          <div className="rounded-xl flex flex-row items-start justify-start border-[2px] border-solid border-background">
          <div className="relative w-[120px] h-[120px]">
          <img
        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={imageFiles.length > 0 ? imageFiles[0] : profile.profilePicture[0]}
      />
  
  {imageFiles.length > 0 ? ( editing ? 
        <button onClick={removePfp} className="cursor-pointer">
          <img
            className="absolute h-[30px] w-[30px] top-[70%] right-[0%] bottom-[0%] left-[80%] rounded-xl max-w-full overflow-hidden max-h-full object-cover"
            alt="Remove profile"
            src="/delete.jpeg"  
          />
        </button> : null
      ) : ( editing ? 
        <label htmlFor="image-upload" className="cursor-pointer">
          <img
            className="absolute h-[30px] w-[30px] top-[70%] right-[0%] bottom-[0%] left-[80%] rounded-xl max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
            alt="Edit profile"
            src="/edit.png"
          />
        </label>
         :
         null
      )}
      <input 
        id="image-upload"
        type="file" 
        multiple 
        onChange={(e) => handlepfpUpload(e.target.files)} 
        style={{ display: 'none' }}
      /> 
    </div>

          </div>
        </div>
      </div>
      <div className="self-stretch bg-background-secondary flex flex-col py-10 px-0 items-center justify-start">
        <div className="w-[1050px] flex flex-col items-start justify-start">
          <div className="flex flex-row items-start justify-start gap-[100px]">
            <div className="w-[599px] flex flex-col items-start justify-start gap-[30px]">
            <div className="relative text-32xl leading-[110%] capitalize font-semibold font-h3-work-sans flex items-center w-[510px]">
  {editing 
    ? (
      <input 
        name="name" 
        className="bg-transparent border-none outline-none w-full text-32xl leading-[110%] capitalize font-semibold font-h3-work-sans" 
        value={updatedProfile.name} 
        onChange={handleNameChange} 
      />
    ) 
    : (
      <span>
        {profile.name}
      </span>
    )
  }
</div>
            <div className="relative text-8xl leading-[110%] capitalize font-semibold font-h3-work-sans flex items-center w-[510px]">
  {editing 
    ? (
      <input 
        name="username" 
        className="bg-transparent border-none outline-none w-full text-8xl leading-[110%] capitalize font-semibold font-h3-work-sans" 
        value={updatedProfile.username} 
        onChange={handleUserameChange} 
      />
    ) 
    : (
      <span>
        @{profile.username}
      </span>
    )
  }
</div>

              <div className="rounded-xl w-[510px] flex flex-row items-start justify-start gap-[20px] text-9xl">
                <div className="flex-1 rounded-xl flex flex-col items-start justify-start">
                  <b className="self-stretch relative leading-[140%] capitalize">
                    {profile.volume}
                  </b>
                  <div className="self-stretch relative text-3xl leading-[160%] capitalize font-h3-work-sans">
                    Volume
                  </div>
                </div>
                <div className="flex-1 rounded-xl flex flex-col items-start justify-start">
                  <b className="self-stretch relative leading-[140%] capitalize">
                    {profile.papersSold}
                  </b>
                  <div className="self-stretch relative text-3xl leading-[160%] capitalize font-h3-work-sans">
                    Papers Sold
                  </div>
                </div>
                <div className="flex-1 rounded-xl flex flex-col items-start justify-start">
                  <b className="self-stretch relative leading-[140%] capitalize">
                    {profile.followers}
                  </b>
                  <div className="self-stretch relative text-3xl leading-[160%] capitalize font-h3-work-sans">
                    Followers
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-caption-label-text">
                <b className="self-stretch relative leading-[160%] capitalize">
                  Bio
                </b>
                <div className="self-stretch relative leading-[160%] capitalize font-h3-work-sans text-text">
                {editing 
    ? (
      <input 
        name="bio" 
        className="bg-transparent border-none outline-none w-full text-text leading-[110%] capitalize font-h3-work-sans" 
        value={updatedProfile.bio} 
        onChange={handleBioChange} 
      />
    ) 
    : (
      <span>
        {profile.bio}
      </span>
    )
  }
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-caption-label-text">
                <b className="relative leading-[160%] capitalize">Links</b>
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/globe.svg"
                    onClick={onGlobeIconClick}
                  />
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/discordlogo4.svg"
                    onClick={onDiscordLogoIconClick}
                  />
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/youtubelogo1.svg"
                    onClick={onYoutubeLogoIconClick}
                  />
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/twitterlogo4.svg"
                    onClick={onTwitterLogoIconClick}
                  />
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/instagramlogo1.svg"
                    onClick={onInstagramLogoIconClick}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-end gap-[20px] text-center text-base font-h3-work-sans">
              <div className="rounded-xl bg-call-to-action w-[186px] h-[60px] flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px]">
              <img 
    className="relative w-5 h-5 cursor-pointer" 
    alt="Copy to clipboard" 
    src="/copy1.svg" 
    onClick={() => copyToClipboard(editing ? updatedProfile.licenseNumber : profile.licenseNumber)}
/>
                <div className="relative leading-[140%] font-semibold">
                {editing 
    ? (
      <input 
        name="licenseNumber" 
        className="bg-transparent border-none outline-none w-full text-8xl leading-[110%] capitalize font-semibold font-h3-work-sans" 
        value={updatedProfile.licenseNumber} 
        onChange={handleLicChange} 
      />
    ) 
    : (
      <span>
        {profile.licenseNumber}
      </span>
    )
  }
                </div>
              </div>
              {!onProfile ?
              <div>
              {following?
              <div className="rounded-xl box-border h-[60px] flex flex-row py-0 px-[30px] items-center justify-center gap-[12px] border-[2px] border-solid border-call-to-action cursor-pointer"
              onClick={handleUnfollowClick}>
                <img className="relative w-5 h-5" alt="" src="/plus1.svg" />
                <div className="relative leading-[140%] font-semibold">
                  Following
                </div>
              </div> :
              <div className="rounded-xl box-border h-[60px] flex flex-row py-0 px-[30px] items-center justify-center gap-[12px] border-[2px] border-solid border-call-to-action cursor-pointer"
              onClick={handleFollowClick}>
                <img className="relative w-5 h-5" alt="" src="/plus1.svg" />
                <div className="relative leading-[140%] font-semibold">
                  Follow
                </div>
              </div>
              }
              </div>
              : null
            }
              {editing ?
              <div className="rounded-xl box-border h-[60px] flex flex-row py-0 px-[30px] items-center justify-center gap-[12px] border-[2px] border-solid border-call-to-action cursor-pointer"
              onClick={handleSaveClick}>
                <div className="relative leading-[140%] font-semibold">
                Save
                </div>
              </div>
              : onProfile?
              <div className="rounded-xl box-border h-[60px] flex flex-row py-0 px-[30px] items-center justify-center gap-[12px] border-[2px] border-solid border-call-to-action cursor-pointer"
              onClick={handleEditClick}>
                <div className="relative leading-[140%] font-semibold">
                  Edit
                </div>
                </div>:null
            }
            </div>
          </div>
          </div>
          </div>
      <div className="self-stretch bg-background flex flex-col items-center justify-start gap-[10px] text-center text-caption-label-text font-h3-work-sans">
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-background-secondary" />
        <div className="w-[1050px] flex flex-row items-start justify-start">
            {!onOwned?
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="flex-1 box-border h-[60px] flex flex-row py-0 px-[30px] items-center justify-center gap-[16px] text-text border-b-[2px] border-solid border-caption-label-text cursor-pointer"
            onClick={CreatedClicked}>
              <div className="relative leading-[140%] capitalize font-semibold">
                Created
              </div>
              <div className="rounded-xl bg-caption-label-text flex flex-row py-[5px] px-2.5 items-center justify-start text-left text-base font-base-body-space-mono">
                <div className="relative leading-[140%]">{userPosts?userPosts.length:"0"}</div>
              </div>
            </div>
            <div className="flex-1 h-[60px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[16px] cursor-pointer"
              onClick={OwnedClicked}>                        
              <div className="relative leading-[140%] capitalize font-semibold">
                owned
              </div>
              <div className="rounded-xl bg-background-secondary flex flex-row py-[5px] px-2.5 items-center justify-start text-left text-base text-text font-base-body-space-mono">
                <div className="relative leading-[140%]">{userOwnedPosts?userOwnedPosts.length:"0"}</div>
              </div>
            </div>
            </div>
            :
            <div className="flex-1 flex flex-row items-start justify-start">
           <div className="flex-1 box-border h-[60px] flex flex-row py-0 px-[30px] items-center justify-center gap-[16px] cursor-pointer "
            onClick={CreatedClicked}>
              <div className="relative leading-[140%] capitalize font-semibold">
                Created
              </div>
              <div className="rounded-xl bg-caption-label-text flex flex-row py-[5px] px-2.5 items-center justify-start text-left text-base text-text font-base-body-space-mono">
                <div className="relative leading-[140%]">{userPosts?userPosts.length:"0"}</div>
              </div>
            </div>
            <div className="flex-1 h-[60px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[16px] text-text border-b-[2px] border-solid border-caption-label-text cursor-pointer"
              onClick={OwnedClicked}>                        
              <div className="relative leading-[140%] capitalize font-semibold">
                owned
              </div>
              <div className="rounded-xl bg-background-secondary flex flex-row py-[5px] px-2.5 items-center justify-start text-left text-base text-text font-base-body-space-mono">
                <div className="relative leading-[140%]">{userOwnedPosts?userOwnedPosts.length:"0"}</div>
              </div>
            </div>
          </div>
      }
        </div>
        </div>
      <div className="self-stretch bg-text flex flex-col py-20 px-0 items-center justify-start gap-[30px] font-h3-work-sans">
        {/* <div className="w-[1050px] flex flex-row items-start justify-start gap-[30px]"> */}
        <div className="w-1200 flex flex-wrap items-start px-[10px] justify-start gap-[30px] ">
        { onOwned ?
         userOwnedPosts.map((post, index) => (
            <div key={post._id} className="w-1/4 px-5">
                <PaperCard 
                    onPaperCardContainerClick={() => navigate(`/paper-page/${post._id}`)}
                    imagePlaceholder={post.image[0]}
                    PaperHeading={post.heading}
                    // CreatorPfp="/avatar-placeholder82@2x.png"
                    CreatorPfp={post.userPfp}
                    Creator={post.username || post.email}
                    onCreatorClick={()=>navigate(`/profile-page/${post.username}`)}
                    CreatorPfpIconBorderRadius="120px"
                    PaperCardCursor="pointer"
                    PaperCardBackgroundColor={post.type === "verified" ? "#011640" : "#3b3b3b"}
                    price={post.price}
                    category={post.category}
                />
          </div>
        ))
     :
         userPosts.map((post, index) => (
            <div key={post._id} className="w-1/4 px-5">
                <PaperCard 
                    onPaperCardContainerClick={() => navigate(`/paper-page/${post._id}`)}
                    imagePlaceholder={post.image[0]}
                    PaperHeading={post.heading}
                    // CreatorPfp="/avatar-placeholder82@2x.png"
                    CreatorPfp={post.userPfp}
                    Creator={post.username || post.email}
                    onCreatorClick={()=>navigate(`/profile-page/${post.username}`)}
                    CreatorPfpIconBorderRadius="120px"
                    PaperCardCursor="pointer"
                    PaperCardBackgroundColor={post.type === "verified" ? "#011640" : "#3b3b3b"}
                    price={post.price}
                    category={post.category}
                />
          </div>
        ))
  }
        </div>
        </div>
      <Footer />
      {isAlertPopupOpen && (
        <PortalPopup placement="Bottom right" onOutsideClick={closeAlertPopup}>
          <AlertPopup onClose={closeAlertPopup} alert={alert} />
        </PortalPopup>
      )}
    </div>
  );
};

export default ProfilePageDesktop;
