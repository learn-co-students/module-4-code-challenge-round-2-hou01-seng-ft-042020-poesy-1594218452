import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
constructor() {
  super();
  this.state = {
    poems: [],
    show: false
  }

}

componentDidMount() {
  fetch("http://localhost:6001/poems/")
    .then(res => res.json())
    .then(data =>
      this.setState({
        poems: data,
        show: false
      }))
}

postPoem(poemObj) {
  const newPoem = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(poemObj)
  }
  fetch("http://localhost:6001/poems/", newPoem)
  .then(res => res.json())
  .then(data =>
    this.setState({
      poems: data,
      show:true
    }))
}


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={()=> this.state.show = !this.state.show}>  Show/hide new poem form
          
          </button>
          <NewPoemForm 
          postPoem = {this.postPoem}/>
        </div>
        <PoemsContainer poems= {this.state.poems}/>
      </div>
    );
  }
}

export default App;
