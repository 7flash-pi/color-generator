import React, { useEffect, useState } from 'react'
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight , index}) => {
    
    const [alert,SetAlert]=useState(false);
    const bcg=rgb.join(',');
    const hex=rgbToHex(...rgb);

    useEffect(()=>
    {
        const timeout=setTimeout(()=>
        {
            SetAlert(false);
        },3000) 
        return () => {
            clearTimeout(timeout);
        }
        

    },[alert])

  return (
    <article className={`color ${index > 20 && 'color-light'}`}
    style={{ backgroundColor: `rgb(${bcg})` }}
    onClick={()=>{
        SetAlert(true);
        navigator.clipboard.writeText(hex);
    }}>
        <p className="percent-value">
            {weight}%
        </p>
        <p className="color-value">{hex}</p>
        {
            alert && <p className="alert">Copied to clipboard</p>
        }


    </article>
  )
}

export default SingleColor
