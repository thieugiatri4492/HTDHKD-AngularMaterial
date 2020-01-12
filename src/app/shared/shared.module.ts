import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { SpinnerComponent } from './spinner.component';


@NgModule({
  imports:[CommonModule],
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent
  ],
  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    SpinnerComponent
   ],
  providers: [ MenuItems ]
})
export class SharedModule { }
