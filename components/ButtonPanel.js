import React from 'react';
import Button from './Button';


class ButtonPanel extends React.Component {
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="7" clickHandler={this.handleClick} number />
          <Button name="8" clickHandler={this.handleClick} number />
          <Button name="9" clickHandler={this.handleClick} number />
          <Button name="x" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="4" clickHandler={this.handleClick} number />
          <Button name="5" clickHandler={this.handleClick} number />
          <Button name="6" clickHandler={this.handleClick} number />
          <Button name="÷" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="1" clickHandler={this.handleClick} number />
          <Button name="2" clickHandler={this.handleClick} number />
          <Button name="3" clickHandler={this.handleClick} number />
          <Button name="+" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="0" clickHandler={this.handleClick} wide number />
          <Button name="." clickHandler={this.handleClick} number />
          <Button name="-" clickHandler={this.handleClick} />
        </div>
	    <style global jsx>{`
			.component-button-panel {
			  background-color: #000;
			  display: flex;
			  flex-direction: row;
			  flex-wrap: wrap;
			  flex: 1 0 auto;
			}

			.component-button-panel > div {
			  width: 100%;
			  margin-bottom: 1px;
			  flex: 1 0 auto;
			  display: flex;
			}
	    `}</style>
      </div>
    );
  }
}

export default ButtonPanel;