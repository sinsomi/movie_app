import React from "react";
import PropTypes from "prop-types";

const likeIt = [
  {
    id: 1,
    name: "flower",
    color: "all",
    rating: 3,
  },
  {
    id: 2,
    name: "sky",
    color: "blue",
    rating: 4.2,
  },
  {
    id: 3,
    name: "han-river",
    color: "green",
    rating: 3.9,
  },
];

//Fav라는 컴포넌트
function Fav({ name, col }) {
  return (
    <div>
      <h1>I love {name}</h1>
      <h3>It is {col}</h3>
    </div>
  );
}

// jsx의 문법은 html과 매우 유사
// props,컴포넌트 개념 숙지
//App은 부모 컴포넌트, Fav라는 자식 컴포넌트를 갖고있음
function App() {
  return (
    <div>
      {/* key,name,item은 Fav라는 컴포넌트의 props임 */}
      {likeIt.map((item) => (
        <Fav key={item.id} name={item.name} col={item.color} />
      ))}
    </div>
  );
}

export default App;
