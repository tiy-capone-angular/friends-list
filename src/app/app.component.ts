import { Component } from '@angular/core';
import { Friend } from './models/friend';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  friends: Friend[];
  selectedFriend: Friend;

  constructor() {
    this.friends = [];
  }

  handleNewFriend(friend: Friend) {
    // if this.selectedFriend is not empty,
      // then this is an update to that object
    // otherwise,
      // it's a new friend
    if (this.selectedFriend !== undefined) {
      this.selectedFriend.firstName = friend.firstName;
      this.selectedFriend.color = friend.color;
      this.selectedFriend.birthDay = friend.birthDay;
      this.selectedFriend = undefined;
    } else {
      this.friends.push(friend);
    }
  }

  edit(friend: Friend) {
    this.selectedFriend = friend;
  }

}
