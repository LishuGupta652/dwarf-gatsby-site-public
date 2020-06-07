import React, { useEffect } from "react"
import "../css/test.scss"
import { Link } from "gatsby"
import { motion, useAnimation } from "framer-motion"
import icon from "../images/audio.svg"
import { useInView } from "react-intersection-observer"

import WhoAreWe from "../components/AboutPage/WhoAreWe"
import Mission from "../components/Mission"
import Future from "../components/Future"
import Method from "../components/Method"
import Quote from "../components/Quote"
import Footer from "../components/Footer"

const Text = () => {
  const animation = useAnimation()
  const [containerRef, containerInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })

  useEffect(() => {
    if (containerInView) {
      animation.start("visible")
    } else {
      animation.start("hidden")
    }
  }, [animation, containerInView])

  return (
    <>
      <div className="test-header">
        <div className="container">
          <div className="test-header-inner">
            <div className="logo">
              <motion.h1
                initial={{ opacity: 0, y: 72 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Dwarf
              </motion.h1>
            </div>
            <div>
              <ul>
                <Link to="/home">Home</Link>
                <Link to="/home">Services</Link>
                <Link to="/home">About</Link>
              </ul>
            </div>
          </div>
          <div className="content">
            <motion.h1
              initial={{ opacity: 0, y: 72 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Company with Absolute Will.
            </motion.h1>
            <h3>we dig the tunnel untill we achieve</h3>
            <button>View our Services</button>
          </div>
        </div>
        <div className="design">
          <div></div>
        </div>
      </div>

      <Quote />

      <WhoAreWe />

      <div className="md-space" />
      {/* <Slider /> */}
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

      <div className="test-extra-content-2">
        <motion.h1
          ref={containerRef}
          animate={animation}
          initial="hidden"
          variants={{
            visible: {
              opacity: 1,
              y: 0,
            },
            hidden: {
              opacity: 0,
              y: 20,
            },
          }}
        >
          My Awesome Animated Text.
        </motion.h1>
      </div>
    </>
  )
}

export default Text
