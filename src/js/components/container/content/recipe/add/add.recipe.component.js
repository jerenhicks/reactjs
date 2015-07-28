var React = require('react');
var Loading = require('../../../../misc/loading.component');
var Properties = require('../../..//../../properties/properties');
var Error = require('../../../../misc/error.component');

var LinkOneContentComponent = React.createClass({
    getInitialState: function() {
        return {loading: false, error: false};
    },
    handleOnClick: function() {
        var component = this;
        component.setState({loading: true});
        var name = (this.refs.recipename.getDOMNode().value);
        var description = (this.refs.recipedescription.getDOMNode().value);
        var rating = 0;
        $.post( Properties.dataservices + "/recipe/", { name: name, description: description, rating: rating } )
            .done(function() {
                component.setState({loading: false});
            })
            .fail(function() {
                component.setState({error: true});
            });
    },
    render: function() {
        if (this.state.error) {
            return <Error />
        } else if (this.state.loading) {
            return <Loading />;
        } else {
            return <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" id="recipename" placeholder="Recipe Name" ref="recipename"/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" id="recipedescription" placeholder="Recipe Description" ref="recipedescription"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputFile">File input</label>
                        <input type="file" id="exampleInputFile"/>
                        <p className="help-block">Example block-level help text here.</p>
                    </div>
                    <button className="btn btn-default" onClick={this.handleOnClick}>Submit</button>
                </form>
            </div>;
        }
    }
});

module.exports = LinkOneContentComponent;