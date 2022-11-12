import {Component, OnInit} from "@angular/core";
import {GetRest} from "../get-from-rest/get-rest";
import {data} from "autoprefixer";


@Component({
  selector: 'get-component',
  templateUrl: 'get.component.html'
  })

export class GetComponent implements OnInit{
  objetNumber: any;
constructor(private getRest:GetRest) {
}
ngOnInit(): void {
  this.getRest.getReqest().subscribe((data: any) => {console.log(data);
  this.objetNumber = data;
  })
}
}
