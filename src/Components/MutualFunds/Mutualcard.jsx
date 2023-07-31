import React, { useState } from "react";
import "./mutual.css"
import Topfunds from "./MutualApi";


const Mutualcard = () => {
   
    const [fundData, setFundData] = useState(Topfunds)
    return (

        <div>
            <div className="container-fluid">
                <div className="row justify-content-center">

                    {fundData.map((currf) => {
                        return (
                            <div className="col-lg-3 col-md-4 me-md-2 news-content">

                                <div className="card" >
                                <img src= {currf.image} className="card-img-top"></img>
                                    <div className="card-body ">
                                        <h6>{currf.name}</h6>
                                        <p className="card-text">CATEGORY: {currf.category}</p>
                                        <p className="card-text">RISK: {currf.Risk}</p>
                                        <p className="card-text">RATING: {currf.Rating}</p>
                                        <p className="card-text">1 YEARS RETURN: {currf.oneY}</p>
                                        <p className="card-text">3 YEARS RETURN: {currf.threeY}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )


}

export default Mutualcard