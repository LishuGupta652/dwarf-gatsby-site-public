import React from "react"
import Header from "../components/Header"
import TypewriterEffect from "../components/TypewriterEffect"
import Footer from "../components/Footer"

// import { Slider } from "../components/Slider";

const Images = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header title="Images" backgroundImage="gallary.jpg">
        <h1>
          <TypewriterEffect title="Images .." />
        </h1>
      </Header>

      <div className="images">
        <div className="container">
          <h1>Images</h1>
          <div className="inner-images">
            <img src="https://unsplash.it/200" alt="img"></img>
            <img src="https://unsplash.it/201" alt="img"></img>
            <img src="https://unsplash.it/202" alt="img"></img>
            <img src="https://unsplash.it/204" alt="img"></img>
            <img src="https://unsplash.it/205" alt="img"></img>
            <img src="https://unsplash.it/206" alt="img"></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Images
