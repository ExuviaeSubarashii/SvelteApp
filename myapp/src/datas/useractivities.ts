import { baseUrl } from "./store";
import { currentUser } from "./user";


export function LogOut() {
    localStorage.clear();
    location.reload();
    window.location.href='/';
}
export async function Login(email: string, password: string) {

  
    
    try {
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
        const loginResponse = await fetch(`${baseUrl}/User/Login`, requestOptions);
        if (!loginResponse.ok) {
            throw new Error(loginResponse.statusText);
        }
        const data = await loginResponse.json();
        localStorage.setItem('userId', data.id);
        localStorage.setItem('usertoken', data.userToken);
        localStorage.setItem('userEmail', data.userEmail);
        localStorage.setItem('userName', data.userName);
        localStorage.setItem('isLoggedIn', "true");
        window.location.href = '/';
    } catch (error) {
        console.error('Error:', error);
    }
}


export async function Register(email: string, password: string, username: string) {
    
    try {
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
        const registerResponse = await fetch(`${baseUrl}/User/Register`, requestOptions);
        if (!registerResponse.ok) {
            throw new Error(registerResponse.statusText);
        }
        window.location.href = '/login';
    } catch (error) {
        console.error('Error:', error);
    }
}

export async function ChangeEmail(newEmail: any) {
    if(currentUser.isLoggedIn){
  
    
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

        const changeEmailResponse = await fetch(`${baseUrl}/User/ChangeEmail`, requestOptions);
        if (!changeEmailResponse.ok) {
            throw new Error(changeEmailResponse.statusText);
        }
        const data = await changeEmailResponse.json();
        console.log("changed email to:" + data);
        localStorage.setItem('userEmail', data.userEmail);
        window.location.href = "/"
    }

    catch (error) {
        console.error('Error:', error);
    }
}
}
export async function ChangePassword(newPassword: string) {
    if(currentUser.isLoggedIn){
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

        const changePasswordResponse = await fetch(`${baseUrl}/User/ChangePassword`, requestOptions);
        if (!changePasswordResponse.ok) {
            throw new Error(changePasswordResponse.statusText);
        }
        const data = await changePasswordResponse.json();
        console.log("changed password to:" + data);
        localStorage.setItem('userPassword', data.userPassword);
        window.location.href = "/"
    }

    catch (error) {
        console.error('Error:', error);
    }
}
}