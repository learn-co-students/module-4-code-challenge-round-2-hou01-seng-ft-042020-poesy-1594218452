import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {

  constructor () {
    super ()
    this.state = {
      poems: [],
      displayPoems: [],
      show: false,
      readStatus: false
    }
  }


  componentDidMount() {
    fetch('http://localhost:6001/poems')
      .then(res=>res.json())
      .then(data => {
        this.setState({
          poems: data,
          displayPoems: data
        })
        // console.log(data)
      })
  }


  showForm = () => {
    // debugger
    this.setState({
      show: !this.state.show
    })
    console.log(this.state.show)

  }


  changeStatus = () => {
    // debugger
    this.setState({
      readStatus: !this.state.readStatus
    })
    console.log(this.state.readStatus)
  }


  handleSubmit = (e, obj) => {
    e.preventDefault()
    // console.log(obj)
    fetch('http://localhost:6001/poems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        obj
      })
    })
      .then(res=>res.json())
      .then(newObj => {
        console.log(newObj)
        // this.setState({
        //   displayPoems: [...this.state.displayPoems, newObj]
        // })
      })
  }


  render() {
    return (
      <div className="app">
        <div className="sidebar">
          <button onClick={this.showForm}>Show/hide new poem form</button>
          {this.state.show && <NewPoemForm handleSubmit={this.handleSubmit}/>}
        </div>
        <PoemsContainer displayPoems={this.state.displayPoems} changeStatus={this.changeStatus} status={this.state.readStatus}/>
      </div>
    );
  }
}

export default App;
