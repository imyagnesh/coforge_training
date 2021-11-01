export default (state = {}, {type, payload}) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAIL)/.exec(type);
  if (!matches) return state;

  const [, requestName, requestType] = matches;
  if (requestType === 'REQUEST') {
    return {...state, [requestName]: true};
  }

  const {[requestName]: data, ...rest} = state;
  return rest;
};
