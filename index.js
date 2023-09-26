document.addEventListener('DOMContentLoaded', () => {
  let home = document.querySelector('.home')
  let contact = document.querySelector('.contact')
  let homeBtn = document.querySelector('.home-btn');
  let contactBtn = document.querySelector('.contact-btn');

  let vx = document.querySelector('.vx');
  let vximg = document.querySelector('.vx-img');
  let qqgroup = document.querySelector('.qqgroup');
  let qqgroupimg = document.querySelector('.qqgroup-img');

  home.classList.add('show');
  homeBtn.addEventListener('click', (e) => {
    home.classList.remove('show');
    contact.classList.add('show');
  })
  contactBtn.addEventListener('click', (e) => {
    contact.classList.remove('show');
    home.classList.add('show');
  })

  vx.addEventListener('click', (e) => {
    e.preventDefault();
    vximg.classList.add('show');
  })
  vximg.addEventListener('click', (e) => {
    vximg.classList.remove('show');
  })
  qqgroup.addEventListener('click', (e) => {
    e.preventDefault();
    qqgroupimg.classList.add('show');
  })
  qqgroupimg.addEventListener('click', (e) => {

    qqgroupimg.classList.remove('show');
  })
})