import Icon from '../logo.jpg';
import Rabas from '../rabas.jpeg';
import Lomo from '../lomo.jpeg';
import Pie from '../pie.jpeg';
export default function greeting() {
  const element = document.getElementById('content');
  const header = document.createElement('h2');
  let headerT = document.createTextNode('Where quality meets quantity. We are not only better, but also unique...')
  header.appendChild(headerT);
  let p = document.createElement('p');
  let pT = document.createTextNode('Come try our various dishes from different cultures all over the world. Travel with us on a gastronomical journey all round the globe!');
  p.appendChild(pT);
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  element.appendChild(header);
  element.appendChild(p);

  document.body.appendChild(element);

  const dishes = document.createElement('div');
  dishes.classList.add('dishes');
  element.appendChild(dishes);

  const dishTitle = document.createElement('h2');
  const dishTitleT = document.createTextNode('Some of our delights...');
  dishTitle.appendChild(dishTitleT);
  dishes.appendChild(dishTitle);

  function foodSlot (img, alt, title, desc) {
    const food = document.createElement('div');
    food.classList.add('food');
    const foodPic = new Image();
    foodPic.src = img;
    foodPic.alt = alt;
    food.appendChild(foodPic);
    dishes.appendChild(food);

    const cont = document.createElement('div');
    const card = document.createElement('card');
    card.classList.add('card');
    const foodName = document.createElement('h4');
    const foodNameT = document.createTextNode(`${title}`);
    const description = document.createElement('p');
    const descriptionT = document.createTextNode(`${desc}`);

    dishes.appendChild(cont);
    cont.appendChild(card);
    card.appendChild(foodName);
    foodName.appendChild(foodNameT);
    card.appendChild(description);
    description.appendChild(descriptionT);
  }

  foodSlot(Rabas, 'rabas', 'Rabas', 'Crispy and zesty - The perfect mix');
  foodSlot(Lomo, 'lomo a la pimienta', 'Lomo a la Pimienta', 'Food for the soul, with a touch of elegance.');
  foodSlot(Pie, 'key lime pie', 'Key Lime Pie', 'An unerring classic.');
}
