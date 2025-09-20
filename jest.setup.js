import { TextEncoder, TextDecoder } from "util";

import { Headers, Request, Response, fetch } from "node-fetch";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.fetch = fetch;
