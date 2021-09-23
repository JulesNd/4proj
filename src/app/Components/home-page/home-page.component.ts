import { Component, OnInit } from '@angular/core';

class Html5QrcodeScanner {
  constructor(reader: string, param2: { qrbox: number; fps: number }) {
  }

  render(onScanSuccess: (decodedText, decodedResult) => void) {
  }
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function onScanSuccess(decodedText, decodedResult) {
      // Handle on success condition with the decoded text or result.
      console.log(`Scan result: ${decodedText}`, decodedResult);
    }

    // tslint:disable-next-line:prefer-const
    let html5QrcodeScanner = new Html5QrcodeScanner(
      'reader', { fps: 10, qrbox: 250 });
    html5QrcodeScanner.render(onScanSuccess);
  }

}
