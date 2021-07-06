import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class WasteClassifierService {

    constructor(private http: HttpClient) { }

    // braapDB 00 / day + $0.01 each other

    classify(file: any) {

        let requestUrl = "http://waste-classifier-tf2-serving-waste-classifier.default-tenant.app.mlops5.iguazio-c0.com/waste_classifier/predict";
        
        let httpHeaders: HttpHeaders = new HttpHeaders()
            .set('Content-type', 'image/jpeg');

        return this.http.post<any>(requestUrl, JSON.stringify(file),
            {headers: httpHeaders,  params: new HttpParams()});
    }
}