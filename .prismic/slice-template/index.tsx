import React from "react";
import { RichText, RichTextBlock } from "prismic-reactjs";
import { Slice } from "@prismicio/types";

export interface IProps {
  title?: RichTextBlock[];
  description?: RichTextBlock[];
}

const {{componentName}} = ({ title, description }: IProps) => (
  <>
    <RichText render={title} />
    <RichText render={description} />
  </>
);

export default {{componentName}}