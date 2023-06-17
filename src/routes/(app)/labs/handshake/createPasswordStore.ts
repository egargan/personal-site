import { readable, type Readable } from "svelte/store";

// TODO: type me
export default function createPasswordStore(
  handshakeController: unknown
): Readable<string[]> {
  return readable([], (set) => {
    return handshakeController.onPasswordChanged((newPassword: string[]) => {
      set(newPassword);
    });
  });
}
