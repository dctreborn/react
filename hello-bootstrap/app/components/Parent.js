var React = require("react");

var Child = require("./Child");

var Parent = React.createClass({
	getInitialState: function(){
		return {
			value: 0
		};
	},
	handleClick: function(){
		var value = this.state.value;		
		this.setState({
			value: value + 1
		});
		console.log(this.state.value);
	},
	resetClick: function(){
		this.setState({
			value: 0
		});
	},
	render: function() {
		return (
			<div className="container">
				<div className="jumbotron row">
					<h2>Warmup</h2>
					<p>Components and Sub-components</p>
					<button onClick={this.handleClick}>Click me!</button>
					<button onClick={this.resetClick}>Reset me!</button>
				</div>

					<div className="col-md-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title">Parent</h3>
							</div>
							<div className="panel-body">
								<p>I'm a parent</p>
								<p>{this.state.value}</p>
								<Child
									parValue = {this.state.value}
								/>
							</div>
						</div>
					</div>
				
			</div>
		);
	}
});

module.exports = Parent;