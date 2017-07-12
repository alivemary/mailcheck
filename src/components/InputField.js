import React from "react";
import PropTypes from "prop-types";
const levenshtein = require("js-levenshtein");

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
    let mailList = ["gmail.com", "yahoo.com"];
    let indexOfNearest = 0;
    let smallestDifferense = 1000;
    mailList.forEach((mail, index) => {
      let difference = levenshtein(this.state.value, mail);
      console.log(difference);
      if (difference < smallestDifferense) {
        smallestDifferense = difference;
        indexOfNearest = index;
      }
    });
    return mailList[indexOfNearest];
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
