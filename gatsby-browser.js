/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from "react"

//css files
import "./src/css/index.css"
import "./src/css/about.css"
import "./src/css/contact.css"
import "./src/css/product.css"
// scss
import "./src/css/header.scss"

export const wrapRootElement = ({ element }) => {
  return <>{element}</>
}
