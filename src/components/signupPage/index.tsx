import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Authentication from '../../services/authentication';

interface SignupPageState {
    email: string;
    password: string;
    confirmPassword: string;
}

class SignupPage extends React.Component<{}, SignupPageState> {
    constructor(props: any) {
        super(props)
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    authService = new Authentication();

    onSignupBtnClicked = () => {
        if (this.state.email && this.state.password && this.state.confirmPassword) {
            if (this.state.password === this.state.confirmPassword)
                this.authService.signUpWithEmailPassword(this.state.email, this.state.password);
        }
    }

    render() {
        return (
            <div>
                <label>{"Sign up"}</label>
                <div>
                    {"Sign up with google"}
                </div>
                <div>
                    <TextField
                        label="Email ID"
                        value={this.state.email}
                        onChange={(event) => {
                            this.setState({ email: event.target.value })
                        }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={this.state.password}
                        onChange={(event) => {
                            this.setState({ password: event.target.value })
                        }}
                    />
                    <TextField
                        label="Re-enter password"
                        type="password"
                        value={this.state.confirmPassword}
                        onChange={(event) => {
                            this.setState({ confirmPassword: event.target.value })
                        }}
                    />
                    <Button
                        variant="contained"
                        onClick={this.onSignupBtnClicked}
                        disableElevation>
                        {"Sign up"}
                    </Button>
                </div>
            </div>
        );
    }
}

export default SignupPage;