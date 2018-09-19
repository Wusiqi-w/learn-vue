var obj = {
    foo : 'bar'
}


//Object.freeze(), 会阻止修改现有的属性
Object.freeze(obj) 

new Vue({
    el : '#app',
    data : obj
});

new Vue({
    data: {
        a : 1
    },
    //created可以用来在一个实例被创建之后执行代码
    created: function() {
        console.log('a is: ' + this.a)
    }
});