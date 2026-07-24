export const COMMAND_PALETTE_OPEN_EVENT = "command-palette:open";

export function openCommandPalette() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(COMMAND_PALETTE_OPEN_EVENT));
}
