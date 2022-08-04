import React from "react";
import { RichText, RichTextBlock } from "prismic-reactjs";
import { Slice } from "@prismicio/types";

export interface IProps {
  title?: RichTextBlock[];
  description?: RichTextBlock[];
}

export const MySlice: React.FC<IProps> = ({ title, description }) => (
  <>
    <RichText render={title} />
    <RichText render={description} />
  </>
);
