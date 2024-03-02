// import { useState, useEffect } from "react";
// import env_sus from "../../images/env_sus.jpeg";
import welcome from "../../images/home-mobile.jpg";
// import child_edu from "../../images/child_edu_1.jpeg";

import domains from "./content";
import { Link } from "react-router-dom";

function Home() {
    // const arr = [welcome, env_sus, child_edu];
    // const [index, setIndex] = useState(0);
    // const [flag, setFlag] = useState(true)
    // const nextImage = () => {
    //     setIndex((prevIndex) => (prevIndex + 1) % arr.length);
    // };

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         nextImage();
    //     }, 5000);

    //     return () => {
    //         // Cleanup function to clear the interval when the component is unmounted
    //         clearInterval(intervalId);
    //     };
    // }, [index]); // Run the effect whenever the index changes

    return (
        <div className="flex-1 main">
            <div>
                <img src={welcome} alt="Image" className="w-screen pt-24"/>

                <div className="absolute top-[50%] left-[5%] text-center ">
                    <h2 className="text-2xl">SevaMeFunds</h2>
                    <div className="text-lg">SevaMeFunds is a sewa trust that serves the people</div>
                </div>
                <div className="absolute top-[50%] right-12 text-center">
                    <div>
                        {/* <h2 className="text-2xl">SevaMeFunds</h2> */}
                        <div className="text-lg">
                            Join us in fostering change, one meaningful project at a time.
                        </div>
                    </div>
                    <div>
                        <Link to='/donate' 
                            className="p-4 rounded-lg hover:bg-blue-500 relative top-5 bg-blue-600 
                                        text-white hover:text-black"
                        >
                            Donate
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <div className="text-center mt-10 my-5 ">
                    <h2 className="text-3xl underline">Our Features</h2>
                </div>
                <div className="text-center mb-5">
                    Empowering communities through sustainable initiatives, our NGO is dedicated to creating positive social impact.
                </div>
                <div >
                    {domains.map((element) => (
                        <div className="grid grid-cols-2 text-center w-[50rem] m-auto" key={element.key}>
                            <div className="my-5 ">
                                <h3 className="text-xl">{element.title}</h3>
                                <p>{element.description}</p>
                            </div>
                            <img src={element.imgUrl} alt={element.title} width='200' height='200' className="m-auto"/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
