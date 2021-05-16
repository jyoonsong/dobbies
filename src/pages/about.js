import * as React from "react"
import { graphql } from "gatsby"
import { CardColumns, Card, Container, Jumbotron } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About us" />

      <Jumbotron fluid>
        <Container>
            <StaticImage
                className="avatar"
                src={"../images/palette.png"}
                alt="palette icon"
            />
            <h1 className="mt-2 font-weight-bold">HCI and the Seven Dobbies</h1>
            <p>영어로 써야할지 한국어로 써야할지 모르겠네요.</p>
            <small className="text-muted">
            대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다. 제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다. 대통령은 취임에 즈음하여 다음의 선서를 한다. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.
            </small>
        </Container>
      </Jumbotron>

      {/* what we do */}
      <section className="pt-4 pb-3">
        <Container>
          <h5 className="text-muted mb-4 mt-2 pl-1"> What we do</h5>
          <CardColumns>
            <Card>
                <Card.Body>
                <Card.Title>Card title that wraps to a new line</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card bg="primary" text="white" className="text-center p-3">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card className="text-center">
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className="text-right">
                <blockquote className="blockquote mb-0 card-body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                    erat a ante.
                </p>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                    </small>
                </footer>
                </blockquote>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                </Card.Text>
                <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Text>
                </Card.Body>
            </Card>
          </CardColumns>
        </Container>
      </section>

      <section>
          <Container>
            <h5 className="text-muted mb-4 mt-5 pt-4 pl-1"> How to join</h5>
            <div className="pl-2 pr-3">
                <small>
                아이들의 어머니, 너무나 있습니다. 남은 동경과 까닭이요, 이름과, 파란 마리아 거외다. 파란 봄이 나는 슬퍼하는 가을로 까닭입니다. 남은 이런 못 밤을 토끼, 나는 추억과 했던 보고, 까닭입니다. 잔디가 했던 오면 위에 이름과, 봄이 있습니다. 노새, 말 겨울이 하나에 까닭입니다. 토끼, 이름을 청춘이 사랑과 이름자를 노새, 있습니다. 써 자랑처럼 쉬이 언덕 위에 계십니다. 소학교 시인의 슬퍼하는 쉬이 어머님, 오면 거외다.
                아이들의 어머니, 너무나 있습니다. 남은 동경과 까닭이요, 이름과, 파란 마리아 거외다. 파란 봄이 나는 슬퍼하는 가을로 까닭입니다. 남은 이런 못 밤을 토끼, 나는 추억과 했던 보고, 까닭입니다. 잔디가 했던 오면 위에 이름과, 봄이 있습니다. 노새, 말 겨울이 하나에 까닭입니다. 토끼, 이름을 청춘이 사랑과 이름자를 노새, 있습니다. 써 자랑처럼 쉬이 언덕 위에 계십니다. 소학교 시인의 슬퍼하는 쉬이 어머님, 오면 거외다.
                아이들의 어머니, 너무나 있습니다. 남은 동경과 까닭이요, 이름과, 파란 마리아 거외다. 파란 봄이 나는 슬퍼하는 가을로 까닭입니다. 남은 이런 못 밤을 토끼, 나는 추억과 했던 보고, 까닭입니다. 잔디가 했던 오면 위에 이름과, 봄이 있습니다. 노새, 말 겨울이 하나에 까닭입니다. 토끼, 이름을 청춘이 사랑과 이름자를 노새, 있습니다. 써 자랑처럼 쉬이 언덕 위에 계십니다. 소학교 시인의 슬퍼하는 쉬이 어머님, 오면 거외다.
                아이들의 어머니, 너무나 있습니다. 남은 동경과 까닭이요, 이름과, 파란 마리아 거외다. 파란 봄이 나는 슬퍼하는 가을로 까닭입니다. 남은 이런 못 밤을 토끼, 나는 추억과 했던 보고, 까닭입니다. 잔디가 했던 오면 위에 이름과, 봄이 있습니다. 노새, 말 겨울이 하나에 까닭입니다. 토끼, 이름을 청춘이 사랑과 이름자를 노새, 있습니다. 써 자랑처럼 쉬이 언덕 위에 계십니다. 소학교 시인의 슬퍼하는 쉬이 어머님, 오면 거외다.<br/><br/>
                아이들의 어머니, 너무나 있습니다. 남은 동경과 까닭이요, 이름과, 파란 마리아 거외다. 파란 봄이 나는 슬퍼하는 가을로 까닭입니다. 남은 이런 못 밤을 토끼, 나는 추억과 했던 보고, 까닭입니다. 잔디가 했던 오면 위에 이름과, 봄이 있습니다. 노새, 말 겨울이 하나에 까닭입니다. 토끼, 이름을 청춘이 사랑과 이름자를 노새, 있습니다. 써 자랑처럼 쉬이 언덕 위에 계십니다. 소학교 시인의 슬퍼하는 쉬이 어머님, 오면 거외다.
                아이들의 어머니, 너무나 있습니다. 남은 동경과 까닭이요, 이름과, 파란 마리아 거외다. 파란 봄이 나는 슬퍼하는 가을로 까닭입니다. 남은 이런 못 밤을 토끼, 나는 추억과 했던 보고, 까닭입니다. 잔디가 했던 오면 위에 이름과, 봄이 있습니다. 노새, 말 겨울이 하나에 까닭입니다. 토끼, 이름을 청춘이 사랑과 이름자를 노새, 있습니다. 써 자랑처럼 쉬이 언덕 위에 계십니다. 소학교 시인의 슬퍼하는 쉬이 어머님, 오면 거외다.
                아이들의 어머니, 너무나 있습니다. 남은 동경과 까닭이요, 이름과, 파란 마리아 거외다. 파란 봄이 나는 슬퍼하는 가을로 까닭입니다. 남은 이런 못 밤을 토끼, 나는 추억과 했던 보고, 까닭입니다. 잔디가 했던 오면 위에 이름과, 봄이 있습니다. 노새, 말 겨울이 하나에 까닭입니다. 토끼, 이름을 청춘이 사랑과 이름자를 노새, 있습니다. 써 자랑처럼 쉬이 언덕 위에 계십니다. 소학교 시인의 슬퍼하는 쉬이 어머님, 오면 거외다.
                </small>
            </div>
          </Container>
      </section>

    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
