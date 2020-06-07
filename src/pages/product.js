import React from "react"
import Header from "../components/Header"
import Services from "../components/Services"
import TypewriterEffect from "../components/TypewriterEffect"
import Footer from "../components/Footer"

const Product = props => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Header title="Services" backgroundImage="services.jpg">
        <h1 className="title text-black">
          <TypewriterEffect title="Services .." />
        </h1>
      </Header>
      <Services />

      <Footer />
    </div>
  )
}

export default Product
