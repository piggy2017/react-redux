import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,GET_LIST} from "./actionTypes"
const defalutState={
    inputValue : 'learn react-redux',
    list :[]
}
export default (state=defalutState,action)=>{
    if(action.type===CHANGE_INPUT){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    if(action.type===ADD_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        if(newState.inputValue!==""){
            newState.list.push(newState.inputValue)
            newState.inputValue=""
        }else{
            newState.inputValue=""
        }
        return newState
    }
    if(action.type===DELETE_ITEM){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type===GET_LIST){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list=action.data
        return newState
    }
    return state
}