// import logo from './logo.svg';
// import './App.css';
import './css/Style.css';
import iexo2 from './exo2.jpg';

function App() {

  // css 문법을 넣을 수 있음.(잘 안 함.)
  // css 문법 내부 링크 방식.
  // - 문법 구조가 틀림, style={title1} 변수를 입력 적용

  // css 문법 외부 링크 방식을 선호함.
  // var : 예전 버전의 변수 선언
  // let : 최근 버전의 변수 선언
  // const : 최근 버전의 상수 선언
  const title1 = {
    // textAlign : 'center',
    // backgroundColor : 'yellow',
    // fontSize:'40px',

  }

  return (
    <>
      <div className="App">
        <h2 className='main' style={title1}>메인페이지</h2>
        {/* public 폴더에서 절대 링크 사용 방법 */}
        <img src='/images/exo.jpg'/>
        {/* src 폴더에서 import 사용 방법 */}
        <img src={iexo2}/>

      </div>
    </>
  );
}

export default App;
