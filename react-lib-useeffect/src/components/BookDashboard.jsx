import { getBooks } from '../../features/books/booksSlice.js';
import BookFilters from './BookFilters.jsx';
import BookList from './BookList.jsx'
import { useEffect } from "react";
import { useDispatch } from 'react/redux';


export default function BookDashboard() {

    const dispatch = useDispatch();

    useEffect(() =>{
      fetch('http://localhost:3000/books')
        .then((res) => res.json())
        .then((data) => dispatch(getBooks(data)))
        .catch(() => console.log('Ocorreu um erro.'));
        
    }, [dispatch]);

  return (
    <section> 
        <h1>Book Dashboard</h1>
        <BookFilters />
        <BookList/>
    </section>
  );

}


