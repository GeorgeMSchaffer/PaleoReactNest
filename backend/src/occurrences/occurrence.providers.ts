import { Connection } from 'typeorm';
import { Occurrence } from './occurrence.entity';

export const occurrenceProviders = [
  {
    provide: 'occurrence_REPOSITORY',
    useFactory: (connection: Connection) => {
      console.log(`\r\n - connection:`, connection);

      
      return connection.getRepository(Occurrence)
    },
      inject: ['DATABASE_CONNECTION'],
  },
];
