var React = require("react");

var Grandchild = require("./Grandchild");

var Child = React.createClass({
	render: function() {
		return (
			<div className="col-md-12">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Child</h3>
					</div>
					<div className="panel-body">
						<p>I'm a child</p>
						<p>{this.props.parValue * 10}</p>
						<Grandchild 
							chilValue = {this.props.parValue}
						/>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Child;