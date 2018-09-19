// var example1 = new Vue({
//     el: '#example-1',
//     data: {
//         items: [
//             { message : 'Foo' },
//             { message : 'Bar' }
//         ]
//     }
// }); 

// example1.items = example1.items.filter(function(item){
//     return item.message.match(/Foo/)
// });

// var example2 = new Vue({
//     el: '#example-2',
//     data: {
//         parentMessage: 'Parent',
//         items: [
//             { message: 'Foo' },
//             { message: 'Bar' }
//         ]
//     }
// });

// new Vue ({
//     el: '#v-for-object',
//     data: {
//         object: {
//             firstName: 'John',
//             lastName: 'Doe',
//             age: 30
//         }
//     }
// });


Vue.component('todo-item', {
    template: '\
    <li>\
    {{ title }}\
    <button v-on:click="$emit(\'remove\')">Remove</button>\
    <li>\
    ',
    props: ['title']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoTd: 4
    },
    methods: {
        addNewTodo: function() {
            this.todos.push({
                id: this.nextTodoTd++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})