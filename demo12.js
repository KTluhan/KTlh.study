ReactDOM.render(
<h1>Hello, world!</h1>,
document.getElementById('demo1')
);
var names = ['Alice', 'Emily', 'Kate'];

ReactDOM.render(
<div>
{
    names.map(function (name, index) {
    return <div key={index}>Hello, {name}!</div>
})
}
</div>,
document.getElementById('demo2')
);
]var arr = [
    <h1 key="1">Hello world!</h1>,
<h2 key="2">React is awesome</h2>,
];
ReactDOM.render(
<div>{arr}</div>,
document.getElementById('demo3')
);
var HelloMessage = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name}</h1>;
    }
});
ReactDOM.render(
<HelloMessage name="John" />,
    document.getElementById('demo4')
);
var NotesList = React.createClass({
    render: function() {
        return (
            <ol>
            {
                React.Children.map(this.props.children, function (child) {
                return <li>{child}</li>;
            })
    }
    </ol>
    );
    }
});
ReactDOM.render(
<NotesList>
<span>hello</span>
<span>world</span>
</NotesList>,
document.getElementById('demo5')
);
var data = 123;

var MyTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function() {
        return <h1> {this.props.title} </h1>;
    }
});

ReactDOM.render(
<MyTitle title={data} />,
document.getElementById('demo6')
);