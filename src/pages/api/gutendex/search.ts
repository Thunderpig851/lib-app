import type { NextApiRequest, NextApiResponse } from "next";

const axios = require('axios');

type Data = {
    
}

export default function test(eq: NextApiRequest,res: NextApiResponse) {
    const options = {
        method: 'GET',
        url: `gutendex.com/books`
    };

    axios.request(options)
        .then(function(response: any) {
            console.log(response.data);
        })
        .catch(function (error: any) {
            console.log(error);
        })
}