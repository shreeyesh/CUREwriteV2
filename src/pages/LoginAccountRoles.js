import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
const backendURL = process.env.REACT_APP_BACKEND_URL;
import Footer from "../components/Footer";



const LoginAccountRoles = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const navigate = useNavigate();


 async function LoginUser(){
     const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email,password })
  };
   const response = await fetch(`${backendURL}/login/role`, requestOptions)
  const data = await response.json()
  if (data.user){
    localStorage.setItem('token',data.user);
    localStorage.setItem('username', data.username); // Store username
    localStorage.setItem('role',data.role)
    navigate("/Dashboard");
  }
  else{
    alert(data.message)
  }

  }


  const onNavLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRankingsContainerClick = useCallback(() => {
    navigate("/rankings");
  }, [navigate]);
  const CreateAccount = useCallback(() => {
    navigate("/create-account");
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
                  Login into your account with roles
                </div>
              </div>
            
            </div>
          </div>
          <div className="w-[330px] flex flex-col items-start justify-start gap-[30px] text-base text-background">
            <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
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
            </div>
            <div
              className="self-stretch rounded-xl bg-call-to-action h-[46px] flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] cursor-pointer text-center text-text"
              onClick={LoginUser}
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
          
           
          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default LoginAccountRoles;
