import { Book } from "../Book.model";
import logger from "../../utils/logger";

export class BookBuilder {
    private title!: string;
    private author!: string;
    private price!: number;
    private description!: string;
    private genre!: string;
    private publisher!: string;
    private publicationDate!: Date;
    private language!: string;
    private pageCount!: number;

    public setTitle(title: string): BookBuilder {
        this.title = title;
        return this;
    }

    public setAuthor(author: string): BookBuilder {
        this.author = author;
        return this;
    }

    public setPrice(price: number): BookBuilder {
        this.price = price;
        return this;
    }

    public setDescription(description: string): BookBuilder {
        this.description = description;
        return this;
    }

    public setGenre(genre: string): BookBuilder {
        this.genre = genre;
        return this;
    }

    public setPublisher(publisher: string): BookBuilder {
        this.publisher = publisher;
        return this;
    }

    public setPublicationDate(publicationDate: Date): BookBuilder {
        this.publicationDate = publicationDate;
        return this;
    }

    public setLanguage(language: string): BookBuilder {
        this.language = language;
        return this;
    }

    public setPageCount(pageCount: number): BookBuilder {
        this.pageCount = pageCount;
        return this;
    }

    public build(): Book {
        const requiredProperties = [
            this.title,
            this.author,
            this.price,
            this.description,
            this.genre,
            this.publisher,
            this.publicationDate,
            this.language,
            this.pageCount
        ];

        for (const property of requiredProperties) {
            if (!property){
                logger.error("Missing field, could not build cake");
                throw new Error("Missing required field");
            }
        }

        return new Book(
            this.title,
            this.author,
            this.price,
            this.description,
            this.genre,
            this.publisher,
            this.publicationDate,
            this.language,
            this.pageCount
        );
    }
}