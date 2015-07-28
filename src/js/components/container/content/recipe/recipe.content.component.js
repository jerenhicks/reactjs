var React = require('react');
var radio = require('radio');
var Loading = require('../../../misc/loading.component');
var Properties = require('../../../../properties/properties');
var Error = require('../../../misc/error.component');

var RecipeContentComponent = React.createClass({
    getInitialState: function() {
        return {loading: true, error: false, recipe: null};
    },
    componentDidMount: function() {
        radio('tabSelected').subscribe(this.handleShowEvent);
    },
    loadData: function() {
        var component = this;
        $.get( Properties.dataservices + "/recipe/" + this.props.id, function( result ) {
            component.setState({loading: false, recipe: result});
        })
        .fail(function() {
            component.setState({error: true});
        });
    },
    render: function() {
        if (this.state.error) {
            return <Error />
        } else if (this.state.loading) {
            this.loadData();
            return <Loading />;
        } else {
            return <div>I'll show a recipe here! Name is : {this.state.recipe.name}</div>
        }

    }
});

module.exports = RecipeContentComponent;