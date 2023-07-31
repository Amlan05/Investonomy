import React, { useState, useEffect } from "react";
import "./style.css"
import Sip from "./SIP";


const ReturnHead = () => {

    const [name, setName] = useState("")
    const [disName, setDisName] = useState("")
    const [isActiveS, setIsActiveS] = useState(false)
    const [isActiveL, setIsActiveL] = useState(false)

    const type = (category) => {
        setName(category)

        if (category === "SIP") {
            setDisName("Monthly Investment")
            setIsActiveS(true)
            setIsActiveL(false)
        }

        else if (category === "LUMPSUM") {
            setDisName("Lumpsum Amount")
            setIsActiveS(false)
            setIsActiveL(true)
        }

    }
    // {"nav-link" +  "cursor" isActive ? bg-green : } 
    useEffect(() => {
        type("SIP")
    }, [])

    return (
        <div className="returnHead">

            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a className={`nav-link  cursor ${isActiveS ? "active" : ""}`}   onClick={() => type("SIP")}>SIP</a>
                </li>
                <li className="nav-item">
                    <a className={`nav-link  cursor ${isActiveL ? "active" : ""}`}  onClick={() => type("LUMPSUM")}>LUMPSUM</a>
                </li>
            </ul>

            <Sip name={name} disName={disName}></Sip>
        </div>
    )
}

export default ReturnHead





