var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

// app3.seen = false;


var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: '学习 JavaScrip'},
            {text: '学习 Vue'},
            {text: '整个牛项目'}
        ]
    }
});

app4.todos.push({text : 'Fighting!'});


var app5 = new Vue({
    el : '#app-5',
    data : {
        message : 'Hello Vue.js!'
    },
    methods : {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        } 
    } 
});


var app6 = new Vue({
    el : '#app-6',
    data : {
        message : 'Hello Vue!'
    }
});


//注册组建：

Vue.component('todo-item', {
    props : ['todo'],
    template: '<li>{{ todo.text }}</li>'
});


var app7 = new Vue({
    el : '#app-7',
    data : {
        groceryList: [
            { id : 0, text : '蔬菜' },
            { id : 1, text : '奶酪' },
            { id : 2, text : '随便其他什么人吃的东西' },
        ]
    }
});