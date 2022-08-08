import React from "react";
import { RichText, RichTextBlock } from "prismic-reactjs";

// export interface IProps {
//   title?: RichTextBlock[];
//   description?: RichTextBlock[];
// }

// const Test03: React.FC<IProps> = ({ title, description }) => (
//   <>
//     <RichText render={title} />
//     <RichText render={description} />
//   </>
// );
const Test03 = ({ slice }) => {
  return (
    <>
      <RichText render={slice.primary.title} />
      <RichText render={slice.primary.description} />
    </>
  );
};

export default Test03;
