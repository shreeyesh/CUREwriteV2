import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

  const onDiscordLogoIcon1Click = useCallback(() => {
    window.open("https://discord.com/invite/eQxkYTNxSp");
  }, []);

  const onYoutubeLogoIcon1Click = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw");
  }, []);

  const onTwitterLogoIcon1Click = useCallback(() => {
    window.open("https://twitter.com/curewrite?lang=en");
  }, []);

  const onInstagramLogoIcon1Click = useCallback(() => {
    window.open("https://www.instagram.com/curewrite/?hl=en");
  }, []);

  const onMarketplaceTextClick = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onRankingsTextClick = useCallback(() => {
    navigate("/rankings");
  }, [navigate]);

  const onButtonContainer2Click = useCallback(() => {
    window.open(
      "https://www.curewrite.com/?utm_source=figma-samples&utm_campaign=figma-Papermarket&utm_medium=figma-samples"
    );
  }, []);
  return (

<div className="self-stretch bg-background-secondary flex flex-col py-10 px-[195px] items-center justify-start gap-[30px] border-t-[2px] border-solid border-background">
<div className="flex flex-row items-start justify-between">
  <div className="w-[327.41px] flex flex-col py-0 pr-[84px] pl-0 box-border items-start justify-start gap-[30px] text-base text-lightgray font-h3-work-sans">
    <img className="relative w-30 h-10" alt="" src="/cwLogo@2x.png" />
    <div className="flex flex-col items-start justify-start gap-[20px]">
      <div className="relative leading-[140%] inline-block w-[238px]">
        Research Marketplace UI created with curewrite for Figma.
      </div>
      <div className="flex flex-col items-start justify-start gap-[15px]">
        <div className="relative leading-[140%] inline-block w-[238px] h-[18px] shrink-0">
          Join our community
        </div>
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <img
            className="relative w-8 h-8 cursor-pointer"
            alt=""
            src="/discordlogo3.svg"
            onClick={onDiscordLogoIcon1Click}
          />
          <img
            className="relative w-8 h-8 cursor-pointer"
            alt=""
            src="/youtubelogo2.svg"
            onClick={onYoutubeLogoIcon1Click}
          />
          <img
            className="relative w-8 h-8 cursor-pointer"
            alt=""
            src="/twitterlogo3.svg"
            onClick={onTwitterLogoIcon1Click}
          />
          <img
            className="relative w-8 h-8 cursor-pointer"
            alt=""
            src="/instagramlogo2.svg"
            onClick={onInstagramLogoIcon1Click}
          />
        </div>
      </div>
    </div>
  </div>
  <div className="w-60 flex flex-col items-start justify-start gap-[25px]">
    <b className="relative leading-[160%] capitalize">Explore</b>
    <div className="flex flex-col items-start justify-start gap-[20px] text-base text-lightgray font-h3-work-sans">
      <div
        className="relative leading-[140%] cursor-pointer"
        onClick={onMarketplaceTextClick}
      >
        Marketplace
      </div>
      <div
        className="relative leading-[140%] cursor-pointer"
        onClick={onRankingsTextClick}
      >
        Rankings
      </div>
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
          Enter your email here
        </div>
        <div
          className="rounded-xl bg-call-to-action h-[60px] flex flex-row py-0 px-[50px] box-border items-center justify-end gap-[12px] cursor-pointer text-center text-text"
          onClick={onButtonContainer2Click}
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
</div>
</div>
  )
}
export default Footer;