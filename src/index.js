import './index.css';
import { renderLogo, renderProfile, renderPosts } from './js/render';

window.onload = async () => {
  await renderLogo();
  await renderProfile();
  await renderPosts();
};
