import { Connection } from 'typeorm';
import { Taxon } from './taxon.entity.js';

export const TaxonProvider = [
  {
    provide: 'TAXON_REPOSITORY',
    useFactory: (connection: Connection) => {
      console.log(`\r\n - connection:`, connection);

      
      return connection.getRepository(Taxon)
    },
      inject: ['DATABASE_CONNECTION'],
  },
];
