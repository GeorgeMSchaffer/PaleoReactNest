import { Connection } from 'typeorm';
import { Occurrence } from './occurrence.entity.js';

export const occurrenceProviders = [
  {
    provide: 'TAXON_REPOSITORY',
    useFactory: (connection: Connection) => {
      console.log(`\r\n - Taxon.provider.ts - useFactory - connection:`, connection);

      
      return connection.getRepository(Occurrence)
    },
      inject: ['DATABASE_CONNECTION'],
  },
];
