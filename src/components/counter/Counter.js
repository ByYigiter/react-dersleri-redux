import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {decrement,increment} from "../../store/slices/counter-slice"

const Counter = () => {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
  return (
    <div style={{display:"flex" ,gap:"10px"}}>
        <Button onClick={()=>dispatch(decrement())}>-</Button>
        <span>{count}</span>
        <Button  onClick={()=>dispatch(increment())}>+</Button>
    </div>
  )
}

export default Counter