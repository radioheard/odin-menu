export default function menu() {
  const element = document.getElementById('content');
  const header = document.createElement('h1');
  let headerT = document.createTextNode('︵‿︵‿୨ Our Menu ୧‿︵‿︵');
  header.appendChild(headerT);
  element.appendChild(header);

  function salvation(string) {
    let word = string.replace(/[A-Z]/g, " $&");

    const capitalized =
      word.charAt(0).toUpperCase()
      + word.slice(1);
    return capitalized;
  }

  const starters = {
    mozzarellaSticks: 18,
    rabas: 15,
    boardOfCheeses: 12,
  }
  const entrees = {
    lasagna: 20,
    lomoALaPimienta: 35,
    macAndCheese: 10,
  }
  const desserts = {
    cheesecake: 8,
    keyLimePie: 8,
    cinnamonRoll: 6,
  }
  const beverages = {
    draftBeer: 5,
    sodaWater: 3,
    lemonade: 3,
  }

  const menu = [starters, entrees, desserts, beverages];
  const menuT = ['Starters', 'Entrees', 'Desserts', 'Beverages']
  let i = 0;
  menuT.forEach((foodType) => {
    let section = document.createElement('div');
    let title = document.createElement('h2');
    let titleT = document.createTextNode(`${foodType}`);
    let ul = document.createElement('ul');
    title.appendChild(titleT);
    element.appendChild(section)
    section.appendChild(title);
    section.appendChild(ul);
    for (const key in menu[i]) {
      let item = document.createElement('li');
      let itemName = document.createElement('p');
      let dots = document.createElement('div');
      let itemPrice = document.createElement('p');
      let itemNameT = document.createTextNode(`${salvation(key)}`);
      let itemPriceT = document.createTextNode(`$${menu[i][key]}`);
      itemName.appendChild(itemNameT);
      itemPrice.appendChild(itemPriceT);
      dots.classList.add('dots');
      item.appendChild(itemName);
      item.appendChild(dots);
      item.appendChild(itemPrice);
      ul.appendChild(item);
    }
    i++;
  })

  }