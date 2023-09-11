import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import CollectionCard from "../components/CollectionCard";
import ArtistCard from "../components/ArtistCard";
import PaperCard from "../components/PaperCard";
import InfoCard from "../components/InfoCard";
import SubscribeContainer from "../components/SubscribeContainer";
import dummydata from "./dummydata.json";
import CategoriesTab from "../components/CategoriesTab";
import Footer1 from "../components/Footer1";

const HomepageDesktop = () => {
  const navigate = useNavigate();
  const id = '64fea5c609e73d567ed1f507';


  const backendURL = process.env.REACT_APP_BACKEND_URL;
  const [adPost,setAdPost] = useState([])
  const [isLoading,setIsLoading] = useState(false);
  const [loadingContent, setLoadingContent] = useState('');

  const onNavLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  const onPrimaryPhotoPlaceholderClick = useCallback(() => {
    navigate("/paper-page");
  }, [navigate]);

  const onSecondaryPhotoPlaceholderClick = useCallback(() => {
    navigate("/paper-page");
  }, [navigate]);

  const onSecondaryPhotoPlaceholder1Click = useCallback(() => {
    navigate("/paper-page");
  }, [navigate]);

  const onNumberOfAdditionalPapersClick = useCallback(() => {
    navigate("/paper-page");
  }, [navigate]);

  const onCreatorPfpIconClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  // Category Click
const handleCategoryClick = (categoryName) => {
  // You can set the state here to store the selected category and use it to filter your posts
  navigate(`/marketplace/${categoryName}`)
};


  const onArtistCardClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onPaperCardContainerClick = useCallback(() => {
    navigate("/paper-page");
  }, [navigate]);


  const onButtonContainer3Click = useCallback(() => {
    window.open(
      "https://www.curewrite.com/?utm_source=figma-samples&utm_campaign=figma-Papermarket&utm_medium=figma-samples"
    );
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/create-account");
  }, [navigate]);

  const onHighlightedPaperContainerClick = useCallback(() => {
    navigate("/paper-page");
  }, [navigate]);

  const onViewRankingsContainerClick = useCallback(() => {
    navigate("/rankings");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/marketplace");
  }, [navigate]);

  const onOwnerCardContainerClick = useCallback(() => {
    navigate("/profile-page");
  }, [navigate]);

  const onAdClick = useCallback(() => {
    navigate(`/paper-page/${id}`);
  }, [navigate]);

  // Fetch Ad post
useEffect(() => {
  setLoadingContent("Loading Papers")
  const fetchPosts = async () => {
    const response = await fetch(`${backendURL}/post/${id}`);
    const data = await response.json();
    setAdPost(data.post);
    setIsLoading(false);
    console.log("data  :",data)
  };
  fetchPosts();
}, []);

  const artistData = dummydata.artistData;
  const paperData = dummydata.paperCard;
  const collectionData = dummydata.collectionData;
  

  return (
    <div className="relative bg-background w-full flex flex-col items-start justify-start text-left text-48xl text-background-secondary font-h3-work-sans overflow-x-clip">
 <Navigation1
        navigationPosition="unset"
        navigationWidth="unset"
        navigationTop="unset"
        navigationRight="unset"
        navigationLeft="unset"
        navigationAlignSelf="stretch"
        onNavLogoClick={onNavLogoClick}
        horizontalLogo1="/cwLogo@2x.png"
        rocketLaunch="/rocketlaunch9.svg"
        rocketLaunchIcon
        rankingsCursor="pointer"
        rocketLaunch1="/rocketlaunch10.svg"
        rocketLaunchIcon1
        rocketLaunch2="/rocketlaunch9.svg"
        onSignUpContainerClick={onSignUpContainerClick}
        signUpCursor="pointer"
        plus="/plus2.svg"
        navLogoCursor="pointer"
        hasLeftIcon
        hasText
      />
            <section className="self-stretch bg-text flex flex-row py-20 px-[195px] items-center justify-center text-left text-48xl text-text font-h3-work-sans">
            <div className="flex-1 flex flex-row items-start justify-start gap-[30px] sm:flex-col sm:gap-[30px] sm:items-start sm:justify-start">
    {/* This is the left side div */}
    <div className="w-1/2 pr-6 h-[218px] flex flex-col items-center justify-center gap-[30px] sm:flex-[unset] sm:self-stretch">
      <div className="self-stretch flex-wrap absolute h-px">
        <div className="paper-text text-black relative top-[350px]  leading-[110%] capitalize font-semibold flex items-end w-[616px] pr-4 h-px pb-5 md:pb-4 sm:pb-3">
          {`Publish and buy medical research papers `}
        </div>
      </div>
      <div
        className="rounded-xl bg-call-to-action h-[60px] flex flex-row py-0 px-[50px] box-border items-center justify-start gap-[12px] cursor-pointer text-center text-base"
        onClick={onButtonContainerClick}
      >
        <img
          className="relative w-5 h-5"
          alt=""
          src="/rocketlaunch1.svg"
        />
        <div className="relative leading-[140%] font-semibold inline-block w-[92px] shrink-0">
          Get Started
        </div>
      </div>
                  <div className="self-stretch rounded-xl flex flex-row items-start justify-start gap-[30px] text-9xl text-background-secondary font-base-body-space-mono sm:flex-col sm:gap-[15px] sm:items-start sm:justify-start">
              <div className="flex-1 rounded-xl flex flex-col items-start justify-start sm:flex-[unset] sm:self-stretch">
                <b className="self-stretch relative leading-[140%] capitalize">{`240k+ `}</b>
                <div className="self-stretch relative text-[23.99px] leading-[160%] capitalize font-h3-work-sans">
                  Total Sale
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-col items-start justify-start sm:flex-[unset] sm:self-stretch">
                <b className="self-stretch relative leading-[140%] capitalize">
                  100k+
                </b>
                <div className="self-stretch relative text-[23.99px] leading-[160%] capitalize font-h3-work-sans">
                  Papers
                </div>
              </div>
              <div className="flex-1 rounded-xl flex flex-col items-start justify-start sm:flex-[unset] sm:self-stretch">
                <b className="self-stretch relative leading-[140%] capitalize">
                  240k+
                </b>
                <div className="self-stretch relative text-[23.99px] leading-[160%] capitalize font-h3-work-sans">
                  Researchers
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-1/2 pl-6 self-stretch flex-1 flex flex-col items-center justify-between cursor-pointer text-3xl sm:flex-[unset] sm:self-stretch"
            onClick={onHighlightedPaperContainerClick}
          >
            <div className="rounded-xl bg-background-secondary w-[307px] hidden flex-row p-5 box-border items-center justify-start gap-[12px]">
              <div className="flex flex-row items-start justify-start">
                <div className="relative w-[60px] h-[60px]">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-81xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/avatar-placeholder@2x.png"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                  Dish Studio
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[5px] text-base text-caption-label-text">
                  <div className="flex-1 relative leading-[140%]">
                    Total Sales:
                  </div>
                  <div className="flex-1 relative leading-[140%] font-base-body-space-mono text-text">
                    34.53 ETH
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[500px] shrink-0 object-cover"
              alt=""
              src="/dnaimgNew@2x.png"
            />
            <div className="self-stretch rounded-t-none rounded-b-xl bg-background-secondary h-[109px] flex flex-col p-5 box-border items-center justify-center gap-[10px]">
              <div className="self-stretch relative leading-[140%] capitalize font-semibold">
                Study of DNA Structuring
              </div>
              <div className="self-stretch rounded-xl flex flex-row items-start justify-start gap-[12px] text-base sm:flex-col sm:gap-[12px] sm:items-start sm:justify-start">
                <img
                  className="max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/avatar@2x.png"
                />
                <div className="flex-1 relative leading-[140%] sm:flex-[unset] sm:self-stretch">
                  Dr. J.R.R Tolkien | 1980
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-background-secondary box-border w-[280px] hidden flex-row py-5 px-[30px] items-center justify-between text-xs text-caption-label-text font-base-body-space-mono border-[1px] border-solid border-caption-label-text">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="w-[89px] flex flex-row items-start justify-start">
                  <div className="relative leading-[110%] inline-block w-[52px] shrink-0">
                    Price:
                  </div>
                </div>
                <div className="w-[89px] flex flex-row items-start justify-start text-base text-text">
                  <div className="relative leading-[140%] inline-block w-[89px] shrink-0">
                    1.63 ETH
                  </div>
                </div>
              </div>
              <div className="w-[113px] flex flex-col items-end justify-center gap-[5px] text-right">
                <div className="w-[113px] flex flex-row items-start justify-end">
                  <div className="relative leading-[110%] inline-block w-[113px] shrink-0">
                    Release Date:
                  </div>
                </div>
                <div className="w-[113px] flex flex-row items-end justify-end text-base text-text">
                  <div className="relative leading-[140%] inline-block w-[113px] shrink-0">
                    2 Sep 2022
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch bg-text h-[846px] overflow-hidden shrink-0 flex flex-col py-20 px-0 box-border items-center justify-start gap-[60px] text-left text-19xl text-background-secondary font-h3-work-sans">
        <div className="self-stretch flex flex-col py-0 px-[50px] items-start justify-start gap-[10px]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 relative leading-[120%] capitalize font-semibold">
              Trending Papers
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-3xl">
            <div className="flex-1 relative leading-[160%] capitalize">
              Checkout our weekly updated trending Papers.
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 overflow-hidden flex flex-row py-0 px-5 items-start justify-start gap-[30px] text-center text-3xl text-text font-base-body-space-mono">
          {collectionData.map((collection, index) =>(
            <CollectionCard
            primaryPhotoPlaceholder={collection.primaryPhotoPlaceholder}
            onPrimaryPhotoPlaceholderClick={onPrimaryPhotoPlaceholderClick}
            secondaryPhotoPlaceholder={collection.secondaryPhotoPlaceholder}
            onSecondaryPhotoPlaceholderClick={onSecondaryPhotoPlaceholderClick}
            secondaryPhotoPlaceholder1={collection.secondaryPhotoPlaceholder1}
            onSecondaryPhotoPlaceholder1Click={
              onSecondaryPhotoPlaceholder1Click
            }
            onNumberOfAdditionalPapersClick={onNumberOfAdditionalPapersClick}
            collectionName={collection.collectionName}
            CreatorPfp={collection.CreatorPfp}
            onCreatorPfpIconClick={onCreatorPfpIconClick}
            artistName={collection.artistName}
          />
          ))}
        </div>
      </section>
      <section className="self-stretch bg-text flex flex-col py-20 px-[195px] items-center justify-start gap-[60px] text-left text-19xl text-background-secondary font-h3-work-sans">
        <div className="self-stretch flex flex-row items-end justify-start gap-[100px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="flex-1 relative leading-[120%] capitalize font-semibold">
                Top Researchers
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start text-3xl">
              <div className="flex-1 relative leading-[160%] capitalize">
                Checkout Top Rated Researchers on the Research Marketplace
              </div>
            </div>
          </div>
          <div
            className="flex-1 rounded-xl box-border h-[60px] flex flex-row py-0 px-[50px] items-center justify-center gap-[12px] cursor-pointer text-center text-base border-[2px] border-solid border-call-to-action"
            onClick={onViewRankingsContainerClick}
          >
            <img className="relative w-5 h-5" alt="" src="/rocketlaunch2.svg" />
            <div className="relative leading-[140%] font-semibold">
              View Rankings
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-start gap-8">
    {artistData.map((artist, index) => (
        <div key={index} className="w-[240px]">
            <ArtistCard
                onArtistCardClick={onArtistCardClick}
                CreatorPfp={artist.CreatorPfp}
                dishStudio={artist.name}
                prop={artist.rank}
            />
        </div>
    ))}
</div>
      </section>
      <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex-1 relative leading-[120%] left-[200px] top-[30px] capitalize text-left text-19xl text-text font-h3-work-sans font-semibold">
            Browse Categories
          </div>
        </div>
      <CategoriesTab onCategoryClick={handleCategoryClick} />
     
      <section className="self-stretch bg-text flex flex-col py-20 px-[195px] items-center justify-start gap-[60px] text-left text-19xl text-background-secondary font-h3-work-sans">
        <div className="self-stretch flex flex-row items-end justify-start gap-[100px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
            <div className="self-stretch relative leading-[120%] capitalize font-semibold">
              Discover More Research Papers
            </div>
            <div className="self-stretch relative text-3xl leading-[160%] capitalize">
              Explore new trending PAPERs
            </div>
          </div>
          <div
            className="rounded-xl box-border h-[60px] flex flex-row py-0 px-[50px] items-center justify-center gap-[12px] cursor-pointer text-center text-base border-[2px] border-solid border-call-to-action"
            onClick={onButtonContainer1Click}
          >
            <img className="relative w-5 h-5" alt="" src="/eye.svg" />
            <div className="relative leading-[140%] font-semibold">See All</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[30px]">
          {paperData.map((paper, index) =>(
            <PaperCard
            onPaperCardContainerClick={onPaperCardContainerClick}
            imagePlaceholder= {paper.imagePlaceholder}
            PaperHeading={paper.PaperHeading}
            CreatorPfp={paper.CreatorPfp}
            Creator={paper.Creator}
          />))}
        </div>
      </section>
      {!isLoading?
      <section className="self-stretch h-[814px] flex flex-col py-9 px-[59px] box-border items-start justify-end bg-[url(/public/auctionad@3x.png)] bg-cover bg-no-repeat bg-[top] text-left text-base text-text font-h3-work-sans">
        <div className="w-[670px] flex flex-row items-end justify-center relative">
          <div className="flex-1 flex flex-col items-start justify-start gap-[30px] z-[0]">
            <div
              className="rounded-xl bg-background-secondary w-[260px] flex flex-row p-2.5 box-border items-center justify-start gap-[2px] cursor-pointer"
              onClick={onOwnerCardContainerClick}
            >
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="relative w-6 h-6">
                  <img
                    className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-101xl max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src="/avatar-placeholder19@2x.png"
                  />
                </div>
              </div>
              <div className="relative leading-[140%]">{adPost.username?adPost.username:"username"}</div>
            </div>
            <div className="self-stretch relative text-19xl leading-[120%] capitalize font-semibold">
              {adPost.heading}
            </div>
            <div
              className="rounded-xl bg-text h-[60px] flex flex-row py-[22px] px-[50px] box-border items-center justify-center gap-[12px] cursor-pointer text-center text-background"
              onClick={onAdClick}
            >
              <img className="relative w-5 h-5" alt="" src="/eye.svg" />
              <div className="relative leading-[140%] font-semibold">
                See Paper
              </div>
            </div>
          </div>
          <div className="my-0 mx-[!important] absolute top-[104px] left-[900px] rounded-xl bg-darkslategray [backdrop-filter:blur(10px)] w-[295px] flex flex-col py-[30px] pr-[151px] pl-[30px] box-border items-start justify-end z-[1] text-19xl font-base-body-space-mono">
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                <b className="self-stretch relative leading-[140%] capitalize">
                  {" "}
                  ₹
                </b>
              </div>
              <b className="relative text-9xl leading-[140%] capitalize hidden" />
              <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                <b className="relative leading-[120%] capitalize inline-block w-[127px]">
                  {adPost.price?adPost.price:null}
                </b>
                <div className="self-stretch flex-1 relative text-xs leading-[110%] hidden" />
              </div>
            </div>
          </div>
        </div>
      </section> : null
}
      <section className="self-stretch bg-text flex flex-col py-20 px-[195px] items-center justify-start gap-[48px] text-left text-19xl text-background-secondary font-h3-work-sans">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch relative leading-[120%] capitalize font-semibold">
            How it works
          </div>
          <div className="self-stretch relative text-3xl leading-[160%] capitalize">
            Find out how to get started
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[30px]">
          <InfoCard
            icon="/icon.svg"
            setupYourWallet="Setup Your Account"
            setUpYourWalletOfChoiceCo={`Setup your Account. Submit Manuscript, Select Price & number of copies. Get an estimate of your paper`}
          />
          <InfoCard
            infoCardAlignSelf="stretch"
            icon="/icon1.svg"
            setupYourWallet="Apply for kYC"
            setUpYourWalletOfChoiceCo="Later submit your paper for further KYC. The paper will be reviewed by our editor board. After this royalties will start."
            infoCardHeight="unset"
          />
          <InfoCard
            infoCardAlignSelf="unset"
            icon="/icon2.svg"
            setupYourWallet="Start Earning"
            setUpYourWalletOfChoiceCo="Share your paper start Earning whenever someone buys your paper on Curewrite."
            infoCardHeight="439px"
          />
        </div>
      </section>
      <section className="self-stretch bg-text flex flex-col pt-10 px-[195px] pb-20 items-center justify-start">
        <SubscribeContainer
          image="/dnaimg@2x.png"
          imageText="/envelopesimple.svg"
          onButtonContainer3Click={onButtonContainer3Click}
        />
      </section>
      <Footer1  />
    </div>
  );
};

export default HomepageDesktop;
