import React, { useEffect, useState } from "react";
import Returns from "./Returns";
import "./style.css"

const Sip = (props) => {




    const [int, setInt] = useState("")
    const [time, setTime] = useState("")
    const [amt, setAmt] = useState("")

    const amtChange = (event) => {
        setAmt(event.target.value)
    }

    const intChange = (event) => {
        setInt(event.target.value)
    }

    const timeChange = (event) => {
        setTime(event.target.value)
    }

    const getData = (category) => {

        if (category === "SIP") {
            setAmt("500")
            setInt(10)
            setTime(10)
        }

        else if (category === "LUMPSUM") {
            setAmt("2000")
            setInt(12)
            setTime(10)
        }

    }
    console.log({amt})

    useEffect(() => {
        getData(props.name)
    }, [props.name])



    return (

        <div>
            <div className="data">
                <div><label htmlFor="customRange3" className="form-label">{props.disName}</label></div>
                <div>₹{amt}</div>
            </div>
            <input type="range" className="form-range" min="100" max="5000" step="100" value={amt} onChange={amtChange} id="customRange3" ></input>

            <br></br>

            <div className="data">

                <div><label htmlFor="customRange3" className="form-label">Expected return rate(p.a)</label></div>
                <div>{int}%</div>
            </div>
            <input type="range" className="form-range" min="1" max="25" step="0.5" value={int} onChange={intChange} id="customRange3" ></input>

            <br></br>

            <div className="data">
                <div><label htmlFor="customRange3" className="form-label">Time Period</label></div>
                <div>{time}yr</div>
            </div>
            <input type="range" className="form-range" min="1" max="20" step="1" value={time} onChange={timeChange} id="customRange3" ></input>

            <Returns type={props.name} invest={amt} intrest={int} samay={time}></Returns>



        </div>
    )
}


export default Sip