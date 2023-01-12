import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  communityCategories : any[] = [
    {
      "name" : "전체",
      "code" : 0
    }, {
      "name" : "요리질문",
      "code" : 1
    }, {
      "name" : "꿀팁공유",
      "code" : 2
    }, {
      "name" : "건강",
      "code" : 3
    }, {
      "name" : "다이어트",
      "code" : 4
    }, {
      "name" : "자취요리",
      "code" : 5
    },
  ];

  dataList : any[] = [];

  mockData : any = {
    1: [
      {
        "category_name": "요리질문",
        "title" : "제목 11",
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "registerer_nickname" : "주하",
        "user_img": "assets/imgs/강아지1.jpeg",
        "likes_cnt": 31,
        "comments_cnt": 100,
        "is_my_likes" : true,
        "is_my_comments" : false,
        "id": 1,
        "code": 1
      }, {
        "category_name": "요리질문",
        "title" : "제목 22",
        "registerer_nickname" : "주하55",
        "likes_cnt": 312,
        "comments_cnt": 100,
        "is_my_likes" : false,
        "is_my_comments" : false,
        "img": "assets/imgs/강아지1.jpeg",
        "id": 3,
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 1
      }, {
        "category_name": "요리질문",
        "title" : "제목 33",
        "registerer_nickname" : "주하2",
        "likes_cnt": 32,
        "comments_cnt": 100,
        "is_my_likes" : true,
        "is_my_comments" : true,
        "id": 2,
        "user_img": "assets/imgs/강아지1.jpeg",
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 1
      }, {
        "category_name": "요리질문",
        "title" : "제목 44",
        "registerer_nickname" : "주하3",
        "user_img": "assets/imgs/강아지1.jpeg",
        "likes_cnt": 0,
        "comments_cnt": 100,
        "id": 9,
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 1
      }, {
        "category_name": "요리질문",
        "title" : "제목 55",
        "registerer_nickname" : "주하4",
        "likes_cnt": 0,
        "comments_cnt": 100,
        "user_img": "assets/imgs/강아지1.jpeg",
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 1
      }
    ],
    2: [
      {
        "category_name": "꿀팁공유",
        "title" : "제목 꿀팁공유 11",
        "registerer_nickname" : "주하",
        "likes_cnt": 0,
        "comments_cnt": 100,
        "is_my_likes" : false,
        "is_my_comments" : true,
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 2
      }, {
        "category_name": "꿀팁공유",
        "title" : "제목 꿀팁공유 22",
        "registerer_nickname" : "주하",
        "user_img": "assets/imgs/강아지1.jpeg",
        "likes_cnt": 0,
        "comments_cnt": 100,
        "is_my_likes" : true,
        "id": 10,
        "is_my_comments" : false,
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 2
      }, {
        "category_name": "꿀팁공유",
        "title" : "제목꿀팁공유  33",
        "likes_cnt": 0,
        "comments_cnt": 100,
        "is_my_likes" : true,
        "is_my_comments" : false,
        "id": 122,
        "registerer_nickname" : "주하",
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 2
      }, {
        "category_name": "꿀팁공유",
        "title" : "제목 꿀팁공유44",
        "registerer_nickname" : "주하",
        "user_img": "assets/imgs/강아지1.jpeg",
        "likes_cnt": 0,
        "comments_cnt": 100,
        "id": 44,
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 2
      }, {
        "category_name": "꿀팁공유",
        "title" : "제목 5꿀팁공유5",
        "registerer_nickname" : "주하",
        "likes_cnt": 0,
        "comments_cnt": 100,
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 2
      }
    ],
    3: [
      {
        "category_name": "건강",
        "title" : "제목 건강 11",
        "registerer_nickname" : "주하",
        "likes_cnt": 0,
        "comments_cnt": 100,
        "is_my_likes" : true,
        "is_my_comments" : false,
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 3
      }, {
        "category_name": "건강",
        "title" : "제목 건강 22",
        "registerer_nickname" : "주하",
        "likes_cnt": 0,
        "is_my_likes" : false,
        "is_my_comments" : true,
        "comments_cnt": 100,
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 3
      }, {
        "category_name": "건강",
        "title" : "건강  33",
        "registerer_nickname" : "jjjjjj",
        "likes_cnt": 0,
        "comments_cnt": 100,
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 3
      }, {
        "category_name": "건강",
        "title" : "제목 건강44",
        "registerer_nickname" : "gggggg",
        "likes_cnt": 0,
        "comments_cnt": 100,
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 3
      }, {
        "category_name": "건강",
        "title" : "제목 5꿀건강팁공유5",
        "registerer_nickname" : "ssssss",
        "likes_cnt": 0,
        "comments_cnt": 100,
        "content" : "내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용",
        "code": 3
      }
    ]
  };



  constructor() {}

  handleCategory(e: any) {
    console.log(e.detail.value);
    this.dataList = this.mockData[e.detail.value];
  }

  clickedCard(e?:any) {
    console.log(`CLICKED => ${e}`);
  }
}
