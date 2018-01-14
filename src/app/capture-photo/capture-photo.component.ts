import { Component, OnInit, Input } from '@angular/core';
import { ViewChild} from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-capture-photo',
  templateUrl: './capture-photo.component.html',
  styleUrls: ['./capture-photo.component.css']
})

// Pour comprendre le data binding dans angular
//DOM <---         {{value}}          --- COMPONENT
//DOM <---    [Property] = "value"    --- COMPONENT 
//DOM  ---    (event) = "Handler"     --->COMPONENT DOM
//DOM <--- [(ngM-model)]="property" ---> COMPONENT -->

export class CapturePhotoComponent implements OnInit, AfterViewInit { 

  @ViewChild('videoplayer') videoPlayer: any;
  @ViewChild('canvas') canvas: any;
  public ModeVideo: any = false;  
  public AfficherCamera: any = false;

  context: any;
  longitude: number;
  latitude: number;

  @Input() width: number;
  @Input() height: number;

  constructor() { }
  
  ngOnInit() {
    this.width = 320;
    this.height = 240;
  }

  ngAfterViewInit() {    
    this.Geolocaliser();     
  }

  DemarrerCamera() {
    this.ModeVideo = false;
    this.context = this.canvas.nativeElement.getContext('2d');
    console.log(this.context);
    console.log(this.videoPlayer.nativeElement.width); 

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
                          .then(stream => {
                            this.videoPlayer.nativeElement.src = window.URL.createObjectURL(stream);
                            this.videoPlayer.nativeElement.play();
                          });
    }
  }

  capturerPhoto() {    
    this.context.drawImage(this.videoPlayer.nativeElement, 0, 0, this.width, this.height);    
    this.ModeVideo = true;
  }

  Geolocaliser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(x => {
        this.longitude = x.coords.longitude;
        this.latitude = x.coords.latitude;
      } );
    }
  }

  EnregistrerPhoto() {
    this.ModeVideo = false;

    let imgData: any = this.canvas.nativeElement.toDataURL('img/png');

    imgData = imgData.replace('data:image/png;base64,', '');

    let postData: any = JSON.stringify({
      'ImageBase64String': imgData,
      'id': 3,      
      'longitude': this.longitude,
      'latitude': this.latitude
    });
    }

}