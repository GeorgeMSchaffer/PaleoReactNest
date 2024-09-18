import { createConnection, Connection } from "typeorm";
import { Interval } from "../interval/entities/interval.entity";
import { Taxa } from "../taxa/entities/taxa.entity";
import { Species } from "../species/entities/species.entity";
import { Occurrence } from "../occurrence/entities/occurrence.entity";
import * as fs from "fs";
import * as path from "path";


async function seed() {
    const intervalData = JSON.parse(fs.readFileSync(path.join(__dirname, './data/intervals.json'), 'utf-8'));
    const taxaData = JSON.parse(fs.readFileSync(path.join(__dirname, './data/taxa.json'), 'utf-8'));
    const speciesData = JSON.parse(fs.readFileSync(path.join(__dirname, './data/species.json'), 'utf-8'));
    const occurrenceData = JSON.parse(fs.readFileSync(path.join(__dirname, './data/occurrences.json'), 'utf-8'));
  
   
  let connection: Connection;

  try {
    connection = await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "username",
      password: "password",
      database: "database",
      entities: [Interval, Taxa, Species, Occurrence],
      synchronize: true,
      logging: false
    });

    //[TODO] Update these so they use a JSON file ala in frontend/test/data/*.json to populate large set of data
    // Seed Intervals
    const intervalRepository = connection.getRepository(Interval);
    const intervals = await intervalRepository.save(intervalData);

    // Seed Taxa
    const taxaRepository = connection.getRepository(Taxa);
    const taxa = await taxaRepository.save(taxaData);

    // Seed Species
    const speciesRepository = connection.getRepository(Species);
    const species = await speciesRepository.save(speciesData);

    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

seed();
