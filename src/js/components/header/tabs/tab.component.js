var React = require('react');
var cx = require('classnames');
var radio = require('radio');
var uuid = require('node-uuid');

var Tab = React.createClass({
    getInitialState: function() {
        var activeField = false;
        if (this.props.default) {
            activeField = true;
        }
        return {active: activeField, id: uuid.v1()};
    },
    componentDidMount: function() {
        radio('hideOtherTabs').subscribe(this.handleShowEvent);
    },
    componentWillUnmount: function() {
        radio('hideOtherTabs').unsubscribe(this.handleShowEvent);
    },
    handleShowEvent: function(data) {
        if (data != this.state.id) {
            this.setState({active: false});
        }
    },
    handleOnClick: function() {
        this.setState({active: !this.state.active});
        radio('hideOtherTabs').broadcast(this.state.id);
    },
    render: function() {
        var classes = cx({
            'active': this.state.active
        });
        return <li className={classes}><a href="#" onClick={this.handleOnClick}>{this.props.name}</a></li>;
    }
});

module.exports = Tab;