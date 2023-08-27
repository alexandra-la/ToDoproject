import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToDoService } from './to-do.service';

@Injectable({
  providedIn: 'root'
})
export class InputDialogService {

  constructor(public alertCtrl: AlertController, public dataService: ToDoService) {
    console.log('Hello InputDialogServiceProvider Provider')
   }
   async showPrompt(item?: { name: any; quantity: any; }, index?: number | undefined){
    const prompt = this.alertCtrl.create({
      header: item ? 'Edit Item': 'Add Item',
      message: item ? "Please edit item..." : "Please enter item...",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name',
          value: item ? item.name : null
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value: item ? item.quantity : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', item);
            if (index !== undefined){
              this.dataService.editItem(item, index);
            }
            else{
              this.dataService.addItem(item);
            }
          }
        }
      ]

    });
    (await prompt).present();
   }
   async showRewards(reward?:{name: any;}, index?: number | undefined){
    const prompt = this.alertCtrl.create({
      header : reward ? 'Edit Reward' : 'Add Reward',
      message: reward ? 'Please edit reward...' : 'Please enter new reward details...',
      inputs: [
        {
          name: 'Details',
          placeholder: 'Enter Details',
          value: reward ? reward.name: null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Save',
          handler: item => {
            console.log('Saved clicked', reward);
            if (index !== undefined){
              this.dataService.editRewards(reward, index);
            }
            else{
              this.dataService.addRewards(reward);
            }
          }
        }
      ]
    })
   }
   
}
