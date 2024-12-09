import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TuiRoot } from '@taiga-ui/core';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, TuiRoot],
    templateUrl: './app.component.html',
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    styleUrl: './app.component.scss'
})
export class AppComponent {}
