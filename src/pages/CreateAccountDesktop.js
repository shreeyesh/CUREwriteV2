import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
import AlertPopup from "../components/AlertPopup";
import PortalPopup from "../components/PortalPopup";
import Loader from "../components/Loader";
import Footer1 from "../components/Footer1";
const backendURL = process.env.REACT_APP_BACKEND_URL;



const CreateAccountDesktop = () => {

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert,setAlert]=useState('')
  const [isAlertPopupOpen, setAlertPopupOpen] = useState(false);
  const [usernameTaken,setUsernameTaken] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [loadingContent, setLoadingContent] = useState('');

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

  const openAlertPopup = useCallback(() => {
    setAlertPopupOpen(true);
  }, []);

  const closeAlertPopup = useCallback(() => {
    setAlertPopupOpen(false);
  }, []);

  const navigate = useNavigate();

  // Check username is not taken
  useEffect(()=>{
    async function checkUsername(){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
    };
     const response = await fetch(`${backendURL}/checkUsername`, requestOptions)
     const data = await response.json();
     if (data.error==="Username Taken"){
        setUsernameTaken(true);
    } else {
      setUsernameTaken(false);
    }
    }
    if (username){
      checkUsername()
    }

  }),[username]

 async function RegisterUser(){
  setLoadingContent("Creating Account...")
  setIsLoading(true);

   // Check if username is valid
   if (usernameTaken===true){
    setAlert("Username not available.");
    openAlertPopup();
    setIsLoading(false);
    return;
  }

  // Check if username is added
  if (!username){
    setAlert("Please enter a username.");
    openAlertPopup();
    setIsLoading(false);
    return;
  }
  //Check password length and complexity
  // if (password.length<8){
  //   setAlert("Password must be at least 8 characters long.");
  //   openAlertPopup();
  //   setIsLoading(false);
  //   return;
  // }
    
  // Check if name is added
  if (!name){
    setAlert("Please enter your name.");
    openAlertPopup();
    setIsLoading(false);
    return;
  }

  // Check if email format is valid
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
      setAlert("Enter a valid email address.");
      openAlertPopup();
      setIsLoading(false);
      return;
  }

  if(password){
    if (password !== confirmPassword) {
      setAlert("Passwords do not match.");
      openAlertPopup()
      setIsLoading(false);
        return;
}
  } else{
    setAlert("Please enter a password")
    openAlertPopup()
    setIsLoading(false);
    return;
  }

     const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username,name,email,password })
  };
   const response = await fetch(`${backendURL}/register`, requestOptions)
   const data = await response.json();
   console.log(data)
   if (data.user){
    localStorage.setItem('token',data.user);
    localStorage.setItem('username', data.username); // Store username
    navigate("/create-post");
  }
   else {
    setAlert(data.error);
    openAlertPopup();
  }
  setIsLoading(false)
  }
  
  async function handleGoogleSuccess(credentialResponse) {

    // Send the token to your backend for verification
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: credentialResponse.credential })
    };
    const response = await fetch("https://react-with-cloudrun-backend-fresh-lwubjjnbzq-uc.a.run.app/google-login", requestOptions);
    const data = await response.json();
    if (data.user){
      localStorage.setItem('token',data.user);
      localStorage.setItem('username', data.username); // Store username
      localStorage.setItem('userPfp',data.userPfp);
      navigate("/create-post");
    }
    else{
      alert("Check your email or password")
    }

}


  const onNavLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  const LoginClick = useCallback(() => {
    navigate("/login-account");
  }, [navigate]);

  const onRankingsContainerClick = useCallback(() => {
    navigate("/rankings");
  }, [navigate]);

  const onDiscordLogoIconClick = useCallback(() => {
    window.open("https://discord.com/invite/curewrite");
  }, []);

  const onYoutubeLogoIconClick = useCallback(() => {
    window.open("https://www.youtube.com/curewrite");
  }, []);

  const onTwitterLogoIconClick = useCallback(() => {
    window.open("https://twitter.com/curewrite");
  }, []);

  const onInstagramLogoIconClick = useCallback(() => {
    window.open("https://www.instagram.com/curewrite");
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    window.open(
      "https://www.curewrite.com"
    );
  }, []);

  return (
    <div className="relative bg-background w-full h-[1125px] flex flex-col items-start justify-start text-left text-32xl text-text font-h3-work-sans">
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
        rocketLaunchIcon={false}
        onRankingsContainerClick={onRankingsContainerClick}
        rankingsCursor="pointer"
        rocketLaunch1="/rocketlaunch10.svg"
        rocketLaunchIcon1={false}
        rocketLaunch2="/rocketlaunch9.svg"
        signUpCursor="unset"
        plus="/plus2.svg"
        navLogoCursor="pointer"
        hasLeftIcon
        hasText
      />
      <div className="self-stretch bg-background-secondary flex flex-row items-center justify-start gap-[60px]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/image-placeholder45@2x.png"
        />
        <div className="flex-1 flex flex-col py-[100px] px-0 items-start justify-start gap-[40px]">
          <div className="w-[460px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[110%] capitalize font-semibold">
                  Create account
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-3xl">
                <div className="self-stretch relative leading-[160%] capitalize">
                  Welcome! enter your details and start creating, collecting and
                  selling PAPERs.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[330px] flex flex-col items-start justify-start gap-[30px] text-base text-background">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
              <div className="self-stretch rounded-xl bg-text box-border h-[46px] flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-[1px] border-solid border-caption-label-text">
                <img className="relative w-5 h-5" alt="" src="/user1.svg" />              
                <div className="flex-1 relative leading-[140%]" >  <input
              type="text"
              value={name}
              onChange={handleNameChange}
              className="border-none outline-none flex-1 relative leading-[140%]"
              placeholder="Name"
            />
            </div>
                <img
                  className="relative w-5 h-5 hidden"
                  alt=""
                  src="/eyeslash1.svg"
                />
              </div>

              <div className="self-stretch rounded-xl bg-text box-border h-[46px] flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-[1px] border-solid border-caption-label-text">
                {!usernameTaken?
                <img className="relative w-5 h-5" alt="" src="/user1.svg" />              
                :
                <img className="relative w-5 h-5" alt="" src="/cancel.png" />              
                }
                <div className="flex-1 relative leading-[140%]" >  <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              className="border-none outline-none flex-1 relative leading-[140%]"
              placeholder="Username"
            />
            </div>
                <img
                  className="relative w-5 h-5 hidden"
                  alt=""
                  src="/eyeslash1.svg"
                />
              </div>
              <div className="self-stretch rounded-xl bg-text box-border h-[46px] flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-[1px] border-solid border-caption-label-text">
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="/envelopesimple2.svg"
                />
                <div className="flex-1 relative mb-3 leading-[140%]">
                  {/* Email Address */}
                  <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="border-none outline-none flex-1 relative leading-[140%]"
              placeholder="Email"
            />
                </div>
                <img
                  className="relative w-5 h-5 hidden"
                  alt=""
                  src="/eyeslash1.svg"
                />
              </div>
              <div className="self-stretch rounded-xl bg-text box-border h-[46px] flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-[1px] border-solid border-caption-label-text">
                <img className="relative w-5 h-5" alt="" src="/lockkey.svg" />
                <div className="flex-1 relative mb-3 leading-[140%]"><input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className=" border-none outline-none flex-1 relative leading-[140%]"
              placeholder="Password"
            />     </div>
                <img
                  className="relative w-5 h-5 hidden"
                  alt=""
                  src="/eyeslash1.svg"
                />
              </div>
              <div className="self-stretch rounded-xl bg-text box-border h-[46px] flex flex-row py-4 px-5 items-center justify-start gap-[12px] border-[1px] border-solid border-caption-label-text">
                <img className="relative w-5 h-5" alt="" src="/lockkey.svg" />
                <div className="flex-1 relative leading-[140%]">
                <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className=" border-none outline-none flex-1 relative leading-[140%]"
              placeholder="Confirm Password"
            />      
                </div>
                <img
                  className="relative w-5 h-5 hidden"
                  alt=""
                  src="/eyeslash1.svg"
                />
              </div>
            </div>
            <div
              className="self-stretch rounded-xl bg-call-to-action h-[46px] flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] cursor-pointer text-center text-text"
              onClick={RegisterUser}
              >
              <img
                className="relative w-5 h-5 hidden"
                alt=""
                src="/rocketlaunch11.svg"
              />
              <div className="relative leading-[140%] font-semibold">
                Create account
              </div>
            </div>
            <div className="relative leading-[10%] font-semibold px-[150px] text-white">
                Or
              </div>
            <div
              className="self-stretch rounded-xl bg-call-to-action h-[46px] flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] cursor-pointer text-center text-text"
              onClick={LoginClick}
              >
              <img
                className="relative w-5 h-5 hidden"
                alt=""
                src="/rocketlaunch11.svg"
              />
              <div className="relative leading-[140%] font-semibold">
                Login
              </div>
            </div>
            <div
              className="self-stretch h-[46px] flex flex-row justify-center cursor-pointer "
              >
            <GoogleOAuthProvider className="px-[10px]"clientId="869312446430-khdamm0e71eati4hake1cc6tat4jpj67.apps.googleusercontent.com">
            <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              handleGoogleSuccess(credentialResponse)
            }}
          
            onError={() => {
              alert('Account did not sign in');
            }}
          
          />
            </GoogleOAuthProvider>
          </div>
          </div>
        </div>
      </div>
      {/* <div className="self-stretch bg-background-secondary flex flex-col py-10 px-[195px] items-center justify-start gap-[30px] text-3xl font-base-body-space-mono">
        <div className="flex flex-row items-start justify-between">
          <div className="w-[327.41px] flex flex-col py-0 pr-[84px] pl-0 box-border items-start justify-start gap-[30px] text-base text-lightgray font-h3-work-sans">
            <img className="relative w-30 h-10" alt="" src="/cwLogo@2x.png" />
            <div className="flex flex-col items-start justify-start gap-[20px]">
              <div className="relative leading-[140%] inline-block w-[238px]">
                Write and Buy Research Papers on Curewrite
              </div>
              <div className="flex flex-col items-start justify-start gap-[15px]">
                <div className="relative leading-[140%] inline-block w-[238px] h-[18px] shrink-0">
                  Join our community
                </div>
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/discordlogo5.svg"
                    onClick={onDiscordLogoIconClick}
                  />
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/youtubelogo3.svg"
                    onClick={onYoutubeLogoIconClick}
                  />
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/twitterlogo3.svg"
                    onClick={onTwitterLogoIconClick}
                  />
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/instagramlogo2.svg"
                    onClick={onInstagramLogoIconClick}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-60 flex flex-col items-start justify-start gap-[25px]">
            <b className="relative leading-[160%] capitalize">Explore</b>
            <div className="flex flex-col items-start justify-start gap-[20px] text-base text-lightgray font-h3-work-sans">
              <div className="relative leading-[140%]">Marketplace</div>
              <div className="relative leading-[140%]">Rankings</div>
              <div className="relative leading-[140%]">Editors</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[25px]">
            <b className="relative leading-[160%] capitalize">
              Join our weekly digest
            </b>
            <div className="flex flex-col items-start justify-start gap-[20px] text-base text-lightgray font-h3-work-sans">
              <div className="relative leading-[140%] inline-block w-[330px]">{`Get exclusive promotions & updates straight to your inbox.`}</div>
              <div className="rounded-xl bg-text w-[420px] h-[60px] flex flex-row py-4 pr-0 pl-5 box-border items-center justify-start gap-[12px] text-background">
                <div className="flex-1 relative leading-[140%]">
                <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              className=" border-none outline-none flex-1 relative leading-[140%]"
              placeholder="Email Address"
            />
              </div>
                <div
                  className="rounded-xl bg-call-to-action h-[60px] flex flex-row py-0 px-[50px] box-border items-center justify-end gap-[12px] cursor-pointer text-center text-text"
                  onClick={onButtonContainer1Click}
                >
                  <img
                    className="relative w-5 h-5 hidden"
                    alt=""
                    src="/envelopesimple3.svg"
                  />
                  <div className="relative leading-[140%] font-semibold">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[890px] flex flex-col items-start justify-start gap-[20px] text-xs text-lightgray font-h3-work-sans">
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-caption-label-text" />
          <div className="self-stretch relative leading-[110%]" />
        </div>
      </div> */}
      <Footer1 />
      {isAlertPopupOpen && (
        <PortalPopup placement="Bottom right" onOutsideClick={closeAlertPopup}>
          <AlertPopup onClose={closeAlertPopup} alert={alert} />
        </PortalPopup>
      )}
    </div>
  );
};

export default CreateAccountDesktop;
