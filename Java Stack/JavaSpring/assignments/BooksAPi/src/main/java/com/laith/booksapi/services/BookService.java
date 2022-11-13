package com.laith.booksapi.services;

// ...
import com.zaki.booksapi.models.Book;
import com.zaki.booksapi.repositories.BookRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    // adding the book repository as a dependency
private final BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }
    // returns all the books
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }
    // creates a book
    public Book createBook(Book b) {
        return bookRepository.save(b);
    }
    // retrieves a book
    public Book findBook(Long id) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if(optionalBook.isPresent()) {
            return optionalBook.get();
        } else {
            return null;
        }
    }
public Book updateBook(Book b){
        return bookRepository.save(b);
}
    public Book updateBook(Long id, String title, String desc, String lang, Integer numberOfPages) {
        Book book = findBook(id);
        if(book.getId()==id) {
            book.setTitle(title);
            book.setDescription(desc);
            book.setLanguage(lang);
            book.setNumberOfPages(numberOfPages);
            return createBook(book);
        } else {
            return null;
        }
    }

    public void deleteBook(Long id) {
        Optional<Book> op = bookRepository.findById(id);
        if(op.isPresent()) {
        bookRepository.deleteById(id);
    }
}
}


