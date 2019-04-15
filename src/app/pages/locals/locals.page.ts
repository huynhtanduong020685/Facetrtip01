import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-locals',
  templateUrl: './locals.page.html',
  styleUrls: ['./locals.page.scss'],
})
export class LocalsPage implements OnInit {

  locals: Observable<any>;

  constructor( private navCtrl: NavController, private router: Router, private http: HttpClient, private api: ApiService) { }

  ngOnInit() {
  }

}
