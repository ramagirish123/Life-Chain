import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Authentication from '../../services/authentication';
import './styles.scss';

interface SigninPageState {
    email: string;
    password: string;
}

class SigninPage extends React.Component<{}, SigninPageState> {
    constructor(props: any) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    authService = new Authentication();

    onSignInBtnClicked = () => {
        if (this.state.email && this.state.password) {
            this.authService.signInWithEmailPassword(this.state.email, this.state.password);
        }
    }
    render() {
        return (
            <div className={"signinPage"}>
                <label className={"header"}>
                    {"Sign in"}
                </label>
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
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        value={this.state.password}
                        onChange={(event) => {
                            this.setState({ password: event.target.value })
                        }}
                        fullWidth
                        margin="normal"
                    />
                    <Button
                        variant="contained"
                        onClick={this.onSignInBtnClicked}
                        disableElevation>
                        {"Sign in"}
                    </Button>
                </div>
            </div>
        );
    }
}

export default SigninPage;