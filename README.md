# `@scolastico-dev/env-helper`

`@scolastico-dev/env-helper` is a TypeScript library that simplifies working with environment variables. It provides an intuitive API to validate, parse, and define default values for environment variables. The library is especially useful in Node.js projects that rely on configuration management.

## Installation

Install the library using `npm`:

```bash
npm install @scolastico-dev/env-helper
```

## Usage

### Example: Configuration Service

The library can be used to create configuration services that provide environment variables with type safety and default values. Here's an example:

```typescript
import { Injectable } from '@nestjs/common';
import { $bool, $str } from '@scolastico-dev/env-helper';

@Injectable()
export class CfgService {
  /** @hidden */
  constructor() {}

  /**
   * Indicates whether Redis should be used for caching.
   * @example REDIS_ENABLED=true
   * @default false
   */
  readonly redisEnabled = $bool('REDIS_ENABLED', false);

  /**
   * The Redis connection URL.
   * @example REDIS_URL=redis://localhost:6379
   * @default redis://localhost:6379
   */
  readonly redisUrl = $str('REDIS_URL', 'redis://localhost:6379');
}
```

### Supported Types

Env Helper offers functions for various data types, including:

* `$bool`: For boolean values (`true`/`false`)
* `$int`: For integers
* `$float`: For floating-point numbers
* `$str`: For strings
* `$list`: For lists
* `$url`: For URLs

## Documentation

You can find the full documentation in the `docs/` folder or online at [Env Helper Docs](https://scolastico-dev.github.io/env-helper/).

## License

This project is licensed under the [MIT License](./LICENSE).
