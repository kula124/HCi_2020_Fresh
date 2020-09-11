import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImagePool = () => {
    const data = useStaticQuery(graphql`
        query {
          myImages: allInstaNode(limit: 24, filter: {mediaType: {eq: "GraphImage"}}) {
            edges {
              node {
                localFile {
                  childImageSharp {
                    fixed(width: 320 height: 190) {
                        ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
    `)
    return (
    <div>
        {data.myImages.edges.map(edge =>
          <Img fixed={edge.node.localFile.childImageSharp.fixed} />
        )}
    </div>
    )
}

export default ImagePool