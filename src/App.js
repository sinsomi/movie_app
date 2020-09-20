import React from "react";
import PropTypes from "prop-types";

// jsx의 문법은 html과 매우 유사
// props,컴포넌트, 클래스 개념 숙지
//App이라는 클래스는 React클래스의 컴포넌트들을 가짐
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
