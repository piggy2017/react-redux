import React from 'react';
// import store from './store'
import {connect} from "react-redux"   // connect连接器
import {Input,Button,List} from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from "./store/actionTypes"


// 无状态组件其实就是一个函数，它不用再继承任何的类（class），当然如名字所一样，也不存在state（状态）。因为无状态组件其实就是一个函数（方法）,所以它的性能也比普通的React组件要好。
const TodoList=(props)=>{
    console.log(props);
    let {inputValue,inputChange,addList,list,deleteItem}=props  // 解构赋值
        return (  
            <div style={{margin:'10px'}}>
                <div>
                    <Input value={inputValue} onChange={inputChange} style={{width:'250px',marginRight:'10px'}}/>
                    <Button onClick={addList}>提交</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List 
                        bordered 
                        dataSource={list}
                        renderItem={
                            (item,index)=>(
                                <List.Item onClick={()=>{deleteItem(index)}}>{item}</List.Item>
                            )}>
                    </List>
                </div>
            </div>
        );
}
// class TodoList extends Component {
//     render() { 
//         console.log(this.props)
//         let {inputValue,inputChange,addList,list,deleteItem}=this.props  // 解构赋值
//         return (  
//             <div>
//             <div>
//                 <input value={inputValue} onChange={inputChange}/>
//                 <button onClick={addList}>提交</button>
//             </div>
//             <ul>
//                 <li>happy coding!</li>
//                 {list.map((item,index)=>{
//                     return <li key={index} onClick={()=>{deleteItem(index)}}>{item}</li>
//                 })}
                
//             </ul>
//         </div>
//         );
//     }
    
// }
 

const stateToProps=(state)=>{  // 映射关系,将store.state映射到props
    return{
        inputValue:state.inputValue,
        list:state.list
    }
}
const dispatchToProps=(dispatch)=>{
    return {
        inputChange(e){
            console.log(e.target.value)
            const action={
                type:CHANGE_INPUT,
                value:e.target.value
            }
            dispatch(action)
        },
        addList(){
            const action={
                type:ADD_ITEM
            }
            dispatch(action)
        },
        deleteItem(index){
            const action={
                type:DELETE_ITEM,
                index:index
            }
            dispatch(action)
        },
        getList(){
            axios.get("https://www.easy-mock.com/mock/5d661d956027392ba6642a36/reactdemo01/serverList").then(res=>{
                console.log(res);
                const action = {
                    type:GET_LIST,
                    data:res.data.data
                }
                dispatch(action)
            })
        }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList);