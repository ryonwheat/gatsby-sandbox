import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngular,
  faApple,
  faAws,
  faBootstrap,
  faCodepen,
  faCss3,
  faFedora,
  faGithub,
  faGitlab,
  faHtml5,
  faJava,
  faJs,
  faLinux,
  faNodeJs,
  faPhp,
  faReact,
  faSalesforce,
  faSuse,
  faUbuntu,
  faWindows,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons"
import { Icon } from "@iconify/react"
import apacheIcon from "@iconify-icons/logos/apache"
import debianIcon from "@iconify-icons/logos/debian"
import gatsbyIcon from "@iconify-icons/logos/gatsby"
import googleCloud from "@iconify-icons/logos/google-cloud"
import herokuIcon from "@iconify-icons/logos/heroku-icon"
import hibernateIcon from "@iconify-icons/logos/hibernate"
import mysqlIcon from "@iconify-icons/logos/mysql"
import oracleIcon from "@iconify-icons/logos/oracle"
import springIcon from "@iconify-icons/logos/spring-icon"
import strutsIcon from "@iconify-icons/logos/struts"
import tomcatIcon from "@iconify-icons/logos/tomcat"

import Layout from "../layouts/layout"
import SEO from "../components/seo.js"
import PageTitle from "../components/pageTitle"
import SkillCloud from "../components/skillCloud"
import "./skills.css"

class SkillsPage extends Component {
  constructor(props) {
    super(props)
    // console.log("SkillsPage.props: " + JSON.stringify(props))

    this.state = {
      isDark: false,
    }
  }

  componentDidMount() {
    const isDark = JSON.parse(localStorage.getItem("dark"))
    // console.log("Skills.isDark: " + isDark)
    this.setState({ isDark: isDark })

    let x = document.getElementsByClassName("skill-icon")
    for (let i = 0; i < x.length; i++) {
      if (isDark) {
        x[i].classList.remove("skill-icon-dark")
      } else {
        x[i].classList.add("skill-icon-dark")
      }
    }
  }

  render() {
    const isDark = JSON.parse(localStorage.getItem("dark"))
    return (
      <Layout location={this.props.location} parentCallback={this.callback}>
        <Helmet>
          <script src={withPrefix("cloudTag.js")} type="text/javascript" />
        </Helmet>
        <SEO title="Skills" />
        <div>
          <h1>
            <PageTitle title="Skills" />
          </h1>
          {/* TODO: add links, icons; skills page with several circular clusters of skills grouped as below (floating, reacts to mouse) */}

          <div className="container">
            <div className="skills-content">Java</div>
            <div>
              <SkillCloud radius={200} count={200} isDark={isDark} />
            </div>

            <div>
              <div>Front-end</div>
              <ul className="skill-icon-list">
                <li>
                  <FontAwesomeIcon
                    className="skill-icon html5"
                    icon={faHtml5}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon css3"
                    icon={faCss3}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon bootstrap"
                    icon={faBootstrap}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon js"
                    icon={faJs}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon angular"
                    icon={faAngular}
                    size="2x"
                  />
                </li>
                <li>
                  <Icon
                    className="skill-icon"
                    icon={gatsbyIcon}
                    width="2em"
                    height="2em"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon react"
                    icon={faReact}
                    size="2x"
                  />
                </li>
                <li></li>
              </ul>

              <div>Back-end</div>
              <ul className="skill-icon-list">
                <li>
                  <FontAwesomeIcon
                    className="skill-icon"
                    icon={faJava}
                    size="2x"
                  />
                </li>
                <li>
                  <Icon
                    className="skill-icon"
                    icon={springIcon}
                    width="2em"
                    height="2em"
                  />
                </li>
                <li>
                  <Icon
                    className="skill-icon"
                    icon={strutsIcon}
                    width="2em"
                    height="2em"
                  />
                </li>
                <li>
                  <Icon
                    className="skill-icon"
                    icon={apacheIcon}
                    width="2em"
                    height="2em"
                  />
                </li>
                <li>
                  <Icon
                    className="skill-icon"
                    icon={tomcatIcon}
                    width="2em"
                    height="2em"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon nodejs"
                    icon={faNodeJs}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon php"
                    icon={faPhp}
                    size="2x"
                  />
                </li>
              </ul>

              <div>Devops</div>
              <ul className="skill-icon-list">
                <li>
                  <Icon
                    className="skill-icon"
                    icon={googleCloud}
                    width="2em"
                    height="2em"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon aws"
                    icon={faAws}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon"
                    icon={faCodepen}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon"
                    icon={faGithub}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon"
                    icon={faGitlab}
                    size="2x"
                  />
                </li>
                <li>
                  <Icon
                    className="skill-icon"
                    icon={herokuIcon}
                    width="2em"
                    height="2em"
                  />
                </li>
              </ul>

              <div>Web Services</div>
              <ul className="skill-icon-list">
                <li>API</li>
                <li>REST</li>
                <li>SAAS</li>
                <li>SOAP</li>
                <li>XML</li>
              </ul>

              <div>OS</div>
              <ul className="skill-icon-list">
                <li>
                  <FontAwesomeIcon
                    className="skill-icon"
                    icon={faLinux}
                    size="2x"
                  />
                </li>
                <li>
                  <Icon
                    className="skill-icon"
                    icon={debianIcon}
                    width="2em"
                    height="2em"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon fedora"
                    icon={faFedora}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon suse"
                    icon={faSuse}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon ubuntu"
                    icon={faUbuntu}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon"
                    icon={faApple}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon windows"
                    icon={faWindows}
                    size="2x"
                  />
                </li>
              </ul>

              <div>Database</div>
              <ul className="skill-icon-list">
                <li>
                  <Icon
                    className="skill-icon"
                    icon={mysqlIcon}
                    width="2em"
                    height="2em"
                  />
                </li>
                <li>
                  <Icon
                    className="skill-icon"
                    icon={hibernateIcon}
                    width="2em"
                    height="2em"
                  />
                </li>
                <li>
                  <Icon
                    className="skill-icon"
                    icon={oracleIcon}
                    width="2em"
                    height="2em"
                  />
                </li>
              </ul>

              <div>CRM</div>
              <ul className="skill-icon-list">
                <li>
                  <FontAwesomeIcon
                    className="skill-icon salesforce"
                    icon={faSalesforce}
                    size="2x"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    className="skill-icon wordpress"
                    icon={faWordpress}
                    size="2x"
                  />
                </li>
                <li>Apex</li>
                <li>Visualforce</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default SkillsPage
