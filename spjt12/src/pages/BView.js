import React,{useEffect, useState} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BView = () => {

    const {id} = useParams();
    const navigate = useNavigate(); //페이지 이동
    const [board, setBoard] = useState({});
    console.log("넘어온 id : ", id);

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log("BView : ",res.data);
            setBoard(res.data)//useState 변수에 입력

        })
    },[id]

    )

    const delBtn = () => {
        if(window.confirm(`${id}게시글 삭제하시겠습니까?`)){
            console.log('');
        }
    }

    return(
        <div className="root">
          <h2>BView 상세보기</h2>
           <div className="card">
                <img src="/images/nct1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">제목 : {board.title}</h5>
                    <p className="card-text">{board.body}</p>
                </div>
            </div>
            <button type="button" onClick={()=>navigate('/board;bList')} class="btn btn-info">목록</button>
            <button type="button" class="btn btn-light">수정</button>
            <button type="button" onClick={()=>delBtn(board.id)} class="btn btn-dark">삭제</button>
        </div>
    )
}
export default BView;