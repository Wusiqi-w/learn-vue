// var vm = new Vue ({
//     el: 'div',
//     data: {
//         classObject: {
//             active: true,
//             'text-danger' : false
//         }
//     }
// });


// 绑定一个返回对象的计算属性

// var vm = new Vue({
//     el: 'div',
//     data: {
//         isActive: true,
//         error: null
//     },
//     computed: {
//         classObject: function() {
//             return {
//                 active: this.isActive && !this.error,
//                 'text-danger': this.error && this.error.type === 'fatal'
//             }
//         }
//     }
// });

// 把一个数组传给v-bind:class
// var vm = new Vue ({
//     el: 'div',
//     data: {
//         activeClass: 'active',
//         errorClass: 'text-danger'
//     }
// });


// 对象语法

// var vm = new Vue({
//     el : 'div',
//     data: {
//         activeColor : 'red',
//         fontSize: 30
//     }
// });


// 直接绑定到一个样式对象

var vm = new Vue({
    el : 'div',
    data : {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
});
