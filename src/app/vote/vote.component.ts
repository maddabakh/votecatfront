import { Component, OnInit } from '@angular/core';
import { VoteService,Cat,CatDetails} from '../vote.service';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  
  cats:Array<Cat>; // retrieve the list of cats
  catVotedId:string; // retrieve the id of voted cat
  voted:boolean;  // tell us if the user has voted or non

  constructor(public service: VoteService) { }

  ngOnInit() {
    
    //init data for component display 

    this.getAllCats();
    this.voted=false;
    this.catVotedId="";
  }

  //retrieve the list of all cats in database
  getAllCats(){
    this.service.getAllCats().subscribe((data:any)  => {
        console.log(data)
        this.cats=data;
      })
  }
  

  //Vote for a cat using vote service
  addVoteForCat(id:string){
    this.service.addVoteForCat(id).subscribe((data:any)  => {
        console.log(data)
    })
    this.voted=true;
    this.catVotedId=id;
  }

  //Cancel vote of a cat using vote service
  cancelVoteForCat(id:string){
    this.service.deleteVoteForCat(id).subscribe((data:any)  => {
        console.log(data)
    })
    this.voted=false;
    this.catVotedId="";
  }

  //Add the content of json file from latelier to database
  addJsonDataToDatabase(){
    this.service.getAllCatsFromLatelier().subscribe((data:any)  => {
        console.log(data)
        data.images.forEach(element => {
          var cat= new Cat(element.id,element.url);
          this.service.addCat(cat).subscribe((data:any)  => {
            console.log(data)
          });
        });
    })
  }

  //delete specific cat from the display
  dontShowCat(id:string){
    if(this.cats.find(item => JSON.stringify(item.id) ===JSON.stringify(id))!= undefined){
      var catToDelete=this.cats.find(item => JSON.stringify(item.id) ===JSON.stringify(id));
      const index = this.cats.indexOf(catToDelete, 0);
      if (index > -1) {
        this.cats.splice(index, 1);
      }
    }
  }

}
