import React from 'react';
import { useNavigate } from 'react-router-dom';
import ShowData from './ShowData';

const Home = () => {
    const navigate=useNavigate();
    const navigateToCreateData=()=>{
        navigate('/createData');
    }
    return (
        <div className='container'>
           <button onClick={navigateToCreateData} type="button" className='createButton'>
                <span>+</span>
            </button>
          
            <ShowData />

        </div>
    );
}

export default Home;
