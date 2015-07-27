var React = require('react');
var radio = require('radio');
var $ = require('jquery');
var Properties = require('../../../../properties/properties');

var SearchContentComponent = React.createClass({
    handleOnClick: function() {
        $.get( Properties.dataservices + "/recipe", function( results ) {
            radio('changeContents').broadcast({name: 'results', data: results});
        })
        .fail(function() {
                alert('there is an error');
        });
    },
    render: function() {
        return <div>
            <div className="jumbotron">
                <div className="row">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..."/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" onClick={this.handleOnClick} type="button">Go!</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>;
    }
});

module.exports = SearchContentComponent;