import { useCallback } from "react";

const AlertPopup = ({ onClose,alert }) => {
  const onButtonContainerClick = useCallback(() => {
    window.open("https://curewrite.com/");
  }, []);

  return (
    <div className="relative w-[420px] h-[60px] max-w-full max-h-full overflow-auto text-center text-base text-text font-h3-work-sans">
      <div
        className="absolute top-[0px] left-[209px] rounded-xl bg-blue-accent w-[211px] h-[60px] flex flex-row py-0 px-[50px] box-border items-center justify-end gap-[12px] cursor-pointer"
        onClick={onButtonContainerClick}
      >
        <div className="relative leading-[140%] font-semibold z-[0]" />
        <div className="absolute my-0 mx-[!important] top-[0px] left-[-225.71px] bg-text w-[245px] h-[60px] z-[1] text-black text-center">
         <div className="relative my-5 top-[25%]text-center">
          {alert}
         </div>
          </div>
      {/* <div className="absolute top-[19px] left-[20px] leading-[140%] text-background text-left inline-block w-[177px]">
        Paper sent for review
      </div> */}
      </div>
      <img
        className="absolute top-[7px] left-[255.29px] w-[129px] h-[49px] object-cover"
        alt=""
        src="/horizontallogo-1@2x.png"
      />
    </div>
  );
};

export default AlertPopup;
