var React = require('react');
var Tab = require('./tabs/tab.component');
var User = require('./user/user.login.component');

var Header = React.createClass({
    render: function() {
        return <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <Tab name='Home' url='/home' default='true'/>
                        <Tab name='Add Recipe' url='/something'/>
                        <Tab name='link2' url='/test'/>
                    </ul>
                    <User />
                </div>
            </nav>
        </div>;
    }
});


module.exports = Header;