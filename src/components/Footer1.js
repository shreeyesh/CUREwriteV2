import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Footer1 = () => {
    const navigate = useNavigate();

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

  const onMarketplaceTextClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    window.open(
      "https://www.curewrite.com/?utm_source=figma-samples&utm_campaign=figma-Papermarket&utm_medium=figma-samples"
    );
  }, []);
  return (

<footer className="self-stretch bg-background-secondary flex flex-col py-10 px-[195px] items-center justify-start gap-[30px] text-left text-3xl text-text font-base-body-space-mono">
        <div className="self-stretch flex flex-row items-start justify-between">
          <div className="w-[327.41px] flex flex-col py-0 pr-[84px] pl-0 box-border items-start justify-start gap-[30px] text-base text-lightgray font-h3-work-sans">
            <img className="relative w-8 h-8" alt="" src="/logo.svg" />
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch relative leading-[140%]">
                Write and Buy Research Papers on Curewrite
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
                <div className="self-stretch relative leading-[140%]">
                  Join our community
                </div>
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/discordlogo.svg"
                    onClick={onDiscordLogoIconClick}
                  />
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/youtubelogo.svg"
                    onClick={onYoutubeLogoIconClick}
                  />
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/twitterlogo.svg"
                    onClick={onTwitterLogoIconClick}
                  />
                  <img
                    className="relative w-8 h-8 cursor-pointer"
                    alt=""
                    src="/instagramlogo.svg"
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
          <div className="w-[420px] flex flex-col items-start justify-start gap-[25px]">
            <b className="self-stretch relative leading-[160%] capitalize">
              Join our weekly digest
            </b>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base text-lightgray font-h3-work-sans">
              <div className="self-stretch relative leading-[140%]">{`Get exclusive promotions & updates straight to your inbox.`}</div>
              <div className="self-stretch rounded-xl bg-text h-[60px] flex flex-row py-4 pr-0 pl-5 box-border items-center justify-start gap-[12px] text-background">
                <div className="flex-1 relative leading-[140%]">
                  Enter your email here
                </div>
                <button
                  className="cursor-pointer [border:none] py-0 px-[50px] bg-call-to-action rounded-xl h-[60px] flex flex-row box-border items-center justify-end gap-[12px]"
                  onClick={onButtonClick}
                >
                  <img
                    className="relative w-5 h-5 hidden"
                    alt=""
                    src="/envelopesimple1.svg"
                  />
                  <div className="relative text-base leading-[140%] font-semibold font-h3-work-sans text-text text-center">
                    Subscribe
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-xs text-lightgray font-h3-work-sans">
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-caption-label-text" />
          <div className="self-stretch relative leading-[110%]" />
        </div>
      </footer>
  )
}
export default Footer1;