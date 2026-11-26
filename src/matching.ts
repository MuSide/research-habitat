import{dn,fields,questions}from'./data.ts';
import type{Dims,Field}from'./types.ts';

export type RankedField={f:Field;s:number;attraction:number;friction:number};
export type ResultCategories={natural:RankedField;comfort:RankedField;danger:RankedField;not:RankedField};

const clamp=(n:number)=>Math.max(1,Math.min(5,n));
export function buildProfile(answers:Partial<Dims>[]):Dims{const u=Object.fromEntries(dn.map(k=>[k,3]))as Dims;const counts=Object.fromEntries(dn.map(k=>[k,0]))as Record<keyof Dims,number>;for(const a of answers)for(const[k,v]of Object.entries(a||{})){const key=k as keyof Dims;u[key]+=Number(v)-3;counts[key]++}for(const k of dn)u[k]=clamp(counts[k]?3+(u[k]-3)/counts[k]:3);return u}
export function compatibility(user:Dims,f:Field){let sum=0;for(const k of dn)sum+=(user[k]-f.dims[k])**2;return Math.round(100-Math.sqrt(sum/(dn.length*16))*44)}

const attractionWeights:Partial<Record<keyof Dims,number>>={novelty:.14,trend:.13,interaction:.16,perception:.13,science:.13,language:.12,distributed:.11,ambiguity:.08};
export function attraction(user:Dims,f:Field){let total=0,relevance=0;for(const[k,w]of Object.entries(attractionWeights)as[keyof Dims,number][]){const interest=(user[k]-1)/4;const presence=(f.dims[k]-1)/4;total+=interest*presence*w;relevance+=presence*w}return Math.round(total/Math.max(relevance,.01)*100)}

const frictionWeights:Partial<Record<keyof Dims,number>>={compute:.15,evaluation:.15,systems:.12,theory:.1,trend:.12,benchmark:.12,novelty:.08,ambiguity:.08,interaction:.08};
export function friction(user:Dims,f:Field){let total=0,weight=0;for(const[k,w]of Object.entries(frictionWeights)as[keyof Dims,number][]){const d=k==='theory'?Math.abs(f.dims[k]-user[k])/4:(Math.max(f.dims[k]-user[k],0)+.2*Math.max(user[k]-f.dims[k],0))/4;total+=Math.min(1,d)*w;weight+=w}return Math.round(total/weight*100)}

export function rankAnswers(answers:Partial<Dims>[]){const user=buildProfile(answers);return fields.map(f=>({f,s:compatibility(user,f),attraction:attraction(user,f),friction:friction(user,f)})).sort((a,b)=>b.s-a.s)}
export function rankChoices(choices:number[]){return rankAnswers(choices.map((x,i)=>questions[i].a[x][1] as Partial<Dims>))}

export function selectCategories(ranked:RankedField[]):ResultCategories{const natural=ranked[0];const remaining=ranked.filter(x=>x.f.id!==natural.f.id);const comfort=[...remaining].sort((a,b)=>(b.s-.28*b.friction)-(a.s-.28*a.friction))[0];const dangerPool=remaining.filter(x=>x.f.id!==comfort.f.id);const qualified=dangerPool.filter(x=>x.attraction>=48&&x.friction>=12&&x.s>=76);const fallback=dangerPool.filter(x=>x.attraction>=42&&x.s>=74);const candidates=qualified.length?qualified:fallback.length?fallback:dangerPool;const danger=[...candidates].sort((a,b)=>(.55*b.attraction+.25*Math.min(b.friction,30)+.2*b.s)-(.55*a.attraction+.25*Math.min(a.friction,30)+.2*a.s))[0];const not=[...dangerPool.filter(x=>x.f.id!==danger.f.id)].sort((a,b)=>a.s-b.s)[0];return{natural,comfort,danger,not}}
