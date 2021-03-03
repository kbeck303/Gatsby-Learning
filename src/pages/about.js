import * as React from "react";
import BannerRender from "../components/Banner";
import MainMenuRender from "../components/MainMenu";
import ButtonRender from "../components/Button";
import { StaticImage } from 'gatsby-plugin-image';

// markup
const AboutPage = () => {
  return (
    <main>
      <title>About Roger Williams Park Zoo</title>
      <MainMenuRender />
      <StaticImage
        alt="A sloth hanging from a leafy tree"
        src="../images/zoo-keeper.png"
      />
      <h1>We're Open for Adventure!</h1>
      <h2>This is a new page</h2>
      <ButtonRender>About Button Text</ButtonRender>
      <ButtonRender>Apply</ButtonRender>
    </main>
  )
}

export default AboutPage
