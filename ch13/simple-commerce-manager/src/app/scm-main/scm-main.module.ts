// 예제 11-8 ScmMainModule에 새 컴포넌트 등록

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const CORE_COMPONENTS = [NavbarComponent, SidebarComponent, FooterComponent, MainDashboardComponent, PageNotFoundComponent];

@NgModule({
    imports: [CommonModule, RouterModule, ChartsModule],
    declarations: CORE_COMPONENTS,
    exports: CORE_COMPONENTS
})
export class ScmMainModule { }
