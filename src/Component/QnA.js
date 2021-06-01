import { useEffect, useState } from "react";
import styled from "styled-components";

const Question = styled.div`
    width:33%;
    height:330px;
    border: 1px solid #DDDDDD;
    &+&{
        margin-left: 20px;
    }
`
const Line = styled.div`
  border-bottom: 0.3px solid;
  border-color:#DDDDDD;
  width:80%;
  margin-left: auto;
  margin-right:auto;
`

const Company = styled.div`
    width:80%;
    max-height: 50%;
    overflow:hidden;
    margin:20px auto 20px auto;  
`

const Content = styled.p`
    display:-webkit-box;
    -webkit-line-clamp:6;
    -webkit-box-orient:vertical;
    margin-top:-5px;
    height: 100%;
    overflow:hidden;
    text-overflow:ellipsis;
    word-break:keep-all;
    white-space: normal;
`

const QnA = ({qna}) => {
    const [showedQnA, setShowedQnA] = useState([]);
    useEffect(()=>{
        setShowedQnA(qna.slice(0,3));
    },[]);

    return(
        <div style={{display:"flex", flexDirection:"row"}}>
            {showedQnA?.map(qna => {
                return(
                <Question key={qna.id}>
                    <Company>
                        <span style={{color:"#33BB33"}}>{qna.company}</span>
                        <span style={{color:"#CCCCCC"}}>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                        {qna.department}
                    </Company>
                    <Line/>
                    <Company>
                        <p style={{marginTop:"-5px", height: "25px", overflow:"hidden", textOverflow:"ellipsis", whiteSpace: "nowrap"}}>
                        <span style={{fontSize:"20px", color:"#22BB22"}}>Q. </span>
                        <span style={{fontSize:"18px", fontWeight:"bold"}}>{qna.question_title}</span>
                        </p>
                        <Content>{qna.question_content}</Content>
                    </Company>
                    <Company style={{marginTop:"-10px"}}>
                        <span style={{fontSize:"12px"}}>답변</span>
                        <span style={{fontSize:"12px", color:"#33BB33"}}>&nbsp;{qna.answer.length}</span>
                    </Company>
                </Question>
                );
            })}
        </div>
    )
}
export default QnA;