import { Component } from '@angular/core';
import { AlertController, IonicModule, NavController, ToastController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {NgFor, CommonModule} from '@angular/common';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ToDoService } from '../to-do.service';
import { InputDialogService } from '../input-dialog.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponentModule, NgFor, CommonModule],
})
export class Tab2Page {

  title = "Rewards";
  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: ToDoService, public inputDialogService: InputDialogService) {}

  loadRewards(){
    return this.dataService.getRewards();
  }
  
  async removeReward(reward: { name: string; }, index: number){
    console.log("Removing Reward - ", reward)
    const toast = await this.toastCtrl.create({
      message: 'Removing Reward - ' + reward.name + " ...",
      duration: 3000
    });
    toast.present();
    this.dataService.removeRewards(index);
  }

  async shareRewards(reward: { name: string; }, index: number){
    console.log("Sharing Reward - ", reward)
    const toast = await this.toastCtrl.create({
      message: 'Sharing Reward - ' + reward.name + " ...",
      duration: 3000
    });
    toast.present();

  }

  async editReward(reward: { name: string;}, index: number){
    console.log("Editing Reward - ", reward)
    const toast = await this.toastCtrl.create({
      message: 'Editing Reward - ' + reward.name + " ...",
      duration: 3000
    });
    toast.present();
    this.inputDialogService.showRewards(reward, index);
  }

  addReward() {
    console.log("Adding Reward");
    this.inputDialogService.showRewards();
  }
}
