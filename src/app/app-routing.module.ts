import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { IsAuthenticatedGuard } from "./identity/authentication.guard";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [ IsAuthenticatedGuard ] },
  { path: "home", component: HomeComponent, canActivate: [ IsAuthenticatedGuard ] },
  {path: "schools", loadChildren: () => import("./school/school.module").then(m => m.SchoolModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
