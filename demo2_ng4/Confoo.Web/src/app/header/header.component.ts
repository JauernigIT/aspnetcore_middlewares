import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    @Output() navChanged = new EventEmitter<string>();

    onNavChanged(navItem: string) {
        this.navChanged.emit(navItem);
    }
}