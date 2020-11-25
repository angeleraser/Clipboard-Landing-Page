import React from "react";
import "../../css/Header/Header.css";
import { appLogo } from "../../data";
import DownloadFor from "../DownloadFor";
const Header = () => {
  return (
    <header className="header w-full flex bg-no-repeat bg-contain bg-top flex-col items-center">
      {appLogo}
      <DownloadFor
        heading={"A history of everything you copy"}
        description={
          "Clipboard allows you to track and organize everything you copy. Instantly acess you clipboard on all your devices."
        }
      />
    </header>
  );
};

export default Header;
