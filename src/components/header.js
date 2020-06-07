import React from "react"
import FixedItems from "./FixedItems"
import logo from "../images/logo.png"
import { Link } from "gatsby"

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="inner-header">
            <h1 className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </h1>
            <div className="nav-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 5.99519C2 5.44556 2.44556 5 2.99519 5H11.0048C11.5544 5 12 5.44556 12 5.99519C12 6.54482 11.5544 6.99039 11.0048 6.99039H2.99519C2.44556 6.99039 2 6.54482 2 5.99519Z"
                  fill="currentColor"
                />
                <path
                  d="M2 11.9998C2 11.4501 2.44556 11.0046 2.99519 11.0046H21.0048C21.5544 11.0046 22 11.4501 22 11.9998C22 12.5494 21.5544 12.9949 21.0048 12.9949H2.99519C2.44556 12.9949 2 12.5494 2 11.9998Z"
                  fill="currentColor"
                />
                <path
                  d="M2.99519 17.0096C2.44556 17.0096 2 17.4552 2 18.0048C2 18.5544 2.44556 19 2.99519 19H15.0048C15.5544 19 16 18.5544 16 18.0048C16 17.4552 15.5544 17.0096 15.0048 17.0096H2.99519Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
        <FixedItems />
      </header>
    </>
  )
}

export default Header
