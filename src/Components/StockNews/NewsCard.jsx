import React, { useState, useEffect } from "react";
import "./news.css"

const NewsCard = () => {

    const [news, setNews] = useState([])
    const [isBse, setIsBse] = useState(false)
    const [isDow, setIsDow] = useState(false)

    const fetchData = (category) => {

        if (category === "bse") {
            setIsDow(false)
            setIsBse(true)
        }

        else if (category === "dow") {
           setIsDow(true)
           setIsBse(false)
        }



        fetch(`https://newsdata.io/api/1/news?apikey=pub_269270a844f1c0cfbab28e82fb4b173d64d01&q=${category}`)
            .then(response => response.json())
            .then(result => {

                console.log(result.results)
                setNews(result.results)

            })



    }

    // fetchData()

    useEffect(() => {

        fetchData('bse')
    }, [])

    return (
        <div >
            <div className="container-fluid types">
                
                        <ul className="nav nav-underline">
                            <li className="nav-item">
                                <a className={`nav-link cursor ${isBse ? "active" : ""}`} aria-current="page" onClick={() => fetchData('bse')}>Indian Markets</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link cursor ${isDow ? "active" : ""}`} onClick={() => fetchData('dow')}>US Markets</a>
                            </li>

                        </ul>
                
            </div>

            <div className="container-fluid">
            <div className="row justify-content-center">
                {news && news.map((currnews) => {
                    return (

                       
                        <div className="col-md-4 news-content">

                                <img src={currnews.image_url} className="img-fluid"></img>
                                <h6>Source: {currnews.source_id}</h6>
                                <h5>{currnews.title}</h5>

                                <p>{currnews.description}</p>

                            </div>
                    
                    )
                })}
                    </div>

            </div>
        </div>
    )
}

export default NewsCard
