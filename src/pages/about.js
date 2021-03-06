import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
import SEO from "../components/SEO"


const About = ({
  data: {
    about: { nodes },
  },
}) => {
  //deconsturct
  const { info, stack, title, image } = nodes[0]
  //return the layout with the section:
  return (
    <Layout>
      <SEO title="About me" description="about web developement" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {/* iterate over stacks */}
              {stack.map((item)=>{
return <span key={item.id}>{item.title}</span>
              })}

            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
