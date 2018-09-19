// var vm = new Vue({
//     el: '#example',
//     data: {
//         message: 'Hello'
//     },
//     computed: {
//         // 计算属性的 getter
//         reversedMessage: function () {
//             // ‘this’指向 vm实例
//             return this.message.split('').reverse().join('')
//         }
//     }
// });

// var vm = new Vue({
//     el: '#demo',
//     data: {
//         firstName: 'Foo',
//         lastName: 'Bar',
//         fullName: 'Foo Bar'
//     },
//     watch: {
//         firstName: function (val) {
//             this.fullName = val + ' ' + this.lastName
//         },
//         lastName: function (val) {
//             this.fullName = this.firstName + ' ' + val
//         }
//     }
// });

// var vm = new Vue({
//     el: '#demo',
//     data: {
//         firstName: 'Foo',
//         lastName: 'Bar'
//     },
//     computed: {
//         fullName: function() {
//             return this.firstName + ' ' + this.lastName
//         }
//     }
// })

//计算属性的setter

var vm = new Vue({
    el: '#demo',
    data : {
        firstName: 'Foo',
        lastName: 'Bar'
    },
    computed: {
        fullName: {
            //getter
            get: function() {
                return this.firstName + ' ' + this.lastName
            },
            //setter
            set: function(newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
});