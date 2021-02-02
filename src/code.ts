import * as Rx from "rxjs"
import {Observable} from "rxjs";
//import {fromEvent} from "rxjs/Observable/fromEvent"
import {fromEvent} from "rxjs"
import {Subject} from "rxjs"

console.log('RX', Rx.observable);

var subject = new Subject();

subject.subscribe(
    data => addItem('Observer1 : ' + data),
    error => addItem('Observer1 Error : ' + error),
    () => addItem('Observer1 Completed!')
)

subject.next('The first thing has been sent !')

var observer2 = subject.subscribe(
    data => addItem('Observer2 : ' + data),
    error => addItem('Observer2 Error : ' + error),
    () => addItem('Observer2 Completed!')
)

subject.next('The second thing has been sent! ')
subject.next('The third thing has been sent! ')
observer2.unsubscribe();
subject.next('The final thing has been sent! ')


// Beispiel 2 ! Observable durch einen Event !
// var observable = fromEvent(document, 'mousemove');
//
// setTimeout(() => {
//     var subscription = observable.subscribe(
//         (x:any) =>addItem(x)
//     )
//     },2000);


// * Beispiel 1 ! Basic
//
// var observable = Observable.create((observer: any) => {
//     try {
//         observer.next('Hey guys!');
//         observer.next('How are you');
//         setInterval(() => {
//             observer.next('I am good')
//         }, 2000)
//         //observer.complete();
//         // throw new Error('Schtudis Error!')
//         // observer.next('this will not be send');
//     } catch (err) {
//         observer.error(err);
//     }
// });
//
//
// var observer = observable.subscribe(
//     (x: any) => addItem(x),
//     (error: any) => addItem(error),
//     () => addItem('Completed')
// );
//
// setTimeout(() => {
//     var observer2 = observable.subscribe(
//         (x: any) => addItem('Subscriber 2 : ' + x)
//     )
//
// }, 3000)


function addItem(val: any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
