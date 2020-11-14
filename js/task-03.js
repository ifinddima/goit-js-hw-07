const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(`#gallery`);
galleryRef.classList.add(`display-flex`);

images.forEach((el) => {
  let li = document.createElement(`li`);
  let img = document.createElement(`img`);
  li.classList.add(`item`);
  img.classList.add(`imgItem`);
  img.setAttribute("width", "300");
  img.setAttribute("height", "300");
  img.setAttribute(`src`, el.url);
  img.setAttribute(`alt`, el.alt);
  gallery.append(li);
  li.append(img);
});
