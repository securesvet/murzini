import Header from "./Header.tsx";
import "./App.css";

import italia from "/italian-background.jpeg?url";
import murzini from "/murzini-transparent-logo.png?url";

function App() {
  const menu = {
    dishes: [
      {
        name: "Охуенная пицца",
        description: "Классика. Сам шеф Мурзини сделаль)",
        price: 650,
        image: "/menu/margherita.png",
      },
      {
        name: "Карбонара",
        description: "Можете спросить, есть ли Карбонара, пока что непонятно",
        price: 600,
        image: "/menu/carbonara.png",
      },
      {
        name: "Чизбургер",
        description:
          "Осмельтесь попросить у шефа чизбургер, и узрите его гнев ",
        price: 300,
        image: "/menu/cheeseburger.png",
      },
      {
        name: "Овощной салат",
        description: "Просто по приколу",
        price: 400,

        image: "/menu/salad.png",
      },
    ],
    desserts: [
      {
        name: "Чизкейк",
        description: "Нежный, как рассвет в Тоскане",
        price: 350,
        image: "/menu/cheesecake.png",
      },
      {
        name: "Торт Сникерс",
        description: "Ореховый, сладкий и мощный",
        price: 400,
        image: "/menu/snickers.png",
      },
      {
        name: "Торт Марс",
        description: "Больше шоколада — больше счастья",
        price: 400,
        image: "/menu/mars.png",
      },
      {
        name: "Мороженое",
        description: "Шарик ванильный, клубничный или шоколадный",
        price: 200,
        image: "/menu/icecream.png",
      },
    ],
    drinks: [
      {
        name: "Чай",
        description: "Чёрный, зелёный — спроси у официанта",
        price: 150,
        image: "/menu/tea.png",
      },
      {
        name: "Пиво",
        description: "Бланш или Бад, решим на месте",
        price: 300,
        image: "/menu/beer.png",
      },
      {
        name: "Сидр",
        description: "Лёгкий, как весенний ветер",
        price: 300,

        image: "/menu/cider.png",
      },
      {
        name: "Вино 0.125",
        description: "Любимое вино сами знаете кого...",
        price: 350,
        image: "/menu/wine.png",
      },
      {
        name: "Фантазёр шот",
        description:
          "Синхронизация мыслей. Скорость реакции. Острота ума. Отрицание и гнев.",
        price: 250,
        image: "/menu/fantaser.png",
      },
      {
        name: "Коктейль 'Какашка'",
        description:
          "Только после 21:00. Может быть заказан только одним человеком.",
        price: 400,
        image: "/menu/kakashka.png",
      },
      {
        name: "Ягермейстер",
        description: "Если остались деньги",
        price: 500,
        image: "/menu/jagermeister.png",
      },
      {
        name: "Коло-мороженое",
        description: "Кола с шариком мороженого. Да-да",
        price: 220,
        image: "/menu/cola.png",
      },
      {
        name: "Паровой коктейль",
        description: "Для душевной атмосферы",
        price: 600,
        image: "/menu/hookah.png",
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
