import React, { useContext } from "react"

// Product Component
import HealthCenter from "../../components/Products/HealthCenter"
import Footer from "../../components/Footer"

const SingleProduct = props => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <HealthCenter />
      <Footer />
    </>
  )
}

export default SingleProduct
