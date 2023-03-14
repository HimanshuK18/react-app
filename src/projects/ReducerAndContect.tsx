import React, { createContext, Dispatch, useReducer } from 'react';

interface State {
  count: number;
}

type Action = { type: 'increment' } | { type: 'decrement' };

interface ContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

const initialState: State = {
  count: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

export const CounterContext = createContext<ContextProps>({
  state: initialState,
  dispatch: () => null,
});

export const CounterProvider: React.FC = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};
