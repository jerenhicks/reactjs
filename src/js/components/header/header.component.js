var React = require('react');
var Tab = require('./tabs/tab.component');

var Header = React.createClass({
    render: function() {
        return <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <Tab name='Home' url='/home' default='true'/>
                        <Tab name='link1' url='/something'/>
                        <Tab name='link1' url='/test'/>
                    </ul>
                </div>
            </nav>
        </div>;
    }
});


module.exports = Header;