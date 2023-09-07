import { useMemo } from "react";

const CategoriesTab = ({onCategoryClick}) => {
    const handleCategoryClick = (categoryName) => {
        if (onCategoryClick) {
          onCategoryClick(categoryName);
        }
      }
return(
<section className="self-stretch flex flex-col py-20 px-[195px] items-center justify-start gap-[60px] text-left text-19xl text-text font-h3-work-sans">
        
        <div className="self-stretch flex flex-col items-start justify-start gap-[30px] text-3xl">
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px]">
            <div
              className="flex-1 rounded-xl bg-background-secondary flex flex-col items-center justify-start cursor-pointer"
              onClick={() => handleCategoryClick('Biomedical Genetics')}
              >
              <div className="self-stretch relative rounded-t-xl rounded-b-none h-60">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-60">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/image-placeholder@2x.png"
                  />
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-t-xl rounded-b-none bg-gray  flex flex-row items-center justify-center">
                  <img
                    className="flex-1 relative max-w-full overflow-hidden h-[100px] hidden"
                    alt=""
                    src="/paintbrush.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col pt-5 px-[30px] pb-[25px] items-start justify-start">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Biomedical Genetics
                </div>
              </div>
            </div>
            <div
              className="flex-1 rounded-xl bg-background-secondary flex flex-col items-center justify-start cursor-pointer"
              onClick={() => handleCategoryClick('Cardiovascular Medicine')}
            >
              <div className="self-stretch relative rounded-t-xl rounded-b-none h-60">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-60">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/image-placeholder1@2x.png"
                  />
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-t-xl rounded-b-none bg-gray  flex flex-row items-center justify-center">
                  <img
                    className="flex-1 relative max-w-full overflow-hidden h-[100px] hidden"
                    alt=""
                    src="/swatches.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col pt-5 px-[30px] pb-[25px] items-start justify-start">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Cardiovascular Medicine
                </div>
              </div>
            </div>
            <div
              className="flex-1 rounded-xl bg-background-secondary flex flex-col items-center justify-start cursor-pointer"
              onClick={() => handleCategoryClick('Computational Biomedicine')}
            >
              <div className="self-stretch relative rounded-t-xl rounded-b-none h-60">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-60">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/image-placeholder2@2x.png"
                  />
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-t-xl rounded-b-none bg-gray  flex flex-row items-center justify-center">
                  <img
                    className="flex-1 relative max-w-full overflow-hidden h-[100px] hidden"
                    alt=""
                    src="/musicnotes.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col pt-5 px-[30px] pb-[25px] items-start justify-start">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Computational Biomedicine
                </div>
              </div>
            </div>
            <div
              className="flex-1 rounded-xl bg-background-secondary flex flex-col items-center justify-start cursor-pointer"
              onClick={() => handleCategoryClick('Endocrinology and Diabetes')}
            >
              <div className="self-stretch relative rounded-t-xl rounded-b-none h-60">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-60">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/image-placeholder3@2x.png"
                  />
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-t-xl rounded-b-none bg-gray  h-60 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[100px] h-[100px] hidden"
                    alt=""
                    src="/camera.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col pt-5 px-[30px] pb-[25px] items-start justify-start">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Endocrinology and Diabetes
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[30px]">
            <div
              className="flex-1 rounded-xl bg-background-secondary flex flex-col items-center justify-start cursor-pointer"
              onClick={() => handleCategoryClick('Geriatrics')}
            >
              <div className="self-stretch relative rounded-t-xl rounded-b-none h-60">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-60">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/image-placeholder4@2x.png"
                  />
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-t-xl rounded-b-none bg-gray  h-60 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[100px] h-[100px] hidden"
                    alt=""
                    src="/videocamera.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col pt-5 px-[30px] pb-[25px] items-start justify-start">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Geriatrics
                </div>
              </div>
            </div>
            <div
              className="flex-1 rounded-xl bg-background-secondary flex flex-col items-center justify-start cursor-pointer"
              onClick={() => handleCategoryClick('Hematology')}
            >
              <div className="self-stretch relative rounded-t-xl rounded-b-none h-60">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-60">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/image-placeholder5@2x.png"
                  />
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-t-xl rounded-b-none bg-gray  h-60 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[100px] h-[100px] hidden"
                    alt=""
                    src="/magicwand.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col pt-5 px-[30px] pb-[25px] items-start justify-start">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">{`Hematology `}</div>
              </div>
            </div>
            <div
              className="flex-1 rounded-xl bg-background-secondary flex flex-col items-center justify-start cursor-pointer"
              onClick={() => handleCategoryClick('Oral Medicine')}
            >
              <div className="self-stretch relative rounded-t-xl rounded-b-none h-60">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-60">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/image-placeholder6@2x.png"
                  />
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-t-xl rounded-b-none bg-gray  h-60 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[100px] h-[100px] hidden"
                    alt=""
                    src="/basketball.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col pt-5 px-[30px] pb-[25px] items-start justify-start">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Oral Medicine
                </div>
              </div>
            </div>
            <div
              className="flex-1 rounded-xl bg-background-secondary flex flex-col items-center justify-start cursor-pointer"
              onClick={() => handleCategoryClick('Prosthodontics')}
            >
              <div className="self-stretch relative rounded-t-xl rounded-b-none h-60">
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-60">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/image-placeholder7@2x.png"
                  />
                </div>
                <div className="absolute w-full top-[0px] right-[0px] left-[0px] rounded-t-xl rounded-b-none bg-gray  h-60 flex flex-row items-center justify-center">
                  <img
                    className="relative w-[100px] h-[100px] hidden"
                    alt=""
                    src="/planet.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col pt-5 px-[30px] pb-[25px] items-start justify-start">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Prosthodontics
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
);
};
export default CategoriesTab;
