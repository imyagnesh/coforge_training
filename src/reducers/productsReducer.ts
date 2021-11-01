export const productsIniialState = {
  page: 1,
  data: [],
};

export default (state = productsIniialState, {type, payload}) => {
  switch (type) {
    case 'LOAD_PRODUCTS_SUCCESS':
      return {
        ...state,
        data: state.page > 1 ? [...state.data, ...payload] : payload,
      };

    case 'INCREASE_PAGE':
      return {...state, page: state.page + 1};

    case 'RESET_PAGE':
      return {...state, page: 1};

    default:
      return state;
  }
};
