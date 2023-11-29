import { baseUrl } from "./store";

export function LogOut(){
    localStorage.clear();
    location.reload();
}
export function Login(email:string,password:string){
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
            window.location.href='/';
            return response.json();
        }
        else {
            throw new Error(response.statusText);
        }
    })
    .then(data => {
        localStorage.setItem('userId',data.id);
        localStorage.setItem('usertoken', data.userToken);
        localStorage.setItem('userEmail', data.userEmail);
        localStorage.setItem('userName', data.userName);
        localStorage.setItem('isLoggedIn', "true");
    })
    .catch(error => {
        console.error('Error occurred while sending the request:', error);
    });
}