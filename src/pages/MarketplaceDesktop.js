import { useState,useEffect,useCallback } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import Tab from "../components/Tab";
import PaperCard from "../components/PaperCard";
import CategoriesTab from "../components/CategoriesTab";
import Loader from "../components/Loader";
import Footer1 from "../components/Footer1";
const backendURL = process.env.REACT_APP_BACKEND_URL;

const MarketplaceDesktop = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [loadingContent, setLoadingContent] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [catTab,setCatTab] = useState(false);
  const navigate = useNavigate();
  const parameter = useParams();

  // Search Functionality
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    searchPapersAndAuthors(e.target.value);
  };

  const searchPapersAndAuthors = (query) => {
    if (!query) {
      setSearchResults([]);
      return;
    }
    const results = posts.filter(
      item => (item.heading ? item.heading.toLowerCase().includes(query.toLowerCase()) : false) ||
              (item.username ? item.username.toLowerCase().includes(query.toLowerCase()) : false) ||
              (item.category ? item.category.toLowerCase().includes(query.toLowerCase()) : false)
    );
  
    setSearchResults(results);
};

// Category Click
const handleCategoryClick = (categoryName) => {
  // You can set the state here to store the selected category and use it to filter your posts
  setSearchInput(categoryName);
  searchPapersAndAuthors(categoryName);
  setCatTab(false);
};

useEffect(() => {
  if(parameter.category){
    handleCategoryClick(parameter.category);
  }
})

const CategoriesTabClick = () =>{
  setCatTab(true);
};
const PostTabClick = () =>{
  setCatTab(false);
};
  

  const onNavLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);


