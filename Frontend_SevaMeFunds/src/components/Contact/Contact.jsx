import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    email: '',
    contact: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData);
      console.log('Form submitted successfully', formData);
      // Clear form fields after submission
      setFormData({
        fName: '',
        lName: '',
        email: '',
        contact: '',
        query: ''
      });
      window.alert("Your query has been recorded. Thank you!!");
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="pt-24">
      <div className="text-center my-5">
        <h2 className="text-2xl">Have a Query??</h2>
        <p className="text-xl my-5">Feel free to contact us. We will get back to you as soon as possible.</p>
      </div>

      <div>
        <form onSubmit={handleSubmit} className="text-lg">
          <div className="flex justify-center my-5 gap-10">
            <div className="flex justify-center gap-2">
              <label className="m-auto" htmlFor="fName">First Name:</label>
              <input className='bg-slate-200 text-black rounded-md p-2' type="text" name="fName" value={formData.fName} onChange={handleChange} />
            </div>
            <div className="flex justify-center gap-2">
              <label className="m-auto" htmlFor="lName">Last Name:</label>
              <input className='bg-slate-200 text-black rounded-md p-2' type="text" name="lName" value={formData.lName} onChange={handleChange} />
            </div>
          </div>

          <div className="flex justify-center my-5 gap-10">
            <div className="flex justify-center my-4 gap-2">
              <label className="m-auto" htmlFor="email">Email Address:</label>
              <input className='bg-slate-200 text-black rounded-md p-2' type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="flex justify-center my-4 gap-2">
              <label className="m-auto" htmlFor="phone">Phone No:</label>
              <input className='bg-slate-200 text-black rounded-md p-2' type="number" name="contact" value={formData.contact} onChange={handleChange} />
            </div>
          </div>

          <div className="flex justify-center gap-5">
            <div className="mt-2">Specify your Query</div>
            <textarea name="query" cols="50" rows="6" className="bg-slate-200 text-black rounded-md p-2" value={formData.query} onChange={handleChange}></textarea>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;



// import { useState } from "react";
// import axios from "axios"

// function Contact() {

//   const [formData, setFormData] = useState({
//     fName: '',
//     lName: '',
//     email: '',
//     contact: 0,
//     query: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       await axios.post('/api/contact', formData);
//       console.log('Form submitted successfully');
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     }
//   }

//   return (
//     <div className="pt-24">
//       {/* <div className="grid grid-cols-2"> */}
//       {/* <div className="flex items-center justify-center h-screen">
//           <img src="https://media.istockphoto.com/id/1168945108/photo/close-up-image-of-male-hands-using-smartphone-with-icon-telephone-email-mobile-phone-and.jpg?s=612x612&w=0&k=20&c=aVojLzP1n3XNxuRdy7Pqdzo6OyRAVanOWDUWjbu3R8Q=" alt="Contact Us Image" className="m-auto" />
//         </div> */}
//       {/* </div> */}

//       <div className="text-center my-5">
//         <h2 className="text-2xl">Have a Query??</h2>
//         <p className="text-xl my-5">Feel free to contact us. We will get back to you as soon as possible.</p>
//       </div>

//       <div>
//         <form onSubmit={handleSubmit} className="text-lg">
//           <div className="flex justify-center my-5 gap-10">
//             <div className="flex justify-center gap-2">
//               <label className="m-auto" htmlFor="fName">First Name:</label>
//               <input className='bg-slate-200 text-white rounded-md p-2' type="text" name="fName" onChange={handleChange} />
//             </div>
//             <div className="flex justify-center gap-2">
//               <label className="m-auto" htmlFor="lName">Last Name:</label>
//               <input className='bg-slate-200 text-white rounded-md p-2' type="text" name="lName" onChange={handleChange} />
//             </div>
//           </div>

//           <div className="flex justify-center my-5 gap-10">

//             <div className="flex justify-center my-4 gap-2">
//               <label className="m-auto" htmlFor="email">Email Address:</label>
//               <input className='bg-slate-200 text-white rounded-md p-2' type="email" name="email" id="email" onChange={handleChange} required />
//             </div>

//             <div className="flex justify-center my-4 gap-2">
//               <label className="m-auto" htmlFor="phone">Phone No:</label>
//               <input className='bg-slate-200 text-white rounded-md p-2' type="number" name="contact" onChange={handleChange} />
//             </div>

//           </div>

//           <div className="flex justify-center gap-5">
//             <div className="mt-2">Specify your Query</div>
//             <textarea name="query" cols="50" rows="6" className="bg-slate-200 text-white rounded-md p-2"></textarea>
//           </div>


//         </form>
//       </div>
//     </div>
//   )
// }

// export default Contact