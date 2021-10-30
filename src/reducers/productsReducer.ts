export const productsIniialState = {
  page: 1,
  loading: false,
  error: null,
  data: [],
  previousData: [],
};

export default (state = productsIniialState, {type, payload}) => {
  switch (type) {
    case 'LOAD_PRODUCTS_REQUEST':
      return {...state, loading: true};

    case 'LOAD_PRODUCTS_SUCCESS':
      return {
        ...state,
        loading: false,
        data: state.page > 1 ? [...state.data, ...payload] : payload,
        previousData: payload,
      };

    case 'LOAD_PRODUCTS_FAIL':
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case 'INCREASE_PAGE_REQUEST':
      return {...state, page: state.page + 1};

    case 'RESET_PAGE_REQUEST':
      return {...state, page: 1};

    default:
      return state;
  }
};
