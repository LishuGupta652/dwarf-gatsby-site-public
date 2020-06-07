import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <footer>
        <section>
          <div className="footer-flex">
            <div className="footer-links">
              <Link to="/">
                <h3>Home</h3>
              </Link>

              <Link to="/about">
                <h3>About</h3>
              </Link>

              <Link to="/product">
                <h3>Services</h3>
              </Link>

              <Link to="/images">
                <h3>Gallary</h3>
              </Link>

              <Link to="/contact">
                <h3>Contact</h3>
              </Link>
            </div>
            <a href="#">
              <div className="to-top">
                <i class="fa fa-arrow-circle-o-up" aria-hidden="true"></i> back
                to top
              </div>
            </a>
          </div>
        </section>
        <h2 className="foot">© Dwarf 2020</h2>
      </footer>
    </div>
  )
}

export default Footer
