// src/pages/Prices/PricesPage.tsx


export const PricesPage = () => {
  const prices = [
    { service: 'Пятница · до 8 чел.', price: '8 000 ₽' },
    { service: 'Суббота · до 8 чел.', price: '9 000 ₽' },
    { service: 'Праздничные дни · до 8 чел.', price: '9 000 ₽' },
    { service: 'Остальные дни · до 8 чел.', price: '7 000 ₽' },
    { service: 'Доплата за гостя свыше 8 (макс 15)', price: '500 ₽' },
    { service: 'Веник дубовый', price: '500 ₽' },
    { service: 'Уголь для мангала', price: '350 ₽' },
    { service: 'Возвратный залог', price: '2 000 ₽' },
  ];

  return (
    <section className="bg-[#fefcf8] px-6 py-16 text-gray-800">
      <div className="mx-auto max-w-3xl">
        {/* Заголовок */}
        <h2
          className="mb-6 font-bold text-4xl text-center"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Цены
        </h2>
        <p className="my-8 text-lg text-center italic leading-relaxed">
          Шёпот дров, аромат дубового веника и шелковое тепло парной — всё уже
          готово. Остаётся лишь приехать, отпустить заботы и насладиться уютом
          бани «Черёмуха».
        </p>

        {/* Пояснение про сутки и время заезда / выезда */}

        {/* Таблица */}
        <table className="border border-gray-300 w-full text-lg">
          <thead>
            <tr className="bg-[#8B5E34] text-white">
              <th className="p-3 border-b text-left">Услуга</th>
              <th className="p-3 border-b text-left">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((item, idx) => (
              <tr key={idx}>
                <td className="p-3 border-b">{item.service}</td>
                <td className="p-3 border-b font-semibold">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="my-8 text-lg text-center leading-relaxed">
          Все тарифы указаны <strong>за&nbsp;сутки</strong>. Заезд&nbsp;—
          с&nbsp;15:00,&nbsp;выезд&nbsp;— до&nbsp;12:00.
        </p>
      </div>
    </section>
  );
};
