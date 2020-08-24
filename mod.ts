/**
 * Return `true` if a port is free.
 *
 * Requires the `--allow-net` flag.
 * 
 * @param filepath default is `Deno.cwd()`, the current working directory.
 */
export default function isFreePort(port: number): boolean {
  try {
    const listener = Deno.listen({
      port: port,
    });

    listener.close();

    return true;
  } catch (err) {
    if (err instanceof Deno.errors.AddrInUse) {
      return false;
    }

    throw err;
  }
}
