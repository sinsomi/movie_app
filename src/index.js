import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//<App/>은 컴포넌트
//컴포넌트란? 리액트는 모든것이 컴포넌트로 작동함, html을 반환하는 함수
//JSX란 javascript안의 html -> App.js에 적힌 코드에 해당
//ReactDom은 하나의 컴포넌트만을 렌더링한다(크러므로 나머지 컴포넌트는 App.js안에넣기)
ReactDOM.render(<App />, document.getElementById("root"));