// Fetch posts
useEffect(() => {
  setLoadingContent("Loading Papers")
  const fetchPosts = async () => {
    const response = await fetch(`${backendURL}/posts`);
    const data = await response.json();
    setPosts(data.posts.reverse());
    setSearchResults(data.posts);
    setIsLoading(false);
  };
  fetchPosts();
}, []);

  const onDiscordLogoIconClick = useCallback(() => {
    window.open("https://discord.com/invite/eQxkYTNxSp");
  }, []);

  const onYoutubeLogoIconClick = useCallback(() => {
    window.open("https://www.youtube.com/channel/UCXqr0Ca-b73rU9zcpSBJ5cw");
  }, []);

  const onTwitterLogoIconClick = useCallback(() => {
    window.open("https://twitter.com/curewrite?lang=en");
  }, []);

  const onInstagramLogoIconClick = useCallback(() => {
    window.open("https://www.instagram.com/curewrite/?hl=en");
  }, []);

  const onButtonContainerClick = useCallback(() => {
    window.open(
      "https://www.curewrite.com/?utm_source=figma-samples&utm_campaign=figma-Papermarket&utm_medium=figma-samples"
    );
  }, []);

  return (
    <div className="relative bg-background w-full flex flex-col items-start justify-start text-left text-3xl text-text font-h3-work-sans">
      <Loader isOpen={isLoading} content={loadingContent} />
      <Navigation1
        onNavLogoClick={onNavLogoClick}
        navigationPosition="unset"
        navigationWidth="unset"
        navigationTop="unset"
        navigationRight="unset"
        navigationLeft="unset"
        navigationAlignSelf="stretch"
        horizontalLogo1="/cwLogo@2x.png"
        rocketLaunch="/rocketlaunch9.svg"
        rocketLaunchIcon
        rankingsCursor="pointer"
        rocketLaunch1="/rocketlaunch10.svg"
        rocketLaunchIcon1
        rocketLaunch2="/rocketlaunch9.svg"
        signUpCursor="pointer"
        plus="/plus2.svg"
        navLogoCursor="pointer"
        hasLeftIcon
        hasText
      />
      <div className="self-stretch bg-background flex flex-col py-20 px-0 items-center justify-start text-32xl">
        <div className="w-[1050px] flex flex-col items-start justify-start gap-[30px]">
          <div className="flex flex-col items-start justify-start gap-[10px]">
            <div className="relative leading-[110%] capitalize font-semibold flex items-center w-[1050px]">
              Browse Marketplace
            </div>
            <div className="self-stretch relative text-3xl leading-[160%]">
              Browse through more than 50k Papers on the Research Marketplace.
            </div>
          </div>
          <div className="rounded-xl box-border w-[1052px] h-[62px] flex flex-col py-3 px-0 items-center justify-center border-[1px] border-solid border-background-secondary">
            <div className="w-[1050px] flex flex-row py-0 px-5 box-border items-center justify-between">
              <div className="w-[960px] flex flex-row items-center justify-start">
                <input
                  className="[border:none] font-h3-work-sans text-base bg-[transparent] flex-1 relative leading-[140%] text-caption-label-text text-left"
                  type="text"
                  placeholder="Search your favourite Papers,Categories or Authors"
                  value={searchInput}
                  onChange={handleInputChange}
                />
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6">
                <img
                  className="absolute h-[71.88%] w-[71.88%] top-[9.38%] right-[18.75%] bottom-[18.75%] left-[9.38%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-stroke.svg"
                />
                <img
                  className="absolute h-[25.24%] w-[25.24%] top-[65.39%] right-[9.38%] bottom-[9.38%] left-[65.39%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/vector-stroke1.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-start text-center text-caption-label-text">
        <div className="self-stretch bg-text flex flex-col items-center justify-start gap-[10px]">
          <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-background-secondary" />
          <div className="w-[1050px] flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-row items-start justify-start">
              {catTab===true ?
                <Tab
                tabBorderBottom="unset"
                created="PAPERs"
                createdColor="#858584"
                  frameDivBackgroundColor="#858584"
                  prop="302"
                  frameDiv
                  onClick={PostTabClick}
                  />
                  :
                  <Tab
                  tabBorderBottom="2px solid #858584"
                    created="PAPERs"
                    createdColor="#3b3b3b"
                    frameDivBackgroundColor="#858584"
                    prop="302"
                    frameDiv
                    onClick={PostTabClick}
                    />
                  } 
                  {catTab ===true? 
                  <Tab
                  tabBorderBottom="2px solid #858584"
                created="Categories"
                createdColor="#3b3b3b"
                frameDivBackgroundColor="#3b3b3b"
                prop="67"
                frameDiv
                onClick={CategoriesTabClick}
              />
              :
              <Tab
              tabBorderBottom="unset"
            created="Categories"
            createdColor="#858584"
            frameDivBackgroundColor="#3b3b3b"
            prop="67"
            frameDiv
            onClick={CategoriesTabClick}
          />
                  }
              <div className="flex-1 h-[60px] hidden flex-row py-0 px-[30px] box-border items-center justify-center gap-[16px]">
                <div className="relative leading-[140%] capitalize font-semibold">
                  Collection
                </div>
                <div className="rounded-xl bg-background-secondary flex flex-row py-[5px] px-2.5 items-center justify-start text-left text-base text-text font-base-body-space-mono">
                  <div className="relative leading-[140%]">4</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-text flex flex-col pt-[60px] px-0 pb-20 items-center justify-start gap-[30px] ">
  <div className="w-1500 relative bottom-[60px] flex flex-wrap items-start justify-start gap-[30px] ">
      {/* For Categories */}
      {catTab && (
        <CategoriesTab onCategoryClick={handleCategoryClick} className="w-[1500px] flex-shrink-0"/> 
        )}
        </div>

        {/* For Papers */}
  <div className="w-1200 flex flex-wrap items-start px-[10px] justify-start gap-[30px] ">
        {!catTab && (searchInput ? searchResults : posts).map((post, index) => (
            <div key={post._id} className="w-1/4 px-5">
                <PaperCard 
                    onPaperCardContainerClick={() => navigate(`/paper-page/${post._id}`)}
                    imagePlaceholder={post.image[0]}
                    PaperHeading={post.heading}
                    CreatorPfp={post.userPfp}
                    // CreatorPfp="/avatar-placeholder88@2x.png"
                    Creator={post.username || post.email} 
                    onCreatorClick={()=>navigate(`/profile-page/${post.username}`)}
                    CreatorPfpIconBorderRadius="120px"
                    PaperCardCursor="pointer"
                    PaperCardBackgroundColor={post.type === "verified" ? "#011640" : "#3b3b3b"}
                    price={post.price}
                    category={post.category}
                />
          </div>
        ))
    }
  </div>
</div>

      </div>
      {/* div check */}

      <Footer1 />
      </div>
  );
};

export default MarketplaceDesktop;
