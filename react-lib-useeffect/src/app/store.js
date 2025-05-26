import {configureStore} from '@redux/toolkit';
import booksSlice from '../../features/books/booksSlice';

export default configureStore({
    reducer: {
        library: booksSlice
    }
})