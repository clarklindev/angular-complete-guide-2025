import {
  ChangeDetectionStrategy,
  // ChangeDetectorRef,
  Component,
  // DestroyRef,
  inject,
  // OnInit,
  // input
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
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
  imports: [AsyncPipe],
})
// implements OnInit
export class MessagesListComponent {
  // messages = input.required<string[]>();
  private messagesService = inject(MessagesService);
  messages$ = this.messagesService.messages$;

  //inject change detection
  // private cdRef = inject(ChangeDetectorRef);

  // private destroyRef = inject(DestroyRef);

  // messages = this.messagesService.allMessages;
  // get messages() {
  //   return this.messagesService.allMessages;
  // }
  // messages: string[] = [];

  // ngOnInit(): void {
  //   const subscription = this.messagesService.messages$.subscribe(
  //     (messages) => {
  //       this.messages = messages;
  //       this.cdRef.markForCheck(); //this tells angular that this component should now be checked for changes
  //     }
  //   );

  //   //cleanup
  //   this.destroyRef.onDestroy(() => {
  //     subscription.unsubscribe();
  //   });
  // }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
