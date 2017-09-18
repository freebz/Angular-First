// 예제 11-4 SCM의 핵심 모듈이 될 ScmMainModule

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [CommonModule],
    declarations: [NavbarComponent, SidebarComponent, FooterComponent]
})
export class ScmMainModule { }
