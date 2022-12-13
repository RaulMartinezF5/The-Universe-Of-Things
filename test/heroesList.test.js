import { describe, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import { useHeroesList } from '../src/stores/heroesList'

describe('Heroes List', () => {
  test('should return true if useHeroesList.id is heroes', () => {
    const result = useHeroesList.$id
    expect(result).toBe('heroes')
  })
  test('(should return true if heroes[] isnt empty )', () => {
    
  });
})
