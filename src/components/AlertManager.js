import {
  Badge,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import React, {useContext} from 'react';
import {AlertContext} from '../context/AlertContext';
import AlertComponent from './AlertComponent';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function AlertManager () {
  const {alerts, removeAlert} = useContext (AlertContext);

  const [open, setOpen] = React.useState (false);
  const anchorRef = React.useRef (null);

  const handleToggle = () => {
    setOpen (prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains (event.target)) {
      return;
    }

    setOpen (false);
  };

  function handleListKeyDown (event) {
    if (event.key === 'Tab') {
      event.preventDefault ();
      setOpen (false);
    } else if (event.key === 'Escape') {
      setOpen (false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef (open);
  React.useEffect (
    () => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus ();
      }

      prevOpen.current = open;
    },
    [open]
  );

  //   console.log (alerts);

  const handleRemoveAlert = id => {
    removeAlert (id);
  };

  return (
    <div className='alertManager-nav'>

      <h2>Alert Manager</h2>

      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <Badge badgeContent={alerts.length} color="warning">
            <NotificationsActiveIcon color="action" />
          </Badge>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({TransitionProps, placement}) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: placement === 'bottom-start'
                  ? 'left top'
                  : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    {alerts &&
                      alerts.map (item => {
                        return (
                          <MenuItem key={item.id}>
                            <AlertComponent
                              item={item}
                              handleRemoveAlert={handleRemoveAlert}
                            />
                          </MenuItem>
                        );
                      })}

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default AlertManager;
