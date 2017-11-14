import { Component, OnInit, ViewEncapsulation, EventEmitter, Output, Input, SimpleChanges } from '@angular/core';
import { Friend } from '../models/friend';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-friend-form',
  templateUrl: './friend-form.component.html',
  styleUrls: ['./friend-form.component.css']
})
export class FriendFormComponent implements OnInit, OnChanges {

  firstName: string;
  color: string;
  birthDay: Date;

  verb = 'Add';

  @Output()
  friendUpdated: EventEmitter<Friend>;

  @Input()
  friendToEdit: Friend;

  handleNewFriend(): void {
    const friend = new Friend(this.firstName, this.color, this.birthDay);
    this.friendUpdated.emit(friend);

    this.firstName = '';
    this.color = '';
    this.birthDay = new Date();
    this.verb = 'Add';
  }

  constructor() {
    this.friendUpdated = new EventEmitter<Friend>();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.friendToEdit !== undefined) {
      if (changes.friendToEdit.currentValue !== undefined) {
        let friend: Friend = changes.friendToEdit.currentValue;
        this.firstName = friend.firstName;
        this.color = friend.color;
        this.birthDay = friend.birthDay;
        this.verb = 'Edit';
      }
    }
  }

}
