import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

import TitleImage from '../../components/TitleImage'
import InquiryBlock from '../../components/InquiryBlock'

import styles from './style.module.css'

const TitlePage = () => {
    const data = useStaticQuery(graphql`query 
    {
        desktop: file(relativePath: { eq: "titleImage.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `)
    return (
        <BackgroundImage
        Tag="section"
        className={styles.titlePage}
        fluid={data.desktop.childImageSharp.fluid}
        backgroundColor={`#040e18`}>
            <TitleImage />
            <InquiryBlock />
        </BackgroundImage>
    )
}

export default TitlePage