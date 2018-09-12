
import React from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import calculate from "../logic/calculate";


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonName => {
    this.setState(calculate(this.state, buttonName));
  };

  render() {
    return (
      <div className="component-calculator">
        <Display value={this.state.next || this.state.total || "0"} operation={this.state.operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
export default Calculator;