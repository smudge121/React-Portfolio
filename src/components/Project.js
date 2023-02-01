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
                        <a className="text-stroke text-white pb-5 col-9 oswald h2 a-over link-custom" href={url} >
                            {title}
                        </a>
                        <div className="col-3">
                            <a href={git}><img className="icon" src={gitIcon} /></a>
                        </div>
                        
                    </div>
                    <div className="card-block pt-3 row">
                        <p className="card-link text-white col dancing ft-3">{subtitle}</p>
                    </div>
                    </div>
                </div>
                 
            </div>
        </div>
    )
}

export default Project;