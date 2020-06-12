import React from "react"
import Header from "../components/header"
import Services from "../components/Services"
import TypewriterEffect from "../components/TypewriterEffect"
import Footer from "../components/Footer"

import Layout from "../layout"

const Product = props => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <Services />
    </Layout>
  )
}

export default Product
