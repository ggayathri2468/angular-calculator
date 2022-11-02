import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  Input = '0';
  CurrentValue = '';
  EnteredNumber(value: string) {
    this.CurrentValue = this.CurrentValue + value;
    this.Input = this.CurrentValue;
  }
  equal() {
    this.Input = eval(this.CurrentValue);
    this.CurrentValue = this.Input;
  }
  cancle() {
    this.CurrentValue = '';
    this.Input = '0';
  }
  // del() {
  //   this.CurrentValue = this.CurrentValue.slice(0, -1);
  //   this.Input = this.CurrentValue;
  //   if (this.Input == '') {
  //     this.Input = '0';
  //   }
  // }
  constructor() {}
  ngOnInit(): void {}
}
