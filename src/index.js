import './index.css';
import { renderLogo, renderProfile } from './js/render';

window.onload = async () => {
  await renderLogo();
  await renderProfile();
};
