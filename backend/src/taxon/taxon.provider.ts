import { Connection } from 'typeorm';
import { Taxon } from './taxon.entity';

export const TaxonProvider = [
  {
    provide: 'TAXON_REPOSITORY',
    useFactory: (connection: Connection) => {
      console.log(`\r\n - Species.provider.ts - useFactory - connection:`, connection);

      
      return connection.getRepository(Taxon)
    },
      inject: ['DATABASE_CONNECTION'],
  },
];
