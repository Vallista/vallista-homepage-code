import React from 'react'
import useDB from '../../hooks/useDB'
import classNames from 'classnames'

import styles from './style.module.scss'

import Card from '../layouts/Card'
import Section from '../layouts/Section'

const Careers = ({ className }) => {
  const classProps = classNames(styles.careers, className)

  const { careers } = useDB()

  const Project = ({ name, description, startDate, endDate, which, techStacks }) => (
    <Section className={styles.project}>
      <span className={styles.title}>{name}</span>
      <div className={styles.wrap}>
        <div className={styles.descriptions}>
          {description.map((desc, index) => (
            <span className={styles.description} key={`description-inner-${index}`}>
              {desc}
            </span>
          ))}
        </div>
        <div className={styles.date}>
          <span className={styles.start}>{startDate} ~</span>
          <span className={styles.end}>{endDate}</span>
        </div>
      </div>
      <ul className={styles.whiches}>
        {which.map((w, index) => (
          <li className={styles.which} key={`which-${index}`}>
            {w}
          </li>
        ))}
      </ul>
      <div className={styles.techStacks}>
        {techStacks.map((ts, index) => (
          <span className={styles.techStack} key={`techStack-${index}`}>
            {ts}
          </span>
        ))}
      </div>
    </Section>
  )

  const Career = ({ name, department, position, startDate, endDate, description, projects }) => (
    <Section className={styles.career}>
      <div className={styles.headerWrapper}>
        <div className={styles.intro}>
          <span className={styles.title}>{name}</span>
          <span className={styles.department}>{department}</span>
          <span className={styles.position}>{position}</span>
        </div>
        <div className={styles.date}>
          <span className={styles.start}>{startDate} ~</span>
          {!!endDate && <span className={styles.end}>{endDate}</span>}
        </div>
        <div className={styles.descriptions}>
          {description.map((desc, index) => (
            <span className={styles.description} key={`description-${index}`}>
              {desc}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.projects}>{!!projects && projects.map((project, index) => Project(project))}</div>
    </Section>
  )

  return (
    <Card className={classProps} title={careers.title}>
      {careers.list.map((career, index) => Career(career))}
    </Card>
  )
}

export default Careers
