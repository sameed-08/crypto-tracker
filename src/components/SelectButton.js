import { makeStyles } from '@material-ui/core'
// import { margin } from '@mui/system';
import React from 'react'

const useStyles = makeStyles({
    selectbutton:{
        "&:hover": {
            backgroundColor: "gold",
            color: "black",
        },
    },
})


const SelectButton = ({children, selected, onClick}) => {

    const classes = useStyles();

  return (
    <span
    onClick={onClick}
    style = {{
        border: "1px solid gold",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
        width: "22%",
    }}
    className = {classes.selectbutton}>

      {children}
    </span>
  )
}

export default SelectButton
