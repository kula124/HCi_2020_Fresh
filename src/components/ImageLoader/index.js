import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImageLoader = ({imageName}) => {
    const data = useStaticQuery(graphql`
    query AllPhotos {
      allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}}) {
        edges {
          node {
            childImageSharp {
              fixed (width: 570) {
                originalName,
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  // Pronađi sliku
  const selectedImage = data.allFile.edges.find(el => el.node.childImageSharp.fixed.originalName === imageName)
  if (!selectedImage) {
    return <span>Slika nije nađena!</span>
  }
   return <Img fixed={selectedImage.node.childImageSharp.fixed} />
}

export default ImageLoader
