import { PipeTransform,Pipe } from "@angular/core"; 

@Pipe({name:'getTime'})

export class GetTimePipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        
    }
}