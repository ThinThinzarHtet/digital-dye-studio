import { proxy } from "valtio";
const state = proxy({
  intro: true,
  color: "#7095de",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
