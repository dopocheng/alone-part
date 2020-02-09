<template>
    <div>
        propsParent!!!<br /><br />
        <!-- prop 静态赋值 -->
        <!-- prop 变量动态赋值 yourName、obj-->
        <Compon 
            title="my journey with vue" 
            v-bind:name="yourName" 
            v-bind:student="obj" 
            v-bind:fatherMeth="regMeth"
            :father="this" 
            v-on:fatherOnEmite="onEmite"
            ref="child1"
        /><br />
        <p @click="updated_data_counter">{{updated_data}} 点击 使用 this.$refs 获取子组件数据</p>
    </div>
</template>

<script>
import Compon from '../../complex-component/components' 
export default {
    components: { Compon },
    data() {
        return {
            yourName: "dpc",
            obj: {
                id: "007AB",
                age: 18
            },
            updated_data: 0
        }
    },
    created() {
    },
    updated() {// 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。updated 不能保证全部组件都加载用 this.nextTick
        this.fatherCall()
    },
    methods: {
        fatherTest() {
            console.log("父组件方法")
        },
        fatherCall() {
            // 因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定
            // 1.等待页面渲染完成后再去获取子组件变量和方法
            console.log("***********父组件主动获取***********")
            this.$nextTick(() => {console.log("this.$nextTick 最后调用",this.$refs.child1.desc)})
            this.$nextTick(() => {console.log("this.$nextTick 最后调用"); this.$refs.child1.childTest()})// console.log 无法打印方法
            console.log("***********父组件主动获取 end***********")
        },
        onEmite(arg) {
            // 2. 获取子组件数据
            console.log("父组件注册(订阅) v-on 方法", arg);
        },
        regMeth() {
            console.log("父组件方法直接传入组件");
        },
        updated_data_counter() {
            this.updated_data++
        }
    }
}
</script>

