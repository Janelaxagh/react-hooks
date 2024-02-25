import { useReducer } from 'react';

interface State {
  counter: number;
  showText: boolean;
}

type Action =
  | { type: 'INCREMENT' }
  | { type: 'toggleShowText' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "toggleShowText":
      return { ...state, showText: !state.showText };
    default:
      return state;
  }
};

export const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0, showText: true });

  return (
    <div>
      <h2>{state.counter}</h2>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "toggleShowText" });
        }}
      >
        Click here!
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};
