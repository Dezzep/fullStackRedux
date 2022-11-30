const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GOOD':
      const goodIncrement = state.good + 1;
      return { ...state, good: goodIncrement };
    case 'OK':
      const okIncrement = state.ok + 1;
      return { ...state, ok: okIncrement };
    case 'BAD':
      const badIncrement = state.bad + 1;
      return { ...state, bad: badIncrement };
    case 'ZERO':
      return initialState;
    default:
      return state;
  }
};

export default counterReducer;
