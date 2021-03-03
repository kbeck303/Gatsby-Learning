import * as React from "react";
import BannerRender from "../components/Banner";
import MainMenuRender from "../components/MainMenu";
import ButtonRender from "../components/Button";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Roger Williams Park Zoo</title>
      <BannerRender />
      <MainMenuRender />
      <h2>Here we go!</h2>
      <p>I'm building websites.</p>
      <ButtonRender>Custom Button Text</ButtonRender>
    </main>
  )
}

export default IndexPage
