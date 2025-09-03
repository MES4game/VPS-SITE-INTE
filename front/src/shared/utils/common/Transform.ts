export type SchemaType<T> = {
    [K in keyof T]: T[K]
}

/* eslint-disable */
export function rawObjToSchema<T>(input: any, schema: SchemaType<T>): T {
    let result: any = {};

    for (const key in schema) {
        if (key in input && typeof input[key] === typeof schema[key]) result[key] = input[key];
        else result[key] = schema[key];
    }

    return result as T;
}
