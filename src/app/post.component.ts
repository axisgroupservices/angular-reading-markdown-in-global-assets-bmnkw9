import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'post',
  template: `<h1>Ready, set, markdown!</h1><pre>{{ md }}`,
  styles: [`h1 { font-family: Lato; }`]
})
export class PostComponent  {
  md;
  @Input() name: string;
  constructor(private http:HttpClient) { }

  async ngOnInit() {
    this.md = await this.http.get(`/assets/posts/1.md`, { responseType: 'text'}).toPromise();
    }
}