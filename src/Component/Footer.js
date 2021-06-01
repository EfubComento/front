import styled from "styled-components";

const Category = styled.p`
    font-size:15px;
    font-weight:bold;
    margin-bottom: 20px;
`
const Content = styled.p`
    font-size:11px;
    color:#777777;
    word-break:keep-all;
    margin-top:-10px;
    margin-bottom: 15px;
`
const Info = styled.p`
    font-size:12px;
    color:#AAAAAA;
    word-break:keep-all;
    margin-top:-10px;
`
const Line = styled.div`
  border-bottom: 0.3px solid;
  border-color:#EEEEEE;
  width:1100px;
  margin-left:auto;
  margin-right:auto;
`

const Button = styled.button`
    width:100%;
    height:40px;
    border: 1px solid #CCCCCC;
    border-radius:5px;
    background: none;
    cursor: pointer;
`

const Footer = () => {
    return(
        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex", flexDirection:"row", width:"1100px", margin:"20px auto auto auto"}}>
                <div style={{width:"19%"}}>
                    <Category>코멘토</Category>
                    <Content>홈 | 회사 소개 | 인재 채용</Content>
                </div>
                <div style={{width:"27%"}}>
                    <Category>서비스</Category>
                    <Content>멘토링 콘텐츠 | 직무부트캠프 | 현직자 직무 VOD </Content>
                    <Content>AI 자기소개서 분석기 | 자기소개서 튜토리얼</Content>
                </div>
                <div style={{width:"27%"}}>
                    <Category>제휴문의</Category>
                    <Content>제휴 사용자 등록 | 온라인 멘토링 제휴</Content>
                    <Content>AI 자기소개서 분석기 제휴 | 직무부트캠프 제휴</Content>
                </div>
                <div style={{width:"27%"}}>
                    <div style={{display:"flex", flexDirection:"row"}}>
                    <Category style={{marginBottom:"10px"}}>고객센터</Category>
                    <p style={{fontSize:"8px", marginTop:"20px", marginLeft:"10px", color:"#999999"}}>※코로나 19로 전화상담이 제한됩니다.</p>
                    </div>
                    <Button>1:1 문의하기</Button>
                    <Content style={{marginTop:"5px", marginBottom:"30px"}}>운영시간 : 평일 10시 ~ 18시 30분 (주말, 공휴일 제외) 점심시간 : 12시 30분 ~ 14시</Content>
                </div>
            </div>
            <Line/>
            <div>
                <div style={{display:"flex", flexDirection:"row", width:"1100px", margin:"40px auto 100px auto"}}>
                    <div style={{width:"800px"}}>
                    <Info>대표: 이재성 ㅣ 03161 서울특별시 종로구 종로 51(종로2가, 종로타워), 24층 110호 ㅣ 070-4177-0804</Info>
                    <Info>사업자 등록번호 : 487-86-00195 통신판매업 신고번호 : 제 2021-서울종로-0324 호ㅣ직업정보제공 사업신고 : 서울청 제2018-18호</Info>
                    <Info>Copyright by (주)코멘토. All right reserved.</Info>
                    </div>
                    <div style={{marginLeft:"150px"}}>
                        <Content style={{marginTop:"10px"}}>이용약관 | 개인정보처리방침</Content>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;