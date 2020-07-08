import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: null,
    displayPoems: null,
    isLoading: false,
    show: false
  }
  componentDidMount(){
  fetch('http://localhost:6001/poems')
  .then(res => res.json())
  .then(data => {
    console.log(data)
    this.setState({poems: data, displayPoems: data, isLoading: true  })
    console.log(this.state)
  })
}

addPoem = (e) =>{
  console.log(e.target.title.value)
  fetch('http://localhost:6001/poems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body:JSON.stringify(
      {
        title: e.target.title.value,
        author: e.target.author.value,
        content: e.target.content.value
      })
  })
  .then(res => res.json())
  .then(result => {
    this.setState({displayPoems: [...this.state.displayPoems, result]})
  })
}
  render() {
    if(!this.state.isLoading){
      return <h3>Loading...</h3>
    }
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={() =>{this.setState({show: !this.state.show})}}>Show/hide new poem form</button>
          {this.state.show? <NewPoemForm addPoem={this.addPoem}/>
          : null}
        </div>
        <PoemsContainer poems={this.state.displayPoems}/>
      </div>
    );
  }
}

export default App;
