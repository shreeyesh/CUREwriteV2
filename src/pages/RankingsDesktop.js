import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Tab from "../components/Tab";
import Ranks from "../components/Ranks";
import Footer from "../components/Footer";

const RankingsDesktop = () => {
  const navigate = useNavigate();

  const onNavLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  const onTableItemsContainer1Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer3Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer5Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer7Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer9Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer11Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer13Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer15Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer17Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer19Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer21Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer23Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer25Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer27Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer29Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer31Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer33Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer35Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer37Click = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onTableItemsContainer39Click = useCallback(() => {
    navigate("/profile-page");
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

  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://www.curewrite.com/?utm_source=figma-samples&utm_campaign=figma-Papermarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="relative bg-background w-full flex flex-col items-center justify-start text-left text-32xl text-text font-base-body-space-mono">
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
        onSignUpContainerClick={onSignUpContainerClick}
        signUpCursor="pointer"
        plus="/plus2.svg"
        navLogoCursor="pointer"
        hasLeftIcon
        hasText
      />
      <div className="self-stretch bg-background flex flex-col py-20 px-0 items-center justify-start font-h3-work-sans">
        <div className="w-[1050px] flex flex-col items-start justify-start gap-[20px]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 relative leading-[110%] capitalize font-semibold">
              Top Researchers
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-3xl">
            <div className="self-stretch relative leading-[160%]">
              Check out top ranking PAPER Researchers on the Research Marketplace.
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-background flex flex-col py-0 px-2.5 items-center justify-start">
        <div className="w-[1050px] flex flex-row items-start justify-start">
          <Tab created="Today" prop="302" frameDiv={false} />
          <Tab
            tabBorderBottom="unset"
            created="This Week"
            createdColor="#858584"
            frameDivBackgroundColor="#3b3b3b"
            prop="67"
            frameDiv={false}
          />
          <Tab
            tabBorderBottom="unset"
            created="This Month"
            createdColor="#858584"
            frameDivBackgroundColor="#3b3b3b"
            prop="67"
            frameDiv={false}
          />
          <Tab
            tabBorderBottom="unset"
            created="All Time"
            createdColor="#858584"
            frameDivBackgroundColor="#3b3b3b"
            prop="67"
            frameDiv={false}
          />
        </div>
      </div>
      <div className="self-stretch bg-text flex flex-col py-10 px-0 items-center justify-start gap-[20px] text-center text-base text-caption-label-text">
        <div className="rounded-xl box-border w-[1052px] h-12 flex flex-col py-3 px-0 items-center justify-start border-[1px] border-solid border-background-secondary">
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="relative leading-[140%] inline-block w-[30px] shrink-0">
                #
              </div>
              <div className="relative leading-[140%] text-left">Artist</div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  Change
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  PAPERs Sold
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  Volume
                </div>
              </div>
            </div>
          </div>
        </div>
        <Ranks
          onTableItemsContainer1Click={onTableItemsContainer1Click}
          prop="1"
          CreatorPfp="/avatar-placeholder62@2x.png"
          dishStudio="Dr. Benjamin Reed"
          additionalInfo={false}
          rankingNumber2={false}
        />
        <Ranks
          onTableItemsContainer1Click={onTableItemsContainer3Click}
          prop="2"
          CreatorPfp="/avatar-placeholder63@2x.png"
          dishStudio="Dr. Olivia Hayes"
          additionalInfo={false}
          rankingNumber2={false}
        />
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer5Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  3
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder64@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    {" "}
                    Dr. Ethan Brooks
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer7Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  4
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder65@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Sophia Young
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer9Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  5
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder66@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Nathan Jameson
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer11Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  6
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder67@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Amelia Clarke
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer13Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  7
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder68@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Isaac Hughes
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer15Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  8
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder69@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Ava Sanders
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer17Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                  9
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder70@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Caleb Price
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer19Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  10
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder71@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Harper Ellis
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer21Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  11
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder72@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Leo Morgan
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer23Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  12
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder73@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Stella Baker
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer25Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  13
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder74@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Eli Grant
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer27Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  14
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder75@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Mia Turner
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer29Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  15
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder76@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Owen Ford
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer31Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  16
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder77@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Chloe Foster
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer33Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  17
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder78@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Wyatt Parker
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer35Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  18
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder79@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Lily Campbell
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer37Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  19
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder80@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Noah Cooper
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer"
          onClick={onTableItemsContainer39Click}
        >
          <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
            <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
              <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
                <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_10px)] leading-[140%] z-[0]">
                  20
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
                <div className="flex flex-col items-end justify-start z-[0]">
                  <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                    <div className="relative w-[60px] h-[60px]">
                      <img
                        className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/avatar-placeholder81@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
                  <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                    Dr. Emily Sullivan
                  </div>
                  <div className="self-stretch hidden flex-row items-center justify-start gap-[5px] text-base text-caption-label-text">
                    <div className="flex-1 relative leading-[140%]">
                      Total Sales:
                    </div>
                    <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                      34.53 ETH
                    </div>
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[13px] left-[12px] rounded-xl bg-background w-[30px] hidden flex-row items-start justify-start z-[2] text-center text-base text-caption-label-text font-base-body-space-mono">
                  <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-[20px] text-left text-text">
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start text-green">
                <div className="self-stretch relative leading-[140%]">
                  +1.41%
                </div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">602</div>
              </div>
              <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
                <div className="self-stretch relative leading-[140%]">
                  1240 INR
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RankingsDesktop;
