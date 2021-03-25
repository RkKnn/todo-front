import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

class Link {
  constructor(public path: string, public name: string) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'todo-front';
  routes: Link[] = []

  constructor(private router: Router) {
    this.routes = router.config.map(route => 
      new Link(`/${route.path}`, route.path ?? "")
    ).filter(link => link.name)
  }
}
