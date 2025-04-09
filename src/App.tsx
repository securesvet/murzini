import Header from "./Header.tsx";
import "./App.css";

// Dishes
import margherita from "/menu/margherita.png";
import carbonara from "/menu/carbonara.png";
import cheeseburger from "/menu/cheeseburger.png";
import salad from "/menu/salad.png";

// Desserts
import cheesecake from "/menu/cheesecake.png";
import snickers from "/menu/snickers.png";
import mars from "/menu/mars.png";
import icecream from "/menu/icecream.png";

// Drinks
import tea from "/menu/tea.png";
import beer from "/menu/beer.png";
import cider from "/menu/cider.png";
import wine from "/menu/wine.png";
import fantaser from "/menu/fantaser.png";
import kakashka from "/menu/kakashka.png";
import jagermeister from "/menu/jagermeister.png";
import cola from "/menu/cola.png";
import hookah from "/menu/hookah.png";

import italia from "/italian-background.jpeg?url";
import murzini from "/murzini-transparent-logo.png?url";

function App() {
  const menu = {
    dishes: [
      {
        name: "Охуенная пицца",
        description: "Классика. Сам шеф Мурзини сделаль)",
        price: 650,
        image: margherita,
      },
      {
        name: "Карбонара",
        description: "Можете спросить, есть ли Карбонара, пока что непонятно",
        price: 600,
        image: carbonara,
      },
      {
        name: "Чизбургер",
        description: "Осмельтесь попросить у шефа чизбургер, и узрите его гнев ",
        price: 300,
        image: cheeseburger,
      },
      {
        name: "Овощной салат",
        description: "Просто по приколу",
        price: 400,
        image: salad,
      },
    ],
    desserts: [
      {
        name: "Чизкейк",
        description: "Нежный, как рассвет в Тоскане",
        price: 350,
        image: cheesecake,
      },
      {
        name: "Торт Сникерс",
        description: "Ореховый, сладкий и мощный",
        price: 400,
        image: snickers,
      },
      {
        name: "Торт Марс",
        description: "Больше шоколада — больше счастья",
        price: 400,
        image: mars,
      },
      {
        name: "Мороженое",
        description: "Шарик ванильный, клубничный или шоколадный",
        price: 200,
        image: icecream,
      },
    ],
    drinks: [
      {
        name: "Чай",
        description: "Чёрный, зелёный — спроси у официанта",
        price: 150,
        image: tea,
      },
      {
        name: "Пиво",
        description: "Бланш или Бад, решим на месте",
        price: 300,
        image: beer,
      },
      {
        name: "Сидр",
        description: "Лёгкий, как весенний ветер",
        price: 300,
        image: cider,
      },
      {
        name: "Вино 0.125",
        description: "Любимое вино сами знаете кого...",
        price: 350,
        image: wine,
      },
      {
        name: "Фантазёр шот",
        description:  "Синхронизация мыслей. Скорость реакции. Острота ума. Отрицание и гнев.",
        price: 250,
        image: fantaser,
      },
      {
        name: "Коктейль 'Какашка'",
        description: "Только после 21:00. Может быть заказан только одним человеком.",
        price: 400,
        image: kakashka,
      },
      {
        name: "Ягермейстер",
        description: "Если остались деньги",
        price: 500,
        image: jagermeister,
      },
      {
        name: "Коло-мороженое",
        description: "Кола с шариком мороженого. Да-да",
        price: 220,
        image: cola,
      },
      {
        name: "Паровой коктейль",
        description: "Для душевной атмосферы",
        price: 600,
        image: hookah,
      },
    ],
  };

  return (
    <>
      <Header />

      <div className="background-container">
        <img src={italia} alt="Italian background" className="background" />
      </div>

      <main className="main">
        <div className="welcome-card-container">
          <section className="welcome-card">
            <h1 className="title">Добро пожаловать в Murzini</h1>
            <img
              src={murzini}
              alt="Murzini"
              width={200}
              className="image-logo"
            />
            <p>Место, где сердце Италии встречается с вашим столом...</p>
            <p className="signature">Buon appetito!</p>
          </section>
        </div>

        <section id="menu" className="menu-card">
          <h2>Меню</h2>

          <div className="menu-category">
            <h3>Блюда</h3>
            {menu.dishes.map((item, index) => (
              <div key={index} className="menu-item">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-image"
                  />
                  <p>
                    <strong>{item.name}</strong> — {item.description}
                  </p>
                </div>
                <div>
                  <p className="price">{item.price} ₽</p>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-category">
            <h3>Десерты</h3>
            {menu.desserts.map((item, index) => (
              <div key={index} className="menu-item">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-image"
                  />
                  <p>
                    <strong>{item.name}</strong> — {item.description}
                  </p>
                </div>
                <div>
                  <p className="price">{item.price} ₽</p>
                </div>
              </div>
            ))}
          </div>

          <div className="menu-category">
            <h3>Напитки</h3>
            {menu.drinks.map((item, index) => (
              <div key={index} className="menu-item">
                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-image"
                  />
                  <p>
                    <strong>{item.name}</strong> — {item.description}
                  </p>
                </div>
                <div>
                  <p className="price">{item.price} ₽</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
