// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  text
} from "drizzle-orm/pg-core";


export const selfCareActivities = [
  '🧘‍♀️ Medytacja',
  '📖 Czytanie',
  '🎨 Twórcze zajęcia',
  '🌳 Spacery',
  '🛀 Relaksująca kąpiel',
  '🍲 Dobre jedzenie',
  '💆‍♀️ Masaż',
  '🧘‍♂️ Praktyki oddechowe',
  '🎵 Słuchanie muzyki',
  '🌱 Pielęgnowanie roślin',
  '📝 Prowadzenie dziennika',
  '🧶 Szydełkowanie',
  '🍵 Picie herbaty',
  '🕯️ Zapalenie świecy',
  '🧖‍♀️ Wizyta w saunie',
  '🌞 Spędzanie czasu na świeżym powietrzu',
  '🧘‍♂️ Praktyka jogi',
  '🎭 Zajęciach teatralne lub improwizacji',
  '🎨 Malowanie',
  '🏞️ Wycieczka',
  '🧘‍♀️ Praktyka uważności',
  '📚 Uczenie się nowych umiejętności',
  '🎶 Śpiewanie',
] as const;

type AllowedActivities = typeof selfCareActivities[number];

export const needs = [
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

type AllowedNeeds = typeof needs[number];

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `needs-bingo_${name}`);

export const activities = createTable(
  "activity",
  {
    id: serial("id").primaryKey(),
    // name: varchar("name", { length: 256 }).notNull(),
    name: text("name", { enum: selfCareActivities }).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  })
);
