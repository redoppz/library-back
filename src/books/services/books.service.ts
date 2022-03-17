import { HttpException, HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { catchError, map, Observable } from 'rxjs';
import { CreateBookQueryDto } from '../dto/createBookQuery.dto';
import { UpdateBookQueryDto } from '../dto/updateBookQuery.dto';

@Injectable()
export class BooksService {
  constructor(private readonly httpService: HttpService) {}

  getBooks(getBooksQueryDto): Observable<AxiosResponse<Record<string, any>>> {
    return this.httpService
      .get('/books', {
        params: getBooksQueryDto,
      })
      .pipe(
        map((response) => response?.data),
        catchError((e) => {
          throw new HttpException(
            e?.response?.data,
            e?.response?.status ?? 500,
          );
        }),
      );
  }

  getBook(id: string): Observable<AxiosResponse<Record<string, any>>> {
    return this.httpService.get(`/books/${id}`).pipe(
      map((response) => response?.data),
      catchError((e) => {
        throw new HttpException(e?.response?.data, e?.response?.status ?? 500);
      }),
    );
  }

  createBook(
    createBookQueryDto: CreateBookQueryDto,
  ): Observable<AxiosResponse<Record<string, any>>> {
    return this.httpService
      .post('/books', {
        ...createBookQueryDto,
      })
      .pipe(
        map((response) => response?.data),
        catchError((e) => {
          throw new HttpException(
            e?.response?.data,
            e?.response?.status ?? 500,
          );
        }),
      );
  }

  updateBook(
    id: string,
    updateBookQueryDto: UpdateBookQueryDto,
  ): Observable<AxiosResponse<Record<string, any>>> {
    return this.httpService
      .put(`/books/${id}`, {
        ...updateBookQueryDto,
      })
      .pipe(
        map((response) => response?.data),
        catchError((e) => {
          throw new HttpException(
            e?.response?.data,
            e?.response?.status ?? 500,
          );
        }),
      );
  }

  deleteBook(id: string): Observable<AxiosResponse<Record<string, any>>> {
    return this.httpService.delete(`/books/${id}`).pipe(
      map((response) => response?.data),
      catchError((e) => {
        throw new HttpException(e?.response?.data, e?.response?.status ?? 500);
      }),
    );
  }
}
