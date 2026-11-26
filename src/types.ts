export type Lang='en'|'zh';export type L={en:string;zh:string};
export type Dims={trend:number;compute:number;evaluation:number;novelty:number;systems:number;theory:number;benchmark:number;ambiguity:number;interaction:number;distributed:number;perception:number;science:number;language:number};
export type Comment={original:string;zh:string;year:number;category:L;url:string};
export type Field={id:string;name:string;accent:string;description:L;dims:Dims;stats:{rate:number;score:number;confidence:number;submissions:number;growth:number;variance:number};concerns:L[];comments:Comment[];fun:L[]};
