// Import classes
import { Copropriete } from '../model/copropriete';
import { Coproprietaire } from '../model/coproprietaire';
import { Lot } from '../model/lot';

// Import others mock
import { LOTS_BERGERIE, LOTS_CRITERIUM } from './mock-lots';
import { COPROPRIETAIRES_BERGERIE, COPROPRIETAIRES_CRITERIUM } from './mock-coproprietaires';

export const COPROPRIETES: Copropriete[] = [
    {
        id: 1,
        nom: 'Bergerie',
        adresse: 'Hameau de Tralenta',
        code_postal: 73480,
        ville: 'Bonneval sur Arc',
        image: './assets/img/samples/bergerie_exterieur.jpg',
        coproprietaires: COPROPRIETAIRES_BERGERIE,
        lots: LOTS_BERGERIE
    },
    {
        id: 2,
        nom: 'Critérium',
        adresse: 'Les Champs',
        code_postal: 73500,
        ville: 'Val Cenis Lanslebourg',
        image: './assets/img/samples/criterium_exterieur.jpg',
        coproprietaires: COPROPRIETAIRES_CRITERIUM,
        lots: LOTS_CRITERIUM
    }
];
