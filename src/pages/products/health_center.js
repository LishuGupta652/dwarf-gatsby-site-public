import React, { useContext } from "react"

// Product Component
import HealthCenter from "../../components/Products/HealthCenter"
import Footer from "../../components/Footer"

import Layout from "../../layout"

const SingleProduct = props => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Layout>
      <HealthCenter />
    </Layout>
  )
}

export default SingleProduct
