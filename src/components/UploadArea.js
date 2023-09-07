import { useMemo } from "react";

const UploadArea = ({ newUploadTop,fileuploaded}) => {
  const newUploadStyle = useMemo(() => {
    return {
      top: newUploadTop,
    };
  }, [newUploadTop]);

  return (
    <div
      className="absolute top-[190px] left-[113px] shadow-[0px_0px_48px_rgba(0,_0,_0,_0.04)] w-[382px] h-[241px] text-center text-xs text-text font-label-small"
      style={newUploadStyle}
    >
      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xl bg-text" />
      <div className="absolute top-[16px] left-[calc(50%_-_99px)] rounded-21xl bg-grey-01 shadow-[0px_0px_2px_rgba(0,_0,_0,_0.1)_inset] flex flex-row py-1 px-[5px] items-start justify-start gap-[4px]">
        <div className="rounded-21xl bg-blue h-7 flex flex-row py-[7px] px-5 box-border items-center justify-end">
          <div className="relative leading-[14px] font-semibold">
            New Upload
          </div>
        </div>
        <div className="rounded-21xl bg-grey-01 h-7 flex flex-row py-[7px] px-5 box-border items-center justify-end text-blue">
          <button></button>
          <div className="relative leading-[14px] font-semibold">Recent</div>
        </div>
      </div>
      <img
        className="absolute top-[16px] right-[16px] w-9 h-9"
        alt=""
        src="/group-5.svg"
      />
      <div className="absolute h-[calc(100%_-_68px)] w-full top-[68px] right-[0px] bottom-[0px] left-[0px] rounded-t-none rounded-b-3xl bg-flat-grey flex flex-col p-8 box-border items-center justify-center text-sm text-grey-05">
        <div className="self-stretch flex-1 rounded-3xl flex flex-col items-center justify-center border-[2px] border-dashed border-grey-03">
            {fileuploaded ===false?
          <div className="relative opacity-[0.5]">
            <p className="m-0">{`Click to browse or `}</p>
            <p className="m-0">drag and drop your {fileuploaded}files</p>
          </div>
            :
          <div className="relative opacity-[0.5]">
        </div>
}
        </div>
      </div>
      <div className="absolute w-full top-[68px] right-[0px] left-[0px] bg-grey-02 h-px" />
    </div>
  );
};

export default UploadArea;

// import { useMemo } from "react";

// const UploadArea = ({ newUploadTop, onUploadClick }) => {
//   const newUploadStyle = useMemo(() => {
//     return {
//       top: newUploadTop,
//     };
//   }, [newUploadTop]);

//   return (
//     <div className="upload-container" style={newUploadStyle}>
//       <div className="background" />
//       <div className="button-group">
//         <div className="button new-upload" onClick={onUploadClick}>New Upload</div>
//         <div className="button recent">Recent</div>
//       </div>
//       <img className="settings-icon" alt="Settings" src="/group-5.svg" />
//       <div className="upload-area" onClick={onUploadClick}>
//         Click to browse or drag and drop your files
//       </div>
//       <div className="divider" />
//     </div>
//   );
// };

// export default UploadArea;

