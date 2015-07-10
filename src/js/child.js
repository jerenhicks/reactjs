var Child = React.createClass({
    render: function(){
        return (
            <div>
                and this is (another) the <b>{this.props.name}</b>.
            </div>
        )
    }
});

module.exports = Child;