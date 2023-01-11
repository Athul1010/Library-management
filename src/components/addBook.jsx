import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl
    let [title,setTitle]=useState("")
    let [authors,setAuthors]=useState("")
    let [categories,setcategories]=useState("")
    let [pageCount,setpageCount]=useState("")
    let [shortDescription,setshortDescription]=useState("")
    let [longDescription,setlongDescription]=useState("")
    let [thumbnailUrl,setthumbnailUrl]=useState("")

    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();

        //data to be posted
        let bookData={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}

        //posting to server
        fetch("http://localhost:4000/books",{
            method:"POST",
            headers:{"content-Type":"application/json"},
            body:JSON.stringify(bookData)
        })
        alert('Book added suceesfully')
        navigate('/admin/book-list')
    }

    return ( 
        <div className="addBook">
            <h1>Add a book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" required placeholder="title of the bbok" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e)=>setAuthors(e.target.value)} type="text" required placeholder="author of the book" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e)=>setcategories(e.target.value)} type="text" required placeholder="categories of the book"/>
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e)=>setpageCount(e.target.value)} type="number" required placeholder="pageCount of the book"/>
                    </div>
                    <div className="shortDescription">
                        <textarea value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)} placeholder="shortDescription of the book" name="form_control" id="" cols="30" rows="10">

                        </textarea>
                    </div>
                    <div className="longDescription">
                        <textarea value={longDescription} onChange={(e)=>setlongDescription(e.target.value)} placeholder="longDescription of the book" name="form_control" id="" cols="30" rows="10">

                        </textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e)=>setthumbnailUrl(e.target.value)} type="text" required placeholder="Url of the book"/>
                    </div>
                    <button>Add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;