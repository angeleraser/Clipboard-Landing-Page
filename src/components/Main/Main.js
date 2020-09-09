import React from "react";
import "../../css/Main/Main.css";
import KeepYourSnippets from "./KeepYourSnippets";
import AccessClipboard from "./AccessClipboard";
import SuperchargeWorkflow from "./SuperchargeWorkflow";
import DownloadFor from "../DownloadFor";
const Main = () => {
  return (
    <main className="w-full main flex flex-col items-center">
      <KeepYourSnippets />
      <AccessClipboard />
      <SuperchargeWorkflow />
      <DownloadFor
        heading="Clipboard for iOS and Mac OS"
        description="Available for free on the App Store Download for Mac or iOS, sync with iCloud and your're ready to start adding to your clipboard."
      />
    </main>
  );
};

export default Main;
