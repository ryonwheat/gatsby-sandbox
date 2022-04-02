import React, { Component } from "react"
import "../styles/skillCloud.scss"

class SkillCloud extends Component {
  constructor(props) {
    super(props)
    this.state = {
      radius: props.radius,
      count: props.count,
      isDark: props.isDark,
    }
    console.log("SkillCloud: " + JSON.stringify(this.state))
  }

  componentDidMount() {
    this.drawPoints(
      this.state.radius,
      this.state.count,
      document.getElementById("inner-container"),
      this.state.isDark
    )
  }

  drawPoints = (r, count, parentEl, isDark) => {
    const skills = [
      "CSS3",
      "HTML5",
      "JS",
      "React",
      "Gatsby",
      "Angular",
      "Bootstrap",
      "GSAP",
      "jQuery",
      "JSP",
      "Visualforce",
      "Java",
      "Apex",
      "Spring",
      "Struts",
      "C#",
      ".NET",
      "PHP",
      "Node",
      "Apache",
      "Tomcat",
      "SQL",
      "SOQL",
      "MySQL",
      "Hibernate",
      "REST",
      "SOAP",
      "SAAS",
      "XML",
      "Git",
      "Heroku",
      "AWS",
      "GoogleCloud",
      "Salesforce",
      "Wordpress",
    ]

    if (parentEl === null) {
      parentEl = document.body
    }

    for (let i = 1; i <= count; i++) {
      let phi = (i / count) * Math.PI
      let theta = (i / count) * 90 // * (2 * Math.PI);
      // theta = radiansToDegrees(theta);
      let c = this.polarTo3DCartesian(r, theta, phi)
      //   console.log("drawPoints: " + i, phi, theta, c);

      let el = document.createElement("div")
      el.classList.add("point")
      if (!isDark) {
        el.classList.add("point-light")
      }
      el.style.transform =
        "translate3d(" + c.x + "px, " + c.y + "px, " + c.z + "px)"
      parentEl.appendChild(el)

      
    }

    for (let i = 1; i <= skills.length; i++) {
      let phi = (i / skills.length) * Math.PI
      let theta = ((i + Math.PI) / skills.length) * 90 // * 2 * Math.PI;
      // theta = radiansToDegrees(theta);
      let c = this.polarTo3DCartesian(r, theta, phi)

      let wrapEl = document.createElement("div")
      wrapEl.classList.add("skill-wrap")
      wrapEl.style.transform =
        "translate3d(" + c.x + "px, " + c.y + "px, " + c.z + "px)"

      let el = document.createElement("div")
      el.innerText = skills[i - 1]
      el.classList.add("skill")
      if (!isDark) {
        el.classList.add("skill-light")
      }

      wrapEl.appendChild(el)
      parentEl.appendChild(wrapEl)
    }
  }

  polarTo3DCartesian = (r, theta, phi, offset = 0) => {
    return {
      x: r * Math.cos(theta) * Math.sin(phi),
      y: r * Math.sin(theta) * Math.sin(phi),
      z: r * Math.cos(phi),
    }
  }

  degreesToRadians(degree) {
    return degree * (Math.PI / 180)
  }

  radiansToDegrees(radian) {
    return radian / (Math.PI / 180)
  }

  render() {
    return (
      <div className="skill-container">
        <div id="inner-container" className="inner-container"></div>
      </div>
    )
  }
}

export default SkillCloud
