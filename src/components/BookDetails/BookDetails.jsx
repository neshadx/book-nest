import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

   const {id} = useParams ();
   const bookId = parseInt(id);
   const data = useLoaderData ();
   const singleBook = data.find(book => book.bookId === bookId);
   const {bookName, image} = singleBook;



 const handleMarkAsRead   
    return (
        <div className=' w-2/3 mx-auto'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>
            <button className="btn btn-accent m-2">Read</button>
            <button className="btn btn-info m-2">WishList</button>
            
        </div>
    );
};

export default BookDetails;