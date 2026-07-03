import { AppSettings, ReviewItem, StudyPlan, UserProfile } from '../types';
const KEY='tokinavi-v1';export type Store={version:1;profile?:UserProfile;settings:AppSettings;reviews:ReviewItem[];plans:StudyPlan[]};
export const defaultSettings:AppSettings={dailyGoalMinutes:30,hintStyle:'標準',confirmBeforeAnswer:true,notifications:false};
export function loadStore():Store{try{return JSON.parse(localStorage.getItem(KEY)||'') as Store}catch{return {version:1,settings:defaultSettings,reviews:[],plans:[]}}}
export function saveStore(s:Store){try{localStorage.setItem(KEY,JSON.stringify(s));return true}catch{return false}}
export const resetStore=()=>localStorage.removeItem(KEY);
