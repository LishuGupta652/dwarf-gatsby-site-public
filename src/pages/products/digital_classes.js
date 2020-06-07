import React, { useContext } from "react"

// Product Component
import DigitalClasses from "../../components/Products/DigitalClasses"
import Footer from "../../components/Footer"

const SingleProduct = props => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <DigitalClasses />
      <Footer />
    </div>
  )
}

export default SingleProduct
