import { useMemo } from "react";

const InfoCard = ({
  infoCardAlignSelf,
  icon,
  setupYourWallet,
  setUpYourWalletOfChoiceCo,
  infoCardHeight,
}) => {
  const infoCardStyle = useMemo(() => {
    return {
      alignSelf: infoCardAlignSelf,
      height: infoCardHeight,
    };
  }, [infoCardAlignSelf, infoCardHeight]);

  return (
    <div
      className="rounded-xl bg-background-secondary w-[330px] flex flex-col pt-2.5 px-[30px] pb-[30px] box-border items-center justify-start gap-[20px] text-center text-3xl text-text font-h3-work-sans"
      style={infoCardStyle}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[250px] shrink-0"
        alt=""
        src={icon}
      />
      <div className="self-stretch flex flex-col items-center justify-start gap-[10px]">
        <div className="self-stretch relative leading-[140%] capitalize font-semibold">
          {setupYourWallet}
        </div>
        <div className="self-stretch relative text-base leading-[140%]">
          {setUpYourWalletOfChoiceCo}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
