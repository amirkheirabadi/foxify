/**
 * @see https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
 */

const HTTP = {
  // 1xx Informational responses
  CONTINUE: <100>100,
  SWITCHING_PROTOCOL: <101>101,
  PROCESSING: <102>102,
  EARLY_HINTS: <103>103,

  // 2xx Success
  OK: <200>200,
  CREATED: <201>201,
  ACCEPTED: <202>202,
  NON_AUTHORITATIVE_INFORMATION: <203>203,
  NO_CONTENT: <204>204,
  RESET_CONTENT: <205>205,
  PARTIAL_CONTENT: <206>206,
  MULTI_STATUS: <207>207,
  ALREADY_REPORTED: <208>208,
  IM_USED: <226>226,

  // 3xx Redirection
  MULTIPLE_CHOICES: <300>300,
  MOVED_PERMANENTLY: <301>301,
  FOUND: <302>302,
  SEE_OTHER: <303>303,
  NOT_MODIFIED: <304>304,
  USE_PROXY: <305>305,
  SWITCH_PROXY: <306>306,
  TEMPORARY_REDIRECT: <307>307,
  PERMANENT_REDIRECT: <308>308,

  // 4xx Client errors
  BAD_REQUEST: <400>400,
  UNAUTHORIZED: <401>401,
  PAYMENT_REQUIRED: <402>402,
  FORBIDEN: <403>403,
  NOT_FOUND: <404>404,
  METHOD_NOT_ALLOWED: <405>405,
  NOT_ACCEPTABLE: <406>406,
  PROXY_AUTHENTICATION_REQUIRED: <407>407,
  REQUEST_TIMEOUT: <408>408,
  CONFLICT: <409>409,
  GONE: <410>410,
  LENGTH_REQUIRED: <411>411,
  PRECONDITION_FAILED: <412>412,
  PAYLOAD_TOO_LARGE: <413>413,
  URI_TOO_LONG: <414>414,
  UNSUPPORTED_MEDIA_TYPE: <415>415,
  RANGE_NOT_SATISFIABLE: <416>416,
  EXPECTATION_FAILED: <417>417,
  IM_A_TEAPOT: <418>418,
  MISDIRECET_REQUEST: <421>421,
  UNPROCESSABLE_ENTITY: <422>422,
  LOCKED: <423>423,
  FAILED_DEPENDENCY: <424>424,
  UPGRADE_REQUIRED: <426>426,
  PRECONDITION_REQUIRED: <428>428,
  TOO_MANY_REQUESTS: <429>429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: <431>431,
  UNAVAILABLE_FOR_LEGAL_REASONS: <451>451,

  // 5xx Server errors
  INTERNAL_SERVER_ERROR: <500>500,
  NOT_IMPLEMENTED: <501>501,
  BAD_GATEWAY: <502>502,
  SERVICE_UNAVAILABLE: <503>503,
  GATEWAY_TIMEOUT: <504>504,
  HTTP_VERSION_NOT_SUPPORTED: <505>505,
  VARIANT_ALSO_NEGOTIATES: <506>506,
  INSUFFICIENT_STORAGE: <507>507,
  LOOP_DETECTED: <508>508,
  NOT_EXTENDED: <510>510,
  NETWORK_AUTHENTICATION_REQUIRED: <511>511,
}

export = HTTP
