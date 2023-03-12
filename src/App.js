import React from "react";
import Effecthook from "./api/Effecthook";
import PaginationTask from "./api/PaginationTask";
import ReactHookFormLib from "./api/ReactHookFromLib/ReactHookFormLib";
import ValidationWithYup from "./api/ReactHookFromLib/ValidationWithYup";

// import AxiosFetch from './api/AxiosFetch';
// import Todo from './api/crud/Todo';
// import TodoList from './crud/TodoList';
// import FetchLoading from './api/FetchLoading';
import "./App.css";
// import MaterialUI from './material/MaterialUI';
// import Responsive from './responsive website/Responsive';
// import SignIn from './SignIn';

// import Dropdown from './Radio Button/Dropdown';
// import Radiobtn from './Radio Button/Radiobtn';
// import ParentToChild from './ParentToChild';
// import RockPaperScissors from './RockPaperScissors/RockPaperScissors';
// import RadioButton from './Radio Button/RadioButton';

// import Dropdown from './Dropdown';
// import ChildToParent from './prop drilling and child2parent/ChildToParent';
// import FormHandle from './form/FormHandle';
// import ParentToChild from './prop drilling and child2parent/ParentToChild';
// import Parent from './child parent/Parent';
// import ChildToParent from './ChildToParent';
import Checkbox from './map/Checkbox';
// import Checkbox2 from './map/Checkbox2';
// import UseReducer from './useReducer/UseReducer';

function App() {
  return (
    <div className="App">
   
      
      {/* <Effecthook /> */}
      {/* <PaginationTask/> */}
      {/* <TodoList/> */}
      {/* <AxiosFetch/> */}
      {/* <RockPaperScissors/> */}
      {/* <MaterialUI/> */}
      {/* <hr />   */}
      {/* <SignIn/> */}
      {/* <Responsive/> */}
      {/* <RadioButton/>
    <Radiobtn/>
    <Dropdown/> */}
      {/* <ParentToChild/> */}
      {/* <FetchLoading/> */}
      {/* <Dropdown/> */}
      {/* <Parent/> */}
      {/* <UseReducer/> */}
      {/* <FormHandle/> */}
      {/* <ParentToChild/> */}
      {/* <ChildToParent/> */}
      <Checkbox/>
      {/* <Checkbox2/> */}
      {/* <ChildToParent/> */}
    </div>
  );
}

export default App;

// import { useState } from 'react';

// export default function App() {
//   const [updated, setUpdated] = useState('');

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       setUpdated(event.target.value);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         id="message"
//         name="message"
//         onKeyDown={handleKeyDown}
//       />

//       <h2>Updated: {updated}</h2>
//     </div>
//   );
// }
