import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState(""); // state의 현재 상태 = toDo, toDo를 변경(set)하는 함수 = setToDo
  const [toDos, setToDos] = useState([]); // toDo를 담을 빈 배열 state 선언.
  const onChange = (event) => {
    setToDo(event.target.value); // input으로 입력받은 값(~.value)을 setToDo를 이용하여 toDo에 할당해준다.
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]); // 배열 안에 '...'을 해줌으로써 이전 배열의 요소들을 담은 새 배열을 만듦.
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos : {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange} // input 안의 값이 변할 때 onChange를 실행한다.
          value={toDo} // state의 toDo와 input 안의 값이 연결되어 있음.
          text="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
