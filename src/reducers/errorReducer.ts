export default (state = {}, {type, payload}) => {
  const matches = /(.*)_(REQUEST|FAIL)/.exec(type);
  if (!matches) return state;

  const [, requestName, requestType] = matches;
  if (requestType === 'FAIL') {
    return {...state, [requestName]: payload};
  }

  const {[requestName]: data, ...rest} = state;
  return rest;
};
