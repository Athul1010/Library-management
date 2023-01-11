import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/bookList.css"

const BookList = () => {
    let[books,setBooks]=useState([])

    useEffect(()=>{
        let fetchData=async()=>{
           let respose=await fetch('http://localhost:4000/books')
           let data = await respose.json()
           setBooks(data)
        }
        fetchData()
    },[books])
    //delete a from array
    let handleDelete=(id,title)=>{
        // setBooks( books.filter(x=>x.id!=id) )
        // alert(`${title} has been deleted`)
        fetch(`http://localhost:4000/books/${id}`,{
            method:'DELETE'
            
        });
        alert(`${title} will be deleted permanantly`)
        
    }
    let navigate=useNavigate()
    let read=(id)=>{
        navigate(`/admin/book-list/${id}`)
    }
    return ( 
        <div className="bookList">
            <h1>Book List:{books.length}</h1>
            <div className="book_section">
                {books.map((data)=>(
                    <div className="book">
                    <div className="raj">
                        <div className="book_card">
                            <img width="210" src={data.thumbnailUrl} alt="" />
                        </div>

                        <div className="book_desc">
                        <h4>{data.title}</h4>
                        <h6>Authors:{data.authors}</h6>
                        <h6>Category:{data.categories}</h6>
                        <h6>Page Count:{data.pageCount}</h6>
                        <button onClick={()=>read(data.id,data.title)}>Read more</button>
                        <button onClick={()=>handleDelete(data.id,data.title)}>Delete</button>
                        </div>
                    </div>
                   </div>
                ))}
            </div>
          
        </div>
     );
}
 
export default BookList;