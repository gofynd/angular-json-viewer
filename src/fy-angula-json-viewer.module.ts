import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FyJsonViewerComponent } from './fy-angular-json-viewer/fy-angular-json-viewer.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ FyJsonViewerComponent ],
  exports: [ FyJsonViewerComponent ]
})
export class FyAngularJsonViewerModule { }
