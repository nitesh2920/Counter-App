import React, { useState } from 'react'

function Counter(){
    const [count,setCount]=useState(0)

    /// ys sirf ek baar hee update krega kyuki use state batche
    /// krdeta hai aur tab operation jo ki 1 krka hee value badhega iska.
    const increment=()=>{
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
        setCount(count+1);
    }

    //agar humlog ko kuch aisa krna hai toh humlog callback skta hai prevcount krka
    // const increment=()=>{
    //     setCount(prevCount=> prevCount+1);
    //     setCount(prevCount=> prevCount+1);
    //     setCount(prevCount=> prevCount+1);
    //     setCount(prevCount=> prevCount+1);
    // }

    const decrement=()=>{
        if(count>0){
            setCount(count-1);
        }
        else{
            alert("Counter cannnot be negative value")
        }
    }

    const reset=()=>{
        setCount(0);
    }
    return(
        <div className="container">
            <h1>{count}</h1>
            <div className="flex">
                <div className="btn1" onClick={increment}>Increment</div>
                <div className="btn2" onClick={decrement}>Decrement</div>
                <div className="btn3" onClick={reset}>Reset</div>
            </div>
        </div>
    )
}

export default Counter;