import logo from './logo.svg';
import React, {useState, useEffect,useRef} from 'react'
import './App.css';
import './css/Style.css';



function App() {

  
  // useState 변수 - 특징 : 값이 변경되면 전체 reload됨
  const [cnt, setCnt] = useState(0);
  const [id, setID] = useState(0);

  // useRef변수 - 특징 : 값이 변경되어도 reload되지 않음, reload되어도 값을 유지
  // useRef : current 키에 값을 저장 cntRef.current
  const cntRef = useRef(10);


  // 최초 실행시 실행됨.
  useEffect(
    ()=> {
      console.log("최초 실행시 실행")
    },[cnt]
  );
  // 최초 1회만 실행됨.
  useEffect(
      ()=> {
        console.log("1회만 실행")
      },[]
    );



  let count = 0; //일반변수 - 특징 : reload되면 값이 리셋됨.

  // useState 변수 값 출력
  const cntBtn = () =>{
    setCnt(cnt+1);
    console.log("cnt : ", cnt);
    // 일반변수 변수값 출력
    console.log("count : ", count);
    // useRef값 출력
    console.log("refcount : ", cntRef)

    // 일반변수 변수값 출력 방식
    // count += 1;
    // console.log("count : ", count);
    // document.getElementById('main').innerText = count;
  }
  const countBtn = () =>{
    //일반변수 값 출력
    count += 1;
    console.log("count : ",count)
    setID('bbb'+count);
    console.log("id", id);
  }


  //useRef 변수 값 출력
  const refBtn = () =>{
    cntRef.current += 1;
    console.log("refcount : ",cntRef.current)
  }

  return (
    <div className="root">
      <div className='txt' id='main'>{cnt}</div>
      <button onClick={cntBtn}>useState확인</button>
      <button onClick={countBtn}>일반변수확인</button>
      <button onClick={refBtn}>useRef확인</button>

    </div>
  );
}

export default App;
