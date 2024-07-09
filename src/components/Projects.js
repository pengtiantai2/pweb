import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/sin.png";
import projImg2 from "../assets/img/urin.png";
import projImg3 from "../assets/img/ter.png";
import pythonImg from "../assets/img/python.png";
import renpyImg from "../assets/img/Renpy.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Ter",
      description: "蔷薇恋爱学园的生物老师",
      imgUrl: projImg1,
    },
    {
      title: "Urin",
      description: "沉默寡言的地雷男",
      imgUrl: projImg2,
    },
    {
      title: "Sin",
      description: "看上去倍受欢迎的数学男",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>情报</h2>
                <p>这里将发布目前公开的情报</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">人物设定</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">技术实现</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">创作背景</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>基于Python，使用Ren'py引擎实现文本、图像和音频的交互</p>
                      <Container>
                        <Row className="justify-content-center">
                          <Col xs="auto" className="d-flex justify-content-center">
                            <img src={renpyImg} alt="another" style={{ width: '100px', height: 'auto' }} />
                          </Col>
                        </Row>
                      </Container>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>这部作品《梦之蔷薇恋爱学园心跳大作战》深受我表妹的创意和画作启发。作为一名画师，她经常向我展示她那些充满思妙想的demo作品，一个晚上她向我展示了她在学校里画的以假乱真版《梦之蔷薇恋爱学园心跳大作战》。所以我们一拍即合，将其转化为一部视觉小说。我的团队负责编写故事和情节和程序代码，而表妹则继续为作品提供她独特的艺术风格和创意输入。《梦之蔷薇恋爱学园心跳大作战》想要通过丰富多彩的角色和离奇趣味的情节，为读者带来愉悦的阅读体验，同时也反映出我们对创意和艺术的共同热爱与探索精神。</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
