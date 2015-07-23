var React = require('react');
var radio = require('radio');
var $ = require('jquery');

var SearchContentComponent = React.createClass({
    handleOnClick: function() {
        $.get( "/services/blah", function( data ) {
            alert( "done!" );
        })
        .fail(function() {
            //there are no services, so even though there was an error, load anyway.
                var results = [{id: 1, name: 'hi', image:'test'}, {id: 2, name:'bye', image:'test1'}];
                radio('changeContents').broadcast({name: 'results', data: results});
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