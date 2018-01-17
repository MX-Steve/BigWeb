import React,{Component} from 'react';
import {StyleSheet,View,Text,Button,TextInput,Image,ActivityIndicator} from 'react-native';

export default class ProjectLogin extends Component{
    constructor(){
        super();
        this.state={
            uname:'dingding',
            upwd:'123456',
            isLoadingShow : false,
            t:3
        }
    }
    handleChangeUname=(msg)=>{
        this.setState({uname:msg});
    }
    handleChangeUpwd=(msg)=>{
        this.setState({upwd:msg});
    }
    handlePress=()=>{
        var uname = this.state.uname;
        var upwd = this.state.upwd;
        var url = "http://176.3.15.6:8080/step04/admin/data/user/login.php?uname="+uname+"&upwd="+upwd;
        this.setState({isLoadingShow:true});
        var t = this.state.t;
        var timer = setInterval(()=>{
            t--;
            this.setState({t:t});
            if(t<=0){
                clearInterval(timer);
                timer = null;
                this.sendRequst(url);
            }
        },1000);
    }
    sendRequst=(url)=>{
        fetch(url)
            .then((response)=>response.json())
            .then((response)=>{
                if(response.code==200){
                    this.setState({isLoadingShow:false});                            
                    this.props.navigation.navigate("myMain");
                }else{
                    alert("请保证用户名和密码输入正确");
                }
            });
    }
    render(){
        return <View>
            <Image style={myStyle.avatar} source={require("../../img/1.jpg")}></Image>
            <TextInput 
                onChangeText={this.handleChangeUname}
                value={this.state.uname} 
                placeholder="请输入用户名"></TextInput>
            <TextInput 
                secureTextEntry={true}
                onChangeText={this.handleChangeUpwd}
                value={this.state.upwd} 
                placeholder="请输入密码"></TextInput>
            <Button 
                onPress={this.handlePress} 
                title="登录"></Button>
            {(this.state.isLoadingShow)&&(
                <View style={myStyle.myShow}>
                    <ActivityIndicator
                    size="large"></ActivityIndicator>
                    <Text>登录倒计时：{this.state.t}</Text>
                </View>
            )}
            
        </View>
    }
}
const myStyle=StyleSheet.create({
    avatar:{
        width:50,height:50,
        borderRadius:50,
        alignSelf:'center'
    },
    myShow:{
        alignSelf:'center',
        justifyContent:"center",
        backgroundColor:"#ddd",
        position:'absolute',
        top:0,left:0,right:0,bottom:0
    }
});