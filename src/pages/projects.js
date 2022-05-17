import React from "react"
import { useStaticQuery, graphql } from "gatsby"

// WARNING: importing here will affect entire site
import "bootstrap/dist/css/bootstrap.min.css"

import Layout from "../layouts/layout"
import SEO from "../components/seo.js"
import PageTitle from "../components/pageTitle"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"
import { Img } from "gatsby-image"

// import jsonProjects from "../../content/projects.json"

const StyledProject = styled.div`
  margin: 0 0 100px;
  padding: 0;
  width: 100%;

  .project-inner {
    display: flex;
    // background-color: #555555;
  }

  .project-content-wrap {
    flex: 0 0 50%;
    // background-color: #777777;
  }

  .project-image-wrap {
    flex: 0 0 50%;
    position: relative;
    // background-color: #999999;
    height: 300px;
  }

  .project-image {
    position: absolute;
    left: -25px;
    width: 100%;
    height: 100%;
    background-color: #cccccc;
    opacity: 1;
  }

  .featured-project {
    color: var(--accent-foreground-color2);
    font-size: 0.85em;
    margin: 0 0 2px 0;
  }

  .project-name {
    font-size: 28px;
    font-weight: bold;
    margin: 0 0 20px 0;
  }

  .project-description {
    position: relative;
    background-color: #112040; /* #1b3c69; */
    border-radius: 6px;
    box-shadow: 0 10px 30px -15px #020c1bb3;
    padding: 25px;
    font-size: 0.85em;
    width: 100%;
    z-index: 5;
  }

  .project-links {
    color: inherit;
  }

  .project-links:hover {
    color: #63ffda;
    text-decoration: none;
  }

  .project-technologies {
    position: relative;
    font-size: 0.6em;
  }

  li {
    display: inline-block;
    margin: 0 15px 0 0;
  }
`

const ProjectsPage = props => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            description
            hostUrl
            src {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1
                  layout: CONSTRAINED
                  placeholder: BLURRED
                  width: 470
                  height: 300
                )
              }
            }
            index
            render
            title
            technologies {
              name
              url
            }
          }
        }
      }
    }
  `)
  const projects = data.allProjectsJson.edges.filter(({ node }) => node.render == true)
//   const projects = data.allProjectsJson.edges.filter(({ node }) => node)

  //   const data = useStaticQuery(graphql`
  //     query {
  //       projects: allMarkdownRemark(
  //         filter: {
  //           fileAbsolutePath: { regex: "/projects/" }
  //           frontmatter: { render: { ne: false } }
  //         }
  //         sort: { fields: [frontmatter___index], order: DESC }
  //       ) {
  //         edges {
  //           node {
  //             frontmatter {
  //               title
  //               description
  //               hostUrl
  //             }
  //             html
  //           }
  //         }
  //       }
  //     }
  //   `)

  //   const projects = data.projects.edges.filter(({ node }) => node)

  return (
    <Layout location={props.location}>
      <div>
        <SEO title="Projects" />
        <h1>
          <PageTitle title="Projects" />
        </h1>

        <div className="container-">
          {projects.map(({ node }, i) => {
            const { title, description, hostUrl, src, technologies } = node
            console.log("src: " + src);
            const image = getImage(src)
            console.log("image: " + image);

            //   projects.map(({ node }, i) => {
            //     const { frontmatter } = node
            //     const { title, description, technologies } = frontmatter

            return (
              <StyledProject key={i}>
                <div className="project-inner">
                  <div className="project-content-wrap">
                    <div className="featured-project">Featured Project</div>
                    <div className="project-name">
                      {hostUrl && <a
                        className="project-links"
                        href={hostUrl}
                        target="_blank"
                      >
                        {title}
                      </a>
                      }
                      {!hostUrl && title}
                    </div>
                    <div className="project-description">{description}</div>
                    <div>
                      {technologies && (
                        <ul className="project-technologies">
                          {technologies.map((technology, i) => (
                            <li key={i}>
                              <a
                                className="project-links"
                                href={technology.url}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {technology.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  <div className="project-image-wrap">
                    <div className="project-image">
                      {image && <GatsbyImage image={image} alt={title} />}
                      {/* {src.childImageSharp.fluid} */}
                      {/* <img src={src.childImageSharp.fluid.src} /> */}
                      {/* <Img fluid={src.childImageSharp.fluid.src} /> */}
                      {/* <StaticImage src={src.childImageSharp.fluid.src} alt={title} /> */}
                      {/* <StaticImage src="../images/covid.png" alt={title} /> */}
                    </div>
                  </div>
                </div>
              </StyledProject>
            )
          })}

          {/*<StyledProject>
            <div className="project-inner">
              <div className="project-content-wrap">
                <div className="featured-project">Featured Project</div>
                <div className="project-name">Spotify Podcast Manager</div>
                <div className="project-description"></div>
                <div>
                  <ul className="project-technologies">
                    <li>
                      <a
                        className="project-links"
                        href="https://reactjs.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        React
                      </a>
                    </li>
                    <li>
                      <a
                        className="project-links"
                        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                        target="_blank"
                        rel="noreferrer"
                      >
                        CSS
                      </a>
                    </li>
                    <li>Spotify API</li>
                  </ul>
                </div>
              </div>
              <div className="project-image-wrap">
                <div className="project-image"></div>
              </div>
            </div>
          </StyledProject>

          <StyledProject>
            <div className="project-inner">
              <div className="project-content-wrap">
                <div className="featured-project">Featured Project</div>
                <div className="project-name">Twitter Map</div>
                <div className="project-description">
                  Shows real time tweets on a map...
                </div>
                <div>
                  <ul className="project-technologies">
                    <li>JS (ES6)</li>
                    <li>Twitter API</li>
                    <li>Google Maps API</li>
                  </ul>
                </div>
              </div>
              <div className="project-image-wrap">
                <div className="project-image"></div>
              </div>
            </div>
          </StyledProject>

          <StyledProject>
            <div className="project-inner">
              <div className="project-content-wrap">
                <div className="featured-project">Featured Project</div>
                <div className="project-name">COVID Tracker</div>
                <div className="project-description">
                  Displays COVID statistics worldwide on a map...
                </div>
                <div>
                  <ul className="project-technologies">
                    <li>Salesforce Lightning</li>
                    <li>JS (ES6)</li>
                    <li>Covid API</li>
                    <li>Google Maps API</li>
                  </ul>
                </div>
              </div>
              <div className="project-image-wrap">
                <div className="project-image"></div>
              </div>
            </div>
          </StyledProject> */}
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage
