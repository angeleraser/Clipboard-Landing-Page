import React from "react";
import "../css/DownloadFor.css";
import BaseButton from "./BaseComponents/BaseButton";
const DownloadFor = ({ heading, description }) => {
  return (
    <section className="download-for w-full flex flex-wrap justify-center flex items-center">
      <h1 className="font-semibold w-full">{heading}</h1>
      <p className="w-full">{description}</p>
      <BaseButton color="cyan-primary" label="Download for iOS" />
      <BaseButton color="light-blue-primary  " label="Download for Mac" />
    </section>
  );
};

export default DownloadFor;
