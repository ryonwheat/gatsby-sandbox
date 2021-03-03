import React from "react"

import Container from "../components/container"
import styles from "./about-css-modules.module.css"

console.log(styles)

const User = props => (
  <div className={styles.user}>
    <img src={props.avatar} className={styles.avatar} alt="" />
    <div className={styles.description}>
      <h2 className={styles.username}>{props.username}</h2>
      <p className={styles.excerpt}>{props.excerpt}</p>
    </div>
  </div>
)

export default function About() {
  return (
    <Container>
      <h1>About CSS Modules</h1>
      <User
        username="Jane Doe"
        avatar="https://source.unsplash.com/random/?person,female"
        excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
      <User
        username="Ned Baker"
        avatar="https://source.unsplash.com/random/?person,male"
        excerpt="I'm Ned. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
      />
    </Container>
  )
}
