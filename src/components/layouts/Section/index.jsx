import React from 'react'
import classNames from 'classnames'

import styles from './style.module.scss'

const Section = ({ children, title, className }) => {
  const classProps = classNames(styles.section, className)

  return <div className={classProps}>{children}</div>
}

export default Section
