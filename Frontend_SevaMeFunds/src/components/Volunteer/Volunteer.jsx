import React from 'react'
import axios from 'axios';

function Volunteer() {

  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: 0,
    address: '',
    personalInfo: '',
    workInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post('/api/volunteer', formData);
      console.log('Form submitted successfully', formData);
      // Clear form fields after submission
      setFormData({
        fullName: '',
        email: '',
        phone: 0,
        address: '',
        personalInfo: '',
        workInfo: ''
      });
      window.alert("Your volunteer form data has been recorded. Thank you!!");
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  return (
    <div className='pt-24'>
      <div className="text-center my-5">
        <h2 className="text-2xl">Join us in our Mission</h2>
        <p className="text-xl my-5 text-blue-700">Volunteer Form</p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="text-lg">
            <div className='flex gap-10 justify-center my-10'>
              <div className='flex gap-5'>
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" name='fullName' onChange={handleChange} />
              </div>

              <div className='flex gap-5'>
                <label htmlFor="">Email:</label>
                <input type="email" name="email" onChange={handleChange} />
              </div>
            </div>

            <div className='flex gap-10 justify-center my-10'>
              <div className='flex gap-5'>
                <label htmlFor="address">Address:</label>
                <textarea name="address" cols="20" rows="2" onChange={handleChange}></textarea>
              </div>

              <div className='flex gap-5'>
                <label htmlFor="phone" className='m-auto'>Phone No:</label>
                <input type="number" name="phone" onChange={handleChange} />
              </div>
            </div>
            {/* kanna, mala fool, desi ghee, rice, tel 2 */}
            <div className='flex gap-10 justify-center'>
              <div className='flex flex-col'>
                <label htmlFor="personalInfo" className='text-center'>Tell us about Yourself</label>
                <textarea name="personalInfo" cols="25" rows="5" onChange={handleChange}></textarea>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="workInfo">How can you contribute to the organisation? <br /> (Skills, Motive, Work Experience)</label>
                <textarea name="workInfo" cols="20" rows="5" onChange={handleChange}></textarea>
              </div>
            </div>

            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Volunteer