import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addStoredDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)

const BookDetails = () => {

   const {id} = useParams ();
   const bookId = parseInt(id);
   const data = useLoaderData ();
   const singleBook = data.find(book => book.bookId === bookId);
   const {bookName, image} = singleBook;



 const handleMarkAsRead = id => {

    // MySwal.fire({
    //     title: "Good job!",
    //     text: "You clicked the button!",
    //     icon: "success"
    //   });

    toast("Book Marked done!")
    addStoredDB(id)

 }  
    return (
        <div className=' w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>
            <ToastContainer />
            <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent m-2">Read</button>
            <button className="btn btn-info m-2">WishList</button>
            
        </div>
    );
};

export default BookDetails;