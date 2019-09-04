<template>

    <div>
        <el-menu
                :default-active="'/index'"
                class="el-menu-demo"
                mode="horizontal"
                background-color="white"
                text-color="#222"
                active-text-color="red"
        >
            <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                {{item.navItem}}
            </el-menu-item>

            <a href="#nowhere" style="color: #222;float: right;padding: 20px;">更多功能</a>
            <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>
            <span style="position: absolute;padding-top: 20px;right: 43%;font-size: 20px;font-weight: bold">在线图书馆</span>

        </el-menu>

    </div>

</template>
<script>

		export default {

            data() {
                    return {
		                    navList: [
                                {name: '/index',navItem: '首页'},
                                {name: '/jotter',navItem: '笔记本'},
                                {name: '/library',navItem: '图书馆'},
                                {name: '/admin',navItem: '个人中心'}
                            ]
                    };
            },
            methods: {
                    handleSelect(key, keyPath) {
                            console.log(key, keyPath);
                    }
            }
		}
</script>
<style>
    span {
        pointer-events: none;
    }
    a {
        text-decoration: none;
    }
</style>
