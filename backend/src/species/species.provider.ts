import { Connection } from 'typeorm';
import { Species } from './species.entity.js';

export const occurrenceProviders = [
  {
    provide: 'SPECIES_REPOSITORY',
    useFactory: (connection: Connection) => {
      console.log(`\r\n - Species.provider.ts - useFactory - connection:`, connection);

      
      return connection.getRepository(Species)
    },
      inject: ['DATABASE_CONNECTION'],
  },
];
