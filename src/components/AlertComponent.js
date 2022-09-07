import React from 'react';
import {Alert, AlertTitle} from '@mui/material';
function AlertComponent({item, handleRemoveAlert}) {
  return (
    <Alert
      severity={item.alertType}
      onClose={() => handleRemoveAlert (item.id)}
    >
      <AlertTitle>{item.alertTitle}</AlertTitle>
      <small>{item.text}</small>
      {' '}
      <a href={item.link} target="_blank" rel="noreferrer">Read More</a>
    </Alert>
  );
}

export default AlertComponent;
