import React, { useReducer } from 'react';

export default function ButtonReducer() {
    const initialState = {
        counter:0
    }

    function reducer(state,action){
        let newState;
        // eslint-disable-next-line default-case
        switch(action.type){
            case 'add':
                newState = {counter: state.counter +1}
            // eslint-disable-next-line no-fallthrough
            case 'sub':
                newState = {counter: state.counter -1}
        }

        return newState
    }

    const [state,dispatch] = useReducer(reducer,initialState)
    const action ={
        type:"add",
        // data:{
        //     amount:5
        // }
    }
  return <div>
      <p>{state.counter}</p>
      <button onClick={()=>{dispatch(action)}}>Click</button>
  </div>;
}