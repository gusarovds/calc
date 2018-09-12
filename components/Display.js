import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div className="component-display">
      	<div className="component-operation">{this.props.operation ? this.props.operation : ' '}</div>
        <div className="component-value">{this.props.value}</div>
        <style jsx>{`
        	.component-display {
        		display: flex;
        		width: 100%;
        	}
        	.component-display > div {
        		flex-grow: 1;
				background-color: #990033;
				color: white;
				font-weight: 200;
				font-size: 2.5rem;
			}

			.component-value {
				text-align: right;
				width: 90%;
			  	padding: 0.2rem 0.7rem 0.1rem 0.5rem;
			}
			.component-operation {
				text-align: left;
			  	padding: 0.2rem 0.5rem 0.1rem 0.7rem;
			}
        `}</style>
      </div>
    );
  }
}

export default Display;