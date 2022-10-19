
import './App.css';
// import Employee from './Employee';
import Count  from  './Count';
import Decrement from './Decrement';
import Reset from './Reset'
import Container from '@mui/material/Container';
import { useState } from "react";
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import { padding } from '@mui/system';

// import { textAlign } from '@mui/system';


function App() {

  const [count,setCount] = useState(0);

  // const currDate = new Date().toLocaleDateString();
  // const currTime = new Date().toLocaleTimeString();
  // const month = new Date().getMonth();
  // const getstring = new Date().toDateString();
  // const year = new Date().getFullYear();
  // const date =new Date().getDate();
  // const hours = new Date().getHours();

  // let hello = "HELLO";
  // const emp =[
  //   {
  //     Id:1,
  //     Name:"Devyani",
  //     Email:"devyani@gmail.com"
  //   },
  //   {
  //     Id:2,
  //     Name:"Pooja",
  //     Email:"pooja@gmail.com"
  //   },
  //   {
  //     Id:3,
  //     Name:"pratiksha",
  //     Email:"pratiksha@gmail.com"
  //   }
  // ];
  return (
    <>

      <Container maxWidth="sm">
      <Card sx={{ width:300  }}>
      <CardContent>
      <h1 style={{color:"Green",align:"center"}}>Count:{count}</h1>
      <Stack direction="row" spacing={2}>
      <Count count={count} setCount={setCount}/>
      <Decrement count={count} setCount={setCount}/>
      <Reset count={count} setCount={setCount}/>
      </Stack>
      </CardContent>
     
    </Card>
     
      </Container>
    </>
     
      /* <h1>{hello}</h1>
      <h1>{date}</h1>
      <h2>{getstring}</h2>
      <h2>{year}</h2>
      <h2>{currDate}</h2>
      <h2>{month}</h2>
      <h2>{currTime}</h2>
      <h1>{hours}</h1>
      <Employee/> */
  
  )
}

export default App;
