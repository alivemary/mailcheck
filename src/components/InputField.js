import React from "react";
import PropTypes from "prop-types";
import { checkFunctions } from "./helpers/checkFunctions";

export default class MailInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "", nearest: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  static propTypes = {
    fieldType: PropTypes.string
  };
  static defaultProps = {
    fieldType: ""
  };

  handleChange(event) {
    this.setState({
      value: event.target.value,
      nearest: this.checkDifference()
    });
  }

  checkDifference() {
    let suggestion = "";
    for (let activity of checkFunctions) {
      suggestion = activity(this.state.value);
      if (suggestion) return suggestion;
    }
    return suggestion;
  }

  render() {
    let title = this.props.fieldType == "text" ? "E-mail" : "Password";
    return (
      <div>
        <label>
          {title}
          <input
            type={this.props.fieldType}
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <div>
          It seems to be {this.state.nearest}
        </div>
      </div>
    );
  }
}
