import React from 'react'
import useDB from '../../hooks/useDB'
import classNames from 'classnames'

import Card from '../layouts/Card'

import styles from './style.module.scss'

import EmailIcon from '../../assets/email.svg'
import GithubIcon from '../../assets/github.svg'
import PhoneIcon from '../../assets/phone.svg'
import BlogIcon from '../../assets/blog.svg'

const Introduce = ({ className }) => {
  const classProps = classNames(styles.introduce, className)
  const { config } = useDB()

  return (
    <Card className={classProps} title='이력서'>
      <span className={styles.title1}>웹 프론트엔드 개발자</span>
      <span className={styles.title2}>마광휘</span>
      {/* <span className={styles.title3}>이력서</span> */}
      <div className={styles.descriptions}>
        <p className={styles.description}>사용자가 좋아하는 서비스를 만들고 싶은 개발자 마광휘입니다.</p>
        <p className={styles.description}>최근에는 협업, 디자인 시스템, 컴포넌트 분리에 관심이 많습니다.</p>
      </div>
      <div className={styles.iconWrap}>
        <a className={styles.link} href={config.github}>
          <img className={styles.img} src={GithubIcon} alt='github-icon' />
        </a>
        <a className={styles.link} href={`mailto:${config.email}`}>
          <img className={styles.img} src={EmailIcon} alt='email-icon' />
        </a>
        <a className={styles.link} href={`tel:${config.phone}`}>
          <img className={styles.img} src={PhoneIcon} alt='phone-icon' />
        </a>
        <a className={styles.link2} href={config.blog1}>
          <img className={styles.img} src={BlogIcon} alt='blog-icon' />
        </a>
        <a className={styles.link2} href={config.blog2}>
          <img className={styles.img} src={BlogIcon} alt='blog-icon' />
        </a>
      </div>
    </Card>
  )
}

export default Introduce
