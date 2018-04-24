export class CounterService {
    count = 0;

    increment() {
        console.log(++this.count);
    }
}
