import React from 'react';

const CourseItem = ({ course }) => {
    const { logo, name, total } = course;
    return (



        <div class="container text-center row row-cols-2">
            <div>
                <div class="col-sm-5 col-md-6 bg-info">
                    <img className='w-50 ' src={logo}></img>
                    <h3>{name}</h3>
                    <p>Total quiz: {total}</p>

                </div>
                <div>
                    <button>Quiz Here</button>
                </div>
            </div>

        </div>


        // <div className=" card w-50">
        //     <div className="col-sm-6">
        //         <div className="d-flex align-content-center">
        //             <div className="card-body">
        //                 <div>
        //                     <img className='w-25' src={logo}></img>
        //                     <h3>{name}</h3>
        //                     <p>Total quiz: {total}</p>
        //                 </div>
        //                 <div>
        //                     <button>Start quiz</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>


    );
};

export default CourseItem;