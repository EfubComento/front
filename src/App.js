import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import QnA from "./Component/QnA";
import BootCamp from "./Component/BootCamp";
import Main from "./asset/main.PNG";
function App() {
  return (
    <div>
      <Header/>
      <img src={Main} style={{width:"100%"}}/>
      <div>
      <p>현직자를 통해 해결된 고민</p>
      <p>현직자의 경험과 정보를 통해 취업 고민을 해결하세요!</p>
      <QnA></QnA>
      <a href="">멘토링 사례 더보기</a>
      </div>
      <div>
        <p>모집중인 직무부트캠프</p>
        <p>검증된 현직자 멘토가 참여하는 직무부트캠프에 참여하세요!</p>
        <BootCamp></BootCamp>
        <a href="">직무부트캠프 더보기</a>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
