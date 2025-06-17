
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import UseAxiosSecure from "../../hooks/useAxiosSecure";

const SubmitAssignment = () => {
  const axiosSecure = UseAxiosSecure();
    const [assignment , setAssignment] = useState([])

  const { id } = useParams();


  console.log(id);


  const { user } = useContext(AuthContext);


  const email = user?.email;

const navigate = useNavigate()

 useEffect(() => {
    axiosSecure
      .get(`https://a-11-server-five.vercel.app/viewAssignment/${id}`)
      .then((res) => {
        console.log(res.data);
        setAssignment(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id , axiosSecure])



  const {title , marks , difficulty , thumbnailImageURL} = assignment;



  const handleSubmit = (e) => {

    e.preventDefault();
    const form = e.target;
    const doc = form.doc.value;
    const note = form.note.value;
    const resultMark = 'not given';
    const feedback = 'not given' ;
    const newSubmit = { doc, note, email: email, assignmentId: id , status : 'pending' , title , marks , difficulty , thumbnailImageURL , resultMark , feedback};
    console.log(newSubmit);






    //post submit data


    axiosSecure
      .post(`https://a-11-server-five.vercel.app/submittedAssignment`, newSubmit , {withCredentials : true})
      .then((res) => {
        console.log(res.data);
        navigate('/pendingAssignment')
      })
      .catch((err) => {
        if (err.response?.status == 409) {
          toast.error('Already Submitted')
          
        } else {
          console.log(err.message);
        }
      });







  };



  return (
    <div className="h-screen">
      <h1 className="text-3xl text-center mt-4 text-gray-700 textWhite">
        Submit Assignment
      </h1>

      <div className="bg-white md:w-1/2 mx-auto px-2  mt-4 flex items-center justify-center assignment">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm shadow-white py-8">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Google Doc Link</label>
                <input
                  type="url"
                  className="input text"
                  placeholder="Google Doc Link"
                  name="doc"
                />
                <label className="label">Quick Note</label>
                <textarea
                  name="note"
                  id=""
                  placeholder="Write A Quick Note"
                  className="border  text flex items-center justify-center pt-2 rounded-lg pl-2 border-gray-300 BGround textWhite"
                />

                <button
                  type="submit"
                  className="btn bg-green-800 text-white hover:bg-white hover:text-green-800 hover:border-green-800 mt-4 duration-800"
                >
                  Submit Assignment
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitAssignment;
