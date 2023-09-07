const Ranks = ({
  onTableItemsContainer1Click,
  prop,
  CreatorPfp,
  dishStudio,
  additionalInfo,
  rankingNumber2,
}) => {
  return (
    <div
      className="rounded-xl bg-background-secondary w-[1050px] flex flex-col py-3 px-0 box-border items-center justify-start cursor-pointer text-center text-base text-caption-label-text font-base-body-space-mono"
      onClick={onTableItemsContainer1Click}
    >
      <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
        <div className="w-[430px] flex flex-row items-center justify-start gap-[20px]">
          <div className="rounded-xl bg-text w-[30px] flex flex-row items-start justify-start relative">
            <div className="absolute my-0 mx-[!important] top-[calc(50%_-_11px)] left-[calc(50%_-_5px)] leading-[140%] z-[0]">
              {prop}
            </div>
          </div>
          <div className="flex-1 rounded-xl flex flex-row items-center justify-center relative gap-[20px] text-left text-3xl text-text font-h3-work-sans">
            <div className="flex flex-col items-end justify-start z-[0]">
              <div className="w-[60px] flex flex-row items-start justify-start z-[0]">
                <div className="relative w-[60px] h-[60px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src={CreatorPfp}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-[5px] z-[1]">
              <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                {dishStudio}
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
            <div className="self-stretch relative leading-[140%]">+1.41%</div>
          </div>
          <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[140%]">602</div>
          </div>
          <div className="w-40 overflow-hidden shrink-0 flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[140%]">1240 USD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ranks;
