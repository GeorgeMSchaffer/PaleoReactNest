import { Connection } from 'typeorm';
import { Occurrence } from './occurrence.entity.js';

export const occurrenceProviders = [
  {
    provide: 'OCCURRENCE_REPOSITORY',
    useFactory: (connection: Connection) => {
      console.log(`\r\n - connection:`, connection);

      
      return connection.getRepository(Occurrence)
    },
      inject: ['DATABASE_CONNECTION'],
  },
];