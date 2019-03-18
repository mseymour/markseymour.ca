import React from "react"
import PropTypes from "prop-types"

const Section = ({ modifiers, children }) => (
  <section class={`section` + (modifiers.map(i => ' section--' + i).join())}>
    {children}
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string),
}

Section.defaultProps = {
  modifiers: [],
}

export default Section
