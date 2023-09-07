import { useMemo } from "react";

const CollectionCard = ({
  primaryPhotoPlaceholder,
  onPrimaryPhotoPlaceholderClick,
  secondaryPhotoPlaceholder,
  onSecondaryPhotoPlaceholderClick,
  secondaryPhotoPlaceholder1,
  onSecondaryPhotoPlaceholder1Click,
  onNumberOfAdditionalPapersClick,
  collectionName,
  onAvatarContainer3Click,
  avatarCursor,
  CreatorPfp,
  onCreatorPfpIconClick,
  CreatorPfpIconBorderRadius,
  CreatorPfpIconCursor,
  artistName,
}) => {
  const avatarStyle = useMemo(() => {
    return {
      cursor: avatarCursor,
    };
  }, [avatarCursor]);

  const CreatorPfpIconStyle = useMemo(() => {
    return {
      borderRadius: CreatorPfpIconBorderRadius,
      cursor: CreatorPfpIconCursor,
    };
  }, [CreatorPfpIconBorderRadius, CreatorPfpIconCursor]);

  return (
    <div className=" max-w-[450px] flex-1 rounded-xl bg-background flex flex-col items-start justify-start gap-[15px] text-left text-3xl text-text font-h3-work-sans">
      <div className="self-stretch flex flex-col items-start justify-start gap-[15px]">
        <img
          className="self-stretch relative rounded-xl max-w-full overflow-hidden h-[330px] shrink-0 object-cover cursor-pointer"
          alt=""
          src={primaryPhotoPlaceholder}
          onClick={onPrimaryPhotoPlaceholderClick}
        />
        <div className="w-[314px] h-[100px] flex flex-row py-0 px-[5px] box-border items-start justify-start gap-[15px]">
          <img
            className="flex-1 relative rounded-xl max-w-full overflow-hidden h-[100px] object-cover cursor-pointer"
            alt=""
            src={secondaryPhotoPlaceholder}
            onClick={onSecondaryPhotoPlaceholderClick}
          />
          <img
            className="flex-1 relative rounded-xl max-w-full overflow-hidden h-[100px] object-cover cursor-pointer"
            alt=""
            src={secondaryPhotoPlaceholder1}
            onClick={onSecondaryPhotoPlaceholder1Click}
          />
          <button
            className="cursor-pointer [border:none] py-8 px-[15px] bg-call-to-action flex-1 rounded-xl h-[100px] flex flex-col box-border items-center justify-center"
            onClick={onNumberOfAdditionalPapersClick}
          >
            <b className="relative text-3xl leading-[160%] capitalize font-base-body-space-mono text-text text-center">
              10+
            </b>
          </button>
        </div>
      </div>
      <div className="self-stretch flex flex-col py-0 px-2.5 items-start justify-start gap-[10px]">
        <div className="self-stretch relative leading-[140%] capitalize font-semibold">
          {collectionName}
        </div>
        <div className="self-stretch rounded-xl flex flex-row py-[5px] px-2.5 items-start justify-start gap-[12px] text-base">
          <div
            className="flex flex-row items-start justify-start"
            onClick={onAvatarContainer3Click}
            style={avatarStyle}
          >
            <div className="relative w-6 h-6">
              <img
                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover cursor-pointer"
                alt=""
                src={CreatorPfp}
                onClick={onCreatorPfpIconClick}
                style={CreatorPfpIconStyle}
              />
            </div>
          </div>
          <div className="flex-1 relative leading-[140%]">{artistName}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
