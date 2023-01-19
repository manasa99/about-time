import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useEffect } from "react";

export default function Timer(){

    const [timerMinutes, setTimerMinutes ] = useState(0);
    const [minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(0);

    const [resumePause, setResumePause ] = useState("Pause");
    const [stopClick, setStopClick] = useState(false)

    const handleClick = (num) => {
        setStopClick(false)
        setTimerMinutes(num)
        setMinutes(num)
        setSeconds(0)
    }

    const handleTimer = (state) => {
        if (state === "reset"){
            setMinutes(timerMinutes)
            setSeconds(0)
            setStopClick(false)
        }
        else if(state === "resumePause"){
            setStopClick(false)
            if (resumePause === "Pause")
                setResumePause("Resume")
            else
                setResumePause("Pause")
        }
        else if (state === "stop"){
            setTimerMinutes(0)
            //setMinutes(0)
            //setSeconds(0)
            setStopClick(true)

        }


    }
    
    useEffect(()=>{
    let interval = setInterval(() => {
            if (resumePause === "Pause" && !stopClick)
                
            {if (seconds > 0) 
                setSeconds(seconds - 1);
            if (seconds === 0) {
                if (minutes === 0) 
                    clearInterval(interval)
                else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }} 
        }, 1000)
        return ()=> {
            clearInterval(interval);
          };
    });

   
    return (
    <>
    <Box  sx={{ textAlign: "center", display: "flex",marginTop: "35vh",  justifyContent: "center"}} variant='h3'>       
        <Button key = "Five"
        variant = "contained"
        component = "label"
        onClick = {() => handleClick(5)}
       >5 </Button>

       <Button key = "Ten"
        variant = "contained"
        component = "label"
        onClick =  {() => handleClick(10)}
       >10 </Button>

       <Button key = "Fifteen"
        variant = "contained"
        component = "label"
        onClick =  {() => handleClick(15)}
       >15 </Button>

       <Button key = "Thirty"
        variant = "contained"
        component = "label"
        onClick =  {() => handleClick(30)}
       >30 </Button>
    </Box>
    <Box  sx={{ textAlign: "center", display: "flex",
          justifyContent: "center",
          alignItems: "center" }} variant='h3'> 
        {  <h1> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        }
     </Box>
     <Box  sx={{ textAlign: "center", display: "flex",
          justifyContent: "center",
          alignItems: "center" }} variant='h3'> 

    <Button key = "Pause"
        variant = "contained"
        component = "label"
        onClick = {() => handleTimer("resumePause")}
       >{resumePause} </Button>
     <Button key = "Stop"
        variant = "contained"
        component = "label"
        onClick = {() => handleTimer("stop")}
       >Stop </Button>
        <Button key = "Reset"
        variant = "contained"
        component = "label"
        onClick = {() => handleTimer("reset")}
       >Reset </Button>

    </Box>

    
    
    </>)
}