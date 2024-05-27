import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminPer from './AdminPer';
import Teams from './Teams';
import Pointstable from './Pointstable';

export default function HomePage() {
    const [data, setData] = useState(true);
    const [type, setType] = useState(1);


    const Com1 = () => {
        setData(true);
    }

    const Com2 = () => {
        setData(false);
    }

    // useEffect(() => {
    //   const data = JSON.parse(localStorage.getItem('type'));
    //   if (data) {
    //   setType(data);
    //   }
    // },);

    return (
        <div className="container mt-3">
            <div className='row'>
                <div className='col'>
                    <button className="btn btn-[#190wc]" onClick={Com1}>Teams</button>
                    <h1></h1>
                </div>
                <div className='col'>
                    <button className="btn btn-primary" onClick={Com2}>Points table</button>
                </div>
                <div className='col'>
                    {type==1 ? <Link className="btn btn-primary" to="/Admin">Admin</Link> : <p>hi</p>}
                </div>
            </div>
            <div className='content mt-3'>
                {data ? <Teams /> : <Pointstable />}
            </div>
        </div>
    )
}
