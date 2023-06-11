import React, { Component } from 'react';

   
    
    
    const Counter=(props)=> { 
       // console.log('props',this.props);

       const getBadgeClasses=()=>{
        let classes="badge m-2 badge-";
        classes+=props.counter.value===0 ? "warning":"primary";
        return classes;
    }
    const formatCount=()=>{
        return props?.counter?.value===0 ? "zero":props?.counter?.value;
    }
    
       
        return(
        
            <div>
               
                <span className={()=>getBadgeClasses()}>{formatCount()} </span>
                <button onClick={()=>{
                    // console.log(props.counter)
                    props.onIncrement(props.counter)
                }
                }
                className="btn btn-secondary btn-sm"> 
                Increment
                
                </button>
               < button 
               onClick={()=>props.onDelete(props.counter.id)}
               className="btn btn-danger btn-sm m-2">
                Delete 
                </button>
            </div>
           
        );
    }

  

export default Counter;
 
