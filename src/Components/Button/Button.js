import React, { useState } from 'react';

const Button = () => {
    const [blue, setBlue] = useState('white');
    const [green, setGreen] = useState('white');
    const [red, setRed] = useState('white');
// const [isBlack, setIsBlack] = useState(true);

const handleChangeBlue = (e) => {
    setBlue(blue === 'white' ? 'blue' : 'white');
}
const handleChangeGreen = (e) => {
    setGreen(green === 'black' ? 'green' : 'black');
}
const handleChangeRed = (e) => {
    setRed(red === ' cursive;' ? ' serif;' : 'cursive');
}
    return (
        <>
       <label onClick={handleChangeBlue} className="switch">
       <button className='btn btn-success' style={{backgroundColor:'blue'}}> Background color</button>
      
        <span className="slider round" />
       </label>  
       <label onClick={handleChangeGreen} className="switch">
      
       <button className='btn btn-success' style={{backgroundColor:'green'}}> Font color</button>
      
        <span className="slider round" />
       </label> 
       <label onClick={handleChangeRed} className="switch">
      
       <button className='btn btn-success' style={{backgroundColor:'red'}}> Font Family</button>
        <span className="slider round" />
       </label> 
     
        <div class="input-group">
      
             <textarea style={{ backgroundColor :blue ,color:green,fontFamily:red }}   class="form-control switch-container_text" aria-label="With textarea ">Hello every One </textarea>
       </div>
       </>
    );
};

export default Button;