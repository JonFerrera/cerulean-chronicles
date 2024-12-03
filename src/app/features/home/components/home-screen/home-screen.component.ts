import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'mer-home-screen',
    imports: [MatButtonModule, MatDividerModule, MatIconModule],
    templateUrl: './home-screen.component.html',
    styleUrl: './home-screen.component.scss'
})
export class HomeScreenComponent {

}
