import React from 'react';
import Button from './Button';


class ButtonPanel extends React.Component {
  handleClick = (buttonName, type) => {
    this.props.clickHandler(buttonName, type);
  };

  render() {
    return (
      <div className="component-button-panel">
        <div>
          <Button name="AC" type="action" clickHandler={this.handleClick} />
          <Button name="=" type="action" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="7" type="input" clickHandler={this.handleClick} number />
          <Button name="8" type="input" clickHandler={this.handleClick} number />
          <Button name="9" type="input" clickHandler={this.handleClick} number />
          <Button name="x" type="action" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="4" type="input" clickHandler={this.handleClick} number />
          <Button name="5" type="input" clickHandler={this.handleClick} number />
          <Button name="6" type="input" clickHandler={this.handleClick} number />
          <Button name="÷" type="action" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="1" type="input" clickHandler={this.handleClick} number />
          <Button name="2" type="input" clickHandler={this.handleClick} number />
          <Button name="3" type="input" clickHandler={this.handleClick} number />
          <Button name="+" type="action" clickHandler={this.handleClick} />
        </div>
        <div>
          <Button name="0" type="input" clickHandler={this.handleClick} wide number />
          <Button name="." type="input" clickHandler={this.handleClick} number />
          <Button name="-" type="action" clickHandler={this.handleClick} />
        </div>
	    <style jsx>{`
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