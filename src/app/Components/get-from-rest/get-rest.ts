import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetRest {
  constructor(private httpClient: HttpClient) {
  }

  public getReqest() {
    return this.httpClient.get("http://localhost:8081/getOne/5")
  }
}
