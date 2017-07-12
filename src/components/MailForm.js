import React from "react";
import InputField from "./InputField";
const levenshtein = require("js-levenshtein");

export default class MailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mailValue: "",
      passwordValue: ""
    };

    this.handleMailChange = this.handleMailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleMailChange(event) {
    this.setState({ mailValue: event.target.value });
  }
  handlePasswordChange(event) {
    this.setState({ passwordValue: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(levenshtein("kitten", "sitting"));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputField fieldType="text" />
        <InputField fieldType="password" />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
