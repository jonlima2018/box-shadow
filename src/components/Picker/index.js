import React, { useState } from 'react'
import reactCSS from 'reactcss'
import { Input } from '@material-ui/core';
import { ChromePicker } from 'react-color'

function Picker(props) {

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [colorHex, setColorHex] = useState({hex:props.color});


  const handleClick = () =>{
    setDisplayColorPicker(!displayColorPicker);
  }

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColorHex({hex: color.hex});
    props.getColor(colorHex.hex);
    
  };

  const styles = reactCSS({
    'default': {
      container:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
      },
      span:{
        fontWeight:'bold',
      },
      input:{
        marginLeft: '20px',
        },
      color: {
        width: '30px',
        height: '20px',
        borderRadius: '2px',
        background: `${props.color}`,
      },
      swatch: {
        padding: '0px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
        marginLeft: '10px'
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
    },
  });

  return(
    <div style={ styles.container}>
      <span style={styles.span}>{props.name}</span>
      <div style={styles.container}>
        <div style={ styles.swatch } onClick={handleClick }>
          <div style={ styles.color } />
        </div>
        <Input style={styles.input} value={props.color} margin="dense" />
      </div>
      { displayColorPicker ? <div style={ styles.popover}>
        <div style={ styles.cover } onClick={handleClose }/>
        <ChromePicker disableAlpha={true} color={colorHex} onChange={handleChange} />
      </div> : null }
        
      
    </div>
  );

}
  
export default Picker