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
                        <Tab name='link2' url='/test'/>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Link</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li role="separator" class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>;
    }
});


module.exports = Header;