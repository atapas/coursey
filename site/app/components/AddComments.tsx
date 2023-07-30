'use client'

import { useState } from "react";

export default function AddComments({addComment}: {addComment: any}) {
  const [state, setState] = useState({
    name:'',
    emailId:'',
    rating:5,
    comment:''
  });

  const handleChange = (event: any) => {
    const value = event.target.value;
    setState({
        ...state,
        [event.target.name]: value
    });
  }

  const handleAdd = () => {
    addComment(state);
  }
  return(
    <>
      <form>
        <label htmlFor="name-id">Your Name</label>
        <input name="name" id="name-id" type="text" placeholder="Enter Name" onChange={handleChange}/>

        <label htmlFor="email-id">Your Email</label>
        <input name="emailId" id="email-id" type="email" placeholder="Enter Email Id" onChange={handleChange}/>

        <label htmlFor="rating-id">Your Rating</label>
        <input name="rating" id="rating-id" type="number" onChange={handleChange}/>

        <label htmlFor="comment-id">Your Comment</label>
        <textarea name="comment" id="comment-id" placeholder="Enter Comment" onChange={handleChange}/>

        <button onClick={handleAdd}>Add</button>
      </form>
      
    </>
  )
}