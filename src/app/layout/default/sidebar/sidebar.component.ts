import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SettingsService, MenuService } from '@delon/theme';

@Component({
  selector: 'layout-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  constructor(public settings: SettingsService, private menuService: MenuService) {
    console.log(this.menuService);
  }
}
