const request = require('request')

const getRepo = (name) => {
    console.log(name);
    var options = {
        url: 'https://api.github.com/search/repositories?q=' + name + '+&sort=stars',
        headers: {
            'User-Agent': 'request'
        }
    };
    return new Promise((resolve, reject) => {
        request(options, (error, response) => {
            console.log(error)
            const resp = JSON.parse(response.body);
            //   return resp;

            resolve(resp.items[0].stargazers_count)
        })
        // request(options, (error, response) => {
        //      console.log(error)
        //     const resp = JSON.parse(response.body);
        //     //   return resp;
        //     console.log(resp.items[0].full_name)

        //return Promise.resolve(resp.items[0].full_name)
        //  callback(undefined,response)
        // console.log(resp)
        //console.log( resp.items[0].full_name);
    })


}
module.exports = getRepo;
   // getRepo('express');

