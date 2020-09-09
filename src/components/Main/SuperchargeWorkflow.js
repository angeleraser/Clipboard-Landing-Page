import React from "react";
import { featuresData, companiesLogos } from "../../data";
const SuperchargeWorkflow = () => {
  return (
    <section className="flex-col flex w-full items-center supercharge-workflow">
      {/* Heading  */}
      <div className="heading">
        <h2 className="w-full text-center">Supercharge your workflow</h2>
        <p className="w-full text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/* Features  */}
      <div className="features-wrapper text-center grid">
        {featuresData.map(({ title, description, icon }) => (
          <article key={title} className="flex-col flex w-full items-center">
            {icon}
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      {/* Companies Logos  */}
      <div className="companies-logos grid w-full">
        {companiesLogos.map((name) => (
          <img key={name} src={`./images/logo-${name}.png`} alt={name}></img>
        ))}
      </div>
    </section>
  );
};

export default SuperchargeWorkflow;
