import { Coproprietaire } from './coproprietaire';
import { Lot } from './lot';

export class Copropriete {
    id: number;
    nom: string;
    adresse: string;
    image: string;
    code_postal: number;
    ville: string;
    coproprietaires: Coproprietaire[];
    lots: Lot[];
}
