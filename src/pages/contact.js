import React from "react"
import Header from "../components/header"
import ContactForm from "../components/ContactPage/ContactForm"
import TypewriterEffect from "../components/TypewriterEffect"
import Footer from "../components/Footer"

import Layout from "../layout"

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Layout>
      <ContactForm />
    </Layout>
  )
}

export default Contact
