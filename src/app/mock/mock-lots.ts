import { Lot } from '../model/lot';

export const LOTS_BERGERIE: Lot[] = [
    {
        id: 1,
        num: 1,
        type: 'Logement',
        tantieme: 245
    },
    {
        id: 2,
        num: 2,
        type: 'Logement',
        tantieme: 350
    },
    {
        id: 3,
        num: 3,
        type: 'Parking',
        tantieme: 15
    },
    {
        id: 4,
        num: 4,
        type: 'Réserve',
        tantieme: 5
    }
]

export const LOTS_EDELWEISS: Lot[] = [
    {
        id: 1,
        num: 1,
        type: 'Logement',
        tantieme: 500
    },
    {
        id: 2,
        num: 2,
        type: 'Logement',
        tantieme: 250
    },
    {
        id: 3,
        num: 3,
        type: 'Garage',
        tantieme: 30
    },
    {
        id: 4,
        num: 4,
        type: 'Réserve',
        tantieme: 10
    }
]

export const LOTS_DUPONT: Lot[] = [LOTS_BERGERIE[1], LOTS_BERGERIE[3], LOTS_BERGERIE[4]];
export const LOTS_DUCHEMIN: Lot[] = [LOTS_BERGERIE[2]];
export const LOTS_LAFLEUR: Lot[] = [LOTS_EDELWEISS[1], LOTS_EDELWEISS[3], LOTS_EDELWEISS[4]];

