import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header/PrimaryHeader'

export default function PrimaryLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  )
}

PrimaryLayout.propTypes = {
  children: PropTypes.element.isRequired,
}
