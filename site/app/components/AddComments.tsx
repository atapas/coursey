'use client'

import { useState } from "react";

export default function AddComments(
  {addComment, course}: {addComment: any, course: any}) {
  const [state, setState] = useState({
    name:'',
    email:'',
    rating:5,
    data:'',
    commentedOn: new Date()
  });

  const [status, setStatus] = useState("unknown");
  

  const handleChange = (event: any) => {
    const value = event.target.value;
    setState({
        ...state,
        [event.target.name]: value
    });
  }

  const handleAdd = () => {
    const res = addComment(state, course);
    if(!res){
      setStatus("fail");
    } else if(res.id) {
      setStatus("success");
    }
  }

  const getStatus = (status: string) => {
    switch(status){
      case 'success':
        return(<p>Thanks for that! We will moderate and publish your feedback in a while.</p>)
        break;
      case 'fail':
        return(<p>OOPS!!! Error in adding the feedback. try again.</p>);
        break;
    }
  }
  return(
    <>
      <div>
        {status !== 'unknown' && getStatus(status)}
      </div>
      <form>
        <label htmlFor="name-id">Your Name</label>
        <input name="name" id="name-id" type="text" placeholder="Enter Name" onChange={handleChange}/>

        <label htmlFor="email-id">Your Email</label>
        <input name="email" id="email-id" type="email" placeholder="Enter Email Id" onChange={handleChange}/>

        <label htmlFor="rating-id">Your Rating</label>
        <input name="rating" id="rating-id" type="number" onChange={handleChange}/>

        <label htmlFor="comment-id">Your Comment</label>
        <textarea name="data" id="comment-id" placeholder="Enter Comment" onChange={handleChange}/>

        <button onClick={handleAdd}>Add</button>
      </form>
    </>
  )
}