import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/cyy_demo2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["很高兴认识你", "初次见面", "请多关照"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  const downloadFile = (url, filename) => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch(() => alert('Failed to download file.'));
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">欢迎关注 梦之蔷薇恋爱学园心跳大作战 我们将持续更新内容</span>
                  <h1>{`你好！我是蔡语扬`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "很高兴认识你", "初次见面", "请多关照" ]'><span className="wrap">{text}</span></span></h1>
                  <p>一名普通的女生蔡语扬，莫名其妙地升入了一个神秘的高中——梦之蔷薇心跳学院，诡异微妙的校园气氛，兀自匆匆行走的麻木人群，奇怪的老师同学……探索欲与好奇心交织，小心翼翼地观察与相处，她能从这所高中顺利拿到毕业资格吗？</p>
                  <div className="button-container">
                    <button onClick={() => window.location.href = 'https://pengtiantai2.github.io/rose'}>
                      开始游戏 <ArrowRightCircle size={20} />
                    </button>
                    <button onClick={() => downloadFile('https://github.com/pengtiantai2/pweb/raw/main/public/game-pc.zip', 'game-pc.zip')}>
                      下载PC版 <ArrowRightCircle size={20} />
                    </button>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
