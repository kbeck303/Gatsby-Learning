import * as React from "react";
import BannerRender from "../components/Banner";
import MainMenuRender from "../components/MainMenu";
import ButtonRender from "../components/Button";
import { StaticImage } from 'gatsby-plugin-image';

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Roger Williams Park Zoo</title>
      <MainMenuRender />
      <StaticImage
        alt="A sloth hanging from a leafy tree"
        src="../images/Sloths-fiona-and-beany-RWPZoo.jpg"
      />
      <h1>We're Open for Adventure!</h1>
      <h2>Here we go!</h2>
      <p>I'm building websites.</p>
      <ButtonRender>Custom Button Text</ButtonRender>
    </main>
  )
}

export default IndexPage
