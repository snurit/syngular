import {Lot} from './lot';

export class Coproprietaire {
    civilite: string;
    nom: string;
    prenom: string;
    adresse: string;
    code_postal: number;
    ville: string;
    telephone_fixe: number;
    telephone_mobile: number;
    email: string;
    lots: Lot[];
}
