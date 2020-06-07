import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          var $zoho = $zoho || {};
          $zoho.salesiq = $zoho.salesiq || {
            widgetcode:
              "10945d185cfc392a4f1eb60063940d96d2eefa4479303a117650c014d05b36bd",
            values: {},
            ready: function () {},
          };
          var d = document;
          s = d.createElement("script");
          s.type = "text/javascript";
          s.id = "zsiqscript";
          s.defer = true;
          s.src = "https://salesiq.zoho.in/widget";
          t = d.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(s, t);
          d.write("<div id='zsiqwidget'></div>");
    `,
        }}
      />
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
