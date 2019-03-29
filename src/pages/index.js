import React from "react"
import { withPrefix } from "gatsby"

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
      <Logo aria-label="Mark Seymour: the creative full-stack web developer" role="img" class="hero__logo" />
    </Hero>
    <Main>
      <Section modifiers={[`portfolio`]}>
        <div class="container mx-auto px-4 text-center">
          <h1 class="mb-4">Portfolio <span class="text-sm">(Work in progress)</span></h1>
          <p class="text-lg">In the meantime, check out these sites that I&rsquo;ve built independently in the past:</p>
          <ul class="links text-lg">
            <li class="links_item"><a href="http://maritimesysmen.com/">maritimesysmen.com</a> (Laravel, Sass, custom development)</li>
            <li class="links_item"><a href="http://crossborderchallenge.com/">crossborderchallenge.com</a> (PHP, custom development)</li>
          </ul>
          <p class="text-lg">And check out my GitHub repositories for projects that I&rsquo;ve contributed to or worked on: <a href="https://github.com/mseymour">github.com/mseymour</a></p>
        </div>
      </Section>
      <Section modifiers={[`contact`]}>
        <div class="container mx-auto">
          <h1>Want to chat? <br/><em>Let&rsquo;s get in touch.</em></h1>
          <ul class="links links--horizontal links--large">
            <li class="links__item"><a href="mailto:hello@markseymour.ca">hello@markseymour.ca</a></li>
            <li class="links__item"><a target="_blank" rel="noopener noreferrer" href="https://github.com/mseymour">GitHub</a></li>
            <li class="links__item"><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/markevanseymour">LinkedIn</a></li>
          </ul>
          <a target="_blank" rel="noopener noreferrer" class="btn btn--invert" href={withPrefix(`mark_seymour_resume.pdf`)}>View Résumé</a>
        </div>
      </Section>
    </Main>
  </Layout>
)

export default IndexPage
