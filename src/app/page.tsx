import { db }  from '../server/db';
import { needs } from '~/server/db/schema';

export const dynamic = "force-dynamic";

const mockNeeds = [ needs[0], needs[1], needs[2], needs[12], needs[15] ];

export default async function HomePage() {
  const activities = await db.query.activities.findMany();

  return (
    <main className="flex min-h-screen flex-col gap-6 items-center bg-gradient-to-b from-my-yellow to-my-beige text-white p-20 text-xl">
      <h1 className="text-8xl pb-10 font-extraBold">Zadbaj o swoje potrzeby 🧘‍♀️🌱☕️</h1>
      <div className="bg-my-green rounded-2xl p-10 shadow-xl text-center">
        <h2 className="text-5xl pb-5 font-extraBold">Potrzeby, o które aktualnie chcesz zadbać to:</h2>
        <ul className="pb-5 flex flex-row flex-wrap gap-2">
          {mockNeeds.map((need, index) => (
            <li key={`need+${index}`}>{need}</li>
          ))}
        </ul>
        <button className="px-6 py-3 overflow-hidden rounded-2xl bg-my-yellow shadow-xl hover:shadow-md">
          <span className="relative z-10 text-white">✏️ &nbsp; Edytuj aktualne potrzeby</span>
        </button>
      </div>
      <div className="bg-my-green rounded-2xl p-10 shadow-xl text-center">
        <h2 className="text-6xl pb-10 font-extraBold">Potrzebowe bingo</h2>
        <p className="text-xl">Co dziś wybierzesz? Wykreśl element klikając na niego, gdy zrealizujesz zadanie.</p>
        <div className="bg-white rounded-lg shadow-md p-6 mb-10 mt-10">
          <div className="grid grid-cols-3 gap-4">
            {activities.map(({ name, id }) => (
              <div
                key={id}
                className='rounded-lg p-8 flex items-center justify-center bg-rose-100 text-rose-600'
              >
                <span className="font-semibold">{name}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="px-6 py-3 overflow-hidden rounded-2xl bg-my-yellow shadow-xl hover:shadow-md  mb-10">
          <span className="relative z-10 text-white">✏️ &nbsp; Edytuj bingo</span>
        </button>
        <p className="text-xl">Podziel się swoim bingo ze znajomymi!</p>
      </div>
    </main>
  );
}
