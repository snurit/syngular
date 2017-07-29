import { Injectable } from '@angular/core';
import { Copropriete } from '../../model/copropriete';
import { COPROPRIETES } from '../../mock/mock-coproprietes';

@Injectable()
export class CoproprieteService {
    getCoproprietes(): Copropriete[] {
        return COPROPRIETES;
    };
}
