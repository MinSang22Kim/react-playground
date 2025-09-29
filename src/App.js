/* eslint-disable */
import "./App.css";
import { useState } from "react";

function App() {
  const [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);

  // 글마다 좋아요 개수 관리
  const [따봉, 따봉변경] = useState([0, 0, 0]);

  // 가나다순 정렬
  const sortPosts = () => {
    const copy = [...글제목].sort();
    글제목변경(copy);
  };

  // 첫 번째 글 수정
  const editFirstPost = () => {
    const copy = [...글제목];
    copy[0] = "여자 코트 추천";
    글제목변경(copy);
  };

  // 좋아요 증가
  const increaseLike = (index) => {
    const copy = [...따봉];
    copy[index] += 1;
    따봉변경(copy);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h2>React Blog</h2>
      </div>

      <button onClick={sortPosts}>가나다순 정렬</button>
      <button onClick={editFirstPost}>글수정</button>

      {글제목.map((title, i) => (
        <div className="list" key={i}>
          <h4>
            {title}
            <span onClick={() => increaseLike(i)}> 👍 </span> {따봉[i]}
          </h4>
          <p>2월 17일 발행</p>
        </div>
      ))}

      <Modal title="제목" date="2월 17일" content="상세내용" />
    </div>
  );
}

// 모달을 재사용 가능하게 props로 받기
function Modal({ title, date, content }) {
  return (
    <div className="modal">
      <h4>{title}</h4>
      <p>{date}</p>
      <p>{content}</p>
    </div>
  );
}

export default App;
