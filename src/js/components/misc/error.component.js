var React = require('react');

var Loading = React.createClass({
    render: function() {
        return <div>
            <div className="jumbotron">
                There was an error!
                <br></br>
                {this.props.errorMsg}
            </div>
        </div>;
    }
});


module.exports = Loading;