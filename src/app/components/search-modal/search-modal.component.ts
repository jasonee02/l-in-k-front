import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search-modal',
  templateUrl: './search-modal.component.html',
  styleUrls: ['./search-modal.component.scss'],
})
export class SearchModalComponent implements OnInit {

  recentSearchedWordsList: String[] = ["바보", "몽총이", "천재", "이주하", "ㅋㅋㅋ", "우우우우우우우우", "이이이이이이이이이이이"];
  popularSearchedWordsList: String[] = ["이주하 짱 멋", "ㅋㅋ이주하짱", "존잼이주하", "히히"];
  recipeList: any[] = [
    {
      "img": "assets/imgs/강아지1.jpeg",
      "description": "이미지 설명"
    },
    {
      "img": "assets/imgs/강아지1.jpeg",
      "description": "이미지 설명2"
    },
    {
      "img": "assets/imgs/강아지1.jpeg",
      "description": "이미지 설명3"
    }
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss();
  }
}
