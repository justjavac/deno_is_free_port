# deno_is_free_port

[![tag](https://img.shields.io/github/release/justjavac/deno_is_free_port)](https://github.com/justjavac/deno_is_free_port/releases)
[![Build Status](https://github.com/justjavac/deno_is_free_port/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_is_free_port/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_is_free_port)](https://github.com/justjavac/deno_is_free_port/blob/master/LICENSE)

Return `true` if a port is free.

## Usage

```ts
import isFreePort from "https://deno.land/x/is_free_port/mod.ts";

isFreePort(21);
isFreePort(8080);
isFreePort(1234);
```

## Example

```bash
deno run --allow-net https://deno.land/x/is_git/example.ts
```

## License

[deno_is_free_port](https://github.com/justjavac/deno_is_free_port) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
