import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-update-test',
  templateUrl: './update-test.component.html',
  styleUrls: ['./update-test.component.scss']
})
export class UpdateTestComponent implements OnInit {

  public test: any = {
    tipo_id: 1
  };
  public id: string = '';
  public tipos: any = [];

  constructor(private _testService: TestService, private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        this._testService.getTestById(this.id, '').subscribe(
          response => {
            this.test = response;
          }, error => {
            alert(error);
          }
        );
      }
    );

    this._testService.getTipos().subscribe(
      response => {
        this.tipos = response;
      }, error => {
        console.log(error);
      }
    );
  }

  updateTest(updateForm: NgForm): void {
    this._testService.updateTestById(this.test, this.id, '').subscribe(
      response => {
        alert('Funciona');
      }, error => {
        alert(error);
      }
    );
  }

}
