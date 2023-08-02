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

  const handleAdd = async () => {
    const res = await addComment(state, course);
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
    <div className="flex flex-col">
      <div>
        {status !== 'unknown' && getStatus(status)}
      </div>
      <form className="flex flex-col w-4/5" action={handleAdd}>
        <div className="flex">
          <label htmlFor="name-id" className="mr-1 font-semibold text-xl">Name</label>
          <input  className="rounded border p-1" name="name" id="name-id" type="text" placeholder="Enter Name" onChange={handleChange}/>
        </div>

        <div className="flex mt-2">
          <label className="mr-1 font-semibold text-xl" htmlFor="email-id">Email</label>
          <input className="rounded border p-1" name="email" id="email-id" type="email" placeholder="Enter Email Id" onChange={handleChange}/>
        </div>

        <div className="flex mt-2">
          <label className="mr-1 font-semibold text-xl" htmlFor="rating-id">Rating</label>
          <input className="rounded border p-1" name="rating" id="rating-id" type="number" onChange={handleChange}/>
        </div>

        <div className="flex flex-col mt-2">
          <label className="mr-1 font-semibold text-xl" htmlFor="comment-id">Comment</label>
          <textarea className="rounded border p-1" name="data" id="comment-id" placeholder="Enter Comment" onChange={handleChange}/>
        </div>

        <button className="bg-cyan-500 w-20 p-1 rounded-lg text-white m-2" type="submit">Add</button>
      </form>
    </div>
  )
}