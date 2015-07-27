var React = require('react');
var radio = require('radio');
var Loading = require('../../../misc/loading.component');

var RecipeContentComponent = React.createClass({
    getInitialState: function() {
        return {loading: true};
    },
    componentDidMount: function() {
        radio('tabSelected').subscribe(this.handleShowEvent);
    },
    loadData: function() {

    },
    render: function() {
        if (this.state.loading) {
            this.loadData();
            return <Loading />;
        } else {
            return <div>I'll show a recipe here! ID is {this.props.id}</div>
        }

    }
});

module.exports = RecipeContentComponent;