import { Component, OnInit } from '@angular/core';
import { Room } from '../room';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomServiceService } from '../room-service.service';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent implements OnInit {

room: Room;

  constructor(private route: ActivatedRoute, private router: Router, private roomService: RoomServiceService) { 
    this.room = new Room;
  }

  onSubmit() {
    this.roomService.save(this.room).subscribe(result => this.gotoRoomList());
  }
 
  gotoRoomList() {
    this.router.navigate(['/rooms']);
  }

  ngOnInit() {
  }

}
