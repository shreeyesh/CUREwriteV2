import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomepageDesktop from "./pages/HomepageDesktop";
import CreatePostDesktop from "./pages/CreatePostDesktop";
import RankingsDesktop from "./pages/RankingsDesktop";
import MarketplaceDesktop from "./pages/MarketplaceDesktop";
import PaperPageDesktop from "./pages/PaperPageDesktop";
import ProfilePageDesktop from "./pages/ProfilePageDesktop";
import CreateAccountDesktop from "./pages/CreateAccountDesktop";
import { useEffect } from "react";
import LoginAccount from "./pages/LoginAccount";
import LoginAccountRoles from "./pages/LoginAccountRoles";
import Dashboard from "./pages/Dashboard";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  // Check for mobile
  const isMobileDevice = () => {
    const userAgent = window.navigator.userAgent;
    return /Android|Mobi|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  };

  
  if (isMobileDevice()) {
    return <div style={{ padding: "20px", textAlign: "center", marginTop: "40vh" }}>
      Not compatible on mobile Currently. Please use Curewrite on desktop.
    </div>;
  }

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/create-post":
        title = "";
        metaDescription = "";
        break;
      case "/rankings":
        title = "";
        metaDescription = "";
        break;
      case "/marketplace":
        title = "";
        metaDescription = "";
        break;
      case "/paper-page":
        title = "";
        metaDescription = "";
        break;
      case "/profile-page":
        title = "";
        metaDescription = "";
        break;
      case "/create-account":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomepageDesktop />} />
      <Route path="/create-post" element={<CreatePostDesktop />} />
      <Route path="/rankings" element={<RankingsDesktop />} />
      <Route path="/marketplace" element={<MarketplaceDesktop />} />
      <Route path="/marketplace/:category" element={<MarketplaceDesktop />} />
      <Route path="/paper-page/:id" element={<PaperPageDesktop />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile-page/:username" element={<ProfilePageDesktop />} />
      <Route
        path="/create-account"
        element={<CreateAccountDesktop />}
      />
      <Route
        path="/login-account"
        element={<LoginAccount />}
      />
      <Route
        path="/login-account-roles"
        element={<LoginAccountRoles />}
      />
    </Routes>
  );
}
export default App;
