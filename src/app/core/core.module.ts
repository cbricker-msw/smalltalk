import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from './services/users.service';
import { GroupsService } from './services/groups.service';
import { MessagesService } from './services/messages.service';
import { ContactsService } from './services/contacts.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        UsersService,
        GroupsService,
        MessagesService,
        ContactsService
    ]
})
export class CoreModule {
}
