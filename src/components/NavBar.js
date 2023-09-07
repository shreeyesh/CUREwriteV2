import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const onMarketplaceContainerClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onRankingsContainerClick = useCallback(() => {
    navigate("/rankings");
  }, [navigate]);

  const onProfileContainerClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onCreateContainerClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  return (
    <header className="self-stretch bg-text flex flex-row py-5 px-[50px] items-center justify-between text-center text-base text-background-secondary font-h3-work-sans sm:flex-row sm:gap-[0px] sm:items-center sm:justify-start">
      <img
        className="max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/cwLogo@2x.png"
      />
      <div className="w-[581px] flex flex-row items-center justify-end gap-[10px]">
        <div
          className="flex-1 rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
          onClick={onMarketplaceContainerClick}
        >
          <img className="relative w-5 h-5" alt="" src="/rocketlaunchW.svg" />
          <div className="relative leading-[140%] font-semibold">
            Marketplace
          </div>
        </div>
        <div
          className="flex-1 rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
          onClick={onRankingsContainerClick}
        >
          <img className="relative w-5 h-5" alt="" src="/rocketlaunch.svg" />
          <div className="relative leading-[140%] font-semibold">Rankings</div>
        </div>
        <div
          className="flex-1 rounded-xl h-[46px] flex flex-row py-0 px-5 box-border items-center justify-center gap-[12px] cursor-pointer"
          onClick={onProfileContainerClick}
        >
          <img
            className="relative w-5 h-5 hidden"
            alt=""
            src="/rocketlaunchW.svg"
          />
          <div className="relative leading-[140%] font-semibold">Profile</div>
        </div>
        <div
          className="flex-1 rounded-xl bg-call-to-action h-[60px] flex flex-row py-0 px-[30px] box-border items-center justify-center gap-[12px] cursor-pointer text-text"
          onClick={onCreateContainerClick}
        >
          <img className="relative w-5 h-5" alt="" src="/plus.svg" />
          <div className="relative leading-[140%] font-semibold">Create</div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
