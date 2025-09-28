/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { use, useState } from "react";

function App() {

  let post = "강남 우동 맛집";
  let [글제목, b] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
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
      <div className="list">
        <h4>{글제목[0]}<span>좋아요</span> {따봉} </h4>
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
    </div>
  );
}

export default App;
