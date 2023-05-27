import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-index-test',
  templateUrl: './index-test.component.html',
  styleUrls: ['./index-test.component.scss']
})
export class IndexTestComponent implements OnInit {

  public tests: any = [];

  constructor(private _testService: TestService) { }

  ngOnInit(): void {
    this._testService.getTests().subscribe(
      response => {
        this.tests = response;
      }, error => {
        console.log(error);
      }
    );
  }

}
