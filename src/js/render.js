import { fetchLogo, fetchProfile } from './api';
import {
  getLogoEle,
  getProfilePhotoEle,
  getSidebarProfileEle,
} from './elements';

export const renderLogo = async () => {
  const logo = getLogoEle();
  logo.textContent = await fetchLogo();
};

export const renderProfile = async () => {
  const profile = await fetchProfile();
  getProfilePhotoEle().src = profile.data.img_src;

  const { name, email, photo } = getSidebarProfileEle();
  photo.src = profile.data.img_src;
  name.textContent = profile.data.name;
  email.textContent = profile.data.at;
};
