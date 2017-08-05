import { Coproprietaire } from '../model/coproprietaire';
import { Lot } from '../model/lot';

// import mocks
import { LOTS_DUPONT, LOTS_DUCHEMIN, LOTS_LAFLEUR } from './mock-lots';

export const COPROPRIETAIRES: Coproprietaire[] = [
    {
        id: 1,
        civilite: 'M.',
        nom: 'DUPONT',
        prenom: 'Andre',
        adresse: 'La belle maison',
        code_postal: '13840',
        ville: 'ROGNES',
        telephone_fixe: '0442501500',
        telephone_mobile: '0612345678',
        email: 'andre.dupont@localhost.com',
        lots: LOTS_DUPONT
    },
    {
        id: 2,
        civilite: 'Mme',
        nom: 'LA FLEUR',
        prenom: 'Josette',
        adresse: 'Les Gaudis',
        code_postal: '05400',
        ville: 'LA ROCHE DES ARNAUDS',
        telephone_fixe: '0492579615',
        telephone_mobile: '0689563412',
        email: 'josette.lafleur@localhost.com',
        lots: LOTS_LAFLEUR
    },
    {
        id: 3,
        civilite: 'Mme',
        nom: 'DUCHEMIN',
        prenom: 'Gwendoline',
        adresse: 'Rue de la République',
        code_postal: '73000',
        ville: 'CHAMBERY',
        telephone_fixe: '0479893456',
        telephone_mobile: '0765341290',
        email: 'd.duchemein@localhost.com',
        lots: LOTS_DUCHEMIN
    }
];

export const COPROPRIETAIRES_BERGERIE = [COPROPRIETAIRES[1], COPROPRIETAIRES[3]];
export const COPROPRIETAIRES_CRITERIUM = [COPROPRIETAIRES[2]];
