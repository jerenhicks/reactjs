var React = require('react');
var _ = require('underscore');
var SearchItem = require('./search.item.component.js');

var SearchContentComponent = React.createClass({
    render: function() {
        return <div>
            {_.map(this.props.results, function(result) {
                return <SearchItem key={result.id} data={result}/>;
            })}
        </div>;
    }
});

module.exports = SearchContentComponent;