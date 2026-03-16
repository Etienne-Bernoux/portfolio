import { describe, it, expect, vi } from 'vitest';
import { creerDetecteurKonami } from './konami.js';

describe('konami', () => {
  const SEQUENCE = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

  it('déclenche le callback sur la séquence complète', () => {
    const cb = vi.fn();
    const onKey = creerDetecteurKonami(cb);
    SEQUENCE.forEach(k => onKey(k));
    expect(cb).toHaveBeenCalledOnce();
  });

  it('ne déclenche pas sur une séquence incomplète', () => {
    const cb = vi.fn();
    const onKey = creerDetecteurKonami(cb);
    SEQUENCE.slice(0, -1).forEach(k => onKey(k));
    expect(cb).not.toHaveBeenCalled();
  });

  it('reset si mauvaise touche', () => {
    const cb = vi.fn();
    const onKey = creerDetecteurKonami(cb);
    onKey('ArrowUp');
    onKey('ArrowUp');
    onKey('x'); // mauvaise touche
    onKey('ArrowDown'); // ne devrait pas continuer
    SEQUENCE.forEach(k => onKey(k)); // recommencer
    expect(cb).toHaveBeenCalledOnce();
  });

  it('peut se déclencher plusieurs fois', () => {
    const cb = vi.fn();
    const onKey = creerDetecteurKonami(cb);
    SEQUENCE.forEach(k => onKey(k));
    SEQUENCE.forEach(k => onKey(k));
    expect(cb).toHaveBeenCalledTimes(2);
  });

  it('reprend si la mauvaise touche est le début de la séquence', () => {
    const cb = vi.fn();
    const onKey = creerDetecteurKonami(cb);
    onKey('ArrowUp');
    onKey('ArrowUp');
    onKey('ArrowUp'); // mauvaise mais = début → pos=1
    // Continue from pos 1
    SEQUENCE.slice(1).forEach(k => onKey(k));
    expect(cb).toHaveBeenCalledOnce();
  });
});
