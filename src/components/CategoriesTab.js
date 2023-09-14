import { useMemo } from "react";

const CategoryItem = ({ imageSrc, iconName, title, onClick }) => (
  <div
  className="w-screen rounded-xl bg-background-secondary flex flex-col items-center justify-start cursor-pointer snap-start"
  onClick={onClick}
>
    <div className="self-stretch relative rounded-t-xl rounded-b-none h-60">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] h-60">
        <img
          className="absolute h-full w-screen top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-t-xl rounded-b-none max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={imageSrc}
        />
      </div>
      <div className="absolute w-screen top-[0px] right-[0px] left-[0px] rounded-t-xl rounded-b-none bg-gray  flex flex-row items-center justify-center">
        <img className="flex-1 relative max-w-full overflow-hidden h-[100px] hidden" alt="" src={iconName} />
      </div>
    </div>
    <div className="self-stretch flex flex-col pt-5 px-[30px] pb-[25px] items-start justify-start">
      <div className="self-stretch relative leading-[140%] capitalize font-semibold">
        {title}
      </div>
    </div>
  </div>
);

const CategoriesTab = ({ onCategoryClick = () => {} }) => {

  const categoriesData = useMemo(() => [
    { imageSrc: "/image-placeholder@2x.png", iconName: "/paintbrush.svg", title: "Biomedical Genetics" },
    { imageSrc: "/image-placeholder1@2x.png", iconName: "/swatches.svg", title: "Cardiovascular Medicine" },
    { imageSrc: "/image-placeholder2@2x.png", iconName: "/musicnotes.svg", title: "Computational Biomedicine" },
    { imageSrc: "/image-placeholder3@2x.png", iconName: "/musicnotes.svg", title: "Endocrinology and Diabetes" },
    { imageSrc: "/image-placeholder4@2x.png", iconName: "/musicnotes.svg", title: "Geriatrics" },
    { imageSrc: "/image-placeholder5@2x.png", iconName: "/musicnotes.svg", title: "Hematology" },
    { imageSrc: "/image-placeholder6@2x.png", iconName: "/musicnotes.svg", title: "Prosthodontics" },
    { imageSrc: "/image-placeholder7@2x.png", iconName: "/musicnotes.svg", title: "Oral Medicine" },
    // ... add all categories here
  ], []);

  return (
    <section className="flex pt-10 text-3xl flex-row overflow-x-auto w-full mb:h-auto sm:h-[30%] text-text snap-x">
    {categoriesData.map((category, index) => (
        <CategoryItem className='w-screen'
          key={index}
          imageSrc={category.imageSrc}
          iconName={category.iconName}
          title={category.title}
          onClick={() => onCategoryClick(category.title)}
        />
      ))}
    </section>
  );
  
  
};

export default CategoriesTab;
