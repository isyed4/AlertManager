var alertsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ALERT':
      return [
        ...state,
        {
          timelimit: action.timeLimit,
          text: action.text,
          alertTitle: action.alertTitle,
          alertType: action.alertType,
          link: action.link,
          timeLimit: action.timeLimit,
          id: action.id,
        },
      ];

    case 'REMOVE_ALERT':
      return state.filter (alert => {
        if (alert.id === action.id) {
          return false;
        } else {
          return true;
        }
      });

    default:
      return state;
  }
};

export default alertsReducer;
