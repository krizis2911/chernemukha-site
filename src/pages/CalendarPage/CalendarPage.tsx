import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './calendarStyles.css';
import { useState, useEffect } from 'react';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

/* ---------- формируем ключ строго YYYY-MM-DD, локально ---------- */
const dateKey = (d: Date) => d.toLocaleDateString('sv-SE'); // «2025-07-05»

export default function CalendarPage() {
  const [value, setValue] = useState<Value>(new Date());
  const [booked, setBooked] = useState<Set<string>>(new Set());

  useEffect(() => {
    /* путь работает и локально, и после деплоя */
    const bookedUrl = `${import.meta.env.BASE_URL}booked.json`;

    (async () => {
      try {
        const res = await fetch(bookedUrl);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const arr: string[] = await res.json();
        setBooked(new Set(arr));
      } catch (e) {
        console.error('Ошибка загрузки booked.json:', e);
      }
    })();
  }, []);

  const isBooked = (d: Date) => booked.has(dateKey(d));

  return (
    /* ---------- ОДИН общий контейнер, центр + ограничение ширины ---------- */
    <section className="mx-auto px-4 py-6 w-full max-w-lg text-gray-800">
      {/* Заголовок */}
      <h1 className="mb-4 font-bold text-2xl sm:text-3xl text-center">
        Забронируйте день в бане «Черёмуха»
      </h1>

      {/* Вступительный абзац */}
      <p className="mb-6 text-base sm:text-lg text-center leading-relaxed">
        Представьте: аромат натурального дерева, жаркая парилка, уютная комната
        отдыха, тишина и покой. Ниже вы можете увидеть, какие дни уже&nbsp;
        <strong>заняты</strong>, а какие <strong>свободны</strong> для брони.
      </p>

      <p className="mb-4 text-sm sm:text-base text-center">
        📅 Выберите день и нажмите на кнопку ниже, чтобы связаться с нами.
      </p>

      {/* календарь строго по центру на любом экране */}
      <div className="flex justify-center my-6">
        <Calendar
          defaultView="month"
          minDetail="month"
          onChange={setValue}
          value={value}
          tileClassName={({ date, view }) =>
            view === 'month' && isBooked(date) ? 'booked' : undefined
          }
        />
      </div>

      {/* Легенда */}
      <div className="flex justify-center mt-4 mb-8 text-sm">
        <span className="inline-flex items-center gap-2">
          <span className="bg-blue-200 border border-blue-400 rounded-sm w-4 h-4" />
          Занятые дни
        </span>
      </div>

      {/* Блок призыва + кнопки */}
      <div className="bg-yellow-50 p-5 border border-yellow-200 rounded-xl text-center">
        <p className="mb-5 font-medium text-sm sm:text-base">
          Не откладывайте — лучшие даты быстро разбирают! Забронируйте прямо
          сейчас:
        </p>

        <div className="flex sm:flex-row flex-col justify-center items-center gap-4">
          <button
            onClick={() => window.open('https://wa.me/79050487219', '_blank')}
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl w-full sm:w-auto font-semibold text-white transition"
          >
            Написать в WhatsApp
          </button>

          <a
            href="tel:+79050487219"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl w-full sm:w-auto font-semibold text-white text-center transition"
          >
            Позвонить нам
          </a>
        </div>
      </div>
    </section>
  );
}
