import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @Output() SetDataEvent = new EventEmitter<any>();
  cardList: any[] = [
    {
      'id': 1,
      'img' : 'assets/imgs/강아지1.jpeg',
      'title' : '백종원 레시피 참고한 감자조림',
      'sub_title' : '',
      'content' : '내용이에요',
      'user_nickname' : 'jhlee',
      'is_my_likes': true,
      'is_my_comment' : false,
      'likes_cnt' : 1232,
      'comments_cnt' : 330
    }, {
      'id': 2,
      'img' : 'assets/imgs/강아지1.jpeg',
      'title' : '백종원 레시피 참고한 감자조림2',
      'sub_title' : '',
      'content' : '내용이에요2',
      'user_nickname' : 'sgkim',
      'is_my_likes': false,
      'is_my_comment' : true,
      'likes_cnt' : 320,
      'comments_cnt' : 10
    }
  ];
  constructor() {}

  clickedCard(e?:any) {
    console.log(`CLICKED => ${e}`);
  }

  // ionViewDidEnter() {
  //   this.SetDataEvent.emit(this.cardList);
  // }
  
}
