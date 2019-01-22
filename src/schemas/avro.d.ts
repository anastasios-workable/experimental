declare module 'avro-js' {
  export const parse: (schema: any) => {
    toBuffer: (object: any) => Buffer,
    fromBuffer: (buffer: Buffer) => obj,
    random: () => any | {toBuffer: (object: any) => Buffer}
  };;
}