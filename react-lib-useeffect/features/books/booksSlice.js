import { createSlice } from '@redux/toolkit';

const bookSlice = createSlice({
    name: `[Library] Books`,
    initialState: {
        books: [],
        filteredBooks: [],
    },
    reducers: {
        getBooks: (state, action) => {
            state.books = action.payload;

        },

        deleteBook: (state, action) => {
            state.books = state.books.filter(b => b.id !== action.payload);
            fetch(`http:localhost:3000/books/${action.payload}`, {
                method: 'DELETE'
            });
        },
        showReadBooks: (state) => {
            state.filteredBooks = state.books.filter( b => b.alreadyRead === true)
        },

        showNotReadBooks: (state) => {
            state.filteredBooks = state.books.filter( b => b.alreadyRead === false)
        },

        showAllBooks: (state) => {
            state.filteredBooks = state.books.filter
        },

    }
})

export const {getBooks, deleteBook, showReadBooks, showNotReadBooks, showAllBooks} = bookSlice.actions;

export default bookSlice.reducer; //NOTA: Este . reducer NÃO é a mesma coisa que o reducers em cima. Este é criado pelo método createSlice;