// export abstract class QueryClass<Item> {
//   static instance: QueryClass<any>;
//   static getInstance<T extends QueryClass<any>>(this: new () => T) {
//     QueryClass.instance ||= new this();
//     return QueryClass.instance as T;
//   }

//   abstract endpoint: string;

//   items: Item[] = [];

//   a = 1
// }


// class Ball extends QueryClass<{a: number}> {
//   endpoint = 'balls';
//   b = 2;
// }


// console.log(Ball.getInstance())
// Ball.getInstance().items.push({a: 1})

// type EventHandlerMap = Record<string, (...args: any[]) => any>;

// class Cord {
//   private eventHandlers: EventHandlerMap = {};

//   @EventHandler('ping', () => true)
//   @EventHandler('other-event', () => Promise.resolve('hello'))
//   on<E extends keyof EventHandlerMap>(
//     event: E,
//     handler: EventHandlerMap[E]
//   ): void {
//     this.eventHandlers[event] = handler;
//   }

//   emit<E extends keyof EventHandlerMap>(
//     event: E,
//     ...args: Parameters<EventHandlerMap[E]>
//   ): ReturnType<EventHandlerMap[E]> {
//     const handler = this.eventHandlers[event];
//     if (handler) {
//       return handler(...args);
//     }
//     throw new Error(`No handler registered for event: ${event}`);
//   }
// }

// function EventHandler<T extends (...args: any[]) => any>(
//   event: string,
//   returnValue: T
// ) {
//   return function (
//     target: Cord,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     const originalMethod = descriptor.value;

//     descriptor.value = function (...args: any[]) {
//       const result = originalMethod.apply(this, args);

//       this.eventHandlers[event] = returnValue;

//       return result;
//     };
//   };
// }

// const cord = new Cord();

// cord.on('ping', (result) => console.log(result));
// // result inferred as boolean

// cord.on('other-event', (result) => console.log(result));
// // result inferred as Promise<'hello'>

// const pingResult = cord.emit('ping');
// console.log(pingResult);
// // Output: true

// const otherEventResult = cord.emit('other-event');
// otherEventResult.then((result) => console.log(result));
// // Output: 'hello'
