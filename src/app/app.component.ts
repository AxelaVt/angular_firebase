import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { 
    
    var firebaseConfig = {
      apiKey: "AIzaSyCQxlTm94qEAMNQbDCuJNpkZOUHLufWFpE",
      appId: "1:354142785022:web:0f00df2bbe20bf208784af",
      projectId: "products-820f9",
      authDomain: "products-820f9.firebaseapp.com",
      //databaseURL: "https://products-820f9.firebaseio.com",
      databaseURL: "https://products-820f9-default-rtdb.europe-west1.firebasedatabase.app",
      storageBucket: "products-820f9.appspot.com",
      messagingSenderId: "354142785022",
      measurementId: "G-9NY1ZH91C0"
    };
    // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
    firebase.initializeApp(firebaseConfig);
  }
}




