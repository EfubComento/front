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
  const [qna , setQna] = useState([]);
  const [bootcamp, setBootcamp] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect (async () => {
    if(isLoaded){
      console.log("data is loaded");
    }
    else{
      try{
      const response1 = await axios.get(`/api/post`);
      setQna(response1.data);
      }
      catch(e){
        console.log("error");
      }
      try{
        const response2 = await axios.get(`/api/bootcamp`);
        setBootcamp(response2.data);
      }
      catch(e){
        console.log("error");
      }
      setIsLoaded(true);
    }
  }, [qna, bootcamp, isLoaded]);

  return (
    <div>
      <Header/>
      <div style={{height:"70px"}}></div>
      <img src={Main} style={{width:"100%"}}/>
      {qna.length!==Number(0) && bootcamp.length!==Number(0)? 
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
      :
      <div></div>
      }
      <Line/>
      <Footer/>
    </div>
  );
}

export default App;
