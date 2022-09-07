import {Button} from '@mui/material';
import React, {useContext, useState} from 'react';
import {AlertContext} from '../context/AlertContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function AlertExample () {
  const {setAlert} = useContext (AlertContext);
  const [alertData, setAlertData] = useState ({
    alertTitle: 'Example Alert',
    link: 'https://www.test.com',
    text: 'This is a example alert',
    alertType: 'warning',
    timeLimit: 5000,
  });

  const addAlert = () => {
    // console.log (alertData);
    setAlert (alertData);
  };

  const handleChange = prop => event => {
    // console.log (event.target.value);
    setAlertData ({...alertData, [prop]: event.target.value});
  };
  return (
    <div className="alert-example-container">

      <form>
        <div className="form-control">
          <label>Alert Title: </label>
          <input
            type="text"
            placeholder="Enter Alert Title"
            value={alertData.alertTitle}
            onChange={handleChange ('alertTitle')}
          />
        </div>
        <div className="form-control">
          <InputLabel
            style={{color: 'black', fontSize: '15px'}}
            id="demo-simple-select-label"
          >
            Alert Type:{' '}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={alertData.alertType}
            size="small"
            fullWidth
            label="Alert Type"
            onChange={handleChange ('alertType')}
          >
            <MenuItem value={'warning'}>Warning</MenuItem>
            <MenuItem value={'error'}>Error</MenuItem>
            <MenuItem value={'info'}>Info</MenuItem>
            <MenuItem value={'success'}>Success</MenuItem>
          </Select>
        </div>
        <div className="form-control">
          <label>Alert Link: </label>
          <input
            type="url"
            placeholder="Enter Alert link"
            value={alertData.link}
            onChange={handleChange ('link')}
          />
        </div>

        <div className="form-control">
          <label>Alert Duration: </label>
          <input
            type="number"
            placeholder="Enter Alert Duration in ms"
            value={alertData.timeLimit}
            onChange={handleChange ('timeLimit')}
          />
        </div>

        <div className="form-control-textarea">
          <label>Alert Description: </label>
          <textarea
            type="text"
            placeholder="Enter Alert Description"
            value={alertData.text}
            onChange={handleChange ('text')}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            margin: '10px',
          }}
        >
          <Button variant="contained" onClick={addAlert}>Add Alert</Button>
        </div>

      </form>

    </div>
  );
}

export default AlertExample;
