import { describe, it, expect, vi } from 'vitest';
import { creerDetecteurTripleClic } from './secret-dot.js';

describe('secret-dot', () => {
  it('déclenche le callback au 3e clic', () => {
    const cb = vi.fn();
    const onClick = creerDetecteurTripleClic(cb);
    onClick();
    onClick();
    expect(cb).not.toHaveBeenCalled();
    onClick();
    expect(cb).toHaveBeenCalledOnce();
  });

  it('reset après déclenchement', () => {
    const cb = vi.fn();
    const onClick = creerDetecteurTripleClic(cb);
    onClick(); onClick(); onClick();
    onClick(); onClick();
    expect(cb).toHaveBeenCalledOnce();
    onClick();
    expect(cb).toHaveBeenCalledTimes(2);
  });

  it('supporte un seuil custom', () => {
    const cb = vi.fn();
    const onClick = creerDetecteurTripleClic(cb, 5);
    for (let i = 0; i < 4; i++) onClick();
    expect(cb).not.toHaveBeenCalled();
    onClick();
    expect(cb).toHaveBeenCalledOnce();
  });
});
