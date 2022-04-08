import React, { useEffect } from 'react'

function ComponentB() {
    useEffect(()=>{
        Promise.all([
            fetch('https://jsonplaceholder.typicode.com/posts'),
            fetch('https://jsonplaceholder.typicode.com/users')
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            
            console.log(data);
        }).catch(function (error) {
         
            console.log(error);
        });
        },[])


  return (
    <div>ComponentB</div>
  )
}

export default ComponentB