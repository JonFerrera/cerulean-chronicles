import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./features/home/components/home-screen/home-screen.component").then((c) => c.HomeScreenComponent),
    }
];
