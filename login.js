
var WebSite = React.createClass({
    render: function() {
        return (
            <div>
                {
                    React.Children.map(this.props.children, function (child) {
                        return<h2>{child}</h2>;
                    })
                }
            </div>
        );
    }
});

ReactDOM.render(
    <WebSite>
        <h1 class="log">登录</h1>
        <h2 class="users">用户名</h2>
        <input type="text"/>
        <h2 class="password">密码</h2>
        <input type="password"/>
        <button>提交</button>
    </WebSite>,
    document.getElementById('login')
);