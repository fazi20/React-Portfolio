// import React, { useEffect, useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import "./contact.css"


// const Contact = () => {

//   const [inputvalue, setinputvalue] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     phone: "",
//     message: ""
//   });
//   console.log(inputvalue)

//   const getvalue = (e) => {
//     const { name, value } = e.target
//     setinputvalue(() => {
//       return {
//         ...inputvalue,
//         [name]: value
//       }

//     })
//   }
//   const [spin, setSpin] = useState(true)

//   useEffect(() => {

//     setTimeout(() => {

//       setSpin(false)

//     }, 1500)
//   }, [])

//   const sentuserdata = async (e) => {

//     e.preventDefault();

//     const { fname, lname, email, phone, message } = inputvalue
//     if (fname === "") {
//       toast.error("fname is require")
//     } else if (lname === "") {
//       toast.error("lname is require")
//     } else if (!email.includes == "@") {
//       toast.error("invalid email")
//     }
//     else if (phone === "") {
//       toast.error("phone is require")
//     }
//     else {
//       const res = await fetch("http://localhost:3000/resgiter", {

//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           fname, lname, email, phone, message
//         })

//       });
//       const data = res.json();
//       console.log(data)

//     }
//   }
//   return (
//     <>
//       {
//         spin ? <div className='d-flex justify-content-center align-items-center' style={{ height: "85vh" }}> <div class="spinner-grow text-secondary" role="status">
//           <span class="visually-hidden">Loading...</span>
//         </div> </div> :
//           <div className='container mb-5'>
//             <h1 className='text-center mt-5'>Contact me</h1>
//             <form className='row mt-5'>
//               <div className="mb-3 col-lg-6">
//                 <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
//                 <input type="text" className="form-control" name='fname' id="exampleInputEmail1" onChange={getvalue} />
//               </div>
//               <div className="mb-3 col-lg-6">
//                 <label htmlFor="exampleInputPassword1" className="form-label">Last Name</label>
//                 <input type="text" className="form-control" name='lname' id="exampleInputPassword1" onChange={getvalue} />
//               </div>
//               <div className="mb-3 col-lg-6">
//                 <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
//                 <input type="email" className="form-control" name='email' id="exampleInputEmail1" onChange={getvalue} />
//               </div>
//               <div className="mb-3 col-lg-6">
//                 <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
//                 <input type="number" className="form-control" name='phone' id="exampleInputPassword1" onChange={getvalue} />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
//                 <textarea className="form-control" name='message' id="exampleFormControlTextarea1" rows="3"></textarea>
//               </div>
//               <div className="mb-3  form-button">
//                 <button className="btn btn-primary" type="button" onClick={sentuserdata}>Submit</button>

//               </div>
//             </form>

//             <ToastContainer />
//           </div>
//       }
//     </>
//   )
// }

// export default Contact

import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./contact.css"

const Contact = () => {
  const [inputvalue, setinputvalue] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: ""
  });

  const getvalue = (e) => {
    const { name, value } = e.target;
    setinputvalue((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  };

  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 1500);
  }, []);

  const sentuserdata = async (e) => {
    e.preventDefault();

    const { fname, lname, email, phone, message } = inputvalue;
    if (fname === "") {
      toast.error("First name is required");
    } else if (lname === "") {
      toast.error("Last name is required");
    } else if (!email.includes("@")) {
      toast.error("Invalid email");
    } else if (phone === "") {
      toast.error("Phone number is required");
    } else {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, lname, email, phone, message
        })
      });

      // Corrected method to parse JSON
      const data = await res.json();
      console.log(data);
      if (data.status == 201) {
        toast.success("your response is submitted")
        setinputvalue({
          ...inputvalue,
          fname: "",
          lname: "",
          email: "",
          phone: "",
          message: ""

        })
      }
    }
  };

  return (
    <>
      {
        spin ? (
          <div className='d-flex justify-content-center align-items-center' style={{ height: "85vh" }}>
            <div className="spinner-grow text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className='container mb-5'>
            <h1 className='text-center mt-5'>Contact me</h1>
            <form className='row mt-5'>
              <div className="mb-3 col-lg-6">
                <label htmlFor="fname" className="form-label">First Name</label>
                <input type="text" className="form-control" name='fname' value={inputvalue.fname} id="fname" onChange={getvalue} />
              </div>
              <div className="mb-3 col-lg-6">
                <label htmlFor="lname" className="form-label">Last Name</label>
                <input type="text" className="form-control" name='lname' value={inputvalue.lname} id="lname" onChange={getvalue} />
              </div>
              <div className="mb-3 col-lg-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" name='email' value={inputvalue.email} id="email" onChange={getvalue} />
              </div>
              <div className="mb-3 col-lg-6">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input type="number" className="form-control" name='phone' value={inputvalue.phone} id="phone" onChange={getvalue} />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" name='message' value={inputvalue.message} id="message" rows="3" onChange={getvalue}></textarea>
              </div>
              <div className="mb-3 form-button">
                <button className="btn btn-primary" type="button" onClick={sentuserdata}>Submit</button>
              </div>
            </form>
            <ToastContainer />
          </div>
        )
      }
    </>
  );
};

export default Contact;
