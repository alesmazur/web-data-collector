import Logo from "./Logo";
import BrandLogo from "../assets/brandlogo.png";

export default function Header() {
  return (
    <header className="App-header py-2 ">
      <div className="container">
        <div className="header-inner--container">
          <img
            src={BrandLogo}
            className="float-left brand-logo"
            alt="brand_logo"
          />
          <Logo />
        </div>
      </div>
    </header>
  );
}
