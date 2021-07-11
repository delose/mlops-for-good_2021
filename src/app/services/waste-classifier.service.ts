import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class WasteClassifierService {

    constructor(private http: HttpClient) { }

    // braapDB 00 / day + $0.01 each other

    classify(file: File) {

        // let requestUrl = "http://waste-classifier-tf2-serving-waste-classifier.default-tenant.app.mlops5.iguazio-c0.com/waste_classifier/predict";
        let requestUrl = "https://2nk6lymsq5.execute-api.ap-southeast-1.amazonaws.com/prod";
        
        let httpHeaders: HttpHeaders = new HttpHeaders()
            .set('Content-type', 'image/jpeg');

        console.log("name: " + file.name + ", size: " + file.size + ", type: " + file.type + ", modified: " + file.lastModified);

        // https://stackoverflow.com/questions/46408537/angular-httpclient-http-failure-during-parsing
        return this.http.post(requestUrl, file,
        {responseType: 'text'});
        // json (the default)
        // text
        // arraybuffer
        // blob
    }
}