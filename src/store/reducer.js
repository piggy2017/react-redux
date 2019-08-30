const defalutState={
    inputValue : 'learn react-redux',
    list :[]
}

export default (state=defalutState,action)=>{
    if(action.type==="change_input"){
        let newState=JSON.parse(JSON.stringify(state))
        newState.inputValue=action.value
        return newState
    }
    if(action.type==="add_item"){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue=""
        return newState
    }
    if(action.type==="delete_item"){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index,1)
        return newState
    }
    if(action.type==="get_list"){
        let newState=JSON.parse(JSON.stringify(state))
        newState.list=action.data
        return newState
    }
    return state
}