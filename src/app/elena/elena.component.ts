import { Component, OnInit } from '@angular/core';
import { ElenaService } from './elena.service';

@Component({
  selector: 'app-elena',
  templateUrl: './elena.component.html',
  styleUrls: ['./elena.component.scss']
})
export class ElenaComponent implements OnInit {

  memeUrl: string;
  name: string;
  success: number = 0;
  fail: number = 0;
  requestCount: number = 0;

  constructor(private eS: ElenaService) { }

  ngOnInit() {
    this.eS.getMeme().subscribe(
      (result) => {
        if (result['result']) {
          this.memeUrl = result['result'].imageUrl;
          this.name = result['result'].displayName;
          this.success += 1;
        } else {
          this.fail += 1;
        }
        this.requestCount += 1;
      },
      error => console.log(error));
  }

  nextMeme() {
    this.eS.next().subscribe(
      (result) => {
        if (result['result']) {
           this.memeUrl = result['result'].imageUrl;
            this.name = result['result'].displayName;
            this.success += 1;
        } else {
          this.memeUrl = undefined;
          this.fail += 1;
        }
        this.requestCount += 1;
      },
      error => console.log(error));
  }

  prevMeme() {
    this.eS.prev().subscribe(
      (result) => {
        if (result['result']) {
          this.memeUrl = result['result'].imageUrl;
          this.name = result['result'].displayName;
          this.success += 1;
        } else {
          this.memeUrl = undefined;
          this.fail += 1;
        }
        this.requestCount += 1;
      },
      error => console.log(error));
  }

}
