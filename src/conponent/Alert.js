import React from 'react'

export default function alert(props) {
    // const capitalize=(word)=>{
    //     const lower=word.tolowerCase;
    //     return lower.charAt(0).toUpperCase()+ lower.slice(1);
    // }
  return (
    <div style={{height:"50px"}}>
    {props.alert &&
    <div>
     <div class="alert alert-warning alert-dismissible fade show" role="alert">
     <strong>{  props.alert.type}</strong>: {props.alert.msg}
        
      </div>
</div>}
    </div>
  )
}
