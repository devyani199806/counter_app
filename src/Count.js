
import Button from '@mui/material/Button';

function Count({setCount,count}) {
function clickHandlar()
{
   setCount(count+1)
}

 return(
    
      <Button  variant="contained" color="success" onClick={clickHandlar}>+</Button>
   //   {/* <button onClick={clickHandlar}>Click</button> */}
  
   
 );
    
}

export default Count;