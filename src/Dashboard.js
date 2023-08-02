import { useEffect, useState } from "react";
import axios from 'axios';


function Dashboard () {
    const[load, setLoad] = useState(false);
    
    useEffect(()=>{

        async function fetchData(){

            const token = localStorage.getItem('token');
            await axios.get('https://dummyjson.com/auth/users' , 
                        { headers: {"Authorization" : `Bearer ${token}`,  'Content-Type': 'application/json'}
                    })
            .then((res) => {
                if (res.status == 200)
                    setLoad(true);
                console.log(res);
            }).catch(
                (error) => {
                console.log(error);
            }
        );
        }
        fetchData();
    }, [])

    if(load)
        return (<h2>Dashboard</h2>);
    else
        return (<h2>authentication problem</h2>)
}
export default Dashboard;