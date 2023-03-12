import React, { useState } from "react";
import uuid from "react-uuid";
const TodoList = () => {
  const [list, setList] = useState("");

  const [formData, setFormData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [dataId, setdataId] = useState();
  //
  const handleAdd = () => { if (editing) {
      const newList = formData.map((elem, id) => {
        if (elem.id === dataId) {
          return { ...elem, listName: list };
        }
        return elem;
      });
      setFormData(newList);
      setEditing(false)
      setList("");
      setdataId();
    }else{
    let listObj = { id: uuid(), listName: list };
    setFormData([...formData, listObj]);
    setList("");
  }};
  //
  const handleDelete = (id) => {
    const newData = formData.filter((val) => {
      return val.id !== id;
    });
    setFormData(newData);
  };

  //
  const handleEdit = (id) => {
    const newEdit = formData.find((val) => {
      return val.id === id;
    });
    setList(newEdit.listName);
    setEditing(true);
    setdataId(id);
  };
  //
  const handleDeleteAll = () => {
    setFormData([]);
  };
  //

  return (
    <div>
      <input
        type="text"
        placeholder="add task"
        value={list}
        onChange={(e) => {
          setList(e.target.value);
          //   console.log(e.target.value);
        }}
      />
      <button onClick={handleAdd} disabled={list.length < 1}>
        {editing ? "Update" : "Add"}
      </button>
      <button onClick={handleDeleteAll} disabled={formData.length < 1}>
        Delete All
      </button>

      {formData.map((elem) => {
        return (
          <p key={elem.id}>
            {elem.listName}
            <button onClick={() => handleEdit(elem.id)}>Edit</button>
            <button onClick={() => handleDelete(elem.id)}>delete</button>
          </p>
        );
      })}
    </div>
  );
};

export default TodoList;
