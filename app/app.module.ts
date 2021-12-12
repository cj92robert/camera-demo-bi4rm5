import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CameraComponent } from './camera/camera.component';
import { RekognitionService } from './camera/rekognition.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CameraComponent ],
  bootstrap:    [ AppComponent ],
  providers: [RekognitionService]
})
export class AppModule { }
