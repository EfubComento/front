import './App.css';
import styled from "styled-components";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import QnA from "./Component/QnA";
import BootCamp from "./Component/BootCamp";
import Main from "./asset/main.PNG";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {USER_SERVER} from "./Config";

const Title = styled.p`
  font-size:30px;
  font-weight:bold;
`

const Go = styled.a`
  color: #1E9EFF;
  text-decoration: none;
`
const Line = styled.div`
  border-bottom: 0.3px solid;
  height:100px;
  border-color:#EEEEEE;
`

function App() {
  const [qna , setQna] = useState([
    {
      id:1,
      company:"삼성전기",
      department: "영업관리",
      question_title:"5주 인턴 캠프 과정 자소서6주 인턴 캠프 과정 자소서",
      question_content: "영업관리 직무 5주인턴캠프를 신청한 취준생입니다. 5주인턴캠프에서의 수료가 면접 당락에 크리티컬한 영향을 주지 않는단 건 알고 있지만 그래도 뭐라도 해보면 도움이 되지 않을까 싶어서 지원을 하게 되었는데요. 해영업관리 직무 5주인턴캠프를 신청한 취준생입니다. 5주인턴캠프에서의 수료가 면접 당락에 크리티컬한 영향을 주지 않는단 건 알고 있지만 그래도 뭐라도 해보면 도움이 되지 않을까 싶어서 지원을 하게 되었는데요. 해",
      question_id:1,
      answer:[
          {
            answer_id:1,
            answer_content:"~~~",
          },
          {
            answer_id:2,
            answer_content:"~~~",
          }
      ]
    },
    {
      id:2,
      company:"모든 회사",
      department: "모든 직무",
      question_title:"6주 인턴 캠프 과정 자소서6주 인턴 캠프 과정 자소서",
      question_content: "안녕하세요 lg하우시스 영업관리 직무 1차 면접을 앞두고 있는 취준생입니다. 엘지 커리어스 공식 답변으로는 대리점 실적관리, 영업활동 지원, 영업 전략 기획 및 운영 / 상권 분석 및 마케팅 전략 수립, 시행을 맡게 된다고안녕하세요 lg하우시스 영업관리 직무 1차 면접을 앞두고 있는 취준생입니다. 엘지 커리어스 공식 답변으로는 대리점 실적관리, 영업활동 지원, 영업 전략 기획 및 운영 / 상권 분석 및 마케팅 전략 수립, 시행을 맡게 된다고",
      question_id:2,
      answer:[
        {
          answer_id:3,
          answer_content:"~~~",
        },
        {
          answer_id:4,
          answer_content:"~~~",
        }
      ]
    },
    {
      id:3,
      company:"모든 회사",
      department: "모든 직무",
      question_title:"7주 인턴 캠프 과정 자소서6주 인턴 캠프 과정 자소서",
      question_content: "제가 나이가 많은데 경력이 짧아서 걱정입니다... 공기업이 답일까요 ??? 34살 자격증 6개 특급 소방안전관리자 토익: 600이상 경력 : 시설관리 1년 10개월 공모전 수상 2곳(전공 x) 제 나이에 일반 취업은제가 나이가 많은데 경력이 짧아서 걱정입니다... 공기업이 답일까요 ??? 34살 자격증 6개 특급 소방안전관리자 토익: 600이상 경력 : 시설관리 1년 10개월 공모전 수상 2곳(전공 x) 제 나이에 일반 취업은",
      question_id:3,
      answer:[
        {
          answer_id:5,
          answer_content:"~~~",
        },
        {
          answer_id:6,
          answer_content:"~~~",
        }
      ]
    }
  ]);
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
  ]);

 /* useEffect (async () => {
    try{
      const response = await axios.get(`${USER_SERVER}/api/answer`);
      setQna(response.data);
    }
    catch(e){
      console.log("error");
    }
    try{
      const response = await axios.get(`${USER_SERVER}/api/bootcamp`);
      setBootcamp(response.data);
    }
    catch(e){
      console.log("error");
    }
  }, []);*/

  return (
    <div>
      <Header/>
      <div style={{height:"70px"}}></div>
      <img src={Main} style={{width:"100%"}}/>
      <div style={{display:"flex", flexDirection:"column"}}>
        <div style={{width:"1100px", marginLeft:"auto", marginRight:"auto"}}>
          <br/>
          <div>
            <Title>현직자를 통해 해결된 고민</Title>
            <p style={{marginTop:"-20px", marginLeft:"3px"}}>현직자의 경험과 정보를 통해 취업 고민을 해결하세요!</p>
            <QnA qna={qna}></QnA>
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
      <Line/>
      <Footer/>
    </div>
  );
}

export default App;
