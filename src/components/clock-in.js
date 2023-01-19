import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { TextField, Typography } from "@mui/material";



function Clockin({colors,handleColor}){
    const [isClocked, clockStateChange] = useState("Clock-in")
    const [message, setMessage] = useState('');
    const [textState, stateShowHide] = useState("flex")
    const [labelState, labelShowHide] = useState("none")
    const [startTime, setStartTime] = useState('')
    const handleChange = (event) => {
        setMessage(event.target.value);
      };
    const handleClick = () => {
        if (isClocked == "Clock-in"){
            let start = new Date()
            let start_time = start.getHours() + ':' + start.getMinutes() + ':' + start.getSeconds()

            setStartTime(start_time)
            clockStateChange("Clock-out")
            handleColor(colors[1]);
            stateShowHide("none")
            labelShowHide("flex")
        }
        else{
            let end = new Date()
            let endTime = end.getHours() + ':' + end.getMinutes() + ':' + end.getSeconds()
            let date = end.getDate() + '-' + end.getMonth() + '-' + end.getFullYear()
            window.localStorage.setItem(end.valueOf(),
                JSON.stringify({Work: `${message}`, Date: `${date}`, StartTime : `${startTime}`, EndTime : `${endTime}`}) )
            handleColor(colors[0]);
            clockStateChange("Clock-in")
            stateShowHide("flex")
            labelShowHide("none")
        }
    }
    return (<>
    
    <Box sx={{ textAlign: "center", marginTop: "35vh", display: "flex",
          justifyContent: "center",
          alignItems: "center" }} variant='h3'>
        <TextField
        id="Work"
        label="Work"
        sx = {{display: textState}}
        
        onChange={handleChange}
        />
        <Typography sx = {{display: labelState}}>
            Clocked in for {message}</Typography>

</Box>
<br></br>
<Box  sx={{ textAlign: "center", display: "flex",
          justifyContent: "center",
          alignItems: "center" }} variant='h3'>       <Button key = "Clock"
        variant = "contained"
        component = "label"
        onClick = {handleClick}
       >{isClocked} </Button>
    </Box>
        
    
    </>)
}
export default Clockin;