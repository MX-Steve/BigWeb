<template>
    <div class="box">
        <div class='container'>
            <h1>注册</h1>
            <form>
                <div>
                    <label>
                        <input type="text" name="uphone" maxlength="11" class="input1" 
                                v-model.trim='uphone'
                                placeholder="手机号">	
                    </label>
                </div>
                <div>
                    <label>
                        <input type="text"  onfocus="this.type='password'" name="upwd" maxlength="16" class="input1"  
                                v-model.trim = 'upwd'
                                placeholder="密码(由6~16位英文字母以及数字组成)">		
                    </label>
                </div>
                <div>
                    <label>
                        <input type="text" maxlength="16" class="input1" placeholder="重复密码">		
                    </label>
                </div>
                <div>
                    <label>
                        <input type="text" name="user_true_name" maxlength="8" class="input1"
                                v-model.trim='user_true_name'
                                placeholder="真实姓名">
                    </label>
                </div>
                <div>
                    <label>
                        <input type="text" name="user_id_card" maxlength="18" class="input1" 
                                v-model.trim = 'user_id_card'
                                placeholder="身份证">
                    </label>
                </div>
                <div>
                    <label>
                        <input id='isOk' type="checkbox"
                            v-model='isOk'
                         name='isOk'> 同意本站协议
                    </label>
                </div>
                <div>
                    <button type='button' @click="handleRegister">注册</button>
                </div>
            </form>
        </div>
    </div>
    
</template>

<script>
export default {
  name:'register',
  data(){
      return {
          isOk:false,
          user_id_card:'',
          user_true_name:'',
          upwd:'',
          uphone:''
      }
  },
  methods:{
      handleRegister:function(){
          this.$http.get('http://127.0.0.1:8080/data_vue_admin/user/register.php').then(
              function(response){
                  console.log(response.data);
              }
          )
      }
  }
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
        top:0;
        left:0;
        right:0;
        bottom:0;
        width:45%;
        height:65%;
        background: #eee;
        border:3px solid #aaa;
        border-radius: 10%;
        margin:20px auto;
        padding:20px 0;
    }
    .container form>div input{
        width:80%;
        height:35px;
        padding:5px 15px;
        font-size:16px;
        margin-bottom:10px;
    }
    #isOk{
        width:15px;
        height:15px;
        padding:0;
       
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
</style>
