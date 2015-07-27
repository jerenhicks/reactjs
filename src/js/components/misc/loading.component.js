var React = require('react');

var Loading = React.createClass({
    render: function() {
        return <div>
            <div className="progress">
                <div className="progress-bar progress-bar-striped active loading" role="progressbar"  aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    Loading...
                </div>
            </div>
        </div>;
    }
});


module.exports = Loading;