import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Product} from "../Models/product";

@Injectable({
  providedIn: 'root'
})
export class GetRest {
  constructor(private httpClient: HttpClient) {
  }

  public getReqest() {
    return this.httpClient.get("http://localhost:8081/getOne/5")
  }
  public getAllReqest(){
    return this.httpClient.get("http://localhost:8081/products")
  }
  public postComponent (componentOne: Product){
    const headers = {headers:
      new HttpHeaders ({'Content-Type': 'application/json'})
    };
    console.log(JSON.stringify(componentOne));
    //let options = new RequestOptions({ headers: headers });
    return this.httpClient.post("http://localhost:8081/post", JSON.stringify(componentOne), headers)
  }

  public putComponent (componentOne: Product){
    const headers = {headers:
      new HttpHeaders ({'Content-Type': 'application/json'})
    };
    console.log(JSON.stringify(componentOne));
    return this.httpClient.put("http://localhost:8081/put", JSON.stringify(componentOne), headers)
  }

}
