
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { log } from 'console';
import { ZodType } from 'zod';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
    constructor(private schema: ZodType){}
    transform(value: any, metadata: ArgumentMetadata) {
    let result = this.schema.safeParse(value)
    if(!result.success){
        const errors = result.error.issues.map((issue)=>({
            field: issue.path.join('.'),
            message: issue.message
        }))
        throw new BadRequestException({message:"Validation Error", errors})
    }
    return value;
}
}
