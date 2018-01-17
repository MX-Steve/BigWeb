import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notFound',
    template:`
        <h1>这是404</h1>
    ` 
})

export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}