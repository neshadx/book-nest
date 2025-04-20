import React from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({singleBook}) => {
    // const data = use(bookPromise)

    const {bookName,image,rating,category,tags,yearOfPublishing,publisher,bookId} = singleBook;

    return (
    <Link to={`/BookDetails/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm  p-6 shadow">
        <figure className='p-5 bg-gray-100 w-2/3 mx-auto'>
          <img
            className='h-[166px]'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">

           <div className='flex justify-center gap-10'>
           {
                tags.map(tag=> <button>{tag}</button>)
            }
           </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by: {publisher}</p>

            <div className='border--2 border-dashed'></div>

          <div className="card-actions justify-end">
            <div className="badge ">{category}</div>
            <div className="badge ">{rating} <FaStarHalfAlt /></div>
          </div>
        </div>
      </div>
    </Link>
    );
};

export default Book;