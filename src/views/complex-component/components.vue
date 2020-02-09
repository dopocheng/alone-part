<template>
    <div>
        complex-component components!!!<br /><br />
        <p>{{title}}</p>
        <p>{{name}}</p>
        <p>{{student}}</p>
    </div>
</template>
<script>
export default {
    // props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
    // 注意那些 prop 会在一个组件实例创建之前进行验证，所以实例的属性 (如 data、computed 等) 在 default 或 validator 函数中是不可用的。
    props:{// 一: 被动获得父组件的参数 (v-bind 参数)
        title: {type:String, default:"title", required: true},
        name: {
                type: String, 
                validator: function (value) {
                // 这个值必须匹配下列字符串中的一个,否则控制台有警告
                return ['dpc', 'warning', 'danger'].indexOf(value) !== -1
                }
            },
        student: {type:Object, 
                default: function () {
                return { message: 'not student' }
            }},
        fatherMeth: Function,
        father: Object
        
    },
    data() {
        return {
            childVariate: "在子组件调用父组件的oo!!!"  ,
            desc: "父组件调用子组件属性!!!",
        }
    },
    created() { 
        this.passiveGain()
        this.activeAcquirement()
    },
    methods: {
        childTest() {
            console.log("父组件调用子组件方法!!!")
        },
        passiveGain() {
            console.log("***********child passive gain***********")
            //一:被动获得父组件值(通过 v-bind:参数)和方法
            console.log(this.title);
            this.fatherMeth()
            console.log("***********child passive gain end***********")
        },
        activeAcquirement() {
            console.log("***********child active acquirement***********")
            // 二.主动获取父组件变量值或方法
            console.log("主动获取父组件变量值或方法",this.$parent.yourName)
            this.$parent.fatherTest()
            // 1.如果获取不到，就把父组件对象 this 传递给子组件，在子组件接收下 this.father (定义的参数).变量
            console.log("父组件对象 this 传递给子组件",this.father.yourName)
            this.father.fatherTest()  

            // 2.子组件使用 $emit 触发父组件事件
            this.$emit('fatherOnEmite',this.childVariate)
            console.log("***********child active acquirement end***********")
        }
    }
}
</script>
