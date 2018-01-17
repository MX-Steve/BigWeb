import React,{Component} from 'react';
import {StyleSheet,View,Image,Text,TouchableOpacity,ScrollView} from 'react-native';

import MyButton from './mybutton';

export default class ProjectMain extends Component{
    // jump方法是一个自定义 用来实现导航的方法，只需要通过参数指定要跳转的目的地的地址
    jump=(desPath)=>{
        this.props.navigation.navigate(desPath)
    }
    render(){
        return <ScrollView style={{backgroundColor:'powderblue'}}>
            <View style={{backgroundColor:"powderblue"}}>
            {/*第一行*/}
            <View style={{flexDirection:'row'}}>
                {/*第一列*/}
                <View style={myStyle.myCol}>
                    <Text style={{color:"red",fontSize:20}}>200</Text>
                    <Text>当日PC端PV量</Text>
                </View>
                {/*第二列*/}
                <View style={myStyle.myCol}>
                    <Text style={{color:"green",fontSize:20}}>230</Text>
                    <Text>移动端PV量</Text>
                </View>
            </View>
            {/*第二行*/}
            <View style={{flexDirection:'row'}}>
                {/*第一列*/}
                <View style={myStyle.myCol}>
                    <Text style={{color:"red",fontSize:20}}>1020</Text>
                    <Text>已完成订单总数</Text>
                </View>
                {/*第二列*/}
                <View style={myStyle.myCol}>
                    <Text style={{color:"green",fontSize:20}}>2390</Text>
                    <Text>当日App下载量</Text>
                </View>
            </View>
            {/*第三行*/}
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity 
                    style={myStyle.myCenter}>
                <View style={myStyle.myPicRow}>
                    <Image style={myStyle.myPic} source={require("../../img/order.png")}></Image>
                    <Text>订单管理</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>this.jump('myUserList')}
                    style={myStyle.myCenter}>
                <View style={myStyle.myPicRow}>
                    <Image style={myStyle.myPic} source={require("../../img/user.png")}></Image>
                    <Text>用户管理</Text>
                </View>
                </TouchableOpacity>
            </View>
            {/*第四行*/}
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity 
                    onPress={()=>this.jump('myList')}
                    style={myStyle.myCenter}>
                <View style={myStyle.myPicRow}>
                    <Image style={myStyle.myPic} source={require("../../img/product.png")}></Image>
                    <Text>商品管理</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={myStyle.myCenter}>
                <View style={myStyle.myPicRow}>
                    <Image style={myStyle.myPic} source={require("../../img/setting.png")}></Image>
                    <Text>设置</Text>
                </View>
                </TouchableOpacity>
            </View>
            {/*第五行*/}
            {/*<View Style={{flexDirection:'row'}}>
                <MyButton/>
                <MyButton/>
            </View>*/}
        </View>
        </ScrollView>
    }
}

const myStyle=StyleSheet.create({
    myCol:{
        flex:1,
        height:100,
        borderBottomWidth:5,
        borderRightWidth:5,
        borderColor:'#e6e6e6',
        /* 垂直居中/水平居中 */
        justifyContent:'center',
        alignItems:"center"
    },
    myPicRow:{
        flex:1,
        height:150,
        /* 垂直居中/水平居中 */
        justifyContent:'center',
        alignItems:"center"
    },
    myCenter:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:120
    },
    myPic:{
        width:50,height:50
    }
});