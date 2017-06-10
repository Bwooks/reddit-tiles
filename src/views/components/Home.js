var React = require('react');

module.exports = React.createClass({

    clickHandler: function() {
        alert("woooo");
    },
    
    render: function() {
        return (
            <div>
                React server side render
                <button onClick={this.clickHandler}>Click Me!</button>
            </div>
        );
    }

});