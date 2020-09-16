import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Cat class with attributs id and url
export class Cat {
  constructor(public id: string, public url: string) {}
}

//CatDetail class with attributs id, url, votes
export class CatDetails {
  constructor(public id: string, public url: string, public votes: number) {}
}

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private httpClient: HttpClient) { }

  url:string = "http://localhost:3000";
  
  //get all cats
  addCat(cat: Cat) {
    return this.httpClient.post(this.url + `/api/cats`,cat);
  }

  //get all cats
  getAllCats() {
    return this.httpClient.get(this.url + `/api/cats`);
  }

  //get specific cat byid
  getCatById(id:string) {
    return this.httpClient.get(this.url + `/api/cats/${ id }`);
  }

  //add vote for specific cat
  addVoteForCat(id:string){
    return this.httpClient.put(this.url + `/api/vote/cats/${ id }`,null);
  }

  //cancel vote for specific cat
  deleteVoteForCat(id:string){
    return this.httpClient.put(this.url + `/api/unvote/cats/${ id }`,null);
  }


  //get all votes order by votes
  getAllVotes() {
    return this.httpClient.get(this.url + `/api/votes`);
  }

  //deleteCatById
  deleteCatById(id:string) {
    return this.httpClient.delete(this.url + `/api/cats/${ id }`);
  }


  //get all cats from latelier json file
  getAllCatsFromLatelier() {
    return this.httpClient.get(this.url + `/api/cats/from/latelier`);
  }

}
