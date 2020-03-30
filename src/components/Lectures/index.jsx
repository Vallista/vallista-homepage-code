import React from 'react'
import classNames from 'classnames'

import useDB from '../../hooks/useDB'

import Card from '../layouts/Card'

import styles from './style.module.scss'

const Lectures = ({ className }) => {
  const classProps = classNames(styles.lectures, className)
  const { lectures } = useDB()

  return (
    <Card title='강연' className={classProps}>
      {lectures.list.map((lecture, index) => (
        <span className={styles.lecture} key={`lectures-${index}`}>
          {lecture.title}
        </span>
      ))}
    </Card>
  )
}

export default Lectures
