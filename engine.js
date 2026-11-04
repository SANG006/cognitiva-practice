export const CATEGORIES=['logical','numerical','spatial','abstract'];
export const LABELS={logical:'ตรรกะ',numerical:'ตัวเลข',spatial:'มิติสัมพันธ์',abstract:'นามธรรม'};
export const FULL_LABELS={logical:'การให้เหตุผลเชิงตรรกะ',numerical:'การให้เหตุผลเชิงตัวเลข',spatial:'การให้เหตุผลเชิงมิติสัมพันธ์',abstract:'การให้เหตุผลเชิงนามธรรม'};
export const MODES={practice:{name:'ฝึกพื้นฐาน',count:10,minutes:0},standard:{name:'ฝึกรอบด้าน',count:30,minutes:25},extended:{name:'ฝึกฉบับเต็ม',count:50,minutes:45}};
export function shuffle(input){const result=[...input];for(let i=result.length-1;i>0;i--){const value=new Uint32Array(1);crypto.getRandomValues(value);const j=value[0]%(i+1);[result[i],result[j]]=[result[j],result[i]];}return result;}
export function selectQuestions(bank,count,recentIds=[]){
 if(!Number.isInteger(count)||count<4||count>bank.length)throw Error('จำนวนข้อไม่ถูกต้อง');
 const seen=new Map();for(const id of recentIds)seen.set(id,(seen.get(id)||0)+1);
 const extra=new Set(shuffle(CATEGORIES).slice(0,count%4));
 const selected=CATEGORIES.flatMap(category=>{
  const needed=Math.floor(count/4)+(extra.has(category)?1:0),families=new Set(),items=[];
  const pool=shuffle(bank.filter(q=>q.category===category)).sort((a,b)=>(seen.get(a.id)||0)-(seen.get(b.id)||0));
  for(const q of pool){if(families.has(q.family))continue;families.add(q.family);items.push(q);if(items.length===needed)break;}
  if(items.length!==needed)throw Error('จำนวนโจทย์แต่ละหมวดไม่เพียงพอ');return items;
 });
 return shuffle(selected).map(q=>{const order=shuffle(q.options.map((_,i)=>i));return {...q,options:order.map(i=>q.options[i]),optionFigures:q.optionFigures?.length?order.map(i=>q.optionFigures[i]):undefined,correct:order.indexOf(q.correct)};});
}
export function calculateResult(items,answers,elapsedSeconds){
 let correct=0,answered=0;const categories=Object.fromEntries(CATEGORIES.map(c=>[c,{total:0,correct:0}]));
 for(const q of items){categories[q.category].total++;const answer=answers[q.id];if(Number.isInteger(answer)&&answer>=0&&answer<q.options.length){answered++;if(answer===q.correct){correct++;categories[q.category].correct++;}}}
 return {total:items.length,correct,wrong:answered-correct,unanswered:items.length-answered,percentage:items.length?Math.round(correct/items.length*100):0,categories,elapsed:Math.max(0,Math.floor(elapsedSeconds)),version:items[0]?.version||'unknown'};
}
export function remainingSeconds(deadline,now=Date.now()){return deadline===null?null:Math.max(0,Math.ceil((deadline-now)/1000));}
export function formatTime(seconds){const value=Math.max(0,Math.floor(seconds));return `${Math.floor(value/60)}:${String(value%60).padStart(2,'0')}`;}
