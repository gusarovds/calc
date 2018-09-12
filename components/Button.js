import React from 'react';


class Button extends React.Component {
	handleClick = () => {
		this.props.clickHandler(this.props.name);
	};

	render() {
		const className = [
			"component-button",
			this.props.wide ? "wide" : "",
			this.props.number ? "number" : "",
		];

		return (
			<div className={className.join(" ").trim()}>
				<button onClick={this.handleClick}>{this.props.name}</button>
				<style jsx>{`
				.component-button {
				  display: inline-flex;
				  width: 25%;
				  flex: 1 0 auto;
				}

				.component-button.wide {
				  width: 50%;
				}

				.component-button button {
				  background-color: #cc5577;
				  border: 0;
				  font-size: 1.5rem;
				  margin: 0 1px 0 0;
				  flex: 1 0 auto;
				  padding: 0;
				}
				.component-button button:focus {
				  outline: none
				}
				.component-button.number button {
				  background-color: #888888;
				}

				.component-button:last-child button {
				  margin-right: 0;
				}

				`}</style>
			</div>
		);
	}
}

export default Button;