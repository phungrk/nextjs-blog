import React from "react";
import { RichText } from "prismic-reactjs";
// import { PrismicRichText } from "@prismicio/react";

const CallToAction = ({ slice }) => {
  return (
    <>
      <RichText render={slice.primary.title} />
      <RichText render={slice.primary.description} />
    </>
  );
};

export default CallToAction;
