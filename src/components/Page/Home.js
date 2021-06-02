import React from 'react';
import JSONDATA from '../Data/MOCK_DATA.json';
import {useState} from 'react';
import './Pages.css';

function Home(){
    const[searchTerm, setSearchTerm] = useState("");
    return(
        <div className='home'>
            <h1>Home</h1>
            <div className='search-navbar'>
                <input type="text" placeholder="Search..." onChange={(event)=>{
                    setSearchTerm(event.target.value);
                }}/>
                
            </div>
            {JSONDATA.filter((val)=>{
                if(searchTerm == ""){
                    return val
                } else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val,key) => {
                return(
                <div className='user' key={key}>
                    <p>{val.first_name}</p>
                </div>
                );
            })}
        </div>
    )
}

export default Home;