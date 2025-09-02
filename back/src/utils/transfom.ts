export function rawObjToSchema<T extends object>(input: any, schema: Record<keyof T, any>): T {
    let result: any = {};

    for (const key in schema) {
        if (key in input && typeof input[key] === typeof schema[key]) result[key] = input[key];
        else result[key] = schema[key];
    }

    return result as T;
}
