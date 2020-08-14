import { Wookie } from './wookie';

/**
 * Représente un selfie d'un wookie
 */
export class Selfie {
    id: number;
    image: string;
    imageAs64: string;
    wookie: Wookie;
    titre: string;

    constructor() {
        this.wookie = new Wookie();
    }
}
