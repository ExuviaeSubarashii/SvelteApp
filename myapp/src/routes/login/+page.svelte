<script lang="ts">
import { Login } from "../../datas/useractivities";
var email="";
var password="";
</script>

<div class="loginpage">
    <input bind:value={email} placeholder="Email">
    <input bind:value={password} placeholder="Password">
    <button on:click={()=>{
        if(email&&password){
            Login(email,password);
        }
        else{
            console.log("Email and password are required");
        }
    }}
        >Login</button>
</div>
<style>
    .loginpage{
        position: fixed;
    top: 50%;
    right: 40%;
    }
</style>