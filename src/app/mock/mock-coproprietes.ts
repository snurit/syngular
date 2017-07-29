// Import classes
import { Copropriete } from '../model/copropriete';
import { Coproprietaire } from '../model/coproprietaire';
import { Lot } from '../model/lot';

// Import others mock
import { LOTS_BERGERIE, LOTS_EDELWEISS } from './mock-lots';
import { COPROPRIETAIRES_BERGERIE, COPROPRIETAIRES_EDELWEISS } from './mock-coproprietaires';

export const COPROPRIETES: Copropriete[] = [
    {
        id: 1,
        nom: 'Bergerie',
        adresse: 'Hameau de Tralenta',
        code_postal: 73480,
        ville: 'Bonneval sur Arc',
        coproprietaires: COPROPRIETAIRES_BERGERIE,
        lots: LOTS_BERGERIE
    },
    {
        id: 2,
        nom: 'Edelweiss',
        adresse: 'Hameau de Tralenta',
        code_postal: 73480,
        ville: 'Bonneval sur Arc',
        coproprietaires: COPROPRIETAIRES_EDELWEISS,
        lots: LOTS_EDELWEISS
    }
];
