import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventosService } from '../../services/evento.service';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eventos.html',
  styleUrls: ['./eventos.css']
})
export class EventosComponent implements OnInit {

  eventos: any[] = [];

  constructor(
    private eventosService: EventosService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe((data: any[]) => {
      console.log("Datos recibidos:", data);
      this.eventos = data;
      this.cd.detectChanges(); 
    });
  }
}
