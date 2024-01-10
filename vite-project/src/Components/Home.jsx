import React from "react";
import '../CSS/Home.css'

class Home extends React.Component{
    

    render(){
        return(
            <div className="home-area">
                <h1 className="text-center">Quiz App</h1>
                <button className="play-btn" onClick={() => {}}>Play</button>
            </div>
        )
    }
}

export default Home;