import styled from "styled-components";

const Question = styled.div`
    width:33%;
    height:310px;
    border: 1px solid #DDDDDD;
    &+&{
        margin-left: 20px;
    }
`

const QnA = () => {
    return(
        <div style={{display:"flex", flexDirection:"row"}}>
            <Question/>
            <Question/>
            <Question/>
        </div>
    )
}
export default QnA;