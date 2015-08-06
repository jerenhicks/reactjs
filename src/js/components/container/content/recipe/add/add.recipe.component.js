var React = require('react');
var Loading = require('../../../../misc/loading.component');
var Properties = require('../../..//../../properties/properties');
var Error = require('../../../../misc/error.component');

var LinkOneContentComponent = React.createClass({
    getInitialState: function() {
        return {loading: false, error: false, complete: false};
    },
    handleOnClick: function() {
        var component = this;
        component.setState({loading: true});
        var name = (this.refs.recipename.getDOMNode().value);
        var description = (this.refs.recipedescription.getDOMNode().value);
        var file = (this.refs.recipeimage.getDOMNode().files[0]);
        var rating = 0;

        var data = new FormData();
        data.append('image', file);
        data.append('rating', rating);
        data.append('description', description);
        data.append('name', name);
        $.ajax({
            type: "POST",
            url: Properties.dataservices + "/recipe/",
            cache: false,
            contentType: false,
            processData: false,
            data: data
        })
        .done(function () {
            component.setState({complete: true});
        })
        .fail(function() {
            component.setState({error: true});
        });
    },
    render: function() {
        if (this.state.error) {
            return <Error />
        } else if (this.state.complete) {
            return <div>Creation successful</div>;
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
                        <input type="file" id="exampleInputFile" ref="recipeimage"/>
                        <p className="help-block">Example block-level help text here.</p>
                    </div>
                    <button className="btn btn-default" onClick={this.handleOnClick}>Submit</button>
                </form>
            </div>;
        }
    }
});

module.exports = LinkOneContentComponent;