import {
  ChangeDetectionStrategy,
  Component,
  inject,
  // input
} from '@angular/core';
import { MessagesService } from '../messages.service';

//NOTES: change detection is ONLY triggered when
//1. input changes
//2. triggers manually
//3. an event in this component or child component
//4. signal changes
//but because none of these events occur AND we are using ChangeDetectionStrategy.OnPush -> no changes can be seen

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {
  // messages = input.required<string[]>();
  private messagesService = inject(MessagesService);

  // messages = this.messagesService.allMessages;
  get messages() {
    return this.messagesService.allMessages;
  }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
