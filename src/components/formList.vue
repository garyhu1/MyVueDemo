<template>
    <div class="container">
       <form v-for="n in count">
           <div class="single-form">
              <label>姓名：<input type="text" v-model="n.name" class='name' @focus="getF(e,n,'name')" /></label><br/>
              <label>手机号：<input type="text" v-model="n.phone" class='phone' @focus="getF(e,n,'phone')"/></label><br/>
              <label>
                     <span>姓别：</span><input type="radio" name='ss' v-model="n.sex" value="男"/>男
                     <input type="radio" name='ss' v-model="n.sex" value="女" />女
              </label>
           </div>
       </form>
       <button class='commit' @click='submit'>提交</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [],
                num: Math.ceil(Math.random()*10),
            }
        },
        computed: {
            count(){
                let arr = [];
                for(let i = 0; i < this.num;i++){
                    let obj = {
                        index: i,
                        sex : '',
                        name : '',
                        phone : ''
                    }
                    arr.push(obj);
                }
                return arr;
            }
        },
        methods: {
            submit() {
                this.list = [];
                let flag = false;
                let nodes = jQuery('form').children("div");
                for(let i = 0;i< this.count.length;i++){
                    let item = this.count[i];
                    if(item.sex !== ''&&item.name !==''&&item.phone !== ''){
                        let {sex,name,phone}=item;
                        let obj = {
                            name,phone,sex
                        }
                        this.list.push(obj);
                        flag = true;
                    }else if(item.sex === ''&&item.name ===''&&item.phone === ''){
                        // alert("请补全信息");
                    }else {
                        let curNode = nodes[i];
                        if(item.name ===''){
                            jQuery(curNode).find('label>input.name').addClass('red-border');
                        }
                        if(item.phone ===''){
                            jQuery(curNode).find('label>input.phone').addClass('red-border');
                        }
                        
                        alert("请补全信息");
                        flag = false;
                        break;
                    }
                }
                if(flag){
                    alert(JSON.stringify(this.list));
                }
                
            },
            getF(e,n,flag) {
                let nodes = jQuery('form').children('div');
                if(flag === 'name') {
//              	alert(n.index);
                    jQuery(nodes[n.index]).find('label>input.name').removeClass('red-border');
                }else if(flag === 'phone'){
                	jQuery(nodes[n.index]).find('label>input.phone').removeClass('red-border');
                }
            }
        }
    }
    
</script>

<style lang="css">
    @import  "../common/style/form.css";
</style>