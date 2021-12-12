import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';
// import S3 = require('aws-sdk/clients/s3');
import { Credentials } from 'aws-sdk';

@Injectable()
export class RekognitionService {
  constructor() {
    // AWS.config.update({
    //   credentials: new Credentials({
    //     accessKeyId: 'AKIAIHRZRTBDBSVIRRVA',
    //     secretAccessKey: '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',
    //   }),
    // });
    // AWS.config.update({ region: 'us-east-1' });
  }

  detectLabels(imgDataUrl: string) {
    const image = atob(imgDataUrl.split('data:image/jpeg;base64,')[1]);
    const length = image.length;
    const imageBytes = new ArrayBuffer(length);
    const ua = new Uint8Array(imageBytes);
    for (let i = 0; i < length; i++) {
      ua[i] = image.charCodeAt(i);
    }
    const rekognition = new AWS.Rekognition();
    AWS.config.update({
      credentials: new Credentials({
        accessKeyId: 'AKIAIHRZRTBDBSVIRRVA',
        secretAccessKey: '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',
      }),
    });
    AWS.config.update({ region: 'us-east-1' });
    const params = {
      Image: {
        Bytes: imageBytes,
      },
    };
    rekognition.detectLabels(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        // this.labels = data;
        console.log('detect labels service', data); // successful response
      }
    });
  }
}
