import React from 'react'

let DATA_STORE={};

const HelloWorld = () => {
    return (
        <div className='hello-world'>
            <h1>ReactJS Seed</h1>
            <p>Welcome to ReactJS Seed</p>
            <input type="text" placeholder="Enter your name" onChange={handleOnChange}/>
            <button onClick={handleOnClick}>Print Me</button>
        </div>
    )


};

function handleOnChange(e){
    DATA_STORE = Object.assign({},e.target.value)
}

function handleOnClick(){
    let str='';
    for(let index in DATA_STORE){
        str=str+DATA_STORE[index]
    }
    console.info(str)
}



export default HelloWorld;