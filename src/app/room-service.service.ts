import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Room } from './room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  private roomsUrl: string;

  constructor(private http: HttpClient) { 
    this.roomsUrl = 'http://localhost:9090/rooms';
  }

  public findAll(): Observable<Room[]> {
    return this.http.get<Room[]>(this.roomsUrl);
  }
  public save(room: Room) {
    return this.http.post<Room>(this.roomsUrl, room);
  }
}
