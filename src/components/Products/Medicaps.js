import React from "react"
import Header from "../../components/Header"
import { Link } from "gatsby"
import ScrollAnimation from "react-animate-on-scroll"
import Services from "../Services"

const Medicaps = () => {
  return (
    <div>
      <Header />

      <div className="display">
        <div className="container">
          <div className="inner-display">
            <h1 className="text-black">Medicaps</h1>
            <ol className="head-list">
              <a href="#intro">
                <li>What is Medicaps?</li>
              </a>
              <a href="#meaning_and_nature">
                <li>Medicaps: App</li>
              </a>
              <a href="#characterstics">
                <li>Benifits </li>
              </a>
            </ol>
          </div>
        </div>
      </div>
      <Services />
    </div>
  )
}

export default Medicaps
