import React from "react"
import Header from "../components/HeaderBak"
import Image from "../components/Image"
import Gallary from "../components/Gallary"
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

      <div
        style={{
          height: "100vh",
          backgroundColor: "#f5f5f5",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* <Slider /> */}
      </div>
      <Footer />
    </>
  )
}

export default Images
