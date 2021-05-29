import styled from "styled-components";

const Camp = styled.div`
    width:200px;
    height:120px;
    border: 1px solid #333333;
    margin-left: 30px;
`

const BootCamp = () => {
    return(
        <div style={{display:"flex", flexDirection:"row"}}>
            <Camp/>
            <Camp/>
            <Camp/>
        </div>
    )
}
export default BootCamp;