var React = require("react");

var Grandchild = React.createClass({
	render: function() {
		return (
			<div className="col-md-12">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Grandchild</h3>
					</div>
					<div className="panel-body">
						<p>I'm a grandchild</p>
						<p>{this.props.chilValue * 100}</p>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Grandchild;