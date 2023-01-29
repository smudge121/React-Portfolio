import React, { useState } from 'react';
import gitIcon from "../assets/icons/github-mark.png"
// https://thien-le13.github.io/anime-ecommerce-webapp/
// https://calm-savannah-54938.herokuapp.com/
// Gmail Logo icon by Icons8
// <a target="_blank" href="https://icons8.com/icon/tnnUFgHrPmR0/gmail-logo">Gmail Logo</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>


function Project({ img, title, git, url, subtitle }){
    return (
        <div>
            <div className="card project">
                <img className="card-img-top proj-image rounded" src=
                {img}/>
                 
                <div className="card-img-overlay card-inverse proj-overlay 
                    ">
                    <div className='d-flex align-items-center justify-content-center align-content-center flex-column container proj-overlay-text'>
                    <div className="row w-100">
                        <h4 className="text-stroke text-white pb-5 col-9">
                            {title}
                        </h4>
                        <div className="col-3">
                            <img className="icon" src={gitIcon} />
                        </div>
                        
                    </div>
                    <div className="card-block pt-3 row">
                        <p className="card-link text-white col">{subtitle}</p>
                    </div>
                    </div>
                </div>
                 
            </div>
        </div>
    )
}

export default Project;