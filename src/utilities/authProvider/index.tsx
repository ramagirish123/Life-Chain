import * as React from 'react';
import firebase from "firebase/app";
import FirebaseConfig from '../../configs/firebaseAppConfig';
import { Route, Switch } from 'react-router-dom';
import SigninPage from '../../components/signinPage';
import SignupPage from '../../components/signupPage';
import logo from '../../assets/logo.png';
import homePageImage from '../../assets/homePageImage.png'
import './styles.scss';

interface AuthProviderState {
    user: firebase.User | null;
    isEmailVerficationSend: boolean;
}

export default class AuthProvider extends React.Component<{}, AuthProviderState> {
    constructor(props: any) {
        super(props)
        this.state = {
            user: null,
            isEmailVerficationSend: false
        }
    }

    componentDidMount() {
        firebase.initializeApp(FirebaseConfig);
        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user: user })
        })
    }

    render() {
        if (this.state.user && this.state.user.emailVerified)
            return <>
                {this.props.children}
            </>
        else
            return <div className="authenticationPage">
                <div className="centerCard">
                    <img src={logo} className="logo" />
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <SigninPage />
                            </Route>
                            <Route exact path="/signup">
                                <SignupPage />
                            </Route>
                        </Switch>
                    </div>
                    <img src={homePageImage} className="bannerImage" />
                </div>
            </div>
    }
}
