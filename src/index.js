import './index.css';
import { getLogoEle, getProfilePhotoEle } from './js/elements';
import { fetchLogo, fetchProfile } from './js/api';

const run = async () => {};

run();

window.onload = async () => {
  const logo = await fetchLogo();
  getLogoEle().textContent = logo;

  const profile = await fetchProfile();
  console.log(profile);
  getProfilePhotoEle().src = profile.data.img_src;
};
