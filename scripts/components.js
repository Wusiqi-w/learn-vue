// 定义一个名为 button-counter的新组件
// Vue.component('button-counter', {
//     data: function () {
//         return {
//             count: 0
//         }
//     },
//     template: '<button v-on:click="count++">You clicked me {{ count }} times</button>'
// })

// new Vue({
//     el: '#components-demo'
// })

// Vue.component('blog-post',{
//     props: ['title'],
//     template: '<h3>{{ title }}</h3>'
// })

// new Vue ({
//     el: '#example-1'
// })

// new Vue ({
//     el: '#blog-post-demo',
//     data: {
//         posts: [
//             { id: 1, title: 'My journey with Vue' },
//             { id: 2, title: 'Blogging with Vue' },
//             { id: 3, title: 'Why Vue is so fun' }
//         ]
//     }
// })

// 重构<blog-post>组件

// Vue.component('blog-post', {
//     props: ['post'],
//     template: `
//        <div class="blog-post">
//        <h3>{{ post.title }}</h3>
//        <button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
//        <div v-html="post.content"></div>
//        </div>
//     `
// })


// new Vue({
//     el: '#blog-post-demo2',
//     data: {
//         posts: [
//             {
//                 id: 1,
//                 title: 'My journey with Vue',
//                 content: '123'
//             },
//             {
//                 id: 2,
//                 title: 'Blogging with Vue',
//                 content: '456'
//             },
//             {
//                 id: 3,
//                 title: 'Why Vue is so fun',
//                 content: '789'
//             }
//         ]
//     }
// })

// new Vue({
//     el: '#blog-posts-events-demo',
//     data: {
//         posts: [
//             {
//                 id: 1,
//                 title: 'My journey with Vue',
//                 content: '123',
//             },
//             {
//                 id: 2,
//                 title: 'Blogging with Vue',
//                 content: '456',
//             },
//             {
//                 id: 3,
//                 title: 'Why Vue is so fun',
//                 content: '789'
//             }
//         ],
//         postFontSize: 1
//     },

//     methods: {
//         onEnlargeText: function (enlargeAmount) {
//             this.postFontSize += enlargeAmount
//         }
//     }
// })


// 在组件上使用v-model

// Vue.component('custom-input', {
//     props: ['value'],
//     template: `
//       <input
//         v-bind:value = "value"
//         v-on:input="$emit('input'), $event.target.value"
//         >
//     `
// })

// new Vue ({
//     el: '#demo',
//     data: {
//         searchText: ''
//     }
// });

// 通过插槽分发内容

Vue.component('alert-box', {
    template: `
    <div class="demo-alert-box">
    <strong>Error!</strong>
    <slot></slot>
    </div>
    `
})

new Vue ({
    el:'#slot-demo'
});

