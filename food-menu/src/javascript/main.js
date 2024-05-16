document.addEventListener('DOMContentLoaded', function () {
  const menuList = document.getElementById('menu-list');
  const allBtn = document.getElementById('all-btn');
  const breakfastBtn = document.getElementById('breakfast-btn');
  const lunchBtn = document.getElementById('lunch-btn');
  const shakesBtn = document.getElementById('shakes-btn');
  const dinnerBtn = document.getElementById('dinner-btn');

  const menuData = [
    {
      name: 'pancakes',
      category: 'breakfast',
      price: '3000원',
      image:
        'https://i.pinimg.com/564x/98/6e/80/986e8020d901fe1c313e9460495ec5c3.jpg',
      description:
        'Savor the Fluff: Delight in our heavenly pancakes, topped and filled with your favorite flavors from classic maple to exotic fruits.',
    },
    {
      name: 'egg toast',
      category: 'breakfast',
      price: '3000원',
      image:
        'https://i.pinimg.com/564x/b2/e9/95/b2e995151a30cfd40ad2bbb977c5a5f8.jpg',
      description:
        'Morning Magic: Start your day right with our delicious egg toast, featuring fluffy eggs on crisp, buttered bread topped with a sprinkle of herbs',
    },
    {
      name: 'yogurt',
      category: 'breakfast',
      price: '3000원',
      image:
        'https://i.pinimg.com/564x/87/c7/08/87c7081084652dcdc8f8f463693c5a1e.jpg',
      description:
        'Pure Pleasure: Dive into our creamy, dreamy yogurts, bursting with natural flavors and the freshest of fruits',
    },
    {
      name: 'subway',
      category: 'lunch',
      price: '5000원',
      image:
        'https://i.pinimg.com/564x/7d/18/cd/7d18cd393083753727c076912534193b.jpg',
      description:
        'Build Your Bite: Customize your perfect sandwich at Subway, with fresh ingredients, bold flavors, and a touch of your own creativity!',
    },
    {
      name: 'hamburger',
      category: 'lunch',
      price: '5000원',
      image:
        'https://i.pinimg.com/564x/70/fd/75/70fd75acfb7fa05762f3726543656f2c.jpg',
      description:
        'Bite into Bliss: Feast on our juicy, handcrafted burgers, loaded with fresh toppings and served on a perfectly toasted bun',
    },
    {
      name: 'oreo shake',
      category: 'shakes',
      price: '3500원',
      image:
        'https://i.pinimg.com/736x/10/9c/d2/109cd288493a97b4232a0ee7565660ba.jpg',
      description:
        'Twist, Lick, and Sip: Dive into our creamy Oreo shake, a blissful blend of rich ice cream and crunchy Oreo bits!',
    },
    {
      name: 'milk shake',
      category: 'shakes',
      price: '3500원',
      image:
        'https://i.pinimg.com/564x/c0/75/77/c075779cc77285aa3b688822f82c26cd.jpg',
      description:
        'Shake Things Up: Experience the classic delight of our smooth, frothy milkshakes, available in a variety of irresistible flavors!',
    },
    {
      name: 'steak',
      category: 'dinner',
      price: '12000원',
      image:
        'https://i.pinimg.com/564x/95/4d/1b/954d1b473c2771c50949560e745fa0b8.jpg',
      description:
        'Steak Your Claim: Indulge in our prime cuts, perfectly seared to succulent perfection, and paired with signature sides',
    },
    {
      name: 'potato pizza',
      category: 'dinner',
      price: '24000원',
      image:
        'https://i.pinimg.com/736x/10/13/7d/10137d05df706587060254f869163913.jpg',
      description:
        'Slice of Comfort: Enjoy our unique potato pizza, topped with creamy slices of potato, aromatic herbs, and a golden, melted cheese blend!',
    },
  ];

  function createMenuItemCard(item) {
    const card = document.createElement('li');
    card.classList.add('menu-item');

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;
    card.appendChild(image);

    const details = document.createElement('div');
    details.classList.add('menu-item-details');

    const name = document.createElement('h2');
    name.textContent = item.name;
    details.appendChild(name);

    const price = document.createElement('p');
    price.textContent = `${item.price}`;
    details.appendChild(price);

    const description = document.createElement('p');
    description.textContent = item.description;
    details.appendChild(description);

    card.appendChild(details);
    return card;
  }

  function renderMenu(category = 'all') {
    menuList.innerHTML = '';
    menuData.forEach((item) => {
      if (category === 'all' || item.category === category) {
        const card = createMenuItemCard(item);
        menuList.appendChild(card);
      }
    });
  }

  allBtn.addEventListener('click', () => renderMenu('all'));
  breakfastBtn.addEventListener('click', () => renderMenu('breakfast'));
  lunchBtn.addEventListener('click', () => renderMenu('lunch'));
  shakesBtn.addEventListener('click', () => renderMenu('shakes'));
  dinnerBtn.addEventListener('click', () => renderMenu('dinner'));

  renderMenu();
});
