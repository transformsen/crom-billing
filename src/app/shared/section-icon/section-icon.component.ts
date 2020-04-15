import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-icon',
  templateUrl: './section-icon.component.html',
  styleUrls: ['./section-icon.component.scss']
})
export class SectionIconComponent implements OnInit {

  @Input() selection = false;
  @Input() arialabel = false;
  @Output() selectionChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
