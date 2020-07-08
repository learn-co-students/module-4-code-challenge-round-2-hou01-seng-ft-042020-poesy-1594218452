import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    showSideBar: false,
    favorites: []
  }

  componentDidMount() {
    fetch('http://localhost:6001/poems')
      .then(res => res.json())
      .then(data => {
        this.setState({
          poems: data
        })
      })
  }


  createPoem = (newPoem) => {
    fetch('http://localhost:6001/poems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPoem)
    })
    .then(res=>res.json())
    .then(newPoem => {
      this.setState({
        poems: [...this.state.poems, newPoem],
      })
    })
  }



  handleSideBar = () => {
    this.state.showSideBar?
    this.setState({
      showSideBar: false
    })
    : this.setState({
      showSideBar: true
    })
  }

  render() {
    console.log("inside app render:", this.state.poems)
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={()=>this.handleSideBar()}>Show/hide new poem form</button>
          {/* {false && <NewPoemForm />} */}
           {this.state.showSideBar ? <NewPoemForm onSubmit={this.createPoem}/> : null } 
        </div>
        <PoemsContainer poems={this.state.poems} favorites={this.state.favorites}/>
      </div>
    );
  }
}

export default App;
