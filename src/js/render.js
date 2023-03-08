import { fetchLogo, fetchProfile, fetchPosts } from './api';
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

const createPostDom = () => {
  const postDom = document.createElement('div');
  postDom.classList.add('post');
  postDom.innerHTML = `
    <div class="post-profile"></div>
    <div class="post-picture"></div>
  `;
  return postDom;
};

const renderPost = (post) => {
  const postDom = createPostDom();
  renderPostProfile(postDom.querySelector('.post-profile'), post.profile);
  renderPostPicture(postDom.querySelector('.post-picture'), post.picture);

  document.querySelector('.posts').appendChild(postDom);
};

const renderPostPicture = (postPictureDOM, post) => {
  const picture = document.createElement('img');
  picture.setAttribute('width', '100%');
  postPictureDOM.appendChild(picture);
  picture.src = post.img_src;
};

const renderPostProfile = (postProfileDOM, postProfile) => {
  const profile = document.createElement('div');
  profile.classList.add('profile');
  profile.innerHTML = `
        <div class="profile-photo">
          <img alt="profile photo">
        </div>
        <div class="profile-description">
          <h2></h2>
          <p></p>
        </div>
    `;
  const setting = document.createElement('i');
  setting.className = 'uil uil-ellipsis-h';

  profile.querySelector('img').src = postProfile.src;
  profile.querySelector('h2').textContent = postProfile.name;
  profile.querySelector(
    'p',
  ).textContent = `${postProfile.position}, ${postProfile.time}`;

  postProfileDOM.appendChild(profile);
  postProfileDOM.appendChild(setting);
};

export const renderPosts = async () => {
  const posts = await fetchPosts();
  posts.data.forEach((post) => {
    renderPost(post);
  });
};
