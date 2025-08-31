import React,{useEffect} from 'react';
import ReactRedux2 from './ReactRedux2';
 function ReactRedux1() {
   return (
     <div>
       <h1>React Redux Example</h1>
       <ReactRedux2  data={{name: 'John Doe', age: 30}}/>
     </div>
   );
 }

 export default ReactRedux1;    