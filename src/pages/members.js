import * as React from "react"
import { graphql } from "gatsby"
import { CardColumns, Card, Container, Jumbotron } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Members = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  console.log(data.allYaml.edges[0].node.img)

  return (
    <Layout location={location} title={siteTitle}>
    <Seo title="About us" />

    <>
      <Jumbotron fluid>
        <Container>
            <StaticImage
                className="avatar members"
                src={"../images/members.png"}
                alt="members icon"
            />
            <h1 className="mt-2">Members</h1>
            <p>위에 뭔가 아이콘같은 걸 넣긴 넣을텐데 마땅한 게 아직 없어 이모지를 넣었어요.</p>
            <small className="text-muted">
            대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다. 제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다. 대통령은 취임에 즈음하여 다음의 선서를 한다. 
            </small>
        </Container>
      </Jumbotron>

      {/* what we do */}
      <section className="pt-4 pb-3">
        <Container>
          <CardColumns>
            {data.allYaml.edges.map((member, i) => 
                <Card key={i}>
                    <Card.Body>
                    <Img
                        className="mb-2 avatar"
                        fluid={member.node.img.childImageSharp.fluid}
                        alt="profile image"
                    />
                    
                    <Card.Title>{member.node.name}</Card.Title>
                    <small className="text-muted">
                        {member.node.introduction}
                    </small>
                    <Card.Text className="mt-2">
                        <small className="text-primary">
                            {member.node.keywords.map((keyword, i, arr) => {
                                const text = arr.length - 1 === i ? keyword : keyword + "; "
                                return <span key={i}>{text}</span>
                            })}
                        </small>
                    </Card.Text>
                    </Card.Body>
                </Card>
            )}
          </CardColumns>
        </Container>
      </section>
    </>

    </Layout>
  )
}

export default Members

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allYaml {
        edges {
            node {
                name
                introduction
                keywords
                img {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
  }
`
