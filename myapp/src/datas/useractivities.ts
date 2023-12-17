import { baseUrl } from "./store";
import {currentUser} from "./user";


export function LogOut() {
    localStorage.clear();
    location.reload();
}
export function Login(email: string, password: string) {
    const user = {
        userEmail: email,
        password: password
    };

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(`${baseUrl}/User/Login`, requestOptions)
        .then(response => {
            if (response.ok) {
                window.location.href = '/';
                return response.json();
            }
            else {
                throw new Error(response.statusText);
            }
        })
        .then(data => {
            localStorage.setItem('userId', data.id);
            localStorage.setItem('usertoken', data.userToken);
            localStorage.setItem('userEmail', data.userEmail);
            localStorage.setItem('userName', data.userName);
            localStorage.setItem('isLoggedIn', "true");
        })
        .catch(error => {
            console.error('Error occurred while sending the request:', error);
        });
}
export function Register(email: string, password: string, username: string) {
    const user = {
        userEmail: email,
        userPassword: password,
        userName: username
    };
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    fetch(`${baseUrl}/User/Register`, requestOptions)
        .then(response => {
            if (response.ok) {
                window.location.href = '/login';
                return response.json();
            }
            else {
                throw new Error(response.statusText);
            }
        })
        .catch(error => {
            console.error('Error occurred while sending the request:', error);
        });
}
export async function ChangeEmail(newEmail: any) {
    const user = {
        newEmail: newEmail,
        userToken: currentUser.userToken
    };
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {

        const response = await fetch(`${baseUrl}/User/ChangeEmail`, requestOptions);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log("changed email to:" + data);
        localStorage.setItem('userEmail', data.userEmail);
        window.location.href = "/"
    }

    catch (error) {
        console.error('Error:', error);
    }

}
export async function ChangePassword(newPassword: string) {
    const user = {
        newPassword: newPassword,
        userToken: currentUser.userToken
    };
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {

        const response = await fetch(`${baseUrl}/User/ChangePassword`, requestOptions);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        console.log("changed password to:" + data);
        localStorage.setItem('userPassword', data.userPassword);
        window.location.href = "/"
    }

    catch (error) {
        console.error('Error:', error);
    }
}
