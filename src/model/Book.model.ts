import { IItem, ItemCategory } from "./IItem";

export class Book implements IItem {
  private title: string;
  private author: string;
  private price: number;
  private description: string;
  private genre: string;
  private publisher: string;
  private publicationDate: string;
  private language: string;
  private pageCount: number;

  constructor(
    title: string,
    author: string,
    price: number,
    description: string,
    genre: string,
    publisher: string,
    publicationDate: string,
    language: string,
    pageCount: number
  ) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.description = description;
    this.genre = genre;
    this.publisher = publisher;
    this.publicationDate = publicationDate;
    this.language = language;
    this.pageCount = pageCount;
  }

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }

  getPrice(): number {
    return this.price;
  }

  getDescription(): string {
    return this.description;
  }

  getGenre(): string {
    return this.genre;
  }

  getPublisher(): string {
    return this.publisher;
  }

  getPublicationDate(): string {
    return this.publicationDate;
  }

  getLanguage(): string {
    return this.language;
  }

  getPageCount(): number {
    return this.pageCount;
  }

  getCategory(): ItemCategory {
    return ItemCategory.BOOK;
  }
}
