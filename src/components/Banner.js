import * as React from "react"

// markup
const BannerRender = () => {
  return (
    <BannerMarkup name="Kathy" />
  )
}

const BannerMarkup = ({ name }) => {
  return (
    <div>
      <h1>Welcome { name } to the site!</h1>
      <p>Image</p>
    </div>
  )
}

export default BannerRender
