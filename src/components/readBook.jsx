import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
    let[book,setBook]=useState([])

    //to get route parameter
    let parms=useParams()
    useEffect(()=>{
        let fetchData=async()=>{
            let respose=await fetch(`http://localhost:4000/books/${parms.id}`)
            
            let data=await respose.json()
            setBook(data)
        }
        fetchData()
    })
    
    return ( 
        <div className="readBook">
            <h1>Read Book</h1>
            <h2>{book.title}</h2>
            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
        </div>
     );
}
 
export default ReadBook;