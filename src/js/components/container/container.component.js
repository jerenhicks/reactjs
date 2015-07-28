var React = require('react');
var radio = require('radio');
var AddRecipe = require('./content/recipe/add/add.recipe.component.js');
var Link2Content = require('./content/link.two.content.component');
var SearchResultsContent = require('./content/search/results/search.results.content.component.js');
var Home = require('./content/search/search.content.component.js');
var Recipe = require('./content/recipe/recipe.content.component.js');

var Header = React.createClass({
    getInitialState: function() {
        return {content: <Home />};
    },
    componentDidMount: function() {
        radio('changeContents').subscribe(this.handleTabSelected);
    },
    componentWillUnmount: function() {
        radio('changeContents').unsubscribe(this.handleTabSelected);
    },
    handleTabSelected: function(data) {
        var newContent;
        //this check is bad, find a better way of doing this down the road. Perhaps pass the url?
        if (data.name === 'Add Recipe') {
            newContent = <AddRecipe />;
        } else if (data.name === 'link2') {
            newContent = <Link2Content />;
        } else if (data.name === 'results') {
            newContent = <SearchResultsContent results={data.data}/>;
        } else if (data.name ==='recipe') {
            newContent = <Recipe id={data.data}/>;
        } else {
            newContent = <Home />;
        }

        this.setState({content: newContent});
    },
    render: function() {
        return <div>
            <div className="row container">
                <div className="col-sm-2 container-margin"></div>
                <div className="col-sm-8">{this.state.content}</div>
                <div className="col-sm-2 container-margin"></div>
            </div>
        </div>;
    }
});

module.exports = Header;