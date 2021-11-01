export const cartIniialState = {
  data: [],
  total: 0,
  items: 0,
};

const getTotalPrice = data =>
  data.reduce((p, c) => p + c.price * c.quantity, 0);

const getTotalItems = data => data.reduce((p, c) => p + c.quantity, 0);

export default (state = cartIniialState, {type, payload}) => {
  switch (type) {
    case 'LOAD_CART_SUCCESS': {
      return {
        ...state,
        data: payload,
        total: getTotalPrice(payload),
        items: getTotalItems(payload),
      };
    }

    case 'ADD_TO_CART_SUCCESS': {
      let data = state.data;
      const index = data.findIndex(x => x.id === payload.id);

      if (index === -1) {
        data = [...data, payload];
      } else {
        if (payload.quantity <= 0) {
          data = [data.slice(0, index), data.slice(index + 1)];
        } else {
          data = [data.slice(0, index), payload, data.slice(index + 1)];
        }
      }
      return {
        ...state,
        data,
        total: getTotalPrice(data),
        items: getTotalItems(data),
      };
    }

    default:
      return state;
  }
};
