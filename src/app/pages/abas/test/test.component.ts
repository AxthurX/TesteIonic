import { Component, Inject, OnInit, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private zone: NgZone
    ) {}

  goToUrl(): void {
    this.zone.run(() => {
      this.document.location.href =
        'https://play.google.com/store/apps/details?id=br.com.nossoerp.connect';
    });
  }
  goToUrl2(): void {
    this.zone.run(() => {
      this.document.location.href =
        'https://apps.apple.com/br/app/nosso-erp-connect/id1659114768';
    });
  }
  ngOnInit() {}
}
