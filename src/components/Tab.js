import { useMemo } from "react";

const Tab = ({
  tabBorderBottom,
  created,
  createdColor,
  frameDivBackgroundColor,
  prop,
  frameDiv,
  onClick,
}) => {
  const tabStyle = useMemo(() => {
    return {
      borderBottom: tabBorderBottom,
    };
  }, [tabBorderBottom]);

  const createdStyle = useMemo(() => {
    return {
      color: createdColor,
    };
  }, [createdColor]);

  const frameDiv1Style = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBackgroundColor]);

  return (
    <button
      className="cursor-pointer [border:none] py-0 px-[30px] bg-[transparent] flex-1 box-border h-[60px] flex flex-row items-center justify-center gap-[16px] border-b-[2px] border-solid border-caption-label-text"
      style={tabStyle}
      onClick={onClick}
    >
      <div
        className="relative text-3xl leading-[140%] capitalize font-semibold font-h3-work-sans text-text text-center"
        style={createdStyle}
      >
        {created}
      </div>
      {!frameDiv && (
        <div
          className="rounded-xl bg-caption-label-text hidden flex-row py-[5px] px-2.5 items-center justify-start"
          style={frameDiv1Style}
        >
          <div className="relative text-base leading-[140%] font-base-body-space-mono text-text text-left">
            {prop}
          </div>
        </div>
      )}
    </button>
  );
};

export default Tab;
