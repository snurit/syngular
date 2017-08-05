import { Injectable } from '@angular/core';
import { Copropriete } from '../../model/copropriete';
import { COPROPRIETES } from '../../mock/mock-coproprietes';

@Injectable()
export class CoproprieteService {

    coproprietes: Copropriete[];

    constructor() {
        this.coproprietes = COPROPRIETES;
    }

    getCoproprietes(): Copropriete[] {
        return this.coproprietes;
    };

    deleteCopropriete(id: number): Copropriete[] {
        this.coproprietes = this.coproprietes.filter( copropriete => copropriete.id !== id);
        return this.coproprietes;
    }
}
