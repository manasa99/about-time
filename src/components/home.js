import React from "react";
import { Typography } from "@mui/material"; 

export default function Home() {

    const [dateVar, setDateVar] = React.useState(new Date());

    React.useEffect(()=>{
      setDateVar(new Date());
    });
    return (<> <Typography sx={{ textAlign: "center", marginTop: "35vh" }} variant='h3'>
        {dateVar.getHours()} : {dateVar.getMinutes()} : {dateVar.getSeconds() > 9 ? dateVar.getSeconds() : '0' + dateVar.getSeconds()}
    </Typography>
        <br></br>
        <Typography sx={{ textAlign: "center" }} variant='h4'>
            {dateVar.toDateString()}
        </Typography>
    </>)
}