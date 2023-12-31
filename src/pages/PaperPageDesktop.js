import { useCallback, useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Author from "../components/Author";
import PaperCard from "../components/PaperCard";
import Loader from "../components/Loader";
import PortalPopup from "../components/PortalPopup";
import AlertPopup from "../components/AlertPopup";
import Footer from "../components/Footer";
const backendURL = process.env.REACT_APP_BACKEND_URL;

 

const PaperPageDesktop = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  const [post, setPost] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  const [loadingContent, setLoadingContent] = useState('');
  const [profile,setProfile] = useState({  username: 'username',
  bio: 'bio',
  profilePicture: '',
  coverPicture: '/image-placeholder44@2x.png',
});
  const [userPosts,setUserPosts] = useState([]);
  const [alert,setAlert]= useState('');
  const [isAlertPopupOpen, setAlertPopupOpen] = useState(false);
  const [paperPurchased,setPaperPurchased] = useState(false)
  const [buyerId,setBuyerId] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const token = localStorage.getItem("token");

// Alert Popup Logic
  const openAlertPopup = useCallback(() => {
    setAlertPopupOpen(true);
  }, []);

  const closeAlertPopup = useCallback(() => {
    setAlertPopupOpen(false);
  }, []);

  // Fetch Post by id
  useEffect(()=>{
    setLoadingContent("Loading Paper")
    const fetchPostByID = async ()=>{
    const resp = await fetch(`${backendURL}/post/${id}`)
     const data0 = await resp.json(); 
        setPost(data0.post);
        if (data0.post.price===0){
          setPaperPurchased(true);
        }
        if (buyerId && data0.post.Buyers.includes(buyerId)) {
          setPaperPurchased(true);
      }
        const username = data0?.post?.username;
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
        // Remove the current post using id
        const filteredPosts = data1.posts.filter((post) => post._id !== id);
        setUserPosts(filteredPosts.reverse())
      // };
      };
      fetchPostByID();
      // .then(fetchProfile());
  },[id,buyerId]);

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
      if(!data.username){
        alert("Log in")
      }
      else{
        setBuyerId(data.id);
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

  // Handle paper download
  const DownloadPaper = async () =>{
    try {
      window.open(post.pdf, '_blank'); // This will prompt the user to download the file.

    } catch (error){
      console.error("Error downloading paper:", error);
    }
  }

  // Handle paper buy click
  const BuyClick = async () =>{
    try {
      const orderData = {
        price : post.price
      }
      const response = await fetch(`${backendURL}/create-order-paper`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
            });
      const data = await response.json();
    const options = {
      // ... other Razorpay options
      "amount": data.amount,
      "currency": "INR",
      "name": "CUREwrite",
      "description": "Payment for some service",
      "image": "https://curewrite.com/wp-content/uploads/2022/10/cropped-cropped-horizontal-logo-scaled-1-2048x987.jpg",
      "order_id": data.id,
      "handler": async (response) => {
        const paymentData = {
          paymentId: response.razorpay_payment_id,
          orderId: data.id,
          signature: response.razorpay_signature,
          id:post._id,
          BuyerId: buyerId,
        };
        const verifyPaymentResponse = await fetch(`${backendURL}/verify-payment-paper`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(paymentData)
        });
        const verificationData = await verifyPaymentResponse.json();
        if (verificationData.status === "ok") {
          setAlert("Paper Purchased !")
          openAlertPopup();
          setPaperPurchased(true);
          // handleReviewClick();  
        } else {
          console.error("Payment verification failed");
          // TODO: Handle payment verification failure
        }
      },
      "prefill": {
        "name": "Anonymous", // Use user's real name from JWT
        "email": "anonymous@example.com" // Use user's real email from JWT
      },
      // ... other Razorpay options
    };

    const razorPay = new window.Razorpay(options);
    razorPay.open();
    } catch(error){
      console.error("Error initiating payment:", error);
    }

  }

  const onNavLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRankingsContainerClick = useCallback(() => {
    navigate("/rankings");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  const onArtistCardContainerClick = useCallback(() => {
    if (post && post.username) {
      navigate(`/profile-page/${post.username}`);
    }
    else{
      setLoading(true)
    }
  }, [navigate, post]);
  

  const onGlobeIconClick = useCallback(() => {
    window.open(
      "https://www.curewrite.com/?utm_source=figma-samples&utm_campaign=figma-Papermarket&utm_medium=figma-samples"
    );
  }, []);

  const onViewOnEtherscanClick = useCallback(() => {
    window.open(
      "https://www.curewrite.com/?utm_source=figma-samples&utm_campaign=figma-Papermarket&utm_medium=figma-samples"
    );
  }, []);

  const onGlobeIcon1Click = useCallback(() => {
    window.open(
      "https://www.curewrite.com/?utm_source=figma-samples&utm_campaign=figma-Papermarket&utm_medium=figma-samples"
    );
  }, []);

  const onViewOriginalTextClick = useCallback(() => {
    window.open(
      "https://www.curewrite.com/?utm_source=figma-samples&utm_campaign=figma-Papermarket&utm_medium=figma-samples"
    );
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);



  const onDiscordLogoIconClick = useCallback(() => {
    window.open("https://discord.com/invite/eQxkYTNxSp");
  }, []);

  const onYoutubeLogoIconClick = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw");
  }, []);

  const onTwitterLogoIconClick = useCallback(() => {
    window.open("https://twitter.com/curewrite?lang=en");
  }, []);

  const onInstagramLogoIconClick = useCallback(() => {
    window.open("https://www.instagram.com/curewrite/?hl=en");
  }, []);

  const onButtonContainer6Click = useCallback(() => {
    window.open(
      "https://www.curewrite.com/?utm_source=figma-samples&utm_campaign=figma-Papermarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    
    <div className="relative bg-background w-full flex flex-col items-start justify-start text-left text-32xl text-text font-h3-work-sans overflow-x-clip">
      <Loader isOpen={isLoading} content={loadingContent} />
      <Navigation
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
        rankingsCursor="pointer"
        rocketLaunch1="/rocketlaunch10.svg"
        rocketLaunchIcon1
        rocketLaunch2="/rocketlaunch9.svg"
        signUpCursor="pointer"
        plus="/plus2.svg"
        navLogoCursor="pointer"
        hasLeftIcon
        hasText
      />
      <img
        className="relative w-[1470px] h-[814px] object-cover"
        alt=""
        src={post?post.image:"/image-11@2x.png"}
        />
      <div className="self-stretch bg-background-secondary flex flex-col py-10 px-0 items-center justify-start">
        <div className="w-[1050px] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-start gap-[150px]">
            <div className="flex-1 flex flex-col items-center justify-start gap-[30px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch relative leading-[110%] capitalize font-semibold">
                  {post?post.heading : "heading"}
                </div>
                <div className="self-stretch relative text-3xl leading-[160%] capitalize text-caption-label-text">
                  Created on Sep 30, 2022
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-3xl text-caption-label-text">
                <div onClick={onArtistCardContainerClick}>
                <Author
                  pfp={post?post.userPfp:"avatar-placeholder88@2x.png"}
                  // pfp="/avatar-placeholder88@2x.png"
                  creator={post?post.username:"username"}
                />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] font-base-body-space-mono">
                  <b className="relative leading-[160%] capitalize inline-block w-[510px]">
                    Abstract
                  </b>
                  <div className="self-stretch relative leading-[160%] font-h3-work-sans text-text">
                    {post? post.abstract:"abstract"}
                    {/* This research paper delves into the field of DNA cloning, a
                    fundamental technique used in molecular biology to create
                    identical copies of a specific DNA fragment. The paper
                    explores various methodologies and applications of DNA
                    cloning, discussing the significance of this technique in
                    fields such as genetic engineering, medical research, and
                    biotechnology. It examines the process of isolating and
                    manipulating DNA fragments, inserting them into vector
                    systems, and replicating them in host organisms.
                    Additionally, the paper highlights the advancements and
                    challenges associated with DNA cloning, including the
                    development of recombinant DNA technology and its impact on
                    scientific research and biopharmaceutical production. The
                    study aims to provide a comprehensive overview of DNA
                    cloning, shedding light on its critical role in advancing
                    our understanding of genetics and enabling the creation of
                    innovative solutions for various biological and medical
                    problems. */}
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-text">
                  <b className="self-stretch relative leading-[160%] capitalize font-base-body-space-mono text-caption-label-text">
                    Details
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="relative w-8 h-8 cursor-pointer"
                      alt=""
                      src="/globe.svg"
                      onClick={onGlobeIconClick}
                    />
                    <div
                      className="flex-1 relative leading-[160%] cursor-pointer"
                      onClick={onViewOnEtherscanClick}
                    >
                      View on ResearchGate
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="relative w-8 h-8 cursor-pointer"
                      alt=""
                      src="/globe.svg"
                      onClick={onGlobeIcon1Click}
                    />
                    <div
                      className="flex-1 relative leading-[160%] cursor-pointer"
                      onClick={onViewOriginalTextClick}
                    >
                      View Original
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="relative leading-[140%] capitalize font-semibold">
                    Tags
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[20px] text-center text-base text-text">
                    <div
                      className="rounded-xl bg-background-secondary h-[46px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px] cursor-pointer"
                      onClick={onButtonContainerClick}
                    >
                      <img
                        className="relative w-5 h-5 hidden"
                        alt=""
                        src="/wallet.svg"
                      />
                      <div className="relative leading-[140%] uppercase font-semibold">
                        DNA
                      </div>
                    </div>
                    <div
                      className="rounded-xl bg-background-secondary h-[46px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px] cursor-pointer"
                      onClick={onButtonContainerClick}
                    >
                      <img
                        className="relative w-5 h-5 hidden"
                        alt=""
                        src="/wallet.svg"
                      />
                      <div className="relative leading-[140%] uppercase font-semibold">
                        CLONING
                      </div>
                    </div>
                    <div
                      className="rounded-xl bg-background-secondary h-[46px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px] cursor-pointer"
                      onClick={onButtonContainerClick}
                    >
                      <img
                        className="relative w-5 h-5 hidden"
                        alt=""
                        src="/wallet.svg"
                      />
                      <div className="relative leading-[140%] uppercase font-semibold">
                        MEDICAL
                      </div>
                    </div>
                    <div
                      className="rounded-xl bg-background-secondary h-[46px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px] cursor-pointer"
                      onClick={onButtonContainerClick}
                    >
                      <img
                        className="relative w-5 h-5 hidden"
                        alt=""
                        src="/wallet.svg"
                      />
                      <div className="relative leading-[140%] uppercase font-semibold">
                        RESEARCH
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-background-secondary w-[295px] flex flex-col p-[30px] box-border items-start justify-start gap-[30px] text-xs font-base-body-space-mono">
              <div className="self-stretch rounded-xl bg-darkslategray [backdrop-filter:blur(10px)] flex flex-col items-start justify-end gap-[10px]">
                <div className="self-stretch relative leading-[110%]">
                  Price
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px] text-19xl">
                  <div className="flex-1 flex flex-col  items-start justify-start gap-[5px]">
                    <b className="self-stretch relative leading-[120%] capitalize">
                      {" "}
                      ₹
                    </b>
                  </div>
                  <b className="relative text-9xl leading-[140%] capitalize hidden" />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                    <b className=" relative right-[50px] h-[50px] leading-[110%]">
                      {post?post.price:300}
                    </b>
                  </div>
                 
                </div>
              </div>
              {!paperPurchased?
              <div className="self-stretch rounded-xl bg-call-to-action h-[60px] flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] text-center text-base font-h3-work-sans cursor-pointer"
              onClick={BuyClick}>
                <img
                  className="relative w-5 h-5 "
                  alt=""
                  src="/wallet.svg"
                />
                <div className="relative leading-[140%] font-semibold">Buy</div>
              </div>:
              <div className="self-stretch rounded-xl bg-call-to-action h-[60px] flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] text-center text-base font-h3-work-sans cursor-pointer"
              onClick={DownloadPaper}>
                <img
                  className="relative w-5 h-5 hidden"
                  alt=""
                  src="/wallet.svg"
                />
                <div className="relative leading-[140%] font-semibold">Download</div>
              </div>
}
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch bg-text flex flex-col py-20 px-[195px] items-center justify-start gap-[60px] text-19xl text-background-secondary"
        // onClick={onMorePapersFromTheArtistClick}
      >
        <div className="w-[1050px] flex flex-row items-start justify-start gap-[100px]">
          <div className="flex-1 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[120%] capitalize font-semibold">
              More from this Researcher
            </div>
          </div>
          <div
            className="rounded-xl box-border h-[60px] flex flex-row py-0 px-[50px] items-center justify-center gap-[12px] cursor-pointer text-center text-base border-[2px] border-solid border-call-to-action"
            onClick={onArtistCardContainerClick}
          >
            <img className="relative w-5 h-5" alt="" src="/arrowright.svg" />
            <div className="relative leading-[140%] font-semibold">
              Go To Researcher’s Page
            </div>
          </div>
        </div>
        <div className="w-1200 flex flex-wrap items-start px-[10px] justify-start gap-[30px] ">
        {userPosts.map((post, index) => (
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

export default PaperPageDesktop;
