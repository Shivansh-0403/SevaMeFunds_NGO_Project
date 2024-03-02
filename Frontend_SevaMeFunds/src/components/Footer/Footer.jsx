import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'
function Footer() {
    return (
        <div className="bg-gray-800 text-white p-6 relative bottom-0 w-[100%] flex justify-evenly mt-12">
            {/* bottom - 0 add */}

            <div>
                <img src={logo} alt="SMF Logo" width={100} height={100} className='rounded-xl mt-[30%]' />
            </div>

            <div>
                <ul className='text-center'>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/'>Our Work</NavLink></li>
                    <li><NavLink to='/volunteer'>Volunteer</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>

            {/* <div className="container mx-auto"> */}
            {/* <div className="grid grid-rows-2 text-center "> */}
            <div className='text-center my-auto'>
                <p className='mb-2'>&copy; 2024 SevaMeFunds</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Footer