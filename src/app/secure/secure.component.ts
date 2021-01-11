import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

  unsafeUrl = 'javascript:alert("ok");';

  unsafeYoutube = 'https://www.youtube.com/embed/zeAYN9G88Io';

  safeUrl: SafeUrl;
  safeUtube: SafeResourceUrl;

  constructor(private domSan: DomSanitizer) { }

  ngOnInit() {
     // วิธีที่จะเอาพวก script, link, style หรือ html จากที่อื่นเช่นจาก db มาแสดงบนหน้าเว็บ
    this.safeUrl = this.domSan.bypassSecurityTrustUrl(this.unsafeUrl);

    this.safeUtube = this.domSan.bypassSecurityTrustResourceUrl(this.unsafeYoutube);
  }

}
