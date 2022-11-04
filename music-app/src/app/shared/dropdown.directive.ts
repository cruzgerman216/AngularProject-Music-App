import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: 'appDropdown'
})
export class DropdownDirective{
  @HostBinding('class') isOpen = false;

  constructor(private elementRef: ElementRef){}

  @HostListener('click') dropdownClick(){
    this.isOpen = !this.isOpen;
  }
}
