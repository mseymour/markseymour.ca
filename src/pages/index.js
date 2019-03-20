import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/layout/content/hero"
import Main from "../components/layout/content/main"
import Section from "../components/layout/content/section"
import Logo from "!svg-react-loader!../images/logo.inline.svg?name=Logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Mark Seymour" keywords={[`mark seymour`, `creative`, `full stack`, `front-end`, `back-end`, `devops`, `web developer`, `personal`, `portfolio`]} />
    <Hero>
      <div class="hero__logowrap">
        <Logo class="hero__logo" />
      </div>
    </Hero>
    <Main>
      <Section modifiers={[`welcome`]}>
        <div class="container mx-auto my-8">
          <h1>I am a creative web developer living in Halifax, Canada with over a decade of professional and personal experience working with full-stack web technologies.</h1>
        </div>
      </Section>
      <Section modifiers={[`contact`]}>
        <div class="container mx-auto">
          <h1>Want to chat? <br/><em>Let&rsquo;s get in touch.</em></h1>
          <ul class="links links--horizontal links--large">
            <li class="links__item"><a href="mailto:hello@markseymour.ca">hello@markseymour.ca</a></li>
            <li class="links__item"><a href="https://github.com/mseymour">GitHub</a></li>
            <li class="links__item"><a href="https://linkedin.com/in/markevanseymour">LinkedIn</a></li>
          </ul>
        </div>
      </Section>
    </Main>
  </Layout>
)

export default IndexPage
