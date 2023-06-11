import React,{useState} from  'react';
import NavBar from './components/navbar';
import Counters from './components/counters';


const Priya=()=>{
    const [counters,setCounters]=useState([
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}

    ])

    const handleIncrement=(counter)=>{
        let countersLocal=[...counters];
        const index=countersLocal.indexOf(counter);
        countersLocal[index]['value']= countersLocal[index].value+1
        setCounters(countersLocal)
      
      };
      
      const handleReset=()=>{
      const countersLocal=counters.map(c=>{
      c.value=0;
      return c;
      });
      setCounters(countersLocal)
      };
      
      const handleDelete=counterId=>{
        const countersLocal=counters.filter(c=>c.id !== counterId);
        setCounters(countersLocal)
      };
    return(<>
        <div>
        <NavBar totalCounters={counters.filter(c=>c.value>0).length} />
    
    
    <main className="container">

        < Counters
        counters={counters}
        onReset={handleReset}
        onIncrement={handleIncrement}
        onDelete={handleDelete}

        />

    </main>
        </div>
    </>)
}
export default Priya