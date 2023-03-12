import React, { useReducer } from "react";
import * as actionTypes from "./actions"
//
const initialState = {
  loading: false,
  error: null,
  quote: "",
};

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_QUOTE_START":
//       return {
//         ...state,
//         loading: true,
//         quote: "",
//       };
//     case "FETCH_QUOTE_FAIL":
//       return {
//         ...state,
//         loading: true,
//         error: "unexpected error",
//         quote: "",
//       };
//     case "FETCH_QUOTE_SUCCESS":
//       return {
//         ...state,
//         loading: false,
//         error: null,
//         quote: action.quote,
//       };
//     default:
//       return state;
//   }
// };

const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.FETCH_QUOTE_START:
        return {
          ...state,
          loading: true,
          quote: "",
        };
      case actionTypes.FETCH_QUOTE_FAIL:
        return {
          ...state,
          loading: true,
          error: "unexpected error",
          quote: "",
        };
      case actionTypes.FETCH_QUOTE_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          quote: action.quote,
        };
      default:
        return state;
    }
  };
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

//   const fetchQuote = () => {
//     dispatch({ type: "FETCH_QUOTE_START" });
//     setTimeout(()=>{
//     fetch("https://api.quotable.io/random")
//       .then((res) => res.json())
//       .then((data) =>
//         dispatch({ type: "FETCH_QUOTE_SUCCESS", quote: data.content })
//       )
//       .catch((error) => dispatch({ type: "FETCH_QUOTE_FAIL" }))},500)
//   };

const fetchQuote = () => {
    dispatch({ type: actionTypes.FETCH_QUOTE_START});
    setTimeout(()=>{
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: actionTypes.FETCH_QUOTE_SUCCESS, quote: data.content })
      )
      .catch((error) => dispatch({ type: actionTypes.FETCH_QUOTE_FAIL }))},500)
  };


  return (
    <div>
      <p>useReducer</p>
      <button onClick={fetchQuote}>click</button>
      <section>
        {state.loading ? <p> loading...</p> : null}
        {state.error ? <p style={{color:"red"}}> {state.error}</p> : null}
        {state.quote ? <p> {state.quote}</p> : null}
      </section>
    </div>
  );
};

export default UseReducer;
