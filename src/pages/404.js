import React from "react"
import Header from "../components/header"
import Footer from "../components/Footer"

const NotFound = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Header
        title="Opps! 404 Not Found"
        background="linear-gradient(to right, #d53369, #cbad6d)"
      ></Header>
      <div className="page-not-found">
        <h1 className="">Opps! 404 Not Found</h1>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
