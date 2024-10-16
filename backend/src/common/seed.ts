import { createConnection, Connection } from "typeorm";
import { Interval } from "../interval/entities/interval.entity";
import { Taxa } from "../taxa/entities/taxa.entity";
import { Species } from "../species/entities/species.entity";
import { Occurrence } from "../occurrence/entities/occurrence.entity";
import species from "./data/species";
import occurrences from "./data/occurrences";
//import intervals from "./data/intervals";
//import taxa from "./data/taxa";

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

    console.log('TEST !!!!!!!!',test)
    
    console.log(`Seeding ${occurrences.length} Occurrences...`);
    const occurrenceRepo = await connection.getRepository(Occurrence);
    await occurrenceRepo.save(occurrences);

    // console.log(`Seeding ${taxa.length} Taxa Records`) 
    // const taxaRepo = await connection.getRepository(Taxa)
    // await taxaRepo.save(taxa)
    // console.log(`Inserted ${taxaRepo.count} Taxas`)

    //[TODO] Update these so they use a JSON file ala in frontend/test/data/*.json to populate large set of data
    // Seed Intervals
   // console.log(`Seeding ${intervals.length} Intervals...`);
    const intervalRepo = await connection.getRepository(Interval);
    //  await intervalRepo.save(intervals);
    console.log(`Inserted ${intervalRepo.count} Intervals`)

    // // // Seed Taxa
    // // console.log("Seeding Taxa...");
    //  const taxaRepository = connection.getRepository(Taxa);
    // // await taxaRepository.save(taxaData as Taxa[]);

    // //Seed Species
    // // console.log("Seeding Species...");
    // const speciesRepository = await connection.getRepository(Species);
    // // // clean up the data
    // // console.log(`speciesData length`,typeof speciesData, Object.keys(speciesData.species))
    // // const species = speciesData && speciesData.species.filter((s) => {
    // //   parseInt(s.specimen_no) > 0;
    // // });
    // // console.log(`# of species: ${species.length} to insert`)
    // // await speciesRepository.save(species);

    // // const ids = [];
    // // const duplicates = [];
    // // occurrenceData.forEach((o) => {
    // //   if(ids.includes(o.occurrence_no)){
    // //     duplicates.push(o.occurrence_no);
    // //   }
    // //   ids.push(o.occurrence_no);
    // // })
    // // console.log('DUPLICATES',duplicates)


  // const numOcc = occurrenceRepo.count();
  // const numSpecies = speciesRepository.count();
  //  const numTaxa = taxaRepository.count();
  //   const numIntervals = intervalRepo.count();

    console.log("Seed data inserted successfully");
  //  console.log(`Seeded ${numOcc} occurrences, ${numSpecies} species, ${numTaxa} taxa, ${numIntervals} intervals`);

  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    if (connection) {
      await connection.close();
    }
  }
}

//seed();
