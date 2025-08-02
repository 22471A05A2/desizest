import { Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { JoinComponent } from './join/join.component';

export const routes: Routes = [
    {
        'path':'add',
        component:AddComponent
    },
    {
        'path':'login',
        component:LoginComponent
    },
    {
        'path':'signup',
        component:SignupComponent
    },
    {
        'path':'join',
        component:JoinComponent
    },
];