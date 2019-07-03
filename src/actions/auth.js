import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider).then((result) => {
            const token = result.credential.accessToken;
            const user = result.user;
            const isNewUser = result.additionalUserInfo.isNewUser;
            if (isNewUser) {
                console.log('Incorrect login user!!')
                result.user.delete();
            } else {
                console.log('Login Success!!');
            }
        }).catch((error) => {
            console.log("Login Error: ", error)
        });
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    }
}