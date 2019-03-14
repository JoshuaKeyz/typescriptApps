import { fromEvent } from 'rxjs';
import { filter, delay } from 'rxjs/operators';

/*const button = document.querySelector('button');
fromEvent(button, 'click').pipe(
  throttleTime(6000), 
  scan(count => count + 1, 0)
).subscribe((count)=>console.log(`Clicked ${count} times`));*/

const clicks = fromEvent(document, 'click');
// const clicksOnDivs = clicks.pipe(filter(ev=> ev.target.tagName === 'DIV'));

// clicksOnDivs.subscribe(x => console.log(x));

const delayedClicks = clicks.pipe(delay(6000));
delayedClicks.subscribe(x => console.log(x));