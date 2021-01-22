import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome to Lineshop",
  description: "We sell the best gaming products for cheap",
  keywords:
    "consoles, video games, cheap games, cheap consoles, buy consoles, by video games",
};

export default Meta;
