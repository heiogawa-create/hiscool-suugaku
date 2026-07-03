import { Problem, ReviewItem } from '../types';
const gaps=[1,3,7,14,30];export function nextReviewDate(count:number,base=new Date()){const d=new Date(base);d.setDate(d.getDate()+gaps[Math.min(count,gaps.length-1)]);return d.toISOString().slice(0,10)}
export function createReviewItem(problem:Problem,usedHints:number):ReviewItem{return{id:crypto.randomUUID(),problem,questionDate:new Date().toISOString().slice(0,10),mistakeType:'符号ミス',usedHints,understanding:'まだ少し不安',correct:false,reviewCount:0,nextReviewDate:nextReviewDate(0),favorite:false,memo:''}}
