import React from "react";
import "./mutual.css"
import Mutualcard from "./Mutualcard";
import axis from "./img/axis.jpg"
import hdfc from "./img/hdfc.png"
import sbi from "./img/sbi.jpg"




const MutualData = () => {

    

    return (


        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={hdfc} className="d-block w-100 slider" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={axis} className="d-block w-100 slider" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={sbi} className="d-block w-100 slider" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

              <div className="back">
            <h2 className="top mt-2">TOP PERFORMING MUTUAL FUNDS</h2>
            <Mutualcard></Mutualcard>
            </div>
        </div>

    )
}

export default MutualData