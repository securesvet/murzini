import Header from "./Header.tsx";
import "./App.css";

// Dishes
import margherita from "/menu/margherita.png";
import cheeseburger from "/menu/cheeseburger.png";
import fries from "/menu/fries.png";

// Desserts
import cheesecake from "/menu/cheesecake.png";
import snickers from "/menu/snickers.png";
import mars from "/menu/mars.png";
import icecream from "/menu/icecream.png";
import denish from "/menu/denish.png";

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
import MenuItem, { type MenuItemType } from "./MenuItem.tsx";
import Coupon from "./Coupon.tsx";

function App() {
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

          <MenuCategory title="Блюда" items={menu.dishes} />

          <MenuCategory title="Десерты" items={menu.desserts} />

          <MenuCategory title="Напитки" items={menu.drinks} />
        </section>

        <Coupon />
      </main>
    </>
  );
}

const MenuCategory = ({
  title,
  items,
}: {
  title: string;
  items: MenuItemType[];
}) => {
  return (
    <div className="menu-category">
      <h3>{title}</h3>
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  );
};

const menu = {
  dishes: [
    {
      name: "Кинг Конг пицца и Шеф Мурзини",
      description: "Классика. Сам шеф Мурзини заказал за додокоины)",
      price: 650,
      image: margherita,
    },
    {
      name: "Чизик",
      description: "Взял чизик за 35 все такие кааак?",
      price: 35,
      image: cheeseburger,
    },
    {
      name: "Картофель фри",
      description: "Просто картошка фри от ШЕВА МУРЗИНИ)",
      price: 120,
      image: fries,
      reviews: [
        {
          author: "Диман",
          text: "это кот насрал, а ты принёс и сказал на братишки кушайте картошка по французски",
          rating: 5,
        },
      ],
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
    {
      name: "Спермиш",
      description: "Великая булочка из поль-бейкери после 21:00 скидка 50%",
      price: 140,
      image: denish,
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
      reviews: [
        {
          author: "Тёмыч",
          text: "Поверьте мне, это охуенное вино",
          rating: 5,
        },
        {
          author: "Светик",
          text: "Мне так-то тоже понравилось",
          rating: 5,
        },
      ],
    },
    {
      name: "Фантазёр шот",
      description:
        "Синхронизация мыслей. Скорость реакции. Острота ума. Отрицание и гнев.",
      price: 250,
      image: fantaser,
      reviews: [
        {
          author: "Шумский",
          text: "Я уже в кондициях",
          rating: 5,
        },
        {
          author: "Диман",
          text: "Я ЧЕ НЕ ДИМАН???",
          rating: 5,
        },
        {
          author: "Виктор Майорка",
          text: "На вкус как будто бы что-то алкогольное, странная фанта)",
          rating: 5,
        },
        {
          author: "Бортпроводница",
          text: "Да, конечно вы можете сесть рядом. А у вас фантазёр точно с водкой пять озёр?",
          rating: 4,
        },
      ],
    },
    {
      name: "Коктейль 'Какашка'",
      description:
        "Только после 21:00. Может быть заказан только одним человеком.",
      price: 400,
      image: kakashka,
      reviews: [
        {
          author: "Шумский",
          text: "Это че... *ик*... Несите мне мою член-трубочку...",
          rating: 5,
        },
      ],
    },
    {
      name: "Ягермейстер",
      description: "Если остались деньги",
      price: 500,
      image: jagermeister,
      reviews: [
        {
          author: "Диман",
          text: "Странно, я вроде заказывал Джин Тоник...",
          rating: 3,
        },
      ],
    },
    {
      name: "Коло-мороженое",
      description: "Кола с шариком мороженого. Да-да",
      price: 220,
      image: cola,
      reviews: [
        {
          author: "Светик",
          text: "Это наверное мой любимый напиток и вкус детства.",
          rating: 5,
        },
      ],
    },
    {
      name: "Паровой коктейль",
      description: "Для душевной атмосферы",
      price: 1200,
      image: hookah,
      reviews: [
        {
          author: "Тёмыч",
          text: "Хм, может мне кальянщиком работать? Мой главный секрет успеха? Делайте колодец",
          rating: 5,
        },
        {
          author: "Капитан из Сочинской части",
          text: "Рядовой Волчарников делает просто прекрасные кальяны. Он у нас скоро поедет на соревнования по кальяноведению. Спасибо Серёга",
          rating: 5,
        },
      ],
    },
  ],
};

export default App;
