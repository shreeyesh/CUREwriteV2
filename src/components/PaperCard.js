import { useMemo, useCallback,useEffect } from "react";
import { useNavigate } from "react-router-dom";


const PaperCard = ({
  onPaperCardContainerClick,
  onCreatorClick,
  imagePlaceholder,
  PaperHeading,
  CreatorPfp,
  Creator,
  CreatorPfpIconBorderRadius,
  PaperCardCursor,
  PaperCardBackgroundColor,
  price,
  category,
}) => {
  const CreatorPfpIcon2Style = useMemo(() => {
    return {
      borderRadius: CreatorPfpIconBorderRadius,
    };
  }, [CreatorPfpIconBorderRadius]);

  const PaperCardStyle = useMemo(() => {
    return {
      cursor: PaperCardCursor,
      backgroundColor: PaperCardBackgroundColor,
    };
  }, [PaperCardCursor, PaperCardBackgroundColor]);
  const navigate = useNavigate();

  return (
    <div
      className="flex-1 w-[350px] rounded-xl bg-background-secondary h-[469px] flex flex-col items-center justify-start text-left text-3xl text-text font-h3-work-sans"
      style={PaperCardStyle}
    >
      <div className="self-stretch rounded-t-xl rounded-b-none flex flex-col items-start justify-start"
            onClick={onPaperCardContainerClick}
            >
        <img
          className="self-stretch relative rounded-t-xl rounded-b-none max-w-full overflow-hidden h-[296px] shrink-0 object-cover"
          alt=""
          src={imagePlaceholder}
        />
      </div>
      <div className="self-stretch flex flex-col pt-5 px-[30px] pb-[25px] items-start justify-start gap-[25px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
          <div className="self-stretch relative leading-[140%] capitalize font-semibold">
            {PaperHeading}
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-base font-base-body-space-mono"
          onClick={onCreatorClick}>
            <div className="flex flex-row items-start justify-start">
              <div className="relative w-6 h-6">
                <img
                  className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src={CreatorPfp}
                  // onClick={handleCreatorClick}
                  style={CreatorPfpIcon2Style}
                />
              </div>
            </div>
            <div className="flex-1 relative leading-[140%]">{Creator}</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start text-xs text-caption-label-text font-base-body-space-mono">
          <div className="flex-1 flex flex-col py-0 pr-[21px] pl-0 items-start justify-start gap-[8px]">
            <div className="self-stretch relative leading-[110%]">Price</div>
            <div className="self-stretch relative text-base leading-[140%] text-text">
              {price}
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-center gap-[8px] text-right">
            <div className="self-stretch relative leading-[110%]">
              Category
            </div>
            <div className="self-stretch relative text-base leading-[140%] text-text">
              {category}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperCard;
