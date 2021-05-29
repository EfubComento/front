import styled from "styled-components";

const Question = styled.div`
    width:200px;
    height:250px;
    border: 1px solid #333333;
    margin-left: 30px;
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