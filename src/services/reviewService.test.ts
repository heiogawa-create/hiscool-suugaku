import { describe, expect, it } from 'vitest';import { nextReviewDate } from './reviewService';
describe('reviewService',()=>{it('復習予定日を翌日・3日後で計算する',()=>{expect(nextReviewDate(0,new Date('2026-07-03'))).toBe('2026-07-04');expect(nextReviewDate(1,new Date('2026-07-03'))).toBe('2026-07-06')});it('5段階を超えた復習間隔は30日で止まる',()=>{expect(nextReviewDate(9,new Date('2026-07-03'))).toBe('2026-08-02')})});
