import React from "react";

const AccessClipboard = () => {
  return (
    <section className="flex-col access-clipboard flex w-full items-center">
      {/* Heading  */}
      <div className="heading">
        <h2 className="w-full text-center">Access Clipboard Anywhere</h2>
        <p className="w-full text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
          nesciunt debitis labore repellendus quae nulla quam quis dignissimos.
        </p>
      </div>
      {/* Illustration  */}
      <img
        className="image-devices inline-block"
        src="./images/image-devices.png"
        alt="devices"
      />
    </section>
  );
};

export default AccessClipboard;
