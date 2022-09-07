import {createContext, useReducer} from 'react';
import alertReducer from './AlertReducer';
import {v4 as uuid} from 'uuid';

export const AlertContext = createContext ();

export const AlertProvider = ({children}) => {
  const initialState = [];

  const [state, dispatch] = useReducer (alertReducer, initialState);

  const setAlert = data => {
    let uniqueId = uuid ();

    dispatch ({
      ...data,
      id: data.id ? data.id : uniqueId,
      timeLimit: data.timeLimit ? data.timeLimit : 10000,
      type: 'ADD_ALERT',
    });

    setTimeout (() => {
      dispatch ({
        id: data.id ? data.id : uniqueId,
        type: 'REMOVE_ALERT',
      });
    }, data.timeLimit ? data.timeLimit : 10000);
  };

  const removeAlert = id => {
    dispatch ({
      id: id,
      type: 'REMOVE_ALERT',
    });
  };

  return (
    <AlertContext.Provider value={{alerts: state, setAlert, removeAlert}}>
      {children}
    </AlertContext.Provider>
  );
};
