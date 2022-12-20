import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss'],
})
export class MainCardComponent implements OnInit {

  cardList: any[] = [
    {
      'img' : 'assets/imgs/강아지1.jpeg',
      'title' : '백종원 레시피 참고한 감자조림',
      'sub_title' : '',
      'content' : '내용이에요',
      'user_nickname' : 'jhlee',
      'likes_cnt' : 1232,
      'comments_cnt' : 330
    }, {
      'img' : 'assets/imgs/강아지1.jpeg',
      'title' : '백종원 레시피 참고한 감자조림2',
      'sub_title' : '',
      'content' : '내용이에요2',
      'user_nickname' : 'sgkim',
      'likes_cnt' : 320,
      'comments_cnt' : 10
    }
  ];

  constructor() { }

  ngOnInit() {}

}
