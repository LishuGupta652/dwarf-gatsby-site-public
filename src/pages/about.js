import React from "react"
import Header from "../components/Header"
import WhoAreWe from "../components/AboutPage/WhoAreWe"
import AboutInfo from "../components/AboutPage/AboutInfo"
import TypewriterEffect from "../components/TypewriterEffect"
import Footer from "../components/Footer"

const About = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header title="About Us" backgroundImage="about.jpg">
        <h1>
          <TypewriterEffect title="About Us .." />
        </h1>
      </Header>
      <WhoAreWe />
      <AboutInfo />
      <Footer />
    </>
  )
}

export default About
