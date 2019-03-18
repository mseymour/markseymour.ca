import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/layout/content/hero"
import Main from "../components/layout/content/main"
import Section from "../components/layout/content/section"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`mark seymour`, `creative`, `full stack`, `front-end`, `back-end`, `devops`, `web developer`, `personal`, `portfolio`]} />
    <Hero>
      <h1><span>Mark Seymour</span> <span>the <em>creative</em> Full-Stack Web Developer</span></h1>
    </Hero>
    <Main>
      <Section modifiers={[`welcome`]}>
        <p>I am a <mark>creative web developer</mark> living in Halifax, Canada with over a decade of professional and personal experience working with full-stack web technologies.</p>
        <p>Want to chat? Let&rsquo;s talk.</p>
      </Section>
      <Section>
        <p>Secondary section!</p>
      </Section>
    </Main>
  </Layout>
)

export default IndexPage
