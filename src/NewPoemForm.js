import React from "react";

class NewPoemForm extends React.Component {


  constructor () {
    super()
    this.state = {
      title: "",
      author: "",
      comment: ""
    }
  }


  handleChange = (e) => {
    // debugger
    this.setState({
      [e.target.name]: e.target.value
      
    })
    // console.log(this.state)
  }


  // handleSubmit = (e) => {
   
  // }



  render() {
    return (
      <form className="new-poem-form" onSubmit={(e) => this.props.handleSubmit(e, this.state)}>
        <input placeholder="Title" name="title" onChange={this.handleChange}/>
        <input placeholder="Author" name="author" onChange={this.handleChange}/>
        <textarea placeholder="Write your masterpiece here..." rows={10} name="comment" onChange={this.handleChange}/>
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
