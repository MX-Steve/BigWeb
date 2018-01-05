<template>
    <div class="box">
        <div class='container'>
            <h1>登录</h1>
            <form>
                <div>
                    <label>
                        <input type="text" name="user_phone" maxlength="11" class="input1" 
                                placeholder="手机号">	
                    </label>
                </div>
                <div>
                    <label>
                        <input type="text"  onfocus="this.type='password'" name="user_pswd" maxlength="16" class="input1"  
                                placeholder="密码(由6~16位英文字母以及数字组成)">		
                    </label>
                </div>
                <div>
                    <button type='button'>登录</button>
                    <router-link to="/register">没有账号，去注册吧</router-link>
                </div>
            </form>
        </div>
    </div>
    
</template>

<script>
export default {
  name:'register'
}
</script>

<style scoped>
    .box{
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:url('../assets/img/register/dota-body.jpg');
    }
    .container{
        position: absolute;
        top:50%;
        left:50%;
        margin-left:-200px;
        margin-top:-200px;
        width:400px;
        height:400px;
        background: #eee;
        border:3px solid #aaa;
        border-radius: 10%;
        /*margin:20px auto;*/
        padding:20px 0;
    }
    .container form>div input{
        width:80%;
        height:35px;
        padding:5px 15px;
        font-size:16px;
        margin-bottom:10px;
    }
    .container form>div button{
        width:50%;
        height:35px;
        font-size:16px;
        color:#fff;
        background:#999;
        border-radius: 8px;
    }
    .container form>div button:hover{
        background: #777;
    }
    .container form>div a{
        color:#666;
        text-decoration: none;
    }
</style>
