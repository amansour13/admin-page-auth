import { useEffect, useState } from "react";
import axios from 'axios';


function Dashboard () {
    const[tokenDB, setTokenDB] = useState("");
    
    useEffect(()=>{

        async function fetchData(){

            const api = 'https://dummyjson.com/docs/auth/user'; 
            const token = localStorage.getItem('token');
            console.log(token);
            await axios.get(api , 
                        { headers: {"Authorization" : `Bearer ${token}`,  'Content-Type': 'application/json'}
                    })
            .then((res) => {
                console.log(res.data);
            }).catch(
                (error) => {
                console.log(error);
            }
        );
        }
        fetchData();
    }, [])

    return (<h2>Dashboard</h2>);
}
export default Dashboard;