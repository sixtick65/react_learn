import { Component } from "react"; // 명명된 가져오기 react에서 Component 클래스를 가져옴. react.component
// 클래스형 컴포넌트
// 클래스형 컴포넌트는 React.Component 클래스를 상속받아 만들어진 컴포넌트입니다.
// render() 메서드를 반드시 구현해야 하며, JSX를 반환합니다.
class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Class Component!!</h1>
      </div>
    );
  }
}

export default ClassComponent; // 다른 파일에서 이 컴포넌트를 사용할 수 있도록 내보냄. 오호~