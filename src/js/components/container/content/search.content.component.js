var React = require('react');

var SearchContentComponent = React.createClass({
    render: function() {
        return <div>
            <div className="jumbotron">
                <div className="row">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">Go!</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>;
    }
});

module.exports = SearchContentComponent;