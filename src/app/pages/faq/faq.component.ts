import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../services/FaqService.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  public faqs = []
  constructor(private faqService: FaqService) { }

  async ngOnInit() {
    await this.loadFaqItems();
  }

  async loadFaqItems() {
    try {
      /* 	GlobalService.ShowSweetLoading(); */
      const faqItems: any = await this.faqService.index();

      const faqItemsData = faqItems.data;

      faqItemsData.forEach((element: any) => {
        console.log(element, element);
        this.faqs.push({
          id: element.id,
          question: element.question,
          answer: element.answer,
        });
      });

    } catch (error) {
      console.error("error", error);
      /* GlobalService.CloseSweet(); */
    }
  }
}
