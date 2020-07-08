import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state ={
    poems: [],
    displaypoems: [],
    showForm: false
  }
 

  addToDisplay = (e) =>{
    this.setState({
      displaypoems: [...this.state.displaypoems,e]
    })

  }

  componentDidMount(){
    fetch("http://localhost:6001/poems")
    .then(res => res.json())
    .then(poem => {
      this.setState({
        poems: poem,
        displaypoems: poem
      })
    })

  }

  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() => this.setState({showForm: !this.state.showForm}) }>Show/hide new poem form</button>
          {this.state.showForm ? <NewPoemForm displaypoems={this.state.displaypoems} addToDisplay={this.addToDisplay}/> : null}
        </div>
        <PoemsContainer displaypoems={this.state.displaypoems}/>
      </div>
    );
  }
}

export default App;
