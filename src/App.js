import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state={
    poems: null,
    buttonVisible: false,
   
  }

componentDidMount (){
  fetch('http://localhost:6001/poems')
   .then(res =>res.json())
   .then(poems => this.setState({
     poems: poems
   }))
}

createPoem = (newPoem) => {
  fetch('http://localhost:6001/poems',{
    method: "POST",
    headers:{
      "Content-type":"application/json"
    },
    body: JSON.stringify({
      title: newPoem.title,
      author: newPoem.author,
      content: newPoem.content,
    })
  })
  .then(res=>res.json())
  .then(postedPoem => {
    this.setState({
      poems: [...this.state.poems, postedPoem]
    })
  })  
}

readPoem = (poem) => {
  this.setState({
    button: this.state
  })
}


  render() {
    return (
      <div className="app">
        <div className="sidebar">
    <button onClick={() => this.onClick}>{<NewPoemForm createPoem={this.createPoem}/> }Show/hide new poem form</button>
          {false && <NewPoemForm />}
        </div>
        <PoemsContainer poems ={this.state.poems} readPoem={this.readPoem}/>
      </div>
    );
  }
}

export default App;
