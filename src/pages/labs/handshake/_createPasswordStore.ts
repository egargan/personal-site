import { readable, type Readable } from "svelte/store";

// TODO: type me properly!
export default function createPasswordStore(
  handshakeController: unknown,
): Readable<string[]> {
  return readable([] as string[], (set) => {
    // @ts-ignore
    return handshakeController.onPasswordChanged((newPassword: string[]) => {
      set(newPassword);
    });
  });
}
