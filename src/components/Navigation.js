import { useMemo,useEffect,useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import jwt_decode from "jwt-decode";


const Navigation = ({
  navigationPosition,
  navigationWidth,
  navigationTop,
  navigationRight,
  navigationLeft,
  navigationAlignSelf,
  onNavLogoClick,
  horizontalLogo1,
  rocketLaunch,
  rocketLaunchIcon,
  rankingsCursor,
  rocketLaunch1,
  rocketLaunchIcon1,
  rocketLaunch2,
  onSignUpContainerClick,
  signUpCursor,
  plus,
  navLogoCursor,
  hasLeftIcon,
  hasText,
  setLoginPopupOpen,
}) => {
  const navigationStyle = useMemo(() => {

    return {
      position: navigationPosition,
      width: navigationWidth,
      top: navigationTop,
      right: navigationRight,
      left: navigationLeft,
      alignSelf: navigationAlignSelf,
    };
  }, [
    navigationPosition,
    navigationWidth,
    navigationTop,
    navigationRight,
    navigationLeft,
    navigationAlignSelf,
  ]);

  // State Variables
  const [decoded,setDecoded]= useState("");
  const [profile,setProfile] = useState("");
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Dropdown close when clicked outside
  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
  
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  
  // Verify Login using JWT
  useEffect(() =>{
    const token = localStorage.getItem("token");
    const UN = localStorage.getItem("username");
    if(!token){
    }
    else{
      const decoded = jwt_decode(token);
     if (UN){
        setProfile(UN)
        {setLoginPopupOpen}(true)
     }
      setDecoded(decoded)
      if(!decoded){
        localStorage.removeItem('token')
        {setLoginPopupOpen}(false)
        navigate('/login')
        }
      }
  },[])

  const navigate = useNavigate();
  const Username = localStorage.getItem("username");

    const onMarketplaceContainerClick = useCallback(() => {
      navigate("/marketplace");
    }, [navigate]);
  
    const onProfileContainerClick = useCallback(() => {
      setProfile(Username);
      navigate(`/profile-page/${Username}`);
    }, [navigate]);
  
    const onCreateContainerClick = useCallback(() => {
      navigate("/create-post");
    }, [navigate]);
    const onLoginContainerClick = useCallback(() => {
      navigate("/login-account");
    }, [navigate]);

  const onRankingsContainerClick = useCallback(() => {
    navigate("/rankings");
  }, [navigate]);

  const onLogout = useCallback(()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    localStorage.removeItem('userPfp')
    {setLoginPopupOpen}(false)
    setProfile(undefined)
    navigate('/')
  })

  const rankingsStyle = useMemo(() => {
    return {
      cursor: rankingsCursor,
    };
  }, [rankingsCursor]);

  const signUpStyle = useMemo(() => {
    return {
      cursor: signUpCursor,
    };
  }, [signUpCursor]);

  const navLogoStyle = useMemo(() => {
    return {
      cursor: navLogoCursor,
    };
  }, [navLogoCursor]);

  return (
    <div
      className="absolute w-full top-[0px] right-[0px] left-[0px] bg-text flex flex-row py-5 px-[50px] box-border items-center justify-between text-center text-base text-background-secondary font-h3-work-sans"
      style={navigationStyle}
    >
      <div
        className="flex flex-row items-center justify-start cursor-pointer"
        onClick={onNavLogoClick}
        style={navLogoStyle}
      >
        <div className="relative w-[129px] h-[57px]">
          <img
            className="absolute top-[0px] left-[0px] w-[129px] h-[57px] object-cover"
            alt=""
            src={horizontalLogo1}
          />
        </div>
      </div>
      <div className="relative md:hidden" ref={dropdownRef}>
  {/* Dropdown button */}
  <button className="text-white bg-cw" onClick={() => setDropdownOpen(!isDropdownOpen)}>
    ☰
  </button>

  {/* Dropdown content */}
  <div className={`self-stretch absolute top-full right-[-185%] mt-2 border rounded shadow-lg bg-white ${isDropdownOpen ? "block" : "hidden"}`}style={{ zIndex: 9999 }}>
    <button className="block w-full text-left text-white bg-cw px-4 py-2 hover:bg-black-200" onClick={onMarketplaceContainerClick}>Marketplace</button>
    <button className="block w-full text-left text-white bg-cw px-4 py-2 hover:bg-gray-200" onClick={onRankingsContainerClick}>Rankings</button>
    <button className="block w-full text-left text-white bg-cw px-4 py-2 hover:bg-gray-200" onClick={profile ? onProfileContainerClick : onLoginContainerClick}>
      {profile ? profile : "Log In"}
    </button>
    {profile && <button className="block w-full text-left text-white bg-cw px-4 py-2 hover:bg-gray-200" onClick={onLogout}>Log Out</button>}
    <button className="block w-full text-left text-white bg-cw px-4 py-2 hover:bg-gray-200" onClick={onCreateContainerClick}>Create</button>
  </div>
</div>
      <div className="flex sm:hidden flex-row items-center justify-end gap-[10px]">
        <div className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
          onClick={onMarketplaceContainerClick}>
          {!rocketLaunchIcon && (
            <img
              className="relative w-5 h-5"
              alt=""
              src={rocketLaunch}
            />
          )}
          <div className="relative leading-[140%] font-semibold" onClick={onMarketplaceContainerClick}>
            Marketplace
          </div>
        </div>
        <div
          className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
          onClick={onRankingsContainerClick}
          style={rankingsStyle}
        >
          {/* {!rocketLaunchIcon1 && ( */}
            <img
              className="relative w-5 h-5 "
              alt=""
              src={rocketLaunch1}
            />
          {/* )} */}
          <div className="relative leading-[140%] font-semibold">Rankings</div>
        </div>
        <div className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
      onClick={profile ? onProfileContainerClick : onLoginContainerClick} 
      // The onClick here would navigate to profile if the user is logged in or login page otherwise.
>
    <img className="relative w-5 h-5 hidden" alt="" src={rocketLaunch2} />
    <div className="relative leading-[140%] font-semibold">{profile ? profile : "Log In"} </div>
</div>

{profile && (
    <div className="rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
              onClick={onLogout}
    >
        <img className="relative w-5 h-5 hidden" alt="" src={rocketLaunch2} />
        <div className="relative leading-[140%] font-semibold">Log Out </div>
    </div>
)}
        <div
          className="rounded-xl bg-call-to-action h-[60px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px] text-text cursor-pointer"
          onClick={onCreateContainerClick}
          style={signUpStyle}
        >
          <img className="relative w-5 h-5" alt="" src={plus} />
          <div className="relative leading-[140%] font-semibold">Create</div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
