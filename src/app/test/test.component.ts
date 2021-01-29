import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import { element } from 'protractor';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  //  inputText:String;
  //  inputText2: String;
  @ViewChild('d') elementTest: ElementRef;
  inputText = "omnia";
  inputText2 = "omnia2";
  buttonDisplay = false;
  name: String = 'omnia badry';
  omnia = 'class1'
  imgURl = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg';
  ButtonChangeColor = false;

  elementArray = [
    { name: 'omnia', age: 23 },
    { name: 'aya', age: 27 },
    { name: 'ahmed', age: 28 },
    { name: 'Abd-Allah', age: 18 }
  ];

  constructor() {
    setTimeout(() => {
      this.buttonDisplay = true
    }, 5000);
  }
  onButtonClick(): void {
    alert("helllllo")
  }

  onInputButton(e): void {
    this.inputText = e.target.value;
    console.log(e)
  }

  onButtonChangeColor(): void {
    this.ButtonChangeColor = !this.ButtonChangeColor;
  }
  getColor(): string {
    return this.ButtonChangeColor ? 'green' : 'red'
  }

  // submitElement(element:HTMLDivElement):void{
  //   console.log(element.classList)
  // }

  submitElement(): void {
    // console.log(this.elementTest)
    const test = (this.elementTest.nativeElement as HTMLDivElement).innerHTML;
    console.log(test);
  }
  ngOnInit(): void {
    const myPromise = new Promise(this.myPromiseFunction);
    myPromise.then((res) => alert(res)).catch(err => console.error(err)).finally(() => console.log('promise ended'));
    ///////////////////////////////////////////////
    const ob = new Observable((observer) => {
      alert("hiiiiiii")
      observer.error();
      // observer.complete();
    });
    // ob.subscribe(
    //   (data) => { 
    //     const product =data;
    //     // alert("first");
    //   },
    //   (error) => {
    //     alert("error");
    //    },
    //   () => { 
    //     alert("third")
    //   }

    // )

    // interval m3 bystop byfdl running kol 1000 (el value elly hput it in interval(1000)) bytl3 number
    //m3 hystop 8er lw 3ltlo unsubscribe()
    // const test = interval(1000);
    // test.subscribe(
    //   (response) => {
    //     alert(response)
    //   },
    //   (error) => {
    //     alert("error");
    //   },
    //   () => {
    //     alert("third")
    //   }
    // )

    const test = this.ourOwnInterval(1000);
    const sub=test.subscribe(
      (response) => {
        alert(response)
      },
      (error) => {
        alert("error");
      },
      () => {}
    );
setInterval(()=>{
  sub.unsubscribe()
},5000);




  }

  ourOwnInterval(p): Observable<number> {
    let number = 0;
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(number++);
      },p);
    });

  }

  myPromiseFunction(resolve: (value: unknown) => void, reject: (reason?: any) => void) {
    const x = 6;
    const y = 4;

    if (x + y === 10) {
      resolve(y + x);
    } else {
      reject('server went down');
    }
  }

}
