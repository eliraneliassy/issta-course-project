import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Item } from './item.interface';
import { db } from './db';
import { FeedService } from './feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent  {

  
}
