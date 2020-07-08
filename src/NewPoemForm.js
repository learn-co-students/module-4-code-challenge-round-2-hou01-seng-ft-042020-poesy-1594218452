import React from "react";

class NewPoemForm extends React.Component {

  state = {
    title: '',
    authore: '',
    content: ' ',
  }

  setField = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state)
    this.setState({
      titel: ' ',
      author: '',
      content: ''
    })
  }

  render() {
    return (
      <form className="new-poem-form">
        <input placeholder="Title" name="title" onChange={this.setField} />
        <input placeholder="Author" name="author" onChange={this.setField} />
        <textarea placeholder="Write your masterpiece here..." rows={10} name="content" onChange={this.setField} />
        <input type="submit" value="Share your masterpiece" onClick={()=>this.handleSubmit()}/>
      </form>
    );
  }
}

export default NewPoemForm;
