import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Home.css'

class Home extends React.Component{

    render(){
        return(
            <div className="home-area">
                <h1 className="text-center">Quiz App</h1>
                <Link to="/quiz">
                    <button className="play-btn">Play</button>
                </Link>
            </div>
        )
    }
}

export default Home;