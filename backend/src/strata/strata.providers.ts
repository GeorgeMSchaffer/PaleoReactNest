import { Connection } from 'typeorm';
import { Strata } from './strata.entity.js';

export const occurrenceProviders = [
  {
    provide: 'Strata_REPOSITORY',
    useFactory: (connection: Connection) => {
      console.log(`\r\n - Strata.provider.ts - useFactory - connection:`, connection);

      
      return connection.getRepository(Strata)
    },
      inject: ['DATABASE_CONNECTION'],
  },
];