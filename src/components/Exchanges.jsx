import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import { server } from "../index";

const Exchanges = () => {
   
  const [exchanges,setExchanges] = useState([]);

    useEffect(() => {
        const fetchExchanges = async () => {
            const { data } = await axios.get(`${server}/exchanges`);
           console.log(data);
           setExchanges(data);
        }
        fetchExchanges();
    },[])

  return (
     <>
       {
        exchanges.map((i) => (
          <exchanges key={i.id} />
        )
            
        )
       }
        
     </>
  )
}

export default Exchanges
