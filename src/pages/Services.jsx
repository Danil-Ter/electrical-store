import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import '../styles/services.css';

const servicesData = [
  {
    id: 1,
    title: 'Будівництво електричних мереж',
    info: "Обстеження об'єкта та розробка технічного завдання на основі вимог замовника. Проектування. Комплектація, прямі поставки від провідних виробників обладнання для створення систем електропостачання. Монтаж та пусконалагоджувальні роботи. Випуск повного комплекту документації. Гарантійне та післягарантійне обслуговування, а також сервісна підтримка всіх елементів системи.",
  },
  {
    id: 2,
    title: 'Оцінка необхідної електричної потужності ',
    info: "При розробці електротехнічної частини проекту необхідно визначити електричну потужність, передачу якої необхідно забезпечити для нормальної роботи об'єкта. Залежно від цього значення, що називається розрахунковим навантаженням, вибирається всі електрообладнання електричної мережі, яке забезпечує передачу потрібної потужності. Неточність визначення розрахункового навантаження викликає ненадійність електроживлення. Максимальна потужність, споживана групою електроприймачів зі змінною навантаженням, завжди менше суми номінальних потужностей цих приймачів. Це пояснюється тим, що приймачі не завжди навантажуються на повну потужність, а їх найбільші навантаження не збігаються за часом. Це необхідно враховувати при виборі елементів системи електроживлення.",
  },
  {
    id: 3,
    title: 'Створення схеми розподільної мережі всередині будівлі',
    info: "Структура схеми розподільної мережі всередині будівлі визначається типом електричних навантажень відповідно до технічного завдання.",
  },
  {
    id: 4,
    title: 'Створення групових мереж',
    info: "Електроприймачі, які підключаються до силових розподільних пунктів через групові щитки по поверхах, об'єднуються в групи з урахуванням їх технологічного призначення. Для комутації однофазних групових ліній можуть використовуватися як однополюсні, так і двополюсні вимикачі. При необхідності встановлюються пристрої захисного відключення, що забезпечують захист від ураження електричним струмом.Розподіл навантажень між фазами мережі має бути, як правило, рівномірним.",
  },
  {
    id: 5,
    title: 'Розробка системи внутрішнього освітлення.',
    info: "У приміщеннях житлових та громадських будівель, як правило, застосовується загальна система освітлення, а в деяких випадках, де проводиться зорова робота, застосовується комбінована система освітлення. Система освітлення всередині будівлі поділяється на два типи: робоче освітлення та аварійне (освітлення безпеки та евакуаційне освітлення). Запасне освітлення та вказівники 'Вихід' зазвичай підключаються до мережі аварійного освітлення. Оскільки мережі освітлення характеризуються великою протяжністю та розгалуженістю, проводиться розрахунок освітлювальних мереж за втратою напруги та в умовах допустимого нагрівання провідників. Для розміщення світильників всередині приміщень здійснюється необхідний розрахунок з урахуванням показників штучного освітлення або згідно з представленим дизайн-проектом.",
  },
  {
    id: 6,
    title: 'Влаштування внутрішніх електричних мереж',
    info: "Внутрішні електричні мережі повинні бути негорючими і виконуватися кабелями та дротами з мідними жилами згідно вимог ПУЕ. З'єднувальні і розгалужувальні коробки, протяжні ящики та інші розгалужувальні пристрої повинні бути виготовлені з негорючих матеріалів. Металеві елементи електропроводки (конструкції, коробки, лотки, труби, коробки, скоби) повинні бути захищені від корозії. Тип і спосіб прокладання кабелю залежить від матеріалу, з якого виконані будівельні конструкції будівлі та типу електроприймача.",
  },
  {
    id: 7,
    title: 'Організація обліку електричної енергії',
    info: "Розрахункові лічильники електричної енергії встановлюються в точках балансового розподілу (ВРУ, ГРЩ) відповідно до вимог ПУЕ. Лічильники обираються з урахуванням їх допустимої перевантажувальної здатності. При прокладанні вводових кабелів передбачається наявність резервного кабелю для приймачів II категорії, який повинен використовуватися в аварійному режимі (при відключенні першої секції трансформаторної підстанції). Тип живильних кабелів повинен відповідати умовам експлуатації в даній кліматичній зоні. Марка і спосіб прокладання силового кабелю всередині будівлі визначається типом електроприймачів, архітектурними рішеннями, ступенем пожежонебезпечності приміщень, в яких проводяться роботи.",
  },
];

function Service({ title, info }) {
  const [isInfoVisible, setInfoVisible] = useState(false);

  const toggleInfo = () => {
    setInfoVisible(!isInfoVisible);
  };

  return (
    <div className={`accordionItem ${isInfoVisible ? 'open' : ''}`}>
      <h2 onClick={toggleInfo}>
        {title}
        {isInfoVisible ? <FiMinus size={20} color="orange" /> : <FiPlus size={20} color="orange"/>}
      </h2>
      {isInfoVisible && <p className="fade-in-animation">{info}</p>}
    </div>
  );
}

function Services() {
  return (
    <div className="Services">
      <h1>Наші послуги:</h1>
      {servicesData.map((service) => (
        <Service key={service.id} title={service.title} info={service.info} />
      ))}
    </div>
  );
}

export default Services;
