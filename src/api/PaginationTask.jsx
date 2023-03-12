import { Pagination } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const PaginationTask = () => {
  const [comment, setComment] = useState([]);
  const [total, setTotal] = useState("")
const [page, setPage] = useState("");
const [postPerPage, setpostPerPage] = useState(5)
  useEffect(() => {
    const getData = async () => {
      let res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
 
      setComment(res.data);
      setTotal(res.data.length)
    };
    getData();
  }, []);


  // 
  const indexOfLastPage = page + postPerPage ;
  const indexOfFirstPage = indexOfLastPage - postPerPage;
  const currComments = comment.slice(indexOfFirstPage,indexOfLastPage)
  return (
    <div>
      {currComments.map((val) => {
        return(
        <p key={val.id}>{val.title}</p>
     ) })}
     <Pagination onChange = {(val)=>  setPage(val)} pagesize ={postPerPage} total={total} current={page}/>
    </div>
  );
};

export default PaginationTask;
