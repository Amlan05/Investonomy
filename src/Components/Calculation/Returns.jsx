import React, {useState} from "react";

const Returns = (props) => {

    const intpm=(props.intrest/12)/100;
    const[invAmt, setInvAmt]=useState("0")
    const[estRtn,setEstRtn] = useState("0")
    const[toVal,setToVal] = useState("0")


    const getDetails = () => {
        
        if(props.type === "SIP"){
            setInvAmt(props.invest*props.samay*12)
            setToVal( Math.ceil(((props.invest) * ((Math.pow((1+intpm),(props.samay*12))-1)/(intpm) * (1 + intpm)))))
            setEstRtn(Math.ceil(((props.invest) * ((Math.pow((1+intpm),(props.samay*12))-1)/(intpm) * (1 + intpm)) - props.invest*props.samay*12)))
        }

        else if(props.type === "LUMPSUM"){
            setInvAmt(props.invest)
            setToVal( Math.ceil(((props.invest) * Math.pow((1+(props.intrest/100)),(props.samay))) ))
            setEstRtn(Math.ceil((((props.invest) * Math.pow((1+(props.intrest/100)),(props.samay))) - props.invest)))
        }

    }
    return (

        <div>
            <button type="button" className="btn btn-success" onClick={getDetails}>Get Details</button>
             <div>Invested Amount:₹{invAmt}</div>
             <div>Est Returns:₹{estRtn}</div>
             <div>Total Value:₹{toVal}</div>
        </div>


    )
}

export default Returns
