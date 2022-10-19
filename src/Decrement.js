// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Decrement({setCount,count}) {
    function decrese()
    {
      if(count>0)
       setCount(count-1)
    }
    
     return(
      
      <Button  variant="contained" color="info" onClick={decrese}>-</Button>
      // {/* <button >Click</button>  */}
    
     );
        
    }
    
    export default Decrement;