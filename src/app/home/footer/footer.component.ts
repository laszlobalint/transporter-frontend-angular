import { Component } from '@angular/core';
import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public model: IMyDateModel = null;
  public options: IAngularMyDpOptions = {
    dateRange: true,
    dateFormat: 'yyyy.mm.dd.',
  };

  public onDateChanged(event: IMyDateModel): void {
    this.model = event;
  }
}
