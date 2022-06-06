declare module "@metamask/jazzicon" {
  export default function (diameter: number, seed: number): HTMLElement;
}
declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}
