import styled from "styled-components";
import React,{useState, useEffect, useRef} from 'react';

const Camp = styled.div`
    display: inline-block;
    height:120px;
    overflow-y: hidden;
    width:100%;
    flex-grow:0;
    flex-shrink:0;
`

const Item = styled.div`
    width:32%;
    flex-grow:0;
    flex-shrink:0;
    &+&{
        margin-left: 30px;
    }
`

const Container = styled.div`
    display:flex;
    transition: 0.1s;
`
const Dot = styled.div`
    border-radius:50%;
    width: 10px;
    height: 10px;
    border: none;
    background: #CCCCCC;
    cursor: pointer;
    &+&{
        margin-left: 10px;
    }
`

const BootCamp = ({bootcamp}) => {
    const [dot, setDot] = useState([]);
    const slideRef = useRef();
    useEffect (() => {
        let page = [];
        [...Array(bootcamp.length-2)].map((n, idx) => {
            const newdot = {
                id:idx,
                move:34.5*idx,
                isSelected: idx===0?true:false
            };
            page = page.concat(newdot);
        });
        setDot(page);
        slideRef.current.style.transform = `translateX(-0%)`;
    },[]);

    const slide = (id, move) => {
        setDot(dot => 
            dot.map(dot => 
                dot.id === id?
                {...dot, isSelected:true}
                :
                {...dot, isSelected:false}
            )
        );
        slideRef.current.style.transform = `translateX(-${move}%)`;
    }

    return(
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <div style={{display:"flex", flexDirection:"row", overflowX:"hidden"}}>
            <Container ref={slideRef}>
                {bootcamp?.map((camp) => (
                    <Item>
                    <Camp key={camp.id}>
                        <img src={camp.url} style={{width:"100%", opacity:"0.3"}}/>
                        <p>{camp.department}</p>
                        <p>{camp.content}</p>
                    </Camp>
                    <p style={{marginTop:"-5px", color:"#33BB33"}}>{camp.department}</p>
                    <p style={{marginTop:"-15px", wordBreak:"keep-all"}}>{camp.content}</p>
                    </Item>
                ))}
            </Container>
        </div>
            <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                {dot?.map((dot) => {
                    return(
                        dot.isSelected?
                        <Dot key={dot.id} style={{background:"#33BB33"}} onClick={() => slide(dot.id, dot.move)}/>
                        :
                        <Dot key={dot.id} onClick={() => slide(dot.id, dot.move)}/>
                    )
                })}
            </div>
        </div>
    )
}
export default BootCamp;