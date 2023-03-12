import React, { useState } from "react";
import uuid from "react-uuid";
import { RiDeleteBin3Fill, RiImageEditFill } from "react-icons/ri";
//
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// //
const Todo = () => {
  const [data, setData] = useState("");
  const [formData, setformData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [dataId, setdataId] = useState();
  //   const handleSubmit = (e) => {
  //     setformData([...formData, data]);
  //     setData("");
  //     console.log(formData);
  //   };

  const handleSubmit = (e) => {
    if (editing) {
      const newList = formData.map((elem, id) => {
        if (elem.id === dataId) {
          return { ...elem, dataName: data };
        }
        return elem;
      });
      setformData(newList);
      setEditing(false)
      setData("");
      setdataId();
    } else {
      let dataObj = { id: uuid(), dataName: data };
      setformData([...formData, dataObj]);
      setData("");
      // toast.success("data added succesfully")
      // console.log(formData);
    }
  };
  // delete all tasks
  const handleDeleteAll = () => {
    setformData([]);
    // toast.error("All data deleted succesfully")
  };
  //   delete on btn click
  const handleDelete = (id) => {
    // console.log(id)
    let newData = formData.filter((elem) => {
      return elem.id !== id;
    });
    setformData(newData);

    // toast.error("data deleted succesfully")
  };

  //
  const handleEdit = (id) => {
    const editTodo = formData.find((todo) => {
      return todo.id === id;
    });
    // console.log(editTodo)
    setData(editTodo.dataName);
    setEditing(true);
    setdataId(id);
  };

  //
  // const handleEdit=(id)=>{
  //     const editTodo = formData.filter((todo)=>{
  //         return todo.id ===id;
  //     })
  //     console.log(editTodo)
  // }

  return (
    <div>
      {/* <form> */}
      <input
        type="text"
        placeholder="add task"
        value={data}
        onChange={(e) => {
          //   console.log(e.target.value);
          setData(e.target.value);
        }}
      />

      <button onClick={handleSubmit} disabled={data.length < 1}>
        {editing ? "update" : "Add Task"}
      </button>
      <button onClick={handleDeleteAll} disabled={formData.length < 1}>
        Delete all
      </button>
      {/* </form> */}

      {formData?.length !== 0 ? (
        formData.map((elem) => {
          return (
            <div key={elem.id}>
              {elem.dataName}
              <button onClick={() => handleEdit(elem.id)}>
                <RiImageEditFill />
                Edit
              </button>
              <button onClick={() => handleDelete(elem.id)}>
                <RiDeleteBin3Fill />
                delete
              </button>
              {/* <ToastContainer theme="colored"/> */}
            </div>
          );
        })
      ) : (
        <p>No task</p>
      )}
    </div>
  );
};

export default Todo;
