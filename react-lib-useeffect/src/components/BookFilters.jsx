import { useDispatch } from 'react/redux';
import { showAllBooks, showNotReadBooks, showReadBooks } from '../../features/books/booksSlice';


export default function BookFilters() {
  
    const dispatch = useDispatch() 

  
    return (
    <section className='filters'>
      <div>
        <button className="btn" onClick={ () => dispatch(showAllBooks)}>All</button>
        <button className="btn" onClick={ () => dispatch(showReadBooks)}>Read</button>
        <button className="btn" onClick={ () => dispatch(showNotReadBooks)}>Not Read</button>
      </div>

      <div>
        <label htmlFor="searchTxt">Search Title</label>
        <input type="search" className='searchTxt' />
      </div>
    </section>
  )
}
