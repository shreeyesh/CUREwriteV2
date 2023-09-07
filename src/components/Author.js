import { useMemo } from "react";

const Author = ({ pfp,creator, propCursor, onArtistCardContainerClick }) => {
  const artistCardStyle = useMemo(() => {
    return {
      cursor: propCursor,
    };
  }, [propCursor]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-left text-3xl text-caption-label-text font-base-body-space-mono">
      <b className="self-stretch relative leading-[160%] capitalize">
        Created By
      </b>
      <div
        className="self-stretch rounded-xl flex flex-row items-center justify-start gap-[12px] cursor-pointer text-text font-h3-work-sans"
        // onClick={onArtistCardContainerClick}
        style={artistCardStyle}
      >
        <div className="flex flex-row items-start justify-start">
          <div className="relative w-6 h-6">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={pfp}
            />
          </div>
        </div>
        <div className="flex-1 relative leading-[140%] capitalize font-semibold">
          {creator? creator:"Anonymous"}
        </div>
      </div>
    </div>
  );
};

export default Author;
