import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController, NavParams } from '@ionic/angular';

import { ApiService } from '../../services/api.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';


@Component({
  selector: 'app-local-details',
  templateUrl: './local-details.page.html',
  styleUrls: ['./local-details.page.scss'],
})
export class LocalDetailsPage implements OnInit {

  local: any;
  isFavorite = false;
  localId = null;


  constructor (
    public navCtrl: NavController,
    public navParams: NavParams,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private api: ApiService,
    private emailComposer: EmailComposer
    ) { }

  ngOnInit() {
    this.localId = this.activatedRoute.snapshot.paramMap.get('id');

    this.api.getFilm(this.localId).subscribe(res => {
      this.local = res;
    });
    this.ionViewDidLoad();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LocalsPage');
  }
  shareFilm() {

    let  email  = {
      to: 'htduong.irontrain.co.kr',
      subject: 'I love this one: ' + this.local.title,
      body: 'Can you remember the opening?<br><br>\"' + this.local.opening_crawl + '\"',
      isHtml: true
    };

    this.emailComposer.open(email);
  }

}
