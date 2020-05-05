# 第四周总结
## 几个比较重要的概念
* Event Loop 事件循环机制
* Promise
* 宏任务和微任务

### Event Loop 事件循环
> 简单说，就是在程序中设置两个线程：一个负责程序本身的运行，称为"主线程"；另一个负责主线程与其他进程（主要是各种I/O操作）的通信，被称为"Event Loop线程"（可以译为"消息线程"）。

摘自[阮一峰-事件循环](http://www.ruanyifeng.com/blog/2013/10/event_loop.html)

### Promise
> `Promise` 对象是一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。它允许你为异步操作的成功和失败分别绑定相应的处理方法（handlers）。 这让异步方法可以像同步方法那样返回值，但并不是立即返回最终执行结果，而是一个能代表未来出现的结果的promise对象

摘自[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

举例：
```javascript
const promise1 = new Promise(function(resolve, reject) {
  console.log('do');
  setTimeout(function() {
    resolve('foo');
  }, 100);
});

promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});

console.log('123456789');
```
执行结果是：
```javascript
> "do"
> "123456789"
> "foo"
```
因为，`new Promise(function(resolve, reject) {})`中的`resolve`和`reject`函数是作为参数传递给promise的构造函数，参数里的内容是同步执行的，
所以`then`之后的内容才是异步执行的。

> 在JavaScript的世界中，所有代码都是单线程执行的。由于这个“缺陷”，导致JavaScript的所有网络操作，浏览器事件，都必须是异步执行。

摘自[廖雪峰-promise](https://www.liaoxuefeng.com/wiki/1022910821149312/1023024413276544)


