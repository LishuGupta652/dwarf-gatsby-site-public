import React from "react"

// Product Component
import SmartLibrary from "../../components/Products/SmartLibrary"
import Footer from "../../components/Footer"

const SingleProduct = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <SmartLibrary />
      <Footer />
    </div>
  )
}

export default SingleProduct
