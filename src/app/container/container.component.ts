import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubService } from './../github.service';


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  username: string;
  userExists = null;
  score = null;
  promise;


  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    this.username = '';
    this.score = null;

  }

  githubUsername(){
    console.log("username", this.username);
    this.promise= this._githubService.retrieveGithubUser(this.username)
    if (this.promise){
      this.promise.then( (user) => {
        if(user.id){
          this.userExists = true;
          this.score = user.public_repos + user.followers;
          console.log(this.score);
        }else{
          this.userExists = false;
          this.score = null;
        }
        this.username = null;
        console.log(this.username);
      })
      .catch( (err) =>{
        this.userExists = false;
      });

    }else{
      this.userExists = false;
    }
  }

}
