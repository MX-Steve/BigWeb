import React,{Component} from 'react';
import {View} from 'react-native';
import ToDoList from './todolist';
import ToDoInput from './todoinput';

export default class ToDoBox extends Component{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    //定义一个带有参数的方法，传递给input，让todoinput按钮单击时将数据发过来
    saveMsg=(msg)=>{
        var nowList = this.state.list;
        nowList.push(msg);
        this.setState({list:nowList},()=>{
            // console.log(this.state.list);
        });
    }
    //删除操作:将状态中的数组第几个删掉
    removeMsg=(index)=>{
        var nowList = this.state.list;
        nowList.splice(index,1);
        this.setState({list:nowList});
    }
    render(){
        return <View>
            <ToDoInput funcSave={this.saveMsg}/>
            <ToDoList funcRemove={this.removeMsg} myList={this.state.list}/>
        </View>
    }
}