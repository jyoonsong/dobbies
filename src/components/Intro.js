/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import { Container, Row, Col } from 'react-bootstrap'
 import { StaticImage } from "gatsby-plugin-image"
 import { Link } from "gatsby"
 
 const Intro = () => {
 
   return (
    <section className="intro py-5 my-sm-5 my-0 px-1">
     <Container>
        <Row>
            <Col className="justify-content-center text-center pt-2">
                <StaticImage
                    className="avatar"
                    src={"../images/dobby1.png"}
                    alt="avatar of the dobbies"
                />
                <StaticImage
                    className="avatar"
                    src={"../images/dobby3.png"}
                    alt="avatar of the dobbies"
                />
                <StaticImage
                    className="avatar"
                    src={"../images/dobby6.png"}
                    alt="avatar of the dobbies"
                />
                <br className="d-md-none"/>
                <StaticImage
                    className="avatar"
                    src={"../images/dobby2.png"}
                    alt="avatar of the dobbies"
                />
                <StaticImage
                    className="avatar"
                    src={"../images/dobby4.png"}
                    alt="avatar of the dobbies"
                />
                <StaticImage
                    className="avatar"
                    src={"../images/dobby5.png"}
                    alt="avatar of the dobbies"
                />
                <StaticImage
                    className="avatar"
                    src={"../images/dobby7.png"}
                    alt="avatar of the dobbies"
                />
            </Col>
        </Row>
        <Row>
            <Col xs={12} md={{ span: 8, offset: 2 }} className="text-center mt-5">
                <h6 className="text-muted mb-4 font-weight-bold site-title">Humans, Computers, and Dobbies</h6>
                <small className="text-muted">
                    대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다. 국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다. 제2항과 제3항의 처분에 대하여는 법원에 제소할 수 없다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다. 대통령은 취임에 즈음하여 다음의 선서를 한다. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.
                </small>
                <div className="mt-4 mb-2">
                    <Link to="/about" className="text-primary arrow after">더 자세히 알아보기</Link>
                </div>
            </Col>
        </Row>

     </Container>
    </section>
   )
 }
 
 export default Intro
 