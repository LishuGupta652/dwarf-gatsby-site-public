import React from "react"
import { Link } from "gatsby"

import Typewriter from "typewriter-effect"
import ScrollAnimation from "react-animate-on-scroll"

import Header from "../components/Header"
import WhoAreWe from "../components/AboutPage/WhoAreWe"
import Mission from "../components/Mission"
import Future from "../components/Future"
import Method from "../components/Method"
import Quote from "../components/Quote"
import Footer from "../components/Footer"

const IndexPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />

      <div className="wrapper">
        <div className="container">
          <div className="inner-wrapper">
            <h1>
              <Typewriter
                options={{
                  strings: ["Dwarf", "By You For You"],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  cursor: ".",
                  start: 3000,
                }}
              />
            </h1>
            <h3>
              Organisation Operating in the field of Construction, Fabrication,
              Smart Gardens, Smart Library, Smart parking Solutions
            </h3>
            <Link to="/product">
              <button>View Services</button>
            </Link>
          </div>
        </div>
      </div>

      {/* <Header title="Home" backgroundImage="home.jpg">
        <div className="sub-heading">
          <h1>
            <Typewriter
              options={{
                strings: ["Dwarf", "By You For You"],
                autoStart: true,
                loop: true,
                delay: 100,
                cursor: ".",
                start: 3000,
              }}
            />
          </h1>
          <h2>Building Smart </h2>
          <h2>
            India<span className="dot">.</span>
          </h2>
        </div>
      </Header> */}

      <Quote />

      <ScrollAnimation animateOnce animateIn="fadeIn">
        <WhoAreWe />
      </ScrollAnimation>

      <div className="md-space" />
      <Mission />

      <div className="md-space" />
      <Future />
      <Method />

      <div className="heading ex-vp">
        <Link to="/product">
          <h1>View Services</h1>
          <i className="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
        </Link>
      </div>

      <Footer />
    </>
  )
}

export default IndexPage
