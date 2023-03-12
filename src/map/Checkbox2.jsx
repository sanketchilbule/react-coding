// import React, { useState } from 'react';

// function Checkbox2() {
//   const [checkedItems, setCheckedItems] = useState([
//     "play cricket",
//     "play video game",
//     "read book",
//   ]);

//   const handleCheck = (itemId) => {
//     setCheckedItems({
//       ...checkedItems,
//       [itemId]: !checkedItems[itemId],
//     });
//   };

//   return (
//     <div>
//       {checkedItems.map((item) => (
//         <div key={item.id}>
//           <input
//             type="checkbox"
//             checked={checkedItems[item.id] || false}
//             onChange={() => handleCheck(item.id)}
//           />
//           <span>{item}</span>
//           {checkedItems[item.id] && <button>Delete</button>}
//         </div>
//       ))}
//     </div>
//   );
// }
// export default Checkbox2

import React, { useState } from "react";

function Checkbox2() {
  const [checkedItems, setCheckedItems] = useState([
    "play cricket",
    "play video game",
    "read book",
  ]);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  //
  const handleDelete=(id)=>{
         let newArray = checkedItems ;
         let newData = newArray.filter((elem,i)=>{
             return i !== id
         })
         setCheckedItems(newData)
     }
  // 

  // const handleDelete = (id) => {
  //   const newData = checkedItems.filter((item) => item !== id);
  //   setCheckedItems(newData);
  // };
  return (
    <div>
      <ul>
        {checkedItems.map((elem, id) => {
          return (
            <li key={id}>
              <input type="checkbox" onChange={handleCheckboxChange} />
              {elem} 
              <button disabled={!isChecked} onClick={() => handleDelete(id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Checkbox2;
