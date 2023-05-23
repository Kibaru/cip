import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ModalDialogService } from 'ngx-modal-dialog';
import { Subject } from 'rxjs';
import { ApiService } from 'src/app/service/api/api.service';
import { DataStoreService } from 'src/app/service/data-store/data-store.service';
import { ChangePasswordComponent } from '../../activities/modals/change-password/change-password.component';
import { sideBarService } from '../home.component';


@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit {

  userdata: any = {};
  dashboardInfo: any = {
    agent : {
      full_name : ''
    }

  };

  constructor(
    public side: sideBarService,
    private dataStore: DataStoreService,
    private router: Router , 
    private api: ApiService, 
    private modalService: ModalDialogService, 
    private viewRef: ViewContainerRef) { }

    isHidden$ = this.side.isHidden$
    showBar:boolean = true

    toggleVisibility() { //sidebaer
      this.side.toggleVisibility()
      this.showBar = !this.showBar
    }

  ngOnInit(): void {

    this.router.events.subscribe((event:any) => {
      if (event instanceof NavigationEnd) {
        this.toggleVisibility()
      }
    })


    
    this.dataStore.userInfo.subscribe(
      (udata:any )=>{
        // console.log(data);
        this.userdata = udata;
        if(udata.is_travel_agent == 1){
          this.dataStore.dashboardInfo.subscribe(
            (data)=>{
              console.log("Top Nav dashboard info: ",data);
              this.dashboardInfo = data;
            });
        }
      });
      
      
  }

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }

  changeUserPassword(){
    this.modalService.openDialog(this.viewRef, {
      title: 'Change Password',
      childComponent: ChangePasswordComponent,
      closeDialogSubject: new Subject(),
      settings:{
        modalDialogClass : 'modal-lg modal-dialog modal-dialog-centered ' 
      }
    });
  }

}
