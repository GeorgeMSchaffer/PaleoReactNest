import { createConnection, Connection } from "typeorm";
import { Interval } from "../interval/entities/interval.entity";
import { Taxa } from "../taxa/entities/taxa.entity";
import { Species } from "../species/entities/species.entity";
import { Occurrence } from "../occurrence/entities/occurrence.entity";
import * as intervalData from "./data/intervals.json";
import * as occurrenceData from "./data/occurrences.json";
//import * as taxaData from "./data/taxa.json";
import * as speciesData from "./data/species.json";

import * as fs from "fs";
import * as path from "path";


async function seed() {
    // const intervalData = JSON.parse(fs.readFileSync(path.join(__dirname, './data/intervals.json'));
    // console.log("🚀 ~ seed ~ intervalData:", intervalData)
    // //const speciesData = JSON.parse(fs.readFileSync(path.join(__dirname, './data/species.json'),'utf-8'));
    // const taxaData = JSON.parse(fs.readFileSync(path.join(__dirname, './data/taxa.json'),'utf-8'));
    // const occurrenceData = JSON.parse(fs.readFileSync(path.join(__dirname, './data/occurrences.json'),'utf-8'));
  
   
  let connection: Connection;

  try {
    connection = await createConnection({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "rsbr220Sql!",
      database: "paleo",
      entities: [Interval, Taxa, Species, Occurrence],
      synchronize: true,
      logging: false
    });

    //[TODO] Update these so they use a JSON file ala in frontend/test/data/*.json to populate large set of data
    // Seed Intervals
    console.log("Seeding Intervals...");
    const intervalRepository = await connection.getRepository(Interval);
     await intervalRepository.save(intervalData);

    // // Seed Taxa
    // console.log("Seeding Taxa...");
    // const taxaRepository = connection.getRepository(Taxa);
    // await taxaRepository.save(taxaData as Taxa[]);

    //Seed Species
    console.log("Seeding Species...");
    const speciesRepository = await connection.getRepository(Species);
    await speciesRepository.save(speciesData);

    console.log("Seeding Occurrences...");
    const occurrences = await connection.getRepository(Occurrence);
    await occurrences.save(occurrenceData);


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
