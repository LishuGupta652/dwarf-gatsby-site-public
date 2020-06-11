import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <footer>
        <section>
          <div className="footer-flex">
            <div className="footer-links">
              <Link to="/" activeStyle={{ color: "blue" }}>
                <h3 className="unactive">Home</h3>
              </Link>

              <Link to="/about" activeStyle={{ color: "blue" }}>
                <h3 className="unactive">About</h3>
              </Link>

              <Link to="/product" activeStyle={{ color: "blue" }}>
                <h3 className="unactive">Services</h3>
              </Link>

              <Link to="/images" activeStyle={{ color: "blue" }}>
                <h3 className="unactive">Gallary</h3>
              </Link>

              <Link to="/contact" activeStyle={{ color: "blue" }}>
                <h3 className="unactive">Contact</h3>
              </Link>
            </div>
            <div className="to-top">
              <i className="fa fa-arrow-circle-o-up" aria-hidden="true"></i>{" "}
              <a href="#">back to top</a>
            </div>
          </div>
        </section>
        <h2 className="foot">© Dwarf 2020</h2>
      </footer>
    </div>
  )
}

export default Footer
