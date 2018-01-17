import React,{Component} from 'react';
import {FlatList,Text} from 'react-native';
import ToDoItem from './todoitem'

export default class ToDoList extends Component{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    componentWillReceiveProps=()=>{
        //允许修改状态
        this.setState({list:this.props.myList});
    }
    showItem=(info)=>{
        return <ToDoItem 
            delete={this.props.funcRemove} 
            myIndex={info.index}
            myContent={info.item}/>;
    }
    render(){
        return <FlatList 
            renderItem={this.showItem}
            extralData={this.state}
            data={this.state.list}>

        </FlatList>
    }
}