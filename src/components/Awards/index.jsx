import React from 'react'
import classNames from 'classnames'

import useDB from '../../hooks/useDB'

import Card from '../layouts/Card'
import Section from '../layouts/Section'

import styles from './style.module.scss'

const Awards = ({ className }) => {
  const classProps = classNames(styles.awards, className)
  const { awards } = useDB()

  return (
    <Card title='수상' className={classProps}>
      {awards.list.map((award, index) => (
        <span className={styles.award} key={`award-${index}`}>
          {award.title}
        </span>
      ))}
    </Card>
  )
}

export default Awards
