var React = require('react');

var Rating = React.createClass({
    render: function() {
        return <div>
            <span className="stars" title={this.props.rating * 5}>
                <span style={{width: (this.props.rating * 100) + '%'}}/>
            </span>
        </div>;
    }
});


module.exports = Rating;