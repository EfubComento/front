import styled from "styled-components";

const Footer = () => {
    return(
        <div>
            <div style={{display:"flex", flexDirection:"row"}}>
                <div style={{width:"25%"}}>
                    <h3>코멘토</h3>
                    홈 | 회사소개 | 인재채용
                </div>
                <div style={{width:"25%"}}>
                    <h3>서비스</h3>
                    멘토링 콘텐츠
                    직무부트캠프
                    현직자 직무 VOD
                    AI 자기소개서 분석기
                    자기소개서 튜토리얼
                </div>
                <div style={{width:"25%"}}>
                    <h3>제휴문의</h3>
                    제휴 사용자 등록
                    온라인 멘토링 제휴
                    AI 자기소개서 분석기 제휴
                    직무부트캠프 제휴
                </div>
                <div style={{width:"25%"}}>
                    <h3>고객센터</h3>
                </div>
            </div>
            <br/>
            <div>
            대표: 이재성 ㅣ 03161 서울특별시 종로구 종로 51(종로2가, 종로타워), 24층 110호 ㅣ 070-4177-0804
            사업자 등록번호 : 487-86-00195 통신판매업 신고번호 : 제 2021-서울종로-0324 호ㅣ직업정보제공 사업신고 : 서울청 제2018-18호
            Copyright by (주)코멘토. All right reserved.
            </div>
        </div>
    )
}
export default Footer;