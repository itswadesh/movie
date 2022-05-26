import { writable, derived } from 'svelte/store';

export const promo = writable('');

export const greeting = derived(
    promo,
    $promo => `${$promo}`
);