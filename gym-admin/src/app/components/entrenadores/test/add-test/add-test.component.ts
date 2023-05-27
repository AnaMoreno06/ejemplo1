import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.scss']
})
export class AddTestComponent implements OnInit {

  public test: any = {
    tipo_id: 1
  };
  public tipos: any = [];

  constructor(private _testService: TestService) { }

  ngOnInit(): void {
    this._testService.getTipos().subscribe(
      response => {
        this.tipos = response;
      }, error => {
        console.log(error);
      }
    );
  }

  addTest(registroForm: NgForm): void {
    this._testService.addTest(this.test, '').subscribe(
      response => {
        alert('Funciona');
      },error => {
        alert(error);
      }
    );
  }

}
