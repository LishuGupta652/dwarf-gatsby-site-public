import React, { useContext } from "react"

// Product Component
import SmartLibrary from "../../components/Products/SmartLibrary"
import Footer from "../../components/Footer"

const SingleProduct = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //   const product = props.match.params.id
  //   console.log(product)

  return (
    <div>
      <SmartLibrary />
      <Footer />
    </div>
  )
}

export default SingleProduct
