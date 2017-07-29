import {Lot} from './lot';

export class Coproprietaire {
    id: number;
    civilite: string;
    nom: string;
    prenom: string;
    adresse: string;
    code_postal: string;
    ville: string;
    telephone_fixe: string;
    telephone_mobile: string;
    email: string;
    lots: Lot[];
}
