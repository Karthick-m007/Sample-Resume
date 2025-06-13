import React, { useState } from 'react'
import img1 from "../assets/project31.png"
import img2 from "../assets/project32.png"
import img3 from "../assets/project33.png"
import img4 from "../assets/project34.png"
import img5 from "../assets/project-5.jpg"
import img6 from "../assets/project-6.jpg"
import { FaCircleRight } from "react-icons/fa6";


export default function Latestproject() {

    const Project = [
        {
            id: 1,
            image: img1,
            logoname: "Landing Page",
            contentename: "Using HTML,CSS,Bootstrap",
            linking:"https://karthick-m007.github.io/Health-connect/",
        },
        {
            id: 2,
            image: img2,
            logoname: "Form Page",
            contentename: "with validation",
            linking: "https://karthick-m007.github.io/Health-connect/newregister.html",
        },

        {
            id: 3,
            image: img3,
            logoname: "Landing Page",
            contentename: "js ",
            linking: "https://karthick-m007.github.io/grosery-bootstrap/",
        }, {
            id: 4,
            image: img4,
            logoname: "sample Resume ",
            contentename: "Recatjs,Bootstrap,Tailwind",
            linking: "https://new-sample-resume-g1ev.vercel.app/",
        },
        //  {
        //     id: 5,
        //     image: img5,
        //     logoname: "Landing Page",
        //     contentename: "ReactJs",
        //     linking: "https://karthick-m007.github.io/grosery-bootstrap/",
        // },

        // {
        //     id: 6,
        //     image: img6,
        //     logoname: "Landing Page",
        //     contentename: "CSS  ",
        // },

    ]
    const [selectproject,setSelectproject]=useState(null)

    return (
        <div className='my-6 bg-shade-yellow py-4 scroll-mt-24' id='projects'>
            <div className="relative w-full pb-6 mt-12">
                <span className="bg-white text-purple-600 border-2 border-purple-500 px-3 py-1 text-sm font-semibold rotate-[-30deg] absolute -top-5 left-5  shadow-md">
                    Projects.
                </span>
            </div>
            <h1 className='text-4xl  flex justify-center my-4 font-bold lg:justify-start lg:ms-16 '>Latest Project</h1>
            <div className='flex flex-wrap gap-8 justify-center lg:ms-8 lg:me-8 mt-6'>
                {Project.map((projects) => (
                    <div key={projects.id}>

                        <div className="card box2" style={{ width: "18rem" }}>
                            <img src={projects.image} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{projects.logoname}

                                    <a href={projects.linking} target="_self"
                                        rel="noopener noreferrer" className='  float-end text-4xl mt-2 text-violet1 bg-white'  onClick={()=>setSelectproject(projects)}><FaCircleRight />
                                    </a>

                                  


                                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                               {selectproject && (<div className="modal-header">
                                                    <h5 className="modal-title" id="staticBackdropLabel">{selectproject.contentename}</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>)}
                                                <div className="modal-body">
                                                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                                                        <div className="carousel-inner">
                                                            <div className="carousel-item active">
                                                                <img src={img1} className="d-block w-100" alt="..." />
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img src={img2} className="d-block w-100" alt="..." />
                                                            </div>
                                                            <div className="carousel-item">
                                                                <img src={img3} className="d-block w-100" alt="..." />
                                                            </div>
                                                        </div>
                                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Previous</span>
                                                        </button>
                                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                            <span className="visually-hidden">Next</span>
                                                        </button>
                                                        
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </h5>
                                <p className="card-text">{projects.contentename}

                                </p>

                              
                            </div>
                        </div>

                    
                    </div>
                ))}
            </div>

        </div>
    )
}
