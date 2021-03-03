import * as React from "react";
import BannerRender from "../components/Banner";
import MainMenuRender from "../components/MainMenu";
import ButtonRender from "../components/Button";

// markup
const AboutPage = () => {
  return (
    <main>
      <title>About Roger Williams Park Zoo</title>
      <BannerRender />
      <MainMenuRender />
      <h2>This is a new page</h2>
      <p>I'm building websites.</p>
      <ButtonRender>About Button Text</ButtonRender>
    </main>
  )
}

export default AboutPage
