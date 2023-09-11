import { useMemo } from "react";
import { useCallback, useState } from "react";
import AlertPopup from "../components/AlertPopup";
import PortalPopup from "../components/PortalPopup";
const backendURL = process.env.REACT_APP_BACKEND_URL;


const SubscribeContainer = ({
  image,
  imageText,
  propWidth,
  propFlex,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const [email, setEmail] = useState('');
  const [alert,setAlert]=useState('')
  const [isAlertPopupOpen, setAlertPopupOpen] = useState(false);

  const handleEmailChange = (e) => setEmail(e.target.value);

  const openAlertPopup = useCallback(() => {
    setAlertPopupOpen(true);
  }, []);

  const closeAlertPopup = useCallback(() => {
    setAlertPopupOpen(false);
  }, []);

  async function subscribe(){
      // Check if email format is valid
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(email)) {
          setAlert("Enter a valid email address.");
          openAlertPopup();
          return;
      }
  
    const res = await fetch(`${backendURL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email})
    });
    const data = await res.json();
    console.log(data);
    setAlert("Subscribed");
    openAlertPopup();
  }

  return (
    <div className="self-stretch rounded-xl bg-background-secondary flex flex-row p-[60px] items-center justify-start gap-[80px] text-left text-19xl text-text font-h3-work-sans">
      <img
        className="flex-1 relative rounded-xl max-w-full overflow-hidden h-[310px] object-cover"
        alt=""
        src={image}
      />
      <div
        className="w-[425px] flex flex-col items-start justify-start gap-[40px]"
        style={frameDivStyle}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
          <div className="self-stretch relative leading-[120%] capitalize font-semibold">
            Join our weekly digest
          </div>
          <div className="self-stretch relative text-3xl leading-[160%] capitalize">{`Get exclusive promotions & updates straight to your inbox.`}</div>
        </div>
        <div className="self-stretch rounded-xl bg-text h-[60px] flex flex-row py-4 pr-0 pl-5 box-border items-center justify-start gap-[12px] text-base text-background">
        <input
              type="text"
              value={email}
              onChange={handleEmailChange}
              className="border-none outline-none flex-1 relative leading-[140%]"
              placeholder="Enter your Email here"
            />
          <div
            className="rounded-xl bg-call-to-action h-[60px] flex flex-row py-0 px-[50px] box-border items-center justify-end gap-[12px] cursor-pointer text-center text-text"
            onClick={subscribe}
          >
            <img className="relative w-5 h-5" alt="" src={imageText} />
            <div className="relative leading-[140%] font-semibold">
              Subscribe
            </div>
          </div>
        </div>
      </div>
      {isAlertPopupOpen && (
        <PortalPopup placement="Bottom right" onOutsideClick={closeAlertPopup}>
          <AlertPopup onClose={closeAlertPopup} alert={alert} />
        </PortalPopup>
      )}
    </div>
  );
};

export default SubscribeContainer;
