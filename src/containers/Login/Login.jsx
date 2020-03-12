import React, { PureComponent } from 'react';
import { API_SERVER } from '../../const';
import { withRouter } from "react-router";
import $ from "jquery";

class Login extends PureComponent {
    onSubmit = () => {
        if (!this.props.login || !this.props.password) {
            console.log('Invalid');

            return;
        }

        $.ajax({
            url: API_SERVER+'auth',
            type: 'POST',
            data: {login: this.props.login, password: this.props.password, log: '1'},
        })
            .done((data) => {
                let obj = JSON.parse(data);

                console.log(obj.id);
                console.log(obj.token);

                this.props.addUser({
                    id: obj.id,
                    token: obj.token
                });

                localStorage.setItem('id', obj.id);
                localStorage.setItem('token', obj.token);

                this.props.history.push('/home');
            })
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });


        this.props.reset();
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Login"
                    name="login"
                    value={this.props.login}
                    onChange={e => this.props.setLogin(e.target.value)} />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.props.password}
                    onChange={e => this.props.setPassword(e.target.value)} />
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}

export default withRouter(Login);