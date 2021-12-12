import { Component, OnInit, ViewChild } from '@angular/core';
// import entire SDK
import AWS = require('aws-sdk');
// import individual service
import S3 = require('aws-sdk/clients/s3');
import { Credentials } from 'aws-sdk';
import {RekognitionService} from './rekognition.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css'],
})
export class CameraComponent implements OnInit {
  @ViewChild('video') video;
  @ViewChild('picture') picture;
  @ViewChild('canvas') canvas;
  blur: boolean;
  sepia: boolean;
  invert: boolean;
  flip: boolean;
  videoElement: HTMLVideoElement;
  labels = {hello: 'world'};

  constructor() {}

  ngOnInit() {
    this.videoElement = this.video.nativeElement;

    navigator.mediaDevices
      .getUserMedia({
        video: { facingMode: 'environment' },
      })
      .then(stream => {
        this.videoElement.srcObject = stream;
      });

    // AWS.config.update({
    //   credentials: new Credentials({
    //     accessKeyId: 'AKIAIHRZRTBDBSVIRRVA',
    //     secretAccessKey: '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',
    //   }),
    // });
    // AWS.config.update({ region: 'us-east-1' });
  }



  takePicture() {
    const canvasElement = this.canvas.nativeElement;
    const context = canvasElement.getContext('2d');
    context.drawImage(this.videoElement, 0, 0, canvasElement.width, canvasElement.height);
    // const dataUrl = canvasElement.toDataURL('image/jpeg', 1.0);
    // console.log('wat we got here is', dataUrl);

    // const image = atob(dataUrl.split('data:image/jpeg;base64,')[1]);
    //   const length = image.length;
    //   const imageBytes = new ArrayBuffer(length);
    //   const ua = new Uint8Array(imageBytes);
    //   for (let i = 0; i < length; i++) {
    //     ua[i] = image.charCodeAt(i);
    //   }
    //   this.callRekognition(imageBytes);

    
    
  }




  getStyles() {
    let filter = '';
    let transform = '';

    if (this.blur) {
      filter += 'blur(5px)';
    }
    if (this.sepia) {
      filter += 'sepia(50%)';
    }
    if (this.invert) {
      filter += 'invert(1)';
    }
    if (this.flip) {
      transform += 'scaleX(-1)';
    }

    return {
      filter,
      transform,
    };
  }




    // takePicture3() {
  //   const pictureElement = this.picture.nativeElement;
  //   navigator.mediaDevices
  //     .getUserMedia({
  //       video: true,
  //     })
  //     .then(stream => {
  //       const mediaStreamTrack = stream.getVideoTracks()[0];
  //       const imageCapture = new ImageCapture(mediaStreamTrack);
  //       console.log('imageCapture', imageCapture);

  //       imageCapture
  //         .takePhoto()
  //         .then(blob => {
  //           pictureElement.src = URL.createObjectURL(blob);
  //           console.log(blob);
  //           this.base64mePlease(blob);
  //           // pictureElement.onload = () => { URL.revokeObjectURL(this.src); }
  //         })
  //         .catch(error => console.error('takePhoto() error:', error));
  //     });
  // }

    // base64mePlease(blob) {
  //   var reader = new FileReader();
  //   reader.readAsDataURL(blob);
  //   reader.onloadend = () => {
  //     let base64data = reader.result;
  //     const image = atob(base64data.split('data:image/jpeg;base64,')[1]);
  //     const length = image.length;
  //     const imageBytes = new ArrayBuffer(length);
  //     const ua = new Uint8Array(imageBytes);
  //     for (let i = 0; i < length; i++) {
  //       ua[i] = image.charCodeAt(i);
  //     }
  //     this.callRekognition(imageBytes);
  //   };
  // }
}
