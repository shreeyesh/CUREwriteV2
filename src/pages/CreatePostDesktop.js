import { useState, useCallback, useEffect } from "react";
import AlertPopup from "../components/AlertPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Navigation1 from "../components/Navigation1";
import UploadArea from "../components/UploadArea";
import jwt_decode from "jwt-decode";
import LoginPopup from "../components/LoginPopup";


const CreatePostDesktop = () => {
  // State Variables ->
  const [isAlertPopupOpen, setAlertPopupOpen] = useState(false);
  const [heading, setHeading] = useState("");
  const [abstract, setAbstract] = useState("");
  const [price, setPrice] = useState("");
  const [decoded,setDecoded]= useState("");
  const [profile,setProfile] = useState(null)
  const [username,setUsername] = useState(null)
  const [category, setCategory] = useState('');
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);
  const [alert,setAlert]= useState('');
  const [isChecked, setIsChecked] = useState(false);
  // State variables for storing file data
  const [imageFiles, setImageFiles] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [fileuploaded,setFileUploaded] = useState(false);


  // Store states
  const handleHeadingChange = (e) => setHeading(e.target.value);
  const handleAbstractChange = (e) => setAbstract(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  
  // local storage
  const userPfp = localStorage.getItem("userPfp");

  // Handle file changes for images and PDFs
  const handleImageUpload = async (files) => {
    const formData = new FormData();
    Array.from(files).forEach(file => {
        formData.append('images', file);
    });
    
    const response = await fetch('http://localhost:1337/upload-images', {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    setImageFiles(data.urls);
    setFileUploaded(true);
};

const handleCheckboxChange = (event) => {
  if (event.target.checked) {
    setPrice("0"); // Assuming you have a `setPrice` function from `useState`
  }
  setIsChecked(event.target.checked);
};

const handlePdfUpload = async (files) => {
    const formData = new FormData();
    Array.from(files).forEach(file => {
        formData.append('pdfs', file);
    });
    
    const response = await fetch('http://localhost:1337/upload-pdfs', {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    setPdfFiles(data.urls);
    setFileUploaded(true);
};

// Function to remove pdf
const removePdf = (index) => {
  const newPdfFiles = [...pdfFiles];
  newPdfFiles.splice(index, 1);
  setPdfFiles(newPdfFiles);
};

// Function to remove img
const removeImg = (index) => {
  const newImageFiles = [...imageFiles];
  newImageFiles.splice(index, 1);
  setImageFiles(newImageFiles);
}

// Handle Payment using razorpay
// const history = useHistory();

const handlePayment = async () => {
  if (!profile) {
    setLoginPopupOpen(true);
    return;
  }
  // Check if all inputs are filled
  if(!heading){
    setAlert("Please enter heading")
    openAlertPopup();
    return;
  }
  if(!category){
    setAlert("Please enter category")
    openAlertPopup();
    return;
  }
  if(!abstract){
    setAlert("Please enter abstract")
    openAlertPopup();
    return;
  }
  if(!price){
    setAlert("Please enter price")
    openAlertPopup();
    return;
  }
  if(imageFiles.length === 0){
    setAlert("Please upload image")
    openAlertPopup();
    return;
  }
  if(pdfFiles.length === 0){
    setAlert("Please upload pdf")
    openAlertPopup();
    return;
  }

  try {
    const response = await fetch('http://localhost:1337/create-order', {
      method: 'POST'
    });

    const data = await response.json();
    const postData = {
          heading, 
          abstract, 
          price, 
          profile,
          username,
          userPfp,
          category,
          images: imageFiles,
          pdfs: pdfFiles,
    }
    const options = {
      // ... other Razorpay options
      "amount": data.amount,
      "currency": "INR",
      "name": "CUREwrite",
      "description": "Payment for some service",
      "image": "https://curewrite.com/wp-content/uploads/2022/10/cropped-cropped-horizontal-logo-scaled-1-2048x987.jpg",
      "order_id": data.id,
      "handler": async (response) => {
        const paymentData = {
          paymentId: response.razorpay_payment_id,
          orderId: data.id,
          signature: response.razorpay_signature,
          postData: postData
        };

        const verifyPaymentResponse = await fetch('http://localhost:1337/verify-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(paymentData)
        });
        const verificationData = await verifyPaymentResponse.json();
        if (verificationData.status === "ok") {
          setAlert("Paper sent for review !")
          openAlertPopup();
          // handleReviewClick();  
        } else {
          console.error("Payment verification failed");
          // TODO: Handle payment verification failure
        }
      },
      "prefill": {
        "name": decoded.name || "Anonymous", // Use user's real name from JWT
        "email": decoded.email || "anonymous@example.com" // Use user's real email from JWT
      },
      // ... other Razorpay options
    };

    const razorPay = new window.Razorpay(options);
    razorPay.open();
  } catch (error) {
    console.error("Error initiating payment:", error);
    // TODO: Handle error
  }
}

// const handleReviewClick = useCallback(() => {
//   if (!profile) {
//     setLoginPopupOpen(true);
//     return;
//   }
//   // Given that the post creation is now happening after payment verification, 
//   // this function could now handle actions to take after a successful post creation.
//   // For example: Showing a success message or navigating to a different page.
//   // TODO: Decide on post-payment actions 
// });


  // Handle post after "Review" button is clicked
  const handlePublishClick = useCallback(async () => {
    if(!profile){
      setLoginPopupOpen(true);
    }
    // Check if all inputs are filled
  if(!heading){
    setAlert("Please enter heading")
    openAlertPopup();
    return;
  }
  if(!category){
    setAlert("Please enter category")
    openAlertPopup();
    return;
  }
  if(!abstract){
    setAlert("Please enter abstract")
    openAlertPopup();
    return;
  }
  if(!price){
    setAlert("Please enter price")
    openAlertPopup();
    return;
  }
  if(imageFiles.length === 0){
    setAlert("Please upload image")
    openAlertPopup();
    return;
  }
  if(pdfFiles.length === 0){
    setAlert("Please upload pdf")
    openAlertPopup();
    return;
  }
    try {
      const response = await fetch('http://localhost:1337/create-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          heading, 
          abstract, 
          price, 
          profile,
          username,
          userPfp,
          category,
          images: imageFiles,
          pdfs: pdfFiles
        })
      });
    
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    
      const data = await response.json();
      setAlert("Paper published!")
      openAlertPopup();
      // TODO: Handle success (e.g., show a success message or navigate to another page)
    } catch (error) {
      console.error('Error posting data:', error);
      // TODO: Handle error (e.g., show an error message)
    }
});


    

  // Verify login using token
  useEffect(() =>{
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if(!token){
      setLoginPopupOpen(true);
    }
    else{
      const decoded = jwt_decode(token);
      if (username) {
        setUsername(username);
        {setLoginPopupOpen}(true)
      } 
      setDecoded(decoded);
      if(!decoded){
        localStorage.removeItem('token')
        setLoginPopupOpen(true);
        navigate('/login')
        }else{
          setProfile(decoded.email)
        }
      }
  },[])




  // Navigations ->
  const navigate = useNavigate();

  const onNavLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRankingsContainerClick = useCallback(() => {
    navigate("/rankings");
  }, [navigate]);

  const openAlertPopup = useCallback(() => {
    setAlertPopupOpen(true);
  }, []);

  const closeAlertPopup = useCallback(() => {
    setAlertPopupOpen(false);
  }, []);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);


  // Logo Clicks ->

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

  const onButtonContainer2Click = useCallback(() => {
    window.open(
      "www.curewrite.com"
    );
  }, []);

  return (
    <>
      <LoginPopup isOpen={isLoginPopupOpen} onClose={() => setLoginPopupOpen(false)} />
      <div className="relative bg-background-secondary w-full h-[1337px] flex flex-col text-left text-3xl text-text font-h3-work-sans">
        <Navigation1
          onNavLogoClick={onNavLogoClick}
          horizontalLogo1="/cwLogo@2x.png"
          rocketLaunch="/rocketlaunch9.svg"
          rocketLaunchIcon={false}
          onRankingsContainerClick={onRankingsContainerClick}
          rocketLaunch1="/rocketlaunch10.svg"
          rocketLaunchIcon1={false}
          rocketLaunch2="/rocketlaunch9.svg"
          plus="/plus2.svg"
          hasLeftIcon
          hasText
          setLoginPopupOpen={setLoginPopupOpen}
        />
        <div className="absolute top-[100px] left-[0px] bg-background-secondary w-[1280px] flex flex-row items-center justify-start gap-[60px] text-32xl">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/image-placeholder31@2x.png"
          />
          <div className="flex-1 flex flex-col pt-[0px] pb-[450px] px-0 items-start justify-start gap-[40px]">
            <div className="w-[460px] flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-row items-start justify-start relative">
                  <div className="absolute my-0 mx-[!important] bottom-[60px] left-[116px] leading-[110%] capitalize font-semibold flex items-center w-[460px] shrink-0 z-[0]">
                    Publish Paper
                  </div>
                </div>
                <div className="self-stretch" />
              </div>
            </div>
            <div className="w-[330px] flex flex-col items-start justify-start relative gap-[30px] text-center text-base">
              <div className="self-stretch flex flex-col items-start justify-start relative gap-[15px] z-[0] text-left text-background">
                <div className="my-0 mx-[!important] absolute top-[-60px] left-[111px] rounded-xl bg-text box-border w-[330px] h-[46px] flex flex-row py-4 px-20 items-center justify-start gap-[12px] z-[0] border-[1px] border-solid border-caption-label-text">
                  <img
                    className="relative w-5 h-5 hidden z-[0]"
                    alt=""
                    src="/eyeslash1.svg"
                  />
                  <input 
              type="text"
              value={heading}
              onChange={handleHeadingChange}
              className="border-none outline-none text-left placeholder-center"
              placeholder="Heading"
            />
                  <div className="absolute my-0 mx-[!important] top-[12px] left-[128px] leading-[140%] inline-block w-[170px] shrink-0 z-[1]">
                  </div>
                </div>
                <div className="my-0 mx-[!important] absolute top-[-5px] left-[111px] rounded-xl bg-text box-border w-[330px] h-[46px] flex flex-row py-4 px-20 items-center justify-start gap-[12px] z-[0] border-[1px] border-solid border-caption-label-text">
                  <img
                    className="relative w-5 h-5 hidden z-[0]"
                    alt=""
                    src="/eyeslash1.svg"
                  />
                            <select 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              // className="w-[530px] "
            >
              <option value="">Category</option>
              <option value="Geriatrics">Geriatrics</option>
              <option value="Biomedical Genetics">Biomedical Genetics</option>
              <option value="Cardiovascular Medicine">Cardiovascular Medicine</option>
              <option value="Computational Biomedicine">Computational Biomedicine</option>
              <option value="Endocrinology & Diabetes">Endocrinology & Diabetes</option>
              <option value="Hematology">Hematology</option>
              <option value="Oral Medicine">Oral Medicine</option>
              <option value="Prosthodontics">Prosthodontics</option>
            </select>
                 
                </div>
                <div className="my-0 mx-[!important] absolute top-[58px] left-[-24px] rounded-xl bg-text box-border w-[586px] h-[463px] flex flex-row py-4 px-5 items-center justify-start gap-[12px] z-[1] text-center border-[1px] border-solid border-caption-label-text">
                <textarea 
                    value={abstract}
                    onChange={handleAbstractChange}
                    className="border-none outline-none text-left placeholder-center flex-1 relative leading-[140%]"
                    placeholder="Abstract"
                    rows="10"
                    data-te-input-showcounter="true"
                    style={{ resize: 'none' }} 
                  />
                  <img
                    className="relative w-5 h-5 hidden z-[0]"
                    alt=""
                    src="/eyeslash2.svg"
                  />
                
                </div>
              </div>
              <div
                className="my-0 mx-[!important] absolute top-[574px] left-[94px] rounded-xl bg-call-to-action w-[161px] h-[46px] flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] cursor-pointer z-[1]"
                onClick={handlePayment}
                >
                <img
                  className="relative w-5 h-5 hidden"
                  alt=""
                  src="/rocketlaunch9.svg"
                />
                <div className="relative leading-[140%] font-semibold">
                  Pay & Review
                </div>
              </div>
              <div
                className="my-0 mx-[!important] absolute top-[574px] left-[312px] rounded-xl bg-call-to-action w-[161px] h-[46px] flex flex-row py-0 px-[50px] box-border items-center justify-center gap-[12px] cursor-pointer z-[2]"
                onClick={handlePublishClick}>
                <img
                  className="relative w-5 h-5 hidden"
                  alt=""
                  src="/rocketlaunch9.svg"
                />
                <div className="relative leading-[140%] font-semibold">
                  Publish
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[1000px] left-[0px] bg-background-secondary w-[1280px] flex flex-col pt-[2.5rem] pb-[3.3rem] px-[195px] box-border items-center justify-start gap-[30px] font-base-body-space-mono">
          <div className="flex flex-row items-start justify-between">
            <div className="w-[327.41px] flex flex-col py-0 pr-[84px] pl-0 box-border items-start justify-start gap-[30px] text-base text-lightgray font-h3-work-sans">
              <img className="relative w-8 h-8" alt="" src="/logo1.svg" />
              <div className="flex flex-col items-start justify-start gap-[20px]">
                <div className="relative leading-[140%] inline-block w-[238px]">
                  Write and Buy Research Papers on Curewrite
                </div>
                <div className="flex flex-col items-start justify-start gap-[15px]">
                  <div className="relative leading-[140%] inline-block w-[238px] h-[18px] shrink-0">
                    Join our community
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[10px]">
                    <img
                      className="relative w-8 h-8 cursor-pointer"
                      alt=""
                      src="/discordlogo3.svg"
                      onClick={onDiscordLogoIconClick}
                    />
                    <img
                      className="relative w-8 h-8 cursor-pointer"
                      alt=""
                      src="/youtubelogo2.svg"
                      onClick={onYoutubeLogoIconClick}
                    />
                    <img
                      className="relative w-8 h-8 cursor-pointer"
                      alt=""
                      src="/twitterlogo3.svg"
                      onClick={onTwitterLogoIconClick}
                    />
                    <img
                      className="relative w-8 h-8 cursor-pointer"
                      alt=""
                      src="/instagramlogo2.svg"
                      onClick={onInstagramLogoIconClick}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-60 flex flex-col items-start justify-start gap-[25px]">
              <b className="relative leading-[160%] capitalize">Explore</b>
              <div className="flex flex-col items-start justify-start gap-[20px] text-base text-lightgray font-h3-work-sans">
                <div className="relative leading-[140%]">Marketplace</div>
                <div className="relative leading-[140%]">Rankings</div>
                <div className="relative leading-[140%]">Editors</div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[25px]">
              <b className="relative leading-[160%] capitalize">
                Join our weekly digest
              </b>
              <div className="flex flex-col items-start justify-start gap-[20px] text-base text-lightgray font-h3-work-sans">
                <div className="relative leading-[140%] inline-block w-[330px]">{`Get exclusive promotions & updates straight to your inbox.`}</div>
                <div className="rounded-xl bg-text w-[420px] h-[60px] flex flex-row py-4 pr-0 pl-5 box-border items-center justify-start gap-[12px] text-background">
                  <div className="flex-1 relative leading-[140%]">
                    Enter your email here
                  </div>
                  <div
                    className="rounded-xl bg-call-to-action h-[60px] flex flex-row py-0 px-[50px] box-border items-center justify-end gap-[12px] cursor-pointer text-center text-text"
                    onClick={onButtonContainer2Click}
                  >
                    <img
                      className="relative w-5 h-5 hidden"
                      alt=""
                      src="/envelopesimple3.svg"
                    />
                    <div className="relative leading-[140%] font-semibold">
                      Subscribe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[890px] flex flex-col items-start justify-start gap-[20px] text-xs text-lightgray font-h3-work-sans">
            <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-caption-label-text" />
            <div className="self-stretch relative leading-[110%]" />
          </div>
        </div>
        <div className="upload-section">
  <label htmlFor="image-upload" className="custom-upload-area cursor-pointer">
    <UploadArea fileuploaded={fileuploaded}/>
    <div className="absolute top-[143px] left-[149px] leading-[140%] capitalize font-semibold flex items-center w-[460px]">
    Upload Image
    </div>
    <div className="absolute top-[305px] left-[149px] leading-[140%] capitalize font-semibold flex items-center w-[460px]">
    {/* {imageFiles.length === 0 ? "Upload Image" : imageFiles.join(', ')} */}
    {imageFiles.length === 0 ? (
        null
      ) : (
        imageFiles.map((fileUrl, index) => (
          <div className="uploaded-image" key={index}>
            <img className="w-[50px]" src={fileUrl} alt="Uploaded Preview" />
            <span className="image-name text-black center leading-3 py-[20px] h-[20px] w-[20px] text-xs">{fileUrl.split('/').pop()}</span>
            <img className="relative left-[20px] top-[40px] w-[15px] h-[15px]" src="/icons8-delete.png" alt="Uploaded Preview" onClick={()=> removeImg()} />
          </div>
        ))
      )}
    </div>
  </label>
  <input 
    id="image-upload"
    type="file" 
    multiple 
    onChange={(e) => handleImageUpload(e.target.files)} 
    style={{ display: 'none' }}
  />
</div>

<div className="upload-section ">
  <label htmlFor="pdf-upload" className="custom-upload-area cursor-pointer">
    <UploadArea newUploadTop="735px" fileuploaded={fileuploaded}/>
    <div className="absolute top-[699px] left-[139px] leading-[140%] capitalize font-semibold flex items-center w-[460px] ">
   Upload Paper
    </div>
    <div className="absolute top-[850px] left-[200px] leading-[140%] capitalize font-semibold flex items-center w-[460px] ">
    {pdfFiles.map((pdfUrl, index) => (
          <div className="uploaded-pdf" key={index}>
            <img className="w-[50px]" src="\PDF-icon.png" alt="PDF Icon" />
            <div className="pdf-name text-black text-xs absolute top-[50px] center h-[20px] w-[50px] leading-3 ">{pdfUrl.split('/').pop()}</div>
            <img className="relative left-[20px] top-[40px] w-[15px] h-[15px]" src="/icons8-delete.png" alt="Uploaded Preview" onClick={()=> removePdf()} />
          </div>
    ))}
    </div>
  </label>
  <input 
    id="pdf-upload"
    type="file" 
    multiple 
    onChange={(e) => handlePdfUpload(e.target.files)} 
    style={{ display: 'none' }}
  />
</div>


        <div className="absolute top-[543px] left-[274px] rounded-xl bg-text box-border w-[71px] h-[46px] flex flex-row py-4 px-20 items-center justify-start gap-[12px] text-base text-background border-[1px] border-solid border-caption-label-text" >        
          <img
            className="relative w-5 h-5 hidden z-[0]"
            alt=""
            src="/eyeslash1.svg"
            />
            {/* <span className="text-black">$</span> */}
          <input type="number" value={price} 
                  onChange={handlePriceChange} 
                  disabled={isChecked}  // Disable input if checkbox is checked
                  className="absolute my-0 mx-[!important] top-[12px] left-[9px] leading-[140%] inline-block w-[140px] h-[20px] shrink-0 z-[1]
          border-none outline-none text-center placeholder-center">
              
              </input>
            </div>
        <div className="absolute top-[550px] left-[125px] leading-[140%] capitalize font-semibold flex items-center w-[460px]">{`Set Price  $  : `}
        </div>
        <div className="absolute top-[600px] left-[125px] leading-[140%] capitalize font-semibold flex items-center w-[460px]">{`Open Access : `}
        <input
    class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] left-[2rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    onChange={handleCheckboxChange}
    checked={isChecked}  // Keep the checkbox state in sync
    value=""
    id="checkboxDefault" />
        </div>
      </div>
      {isAlertPopupOpen && (
        <PortalPopup placement="Bottom right" onOutsideClick={closeAlertPopup}>
          <AlertPopup onClose={closeAlertPopup} alert={alert} />
        </PortalPopup>
      )}
    </>
  );
};

export default CreatePostDesktop;
