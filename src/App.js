import './App.css';
import styled from "styled-components";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import QnA from "./Component/QnA";
import BootCamp from "./Component/BootCamp";
import Main from "./asset/main.PNG";
import React, {useState} from 'react';

const Title = styled.p`
  font-size:30px;
  font-weight:bold;
`

const Go = styled.a`
  color: #1E9EFF;
  text-decoration: none;
`

function App() {

  const [bootcamp, setBootcamp] = useState([
    {
      id:1,
      url:"https://cdn.comento.kr/edu/title_VqpCfdRerh.png?s=960x502",
      department:"미디어",
      content:"OTT 컨텐츠 배급 A to Z"
    },
    {
      id:2,
      url:"https://cdn.comento.kr/edu/title_d6qbkpIm39.jpg?s=960x502",
      department:"항공",
      content:"미리 받아보는 지상직 신입교육"
    },
    {
      id:3,
      url:"https://cdn.comento.kr/edu/title_xnhhjbYKIj.jpg?s=960x502",
      department:"마케팅",
      content:"IT 스타트업과 외국계를 경험한 멘토와 브랜드마케팅 실무 경험하기"
    },
    {
      id:4,
      url:"https://cdn.comento.kr/edu/title_58f897ca1ab3a5aa.jpg?s=960x502",
      department:"기획",
      content:"통신사, IT기업의 마케팅&신상품기획 실무 체험 AtoZ"
    },
    {
      id:5,
      url:"https://cdn.comento.kr/edu/title_7abe53d9cd437d37.jpg?s=960x502",
      department:"MD/상품기획",
      content:"브랜드 분석부터 판매율관리까지 패션MD 실무 A to Z"
    },
  ])

  return (
    <div>
      <Header/>
      <img src={Main} style={{width:"100%"}}/>
      <div style={{display:"flex", flexDirection:"column"}}>
        <div style={{width:"1100px", marginLeft:"auto", marginRight:"auto"}}>
          <br/>
          <div>
            <Title>현직자를 통해 해결된 고민</Title>
            <p style={{marginTop:"-20px", marginLeft:"3px"}}>현직자의 경험과 정보를 통해 취업 고민을 해결하세요!</p>
            <QnA></QnA>
            <br/>
            <div style={{display:"flex", justifyContent:"flex-end"}}>
              <Go href="">멘토링 사례 더보기</Go>
            </div>
          </div>
          <br/>
          <br/>
          <div>
            <Title>모집중인 직무부트캠프</Title>
            <p style={{marginTop:"-20px", marginLeft:"3px"}}>검증된 현직자 멘토가 참여하는 직무부트캠프에 참여하세요!</p>
            <BootCamp bootcamp = {bootcamp}></BootCamp>
            <br/>
            <div style={{display:"flex", justifyContent:"flex-end"}}>
            <Go href="">직무부트캠프 더보기</Go>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
