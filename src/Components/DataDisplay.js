import React, { useState } from 'react'
import {setData} from '../redux/actions/actions'
import { useDispatch } from 'react-redux'

const DataDisplay = () => {

    const [userdata, setDat] = useState([]);

    fetch("https://fakestoreapi.com/users")
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
            setDat(json);
        });

  const dispatch = useDispatch();

     const send = (e) => {
       
        console.log (dispatch(setData(e)));
     }


    //  const getdata = useSelector((state)=>state.rootReducer);
    //  console.log(getdata)

    
    return (
        <>
            {/* <h1>
                Count:{
            getdata && getdata.length
            }
            </h1>
                        */}
            <tbody>
                {
                    userdata &&
                    userdata.map(item => (
                        <ul key={item.id}>
                            <li>{item.username}</li>
                            <button onClick={() => send(item)} >Add Now</button>
                        </ul>
                    ))
                }
            </tbody>
                 
        </>
    )
}


export default DataDisplay
