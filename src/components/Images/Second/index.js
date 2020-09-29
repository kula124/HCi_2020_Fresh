import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Second = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "druga.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
   return (
   <div style={{maxWidth: "800px", minWidth: "300px"}}> 
     <Img fluid={data.myImage.childImageSharp.fluid} />
   </div>)
}

export default Second