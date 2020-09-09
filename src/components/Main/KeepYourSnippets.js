import React from "react";

const KeepYourSnippets = () => {
  return (
    <section className="flex-col keep-your-snippets flex w-full items-center">
      {/* Heading  */}
      <div className="heading">
        <h2 className="w-full text-center">Keep track of your snippets</h2>
        <p className="w-full text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          nesciunt debitis labore repellendus quae nulla quam quis dignissimos.
          Velit ab earum rerum error. Ducimus exercitationem, sequi est in dicta
          dolorem.
        </p>
      </div>
      {/* Illustration & info  */}
      <div className="illustration-info grid w-full">
        <img src="./images/image-computer.png" alt="computer" />
        <div className="feature flex flex-col w-full items-center text-center">
          <h3>Quick Search</h3>
          <p className="w-full">
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>
        <div className="feature flex flex-col w-full items-center text-center">
          <h3>iCloud Sync</h3>
          <p className="w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="feature flex flex-col w-full items-center text-center">
          <h3>Complete History</h3>
          <p className="w-full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeepYourSnippets;
