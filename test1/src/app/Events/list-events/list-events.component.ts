import { Component } from '@angular/core';
import { Observable } from "rxjs";
import { Event } from '../../model/Event/event.model';
import { EventsService } from '../../shared/event.service';
@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})





export class ListEventsComponent {

  event:Event=new Event();
  eventss:Event=new Event();
  events: any;
  type: string[] = ['Workshop', 'Webinaire'];
  editquiz:Event=new Event();
  id: any;
  constructor(private eventService: EventsService) { }
  ngOnInit() {
    
  }
  reloadData() {
    this.eventService.getEvent().subscribe(data => {
      if (data) {
        this.events=data
        console.log(this.events);
      }
    });
  }

  public editeEvent(event:Event){
    this.event={...event};
    this.id=event.id;
  }

  public addOrEditeEvent(event:Event){
    console.log("eventeventevent",event);
    if(!this.id){
      this.eventService.createEvent(event).subscribe({
        next: response => this.reloadData(),
        error: error => console.log(error),
        complete: () =>  this.event=new Event(),
      });
    }else{
      this.event.id=this.id;
      this.eventService.updateEvent(this.events).subscribe({
        next: response => this.reloadData(),
        error: error => console.log(error),
        complete: () => this.event=new Event(),
      });
      this.id=null;
    }


}

onFileSelected(event: any) {
  const file = event.target.files[0];
  this.eventss.image = file.name;
}  

}
