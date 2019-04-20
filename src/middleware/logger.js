const logger = (store) => (next) => (action) => {
    const returnValue = next(action);
    console.log('Action: ', action.type, store.getState());
    return returnValue;
};

export default logger;