// import React, { useContext } from "react"
// import Header from "../components/Header"
// import { ProductContext } from "../context/ProductContext";
// import Video from "../images/header/library.mp4"

// // Product Component
// import SmartLibrary from "../components/Products/SmartLibrary"
// import DigitalClasses from "../components/Products/DigitalClasses"
// import HealthCenter from "../components/Products/HealthCenter"
// import NotFound from "./NotFound.js"

// import Typewriter from "typewriter-effect"

// const SingleProduct = props => {
//   React.useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   console.log(product)

//   if (product === "smart_library") {
//     window.scrollTo(0, 0)
//     return <SmartLibrary />
//   }
//   if (product === "digital_classes") {
//     window.scrollTo(0, 0)
//     return <DigitalClasses />
//   }
//   if (product === "health_center") {
//     window.scrollTo(0, 0)
//     return <HealthCenter />
//   }
//   return <NotFound />
// }

// export default SingleProduct

import React from "react"
import { Link } from "gatsby"

const SingleProduct = () => {
  return (
    <div className="container">
      <h1>Unused block please go back to homepage</h1>
      <h1>
        <Link to="/">Home</Link>
      </h1>
    </div>
  )
}

export default SingleProduct
