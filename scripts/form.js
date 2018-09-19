// 文本

var example1 = new Vue ({
    el: '#example-1',
    data: {
        message: ''
    }
});

// 多行文本

var example2 = new Vue ({
    el: '#example-2',
    data: {
        message: ''
    }
});

// 单个复选框：
var example3 = new Vue ({
    el: '#example-3',
    data: {
        checked: true
    }
});

// 多个复选框
var example4 = new Vue ({
    el: '#example-4',
    data: {
        checkedNames: []
    }
});

// 单选按钮

var example5 = new Vue ({
    el: '#example-5',
    data: {
        picked: ''
    }
});

// 选择框，单选

var example6 = new Vue ({
    el: '#example-6',
    data: {
        selected: ''
    }
});

// 选择框，多选
var example7 = new Vue ({
    el: '#example-7',
    data: {
        selected: []
    }
})

// 用v-for渲染的动态选项
var example8 = new Vue ({
    el: '#example-8',
    data: {
        selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
});

