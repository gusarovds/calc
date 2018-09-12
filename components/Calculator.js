
import React from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";
import calculate  from "../logic/calculate";
import setValue  from "../logic/setValue";


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = (buttonName, type) => {
    if (type === "action") {
        this.setState(calculate(this.state, buttonName));
    } else {
        this.setState(setValue(this.state, buttonName));
    }
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