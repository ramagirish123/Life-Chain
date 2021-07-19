import firebase from "firebase/app";
import "firebase/auth";


export default class Authentication {

    async signInWithEmailPassword(email: string, password: string) {
        await firebase.auth().signInWithEmailAndPassword(email, password);
    }

    async signUpWithEmailPassword(email: string, password: string) {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    async sendEmailVerification() {
        await firebase.auth().currentUser?.sendEmailVerification();
    }

    async sendPasswordReset(email: string) {
        await firebase.auth().sendPasswordResetEmail(email)
    }
}
