export default store => next => action => {
  const matches = /(.*)_(REQUEST|FAIL)/.exec(action.type);
  if (matches) {
    const [, , responseType] = matches;
    if (responseType === 'FAIL') {
      // API CALL
    }
    if (responseType === 'REQUEST') {
      // API CALL
    }
  }

  next(action);
};
