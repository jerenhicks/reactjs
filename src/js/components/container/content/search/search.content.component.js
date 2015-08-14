var React = require('react');
var radio = require('radio');
var $ = require('jquery');
var Properties = require('../../../../properties/properties');
var Error = require('../../../misc/error.component');

var SearchContentComponent = React.createClass({
    getInitialState: function() {
        return {error: false};
    },
    handleOnClick: function() {
        var component = this;
        $.get( Properties.dataservices + "/recipe/search", {query : this.refs.query.getDOMNode().value}, function( results ) {
            radio('changeContents').broadcast({name: 'results', data: results});
        })
            .done(function() {
                component.setState({error: false});
            })
            .fail(function(error) {
                component.props.errorMsg = 'some kind of error msg';
                component.setState({error: true});
            });
    },
    render: function() {
        if (this.state.error) {
            return <Error errorMsg={this.props.errorMsg}/>
        } else {
            return <div>
                <div className="jumbotron">
                    <div className="row">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for..." ref="query"/>
                            <span className="input-group-btn">
                                <button className="btn btn-default" onClick={this.handleOnClick} type="button">Go!</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>;
        }
    }
});

module.exports = SearchContentComponent;