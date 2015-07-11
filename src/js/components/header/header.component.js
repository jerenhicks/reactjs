var Header = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        }
    },
    increment: function() {
        this.setState({ counter: this.state.counter + 1})
    },
    render: function() {
        return <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Link</a></li>
                        <li><a href="#">Link</a></li>
                    </ul>
                </div>
            </nav>
        </div>;
    }
});

module.exports = Header;