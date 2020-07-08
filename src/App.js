import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  state = {
    poems: [],
    show:false,
    isLoading: true

  }

  componentDidMount(){
    fetch('http://localhost:6001/poems')
    .then(res => res.json())
    .then(poems => {
      this.setState({
        poems: poems,
        isLoading: false
      })
    })
  }

  showForm = () => {
    console.log("TEST", this.state.show)
    let newBoolean = !this.state.show
    this.setState({
      show: newBoolean
    })
  }

  addPoem = (e) => {
    e.preventDefault()
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: e.target[0].value,
        author: e.target[1].value,
        content: e.target[2].value,
      })
    }
    fetch('http://localhost:6001/poems', options)
    .then(res => res.json())
    .then(poem => {
      console.log("AAA",poem)
      this.setState({
        poems: [...this.state.poems, poem]
      })
    })
    e.target.reset()
  }

  deletePome = (pomeId) => {
    fetch(`http://localhost:6001/poems/${pomeId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then(() => {
      this.setState({
        poems: this.state.poems.filter(poem => poem.id !== pomeId)
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.isLoading
        ? <h4>Loading ...</h4>
        : <div className="app">
          <div className="sidebar">
            <button onClick={this.showForm}>Show/hide new poem form</button>
            {this.state.show && <NewPoemForm addPoem={this.addPoem}/>}
          </div>
          <PoemsContainer poems={this.state.poems} deletePome={this.deletePome}/>
        </div>}
        </div>
    );
  }
}

export default App;
