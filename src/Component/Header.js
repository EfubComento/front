import styled from "styled-components";
import logo from "../asset/Comento_logo.png";

const Wrapper = styled.div`
    height:70px;
    width:100%auto;
    display:flex;
`

const Header = () => {
    return(
        <Wrapper>
            <img src={logo} style={{height:"50%"}}/>
            <input style={{height:"50%", background:"#EEEEEE", border:"none"}}/>
            &emsp;&emsp;멘토링 직무부트캠프 직무VOD 답변하기 &emsp;가입/로그인 제휴 쿠폰
        </Wrapper>
    )
}

export default Header;