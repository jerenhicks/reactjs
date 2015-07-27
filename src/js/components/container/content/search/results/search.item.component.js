var React = require('react');
var Rating = require('../../../../misc/rating.component.js');
var radio = require('radio');

var SearchItemComponent = React.createClass({
    handleOnClick: function() {
        radio('changeContents').broadcast({name: 'recipe', data: this.props.data.id});
    },
    render: function() {
        return <div>
            <div className="well clickable" onClick={this.handleOnClick}>
                <div className="row">
                    <div className="col-sm-2"><img src="http://i.imgur.com/RLiDK.png" alt="..." className="img-thumbnail"/></div>
                    <div className="col-sm-8">
                        {this.props.data.name}
                        <p>{this.props.data.description}</p>
                    </div>
                    <div className="col-sm-2">
                        <Rating rating={this.props.data.rating}/>
                    </div>
                </div>
            </div>
        </div>;
    }
});

module.exports = SearchItemComponent;