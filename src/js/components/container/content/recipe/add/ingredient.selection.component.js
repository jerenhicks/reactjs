var React = require('react');
var _ = require('underscore');

var LinkOneContentComponent = React.createClass({
    render: function() {
        var items = [{name: 'hi', description: 'description'}];
        return <div>
            <input type="text" value="Submit"></input>
            <div className="row">
                <div className="col-xs-6 ingredientbox">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Description</td>
                            </tr>
                        </thead>
                        {_.map(items, function(result) {
                            return <tr>
                                <td>{result.name}</td>
                                <td>{result.description}</td>
                            </tr>;
                        })}
                    </table>
                </div>
                <div className="col-xs-6">.col-xs-6</div>
            </div>
        </div>;
    }
});

module.exports = LinkOneContentComponent;