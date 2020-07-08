import React from "react";
import "./App.css";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

class App extends React.Component {
  state = {
    poems: [],
    showSideBar: false
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




  // const Search = () => {
  //   const [showResults, setShowResults] = React.useState(false)
  //   const onClick = () => setShowResults(true)
  //   return (
  //     <div>
  //       <input type="submit" value="Search" onClick={onClick} />
  //       { showResults ? <Results /> : null }
  //     </div>
  //   )
  // }
  
  // const Results = () => (
  //   <div id="results" className="search-results">
  //     Some Results
  //   </div>
  // )


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
        <PoemsContainer poems={this.state.poems}/>
      </div>
    );
  }
}

export default App;
