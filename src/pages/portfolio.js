import React from "react"

// WARNING: importing here will affect entire site
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../layouts/layout"
import SEO from "../components/seo.js"
import PageTitle from "../components/pageTitle"
import "./portfolio.css"

// import PortfolioCarousel from "../components/portfolioCarousel.js"

const PortfolioPage = props => {
  return (
    <Layout location={props.location}>
      <div>
        <SEO title="Portfolio" />
        <h1>
          <PageTitle title="Portfolio" />
        </h1>

        <div className="container">
          <div className="card1">
            <div className="card1-content">
              <a href="#">
                <svg
                  id="Rectangle_1"
                  data-name="Rectangle 1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="250"
                  height="125"
                  viewBox="0 0 250 125"
                >
                  <rect
                    id="Rectangle_1-2"
                    data-name="Rectangle 1"
                    width="250"
                    height="125"
                    rx="23"
                    fill="#d8d8d9"
                  />
                </svg>
              </a>
            </div>
            <div className="card1-footer">
              <a href="#">Rotate</a>
            </div>
          </div>

          <div className="card1">
            <div className="card1-footer">
              <a href="#">Page Transition</a>
            </div>
          </div>

          <div className="card1">
            <div className="card1-content">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="240"
                  height="44"
                  viewBox="0 0 240 44"
                >
                  <rect
                    id="Rectangle_2"
                    data-name="Rectangle 2"
                    width="240"
                    height="44"
                    rx="22"
                    fill="#3972ec"
                  />
                </svg>
              </a>
            </div>
            <div className="card1-footer">
              <a href="#">Buttons</a>
            </div>
          </div>

          <div className="card1">
            <div className="card1-content">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="216"
                  height="88"
                  viewBox="0 0 216 88"
                >
                  <g
                    id="Rectangle_3"
                    data-name="Rectangle 3"
                    transform="translate(0 32)"
                    fill="#fff"
                    stroke="#cecece"
                    strokeWidth="2"
                  >
                    <rect width="216" height="24" stroke="none" />
                    <rect x="1" y="1" width="214" height="22" fill="none" />
                  </g>
                  <g
                    id="Rectangle_4"
                    data-name="Rectangle 4"
                    transform="translate(0 64)"
                    fill="#fff"
                    stroke="#cecece"
                    strokeWidth="2"
                  >
                    <rect width="216" height="24" stroke="none" />
                    <rect x="1" y="1" width="214" height="22" fill="none" />
                  </g>
                  <g
                    id="Rectangle_5"
                    data-name="Rectangle 5"
                    fill="#fff"
                    stroke="#cecece"
                    strokeWidth="2"
                  >
                    <rect width="104" height="24" stroke="none" />
                    <rect x="1" y="1" width="102" height="22" fill="none" />
                  </g>
                  <g
                    id="Rectangle_6"
                    data-name="Rectangle 6"
                    transform="translate(112)"
                    fill="#fff"
                    stroke="#cecece"
                    strokeWidth="2"
                  >
                    <rect width="104" height="24" stroke="none" />
                    <rect x="1" y="1" width="102" height="22" fill="none" />
                  </g>
                </svg>
              </a>
            </div>

            <div className="card1-footer">
              <a href="#">Forms</a>
            </div>
          </div>

          <div className="card1">
            <div className="card1-footer">
              <a href="#">Effects</a>
            </div>
          </div>
        </div>

        {/* <PortfolioCarousel /> */}
      </div>
    </Layout>
  )
}

export default PortfolioPage
