import BookList from "./BookList";
import { useState, useEffect } from "react";


export default function BookDashboard() {

    const [livros, setLivros] = useState([]);

    useEffect(() =>{
      fetch('https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books')
        .then((res) => res.json())
        .then((data) => setLivros(data));
        
    }, []);

    /* useEffect(() => {
      (async () => {
        let response = await fetch('https://my-json-server.typicode.com/JoaoGoncalves/biblio-api/books');
        let data = await fetch response.json();
        setLivros(data);
      })();
    }, []) */


    const handleDeleteBook = (id) => {
        setLivros(livros.filter( l => l.id !== id));
    }

  return (
    <section> 
        <h1>Book Dashboard</h1>
        <BookList books={livros} deleteBook={handleDeleteBook}/>
    </section>
  );

}


