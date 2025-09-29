/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { use, useState } from "react";

function App() {

  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);

  function 함수() {
    c(따봉 + 1);
    console.log(따봉);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h2>React Blog</h2>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        글제목변경(copy.sort());
      }}>가나다순 정렬</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <div className="list">
        <h4>{글제목[0]}<span> 좋아요</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}<span onClick={() => { 따봉변경(따봉 + 1) }}>👍️</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}<span>좋아요</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>

      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
