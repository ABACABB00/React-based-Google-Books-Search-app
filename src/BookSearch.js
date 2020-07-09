import React from 'react';
import BookCard from './BookCard';

const BookSearch = (props) => {
    return (
        <div className="search-list">
            {
                props.books.map((book, i) => {
                    return <BookCard
                        key={i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        published={book.volumeInfo.publishedDate}
                        description={book.volumeInfo.description}
                        link={book.saleInfo.buyLink}
                    />
                })
            }
        </div>
    )
}

export default BookSearch;