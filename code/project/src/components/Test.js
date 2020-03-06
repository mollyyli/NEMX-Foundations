import React,{ useState, useEffect } from 'react';

const Test = ({databaseref})=>{
    console.log(databaseref);
    const [firstName, setFirstname] = useState("");
    useEffect(()=>{
        databaseref.child("firstnames").child("test").on('value', function(dataSnapshot) {
            setFirstname(dataSnapshot.val());
            console.log(dataSnapshot.val());
          });
        },[databaseref]);
    return(

        <h1>{firstName}</h1>
    )
}

export default Test;