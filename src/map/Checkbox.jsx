// import React, { useState } from "react";

// const arr = ["play cricket", "play video game", "read book"];
// //

// const Checkbox = () => {
//   const [data, setData] = useState(arr);
// const [check, setCheck] = useState(false)

//   const handleDelete=(id)=>{
//     let newArray = data ;
//     let newData = newArray.filter((elem,i)=>{
//         return i !== id
//     })
//     setData(newData)
// }
// //   const handleDelete = (id) => {
// //      setData(data.filter((elem) => {return elem !== id }));

// //   };

// const handleCheckbox=(val ,i)=>{
// console.log("here is the val" ,val)
// }
//   return (
//     <div>
//       <ul>
//         {data.map((elem, id) => {
//           return (
//             <li key={elem}>
//             <input type="checkbox" onChange={(e,i)=>handleCheckbox(e.target.value,i)}></input>
//               {elem}
//               <button disabled onClick={() => handleDelete(id)}>Delete</button>
//               {/* <button onClick={() => handleDelete(id)}>delete</button> */}
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Checkbox;

import React, { useState } from "react";

function Checkbox({ items }) {
  const [checkedItems, setCheckedItems] = useState([
    "play cricket",
    "play video game",
    "read book",
  ]);

  const handleCheck = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((i) => i !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  return (
    <div>
      {checkedItems.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={checkedItems.includes(item)}
            onChange={() => handleCheck(item)}
          />
          <span key={item.id}>{item}</span>
          {checkedItems.includes(item) && <button>Delete</button>}
        </div>
      ))}
    </div>
  );
}
export default Checkbox;



