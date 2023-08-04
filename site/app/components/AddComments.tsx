"use client";

import { useState } from "react";

export default function AddComments({
  addComment,
  course,
}: {
  addComment: any;
  course: any;
}) {
  const [state, setState] = useState({
    name: "",
    email: "",
    rating: 5,
    data: "",
    commentedOn: new Date(),
  });

  const [status, setStatus] = useState("unknown");

  const [showForm, setShowForm] = useState(false);

  const handleChange = (event: any) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleAdd = async () => {
    const res = await addComment(state, course);
    if (!res) {
      setStatus("fail");
    } else if (res.id) {
      setStatus("success");
    }
  };

  const getStatus = (status: string) => {
    switch (status) {
      case "success":
        return (
          <p>
            Thanks for that! We will moderate and publish your feedback in a
            while.
          </p>
        );
        break;
      case "fail":
        return <p>OOPS!!! Error in adding the feedback. try again.</p>;
        break;
    }
  };
  return (
    <div className="bg-slate-100 border rounded-lg pl-2">
      <h2 
        className="text-2xl font-semibold mt-2 mb-3 pt-3 pb-3 cursor-pointer"
        onClick={() => setShowForm(!showForm)}>
        {showForm ? '↓' : '→'} Add a Comment
      </h2>
      <div className="flex flex-col">
        <div>{status !== "unknown" && getStatus(status)}</div>
        { showForm && <form className="w-full max-w-9xl" action={handleAdd}>
          <div className="flex items-center mb-6 flex-col">
            <div className="md:w-4/5 mb-6">
              <label htmlFor="name-id"></label>
              <input
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="name"
                id="name-id"
                type="text"
                placeholder="Enter Name"
                onChange={handleChange}
              />
            </div>

            <div className="md:w-4/5 mb-6">
              <label htmlFor="email-id"></label>
              <input
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="email"
                id="email-id"
                type="email"
                placeholder="Enter Email Id"
                onChange={handleChange}
              />
            </div>

            <div className="md:w-4/5 mb-6">
              <label htmlFor="rating-id"></label>
              <input
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="rating"
                id="rating-id"
                type="number"
                min="1"
                max="5"
                placeholder="Enter a Rating"
                onChange={handleChange}
              />
            </div>

            <div className="md:w-4/5 mb-6">
              <label htmlFor="comment-id"></label>
              <textarea
                className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                name="data"
                id="comment-id"
                placeholder="Enter Comment"
                onChange={handleChange}
              />
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-cyan-500 hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
        }
      </div>
    </div>
  );
}
