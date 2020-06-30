import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumComponent} from './album/album.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent} from './contact/contact.component';
import { from } from 'rxjs';




const routes: Routes = [
    {path : '',component : HomeComponent},
    {path : 'about',component : AboutComponent},
    {path : 'album',component : AlbumComponent},
    {path : 'packages',component : PackagesComponent},
    {path : 'contact',component : ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
 }
