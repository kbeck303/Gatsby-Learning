// src/components/Banner.js
import * as React from "react";
import { title } from "./Banner.module.css";
import { StaticImage } from 'gatsby-plugin-image';

const BannerRender = () => {
  return (
    <div>
      <h1 className={title}>We're Open for Adventure!</h1>
      <StaticImage
        alt="A sloth hanging from a leafy tree"
        src="../images/Sloths-fiona-and-beany-RWPZoo.jpg"
      />
    </div>
  )
}

export default BannerRender
