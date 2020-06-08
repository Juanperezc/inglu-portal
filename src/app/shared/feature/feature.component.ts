import { Component, OnInit } from '@angular/core';
import { ClubTaskService } from 'src/app/services/ClubTaskService.service';
import { ClubTaskItemService } from 'src/app/services/ClubTaskItemService.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  private taskItemData = [];
  private taskData: any = null;

  constructor(
    private clubTaskService: ClubTaskService,
    private clutTaskItemService: ClubTaskItemService) { }

    async loadTaskData(){
      try {
        const task: any = await this.clubTaskService.show(1);
        const taskData = task.data;
        this.taskData = taskData;
        console.log('taskItemsData', taskData);
        } catch (error) {
        console.error("error", error);
        /* GlobalService.CloseSweet(); */
        }
    }

    async loadTaskItems(){
		try {
			const taskItems: any = await this.clutTaskItemService.index();
			const taskItemsData = taskItems.data;
      this.taskItemData = taskItemsData;
			console.log('taskItemsData', taskItemsData)
		  } catch (error) {
			console.error("error", error);
			/* GlobalService.CloseSweet(); */
		  }
  }

  async ngOnInit() {
    await this.loadTaskItems();
    await this.loadTaskData();
  }

}
