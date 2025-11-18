import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Отправка...');

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget)))
      });

      if (res.ok) {
        setStatus('Спасибо! Мы свяжемся с вами.');
        e.currentTarget.reset();
      } else {
        setStatus('Ошибка при отправке. Попробуйте позже.');
      }
    } catch (err) {
      setStatus('Сеть недоступна.');
    }
  };

  return (
    <section id="contact" className="relative z-10 bg-slate-950 text-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Связаться с нами
        </motion.h2>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-blue-200/90">Опишите задачу, сроки и желаемый результат. Ответим в течение 24 часов.</p>
            <ul className="mt-4 space-y-2 text-sm text-blue-200/70">
              <li>— Дизайн лендингов и продуктовых интерфейсов</li>
              <li>— Анимации, микровзаимодействия, прототипы</li>
              <li>— Разработка на React/Next.js</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
            <div>
              <label className="text-sm text-blue-200/80">Имя</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="text-sm text-blue-200/80">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-400" />
            </div>
            <div>
              <label className="text-sm text-blue-200/80">Сообщение</label>
              <textarea name="message" rows="4" required className="mt-1 w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 outline-none focus:border-blue-400" />
            </div>
            <button className="rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400">
              Отправить
            </button>
            {status && <p className="text-sm text-blue-200/90">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
