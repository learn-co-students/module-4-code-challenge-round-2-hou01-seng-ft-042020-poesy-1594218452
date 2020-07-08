import React from "react";

class NewPoemForm extends React.Component {

  state={
    title: "",
    author: "",
    content: "",
  }
  handleChange =(e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
    
  }

  handleClick = (e) => {
   e.preventDefault()
   this.props.createPoem(this.state)
   this.setState({
    title: '',
    author: '',
    content: ''
  })
  }

  render() {
    return (
      <form className="new-poem-form">
        <input name="title" onChange={this.handleChange} value={this.state.title}    placeholder="Title" />
        <input name="author" onChange={this.handleChange}  value={this.state.author}     placeholder="Author" />
        <textarea name="content" onChange={this.handleChange}  value={this.state.content}  placeholder="Write your masterpiece here..." rows={10} />
        <input onClick={this.handleClick}  type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
