<script lang="ts">
import SideBarContent from "../../components/SideBarContent.svelte";
import { baseUrl } from "../../datas/store";



var email="";
var password="";
function Login(){
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
</script>

<div>
    <input bind:value={email} placeholder="Email">
    <input bind:value={password} placeholder="Password">
    <button on:click={Login}>Login</button>
</div>