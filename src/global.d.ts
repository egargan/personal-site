/// <reference types="@sveltejs/kit" />

declare module "handshake" {
  type Token = "TOP" | "BOTTOM" | "FRONT";

  type HandshakeController = {
    setPassword(password: string[]): void;
    onPasswordChanged(
      callback: (newPassword: Token[], newToken: Token) => void
    ): void;
    reset(): void;
    confirm(): boolean;
  };

  export default function run(
    container: HTMLElement,
    assetsPath: string,
    debug?: boolean
  ): HandshakeController;
}
