import { useMemo } from "react";

const ArtistCard = ({
  onArtistCardContainer4Click,
  CreatorPfp,
  dishStudio,
  prop,
  CreatorPfpIconBorderRadius,
}) => {
  const CreatorPfpIcon1Style = useMemo(() => {
    return {
      borderRadius: CreatorPfpIconBorderRadius,
    };
  }, [CreatorPfpIconBorderRadius]);

  return (
    <div
      className="h-[200px] flex-1 rounded-xl bg-background-secondary flex flex-col p-5 items-center justify-start relative gap-[20px] cursor-pointer text-center text-3xl text-text font-h3-work-sans"
      onClick={onArtistCardContainer4Click}
    >
      <div className="flex flex-col items-end justify-start z-[0]">
        <div className="w-[120px] flex flex-row items-start justify-start z-[0]">
          <div className="relative w-[120px] h-[120px]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={CreatorPfp}
              style={CreatorPfpIcon1Style}
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[5px] z-[1]">
        <div className="self-stretch relative leading-[140%] capitalize font-semibold truncate">
          {dishStudio}
        </div>
        <div className=" self-stretch flex flex-row items-start justify-center gap-[10px] text-right text-base text-caption-label-text">
          <div className=" flex-1 relative leading-[140%]">Total Sales</div>
          <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text text-left">
            34.53 USD
          </div>
        </div>
      </div>
      <div className="my-0 mx-[!important] absolute top-[18px] left-[20px] rounded-xl bg-background w-[30px] flex flex-row items-start justify-start z-[2] text-base text-caption-label-text font-base-body-space-mono">
        <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
          {prop}
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
