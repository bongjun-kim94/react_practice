import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Hello World!</h1>
      <FuncComp />
      <ClassComp />
    </div>
  );
}

// 함수형 컴포넌트
function FuncComp() {
  return (
    <div className="container">
      <h2>function style component</h2>
    </div>
  );
}

// 클래스형 컴포넌트
class ClassComp extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
      </div>
    );
  }
}

export default App;
