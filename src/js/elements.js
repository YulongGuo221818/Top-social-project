export const getLogoEle = () => document.querySelector('nav .logo');

export const getProfilePhotoEle = () =>
  document.querySelector('nav .profile-photo img');

export const getSidebarProfileEle = () => {
  const profile = document.querySelector('.sidebar .profile');
  const photo = profile.querySelector('.profile-photo img');
  const name = profile.querySelector('.profile-description .name');
  const email = profile.querySelector('.profile-description .email');

  return {
    photo,
    name,
    email,
  };
};
