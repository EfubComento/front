import styled from "styled-components";
import logo from "../asset/Comento_logo.png";
import { AiOutlineSearch } from "react-icons/ai";

const Wrapper = styled.div`
    height:70px;
    width:1100px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    svg{
        margin-left:-35px;
        margin-top:10px;
        color:#33BB33;
        font-size:25px;
        &:hover{
            cursor:pointer;
        }
    }
`
const ButtonGroup = styled.div`
    display:flex;
    flex-direction: row;
    margin-left: 20px;
`
const Button = styled.button`
    background: none;
    color: ${props => props.color || "#BBBBBB"};
    border:none;
    font-size: ${props => props.fontSize || "15px"};
    font-weight: ${props => props.fontWeight || "500"};
    margin-left:7px;
    &:hover{
        color: ${props => props.hovercolor || "#BBBBBB"}
    }
`
const Input = styled.input`
    height:30px;
    width: 230px;
    background:#FAFBFC;
    border:none;
    margin-top:5px;
    margin-left:15px;
    padding-left:10px;
    ::placeholder{
        color: #AAAAAA;
    }
`


const Header = () => {
    return(
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <Wrapper>
                <div style={{display:"flex", flexDirection:"row"}}>
                <img src={logo} style={{height:"40px"}}/>
                <Input placeholder="직무명, 회사명, 취업고민"></Input>
                <AiOutlineSearch/>
                </div>
                <div style={{display:"flex", flexDirection:"row"}}>
                <ButtonGroup>
                    <Button color="#777777" hovercolor="#00CC00">멘토링</Button>
                    <Button color="#777777" hovercolor="#00CC00">직무부트캠프</Button>
                    <Button color="#777777" hovercolor="#00CC00">직무VOD</Button>
                    <Button color="#777777" hovercolor="#00CC00">답변하기</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button fontSize="14px" fontWeight="400">가입/로그인</Button>
                    <Button fontSize="14px" fontWeight="400">제휴</Button>
                    <Button fontSize="14px" fontWeight="400">쿠폰</Button>
                </ButtonGroup>
                </div>
            </Wrapper>
        </div>
    )
}

export default Header;