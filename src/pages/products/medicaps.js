import React from "react"

// Product Component
import Medicaps from "../../components/Products/Medicaps"
import Footer from "../../components/Footer"

const SingleProduct = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Medicaps />
      <Footer />
    </div>
  )
}

export default SingleProduct
