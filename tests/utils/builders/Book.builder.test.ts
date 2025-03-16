import { BookBuilder } from "../../../src/model/builders/Book.builder";
import { Book } from "../../../src/model/Book.model";


describe("BookBuilder", () => {

    it("should build a book with all required fields", () => {
        const book = new BookBuilder()
            .setTitle("Test Title")
            .setAuthor("Test Author")
            .setPrice(19.99)
            .setDescription("Test Description")
            .setGenre("Test Genre")
            .setPublisher("Test Publisher")
            .setPublicationDate("2023-01-01")
            .setLanguage("English")
            .setPageCount(100)
            .build();

        expect(book).toBeInstanceOf(Book);
        expect(book).toEqual({
            title: "Test Title",
            author: "Test Author",
            price: 19.99,
            description: "Test Description",
            genre: "Test Genre",
            publisher: "Test Publisher",
            publicationDate: "2023-01-01",
            language: "English",
            pageCount: 100
        });
    });

    it("should throw an error if a required field is missing", () => {
        expect(() => {
            new BookBuilder()
                .setTitle("Test Title")
                .setAuthor("Test Author")
                .setPrice(19.99)
                .build();
        }).toThrow("Missing required field");

    });

    
});