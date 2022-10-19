import Button from '@mui/material/Button';

function Reset({setCount,count}) {
    function reset()
    {
       setCount(0)
    }
    
     return(
      
      <Button  variant="contained" color="warning" onClick={reset}>Reset</Button>
      // {/* <button >Click</button>  */}
    
     );
        
    }
    
    export default Reset;