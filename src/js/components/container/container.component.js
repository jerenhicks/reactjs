var React = require('react');
var radio = require('radio');
var Link1Content = require('./content/link.one.content.component');
var Link2Content = require('./content/link.two.content.component');
var Home = require('./content/search.content.component');

var Header = React.createClass({
    getInitialState: function() {
        return {content: <Home />};
    },
    componentDidMount: function() {
        radio('tabSelected').subscribe(this.handleTabSelected);
    },
    componentWillUnmount: function() {
        radio('tabSelected').unsubscribe(this.handleTabSelected);
    },
    handleTabSelected: function(data) {
        var newContent;
        //this check is bad, find a better way of doing this down the road. Perhaps pass the url?
        if (data.name === 'link1') {
            newContent = <Link1Content />;
        } else if (data.name === 'link2') {
            newContent = <Link2Content />;
        } else {
            newContent = <Home />;
        }

        this.setState({content: newContent});
    },
    render: function() {
        return <div>
            <div className="container">
                {this.state.content}
            </div>
        </div>;
    }
});

module.exports = Header;