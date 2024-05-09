const needs = [
  '🤗 akceptacja',
  '🛡️ bezpieczeństwo',
  '🤝 bliskość',
  '🎉 celebracja życia',
  '💕 czułość',
  '☮️ harmonia',
  '🧘‍♀️ integralność',
  '❤️ miłość',
  '👥 poczucie przynależności',
  '👑 poczucie własnej wartości',
  '🕊️ pokój',
  '🙏 poważanie',
  '💯 prawda',
  '🧑‍🤝‍🧑 przyjaźń',
  '🌱 rozwój osobisty',
  '✨ samorealizacja',
  '🔍 sens',
  '😌 spokój',
  '🙌 szacunek',
  '💬 szczerość',
  '🎨 twórczość',
  '📚 uczenie się',
  '🏆 uznanie',
  '✈️ wolność',
  '🙏 współczucie',
  '🤝 współpraca',
  '🤲 wsparcie',
  '🔒 zaufanie',
  '💚 zdrowie',
  '😊 życzliwość'
];

const selfCareActivities = [
  '🧘‍♀️ Medytacja i praktyki uważności',
  '📖 Czytanie inspirujących książek lub poezji',
  '🎨 Twórcze zajęcia, takie jak malowanie, rysowanie lub rzeźbienie',
  '🌳 Spacery na świeżym powietrzu i kontakt z naturą',
  '🛀 Relaksująca kąpiel z aromatycznymi olejkami',
  '🍲 Przygotowywanie zdrowych i pożywnych posiłków',
  '💆‍♀️ Masaż lub inne zabiegi pielęgnacyjne',
  '🧘‍♂️ Praktyki oddechowe i relaksacyjne',
  '🎵 Słuchanie ulubionej muzyki lub śpiewanie',
  '🌱 Pielęgnowanie roślin lub ogródka',
  '📝 Prowadzenie dziennika lub pisanie listów',
  '🧶 Robótki ręczne, takie jak szydełkowanie lub hafciarstwo',
  '🍵 Picie herbaty lub innego relaksującego napoju',
  '🕯️ Tworzenie przytulnej atmosfery z pomocą świec i aromatów',
  '🧖‍♀️ Wizyta w saunie lub łaźni parowej',
  '🌞 Spędzanie czasu na świeżym powietrzu i opalanie się',
  '🧘‍♂️ Praktyki jogi lub tai-chi',
  '🎭 Udział w zajęciach teatralnych lub improwizacji',
  '🎨 Malowanie lub rysowanie dla przyjemności',
  '🏞️ Wycieczki na łono natury i obserwacja przyrody',
  '🧘‍♀️ Praktyki uważności i medytacji',
  '📚 Uczenie się nowych umiejętności lub hobby',
  '🎶 Słuchanie relaksującej muzyki lub śpiewanie',
  '💐 Otaczanie się pięknymi roślinami i kwiatami',
  '🛀 Relaksujące kąpiele z solami lub olejkami',
  '🧘‍♂️ Praktyki oddechowe i relaksacyjne',
  '🍲 Przygotowywanie zdrowych i pożywnych posiłków',
  '📖 Czytanie inspirujących książek lub poezji',
  '🎨 Twórcze zajęcia, takie jak malowanie, rysowanie lub rzeźbienie'
];

const mockNeeds = [ needs[0], needs[1], needs[2], needs[12], needs[15] ];
const mockActivities = selfCareActivities.slice(0, 9);

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col gap-6 items-center bg-gradient-to-b from-my-yellow to-my-beige text-white p-20 text-xl">
      <h1 className="text-6xl pb-10">Zadbaj o swoje potrzeby 🧘‍♀️🌱☕️</h1>
      <div className="bg-my-green rounded-2xl p-10 shadow-xl text-center">
        <h2 className="text-5xl pb-5">Potrzeby, o które aktualnie chcesz zadbać to:</h2>
        <ul className="text-3xl pb-5 flex flex-row flex-wrap gap-2">
          {mockNeeds.map((need, index) => (
            <li key={`need+${index}`}>{need}</li>
          ))}
        </ul>
        <button className="px-6 text-2xl py-3 overflow-hidden rounded-2xl bg-my-yellow shadow-xl hover:shadow-md">
          <span className="relative z-10 text-white">✏️ &nbsp; Edytuj aktualne potrzeby</span>
        </button>
      </div>
      <div className="bg-my-green rounded-2xl p-10 shadow-xl text-center">
        <h2 className="text-8xl pb-10">Potrzebowe bingo</h2>
        <p className="text-xl font-text">Co dziś wybierzesz? Wykreśl element klikając na niego, gdy zrealizujesz zadanie.</p>
        <div className="bg-white rounded-lg shadow-md p-6 mb-10 mt-10 text-3xl">
          <div className="grid grid-cols-3 gap-4">
            {mockActivities.map((activity, index) => (
              <div
                key={index}
                className='rounded-lg p-8 flex items-center justify-center bg-rose-100 text-rose-600'
              >
                <span className="font-semibold">{activity}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="px-6 text-2xl py-3 overflow-hidden rounded-2xl bg-my-yellow shadow-xl hover:shadow-md  mb-10">
          <span className="relative z-10 text-white">✏️ &nbsp; Edytuj bingo</span>
        </button>
        <p className="text-xl font-text">Podziel się swoim bingo ze znajomymi!</p>
      </div>
    </main>
  );
}
