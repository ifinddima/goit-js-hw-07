const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const gallerys = [];
const galleryRef = document.querySelector(`#gallery`);
galleryRef.classList.add(`display-flex`);

images.forEach(el => {
  let li = document.createElement(`li`);
  li.classList.add(`item`);
  li.innerHTML = `<img src="${el.url}" alt="${el.alt}" width="300" height="300" >`;
  gallerys.push(li);
});

galleryRef.append(...gallerys);
