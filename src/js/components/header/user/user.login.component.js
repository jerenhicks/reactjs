var React = require('react');
var radio = require('radio');

var Header = React.createClass({
    getInitialState: function() {
        return {userLoggedIn: false};
    },
    componentDidMount: function() {
        radio('loginEvent').subscribe(this.handleLoginEvent);
    },
    componentWillUnmount: function() {
        radio('loginEvent').unsubscribe(this.handleLoginEvent);
    },
    handleLoginEvent: function() {
        this.setState({userLoggedIn: true});
    },
    handleLogoutEvent: function() {
        this.setState({userLoggedIn: false});
    },
    render: function() {
        if (this.state.userLoggedIn) {
            return <div>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#" onClick={this.handleLogoutEvent}>Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>;
        } else {
            return <div>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#" onClick={this.handleLoginEvent}>Log In</a>
                    </li>
                </ul>
            </div>;
        }
    }
});

module.exports = Header;