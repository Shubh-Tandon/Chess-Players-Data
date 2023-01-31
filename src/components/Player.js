import React, { useState, useEffect } from 'react';
import '../App.css';


function Player(props) {
    const [users, setUsers] = useState([])
    const [playerInfo, setPlayerInfo] = useState("")
    const [playerName, setPlayerName] = useState("")
    


    const getUsers = async (playerName) => {
        const response = await fetch(`https://api.chess.com/pub/player/${playerName}`)
        console.log(typeof (response))
        let result = Object.entries(await response.json())
        setUsers(result)
        console.log(typeof (users))

    }
    console.log(users)

    // useEffect(() => {
    //     getUsers();
    // }, []);

    const handleChangeInput = (e) => {
        // console.log("value", e.target.value)
        setPlayerName(e.target.value)
      }
      
      const handleSearch = () => {
        getUsers(playerName)
      }
      




    return (
        <>  
           <input className="form-control my-3 p-1 " type="text" onChange={handleChangeInput} placeholder="Enter the Player name" aria-label="default input example" value={playerName} style={{width: "50%", margin: "auto", display: "flex", justifyContent : "center", textAlign: "center", alignItems: "center"}}/>
    <button type="button" className="btn btn-primary my-3" onClick={handleSearch} style={{ margin: "auto", display: "flex", justifyContent: "center" }}>Enter</button>

            <div className='container myStyle my-auto'>
                <h2 style={{ color: "black", fontWeight: "bolder", textAlign: "center", fontSize: "2 rem", display: "flex", justifyContent : "center", textAlign: "center", alignItems: "center" }}>Player Info</h2>
                

                <div className='container-fluid mt-5'>
                    <div className='row text-center'>
                        {
                            users.map((curElem, index) => {
                                return (
                                    <div className="card w-50" key={index}>
                                        <div className="card-body">
                                            {/* <img src="https://images.chesscomfiles.com/uploads/v1/user/41.5434c4ff.200x200o.5b102889d835.jpeg" class="card-img-top" alt="Player Image"/> */}
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <h5 className="card-title" style={{ color: "black", fontWeight: "bold" }} >{curElem[0]}</h5>

                                                </div>
                                                <div className='col-md-6'>
                                                    <h5 className="card-title" style={{ color: "purple" }}>{curElem[1]}</h5>

                                                </div>

                                            </div>
                                            {/* <h5 className="card-title">{curElem[2]}</h5> */}



                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>

            </div>
        </>

    );


}



export default Player;
