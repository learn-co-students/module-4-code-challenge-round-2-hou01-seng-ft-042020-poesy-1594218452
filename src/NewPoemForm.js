import React from "react";

class NewPoemForm extends React.Component {
  handleChange = (e) => {
  
    this.setState({
        [e.target.name]: e.target.value
    })
}
  newPoem = (e) => {
  e.preventDefault()

  fetch("http://localhost:6001/poems", {
      method: "POST",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({
          title: this.state.title,
          content: this.state.content,
          author: this.state.author
      })
  })
  .then(res => res.json())
  .then(poem => {
    this.props.addToDisplay(poem)
  })
}
  render() {
    return (
      <form className="new-poem-form">
        <input name="title"placeholder="Title" onChange={(e) => this.handleChange(e)}/>
        <input name="author"placeholder="Author" onChange={(e) => this.handleChange(e)}/>
        <textarea name="content"placeholder="Write your masterpiece here..." rows={10} onChange={(e) => this.handleChange(e)}/>
        <input type="submit" value="Share your masterpiece" onClick={(e)=> this.newPoem(e)}/>
      </form>
    );
  }
}

export default NewPoemForm;
