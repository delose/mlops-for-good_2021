import { Component, OnInit } from '@angular/core';
import { WasteClassifierService } from '../services/waste-classifier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private wasteClassifierService: WasteClassifierService) { }

  ngOnInit(): void {
  }

	url: any;
	msg = "";
	
	selectFile(event: any) {
		if(!event.target.files[0] || event.target.files[0].length == 0) {
			this.msg = 'You must select an image';
			return;
		}
		
		var mimeType = event.target.files[0].type;
		
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}
		
		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result;
      this.wasteClassifierService.classify(event.target.files[0]).subscribe(data => {
        console.log("data1: " + JSON.stringify(data));
      }, error => {
        console.log("data2: " + JSON.stringify(error));
      })
		}
	}
	

}
