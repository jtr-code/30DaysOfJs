//Fetch API provides an interface for fetching resources (including across the network).

import fetch from "node-fetch";

const fetchData = fetch('https://catfact.ninja/fact')
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((e) => {
        console.error("Error",e); 
    })
      
