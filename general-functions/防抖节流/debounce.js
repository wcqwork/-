function debounce(fn, delay = 500) {
    // 是闭包中的
    let timer
    
    // input事件调用的函数，相当于obj调用函数 this指向Input
    return function() {
       // 这个if 判断不做也没关系，判断了（除第一次非空的情况）也就是执行从第二次开始，在延迟时间内多次触发才会走该判断
       if(timer) {clearTimeout(timer)}
       // 此时的箭头函数的this 和 arguments 都是从外部函数继承而来
       // 如果用普通函数就要用词法作用域 var that = this var arg = arguments
       timer = setTimeout(() =>{
          // 使得传入的回调函数的this 指向Input这个元素对象
          // arguments是该事件的详情，可以获得该函数被调用时的所有参数,是一个event 对象（所有Dom事件都会传event对象进入）
          // 直接使用 fn() 问题也不大
          fn.apply(this,arguments) 
          timer = null
       },delay)
   }
}
// 直接使用
input.addEventListener('keyup', debounce(() => {
   // 可直接使用this.value获得输入框的值; arguments可用于获取具体触发事件的信息
   console.log(input.value)
}), 600)