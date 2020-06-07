import React from "react"
import Header from "../components/Header"
import ContactForm from "../components/ContactPage/ContactForm"
import TypewriterEffect from "../components/TypewriterEffect"
import Footer from "../components/Footer"

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header title="Contact Us" backgroundImage="contact.jpg">
        <h1>
          <TypewriterEffect title="Contact Us .." />
        </h1>
      </Header>
      <ContactForm />
      <Footer />
    </>
  )
}

export default Contact
