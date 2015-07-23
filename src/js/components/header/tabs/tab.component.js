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
        radio('tabSelected').subscribe(this.handleShowEvent);
    },
    componentWillUnmount: function() {
        radio('tabSelected').unsubscribe(this.handleShowEvent);
    },
    handleShowEvent: function(data) {
        if (data.id != this.state.id) {
            this.setState({active: false});
        }
    },
    handleOnClick: function() {
        this.setState({active: !this.state.active});
        radio('tabSelected').broadcast({id: this.state.id, name: this.props.name});
        radio('changeContents').broadcast({name: this.props.name});
    },
    render: function() {
        var classes = cx({
            'active': this.state.active
        });
        return <li className={classes}><a href="#" onClick={this.handleOnClick}>{this.props.name}</a></li>;
    }
});

module.exports = Tab;