export class Empty {
  constructor ();
  toObject(): Empty.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => Empty;
}

export namespace Empty {
  export type AsObject = {
  }
}

export class EchoRequest {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  toObject(): EchoRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => EchoRequest;
}

export namespace EchoRequest {
  export type AsObject = {
    message: string;
  }
}

export class EchoResponse {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  getMessageCount(): number;
  setMessageCount(a: number): void;
  toObject(): EchoResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => EchoResponse;
}

export namespace EchoResponse {
  export type AsObject = {
    message: string;
    messageCount: number;
  }
}

export class ServerStreamingEchoRequest {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  getMessageCount(): number;
  setMessageCount(a: number): void;
  getMessageInterval(): number;
  setMessageInterval(a: number): void;
  toObject(): ServerStreamingEchoRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ServerStreamingEchoRequest;
}

export namespace ServerStreamingEchoRequest {
  export type AsObject = {
    message: string;
    messageCount: number;
    messageInterval: number;
  }
}

export class ServerStreamingEchoResponse {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  toObject(): ServerStreamingEchoResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ServerStreamingEchoResponse;
}

export namespace ServerStreamingEchoResponse {
  export type AsObject = {
    message: string;
  }
}

export class ClientStreamingEchoRequest {
  constructor ();
  getMessage(): string;
  setMessage(a: string): void;
  toObject(): ClientStreamingEchoRequest.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ClientStreamingEchoRequest;
}

export namespace ClientStreamingEchoRequest {
  export type AsObject = {
    message: string;
  }
}

export class ClientStreamingEchoResponse {
  constructor ();
  getMessageCount(): number;
  setMessageCount(a: number): void;
  toObject(): ClientStreamingEchoResponse.AsObject;
  serializeBinary(): Uint8Array;
  static deserializeBinary: (bytes: {}) => ClientStreamingEchoResponse;
}

export namespace ClientStreamingEchoResponse {
  export type AsObject = {
    messageCount: number;
  }
}

