import { Connection } from 'typeorm';
import { Interval } from './interval.entity';

export const intervalProviders = [
  {
    provide: 'INTERVAL_REPOSITORY',
    useFactory: (connection: Connection) => {
      console.log(`\r\n - connection:`, connection);

      
      return connection.getRepository(Interval)
    },
      inject: ['DATABASE_CONNECTION'],
  },
];
