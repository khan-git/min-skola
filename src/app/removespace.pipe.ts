import { Injectable, Pipe, PipeTransform } from '@angular/core';  
  
@Pipe({  
    name: 'removespace'  
})  
  
@Injectable()  
export class RemoveSpacePipe implements PipeTransform {  
    transform(value: string): string {  
        return value.replace(/[\s]/g, '');
    }  
} 
