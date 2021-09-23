import {Input} from '@angular/core';



export interface Roles {
  admin?: boolean;
}


export class User {
  uid: string;
  email: string;
  roles: Roles;
  displayName: string;
}

