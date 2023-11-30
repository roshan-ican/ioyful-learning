import { TSchema } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

export const validateSchema = (schema : TSchema, value : any) => {
    const C = TypeCompiler.Compile(schema);                                                  
    const result = C.Errors(value);
    
    if(result.First()){
        throw new Error(result.First()?.path + " " +result.First()?.message);
    }
}