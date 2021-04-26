<template>
    <div>
        <div v-show = "show" style="float:left;width: 70%">
          <div style="margin: -26px auto;">
            <h2 style="text-align: center">Taskkg Tool</h2>
          </div>
          <div style="font-size:16px;margin-top: 88px;text-align: center;">
            <p>Tell me what are you trying to do, in the following format:</p>
            <p style="margin-top: -8px">{{'I want to '}}<span style="background: pink"><i>{{'&lt&ltaction>>'}}</i></span><span style="margin-left:5px;background: #ffdead"><i>{{' <&ltobject>>' }}</i></span><span style="margin-left:5px;background:skyblue"><i>{{'<&ltconstraint/context>>.'}}</i></span></p>
            <p style="margin-top: 26px"><b>Example:</b>{{'I want to '}}<span style="background: pink">{{'convert'}}</span>{{' an'}}<span style="margin-left:5px;background: navajowhite">{{' integer' }}</span><span style="margin-left:5px;background:skyblue">{{' to string'}} </span><span style="margin-left:5px;background:skyblue">{{'in Java'}} </span>{{'.'}}</p>
          </div>
          <div style="font-size:16px;margin-top: 50px;text-align: center;">
            <b>{{'I want to'}}</b>
            <el-autocomplete
              style="width:164px;margin-left: 10px;font-weight:bold"
              size="small"
              class="p"
              v-model="input_action"
              :fetch-suggestions="querySearch"
              placeholder="please input action"
              @select="handleSelect"
              @blur="handleSelect"
              @keyup.enter.native="handleEnter($event)"
              @clear="handleSelect"
              clearable
            ></el-autocomplete>
            <el-autocomplete
              style="width:auto;margin-left: 10px;font-weight:bold"
              size="small"
              class="y"
              v-model="input_object"
              :fetch-suggestions="querySearch1"
              placeholder="please input object"
              @select="handleSelect"
              @blur="handleSelect"
              @keyup.enter.native="handleEnter($event)"
              @clear="handleSelect"
              clearable
            ></el-autocomplete>
            <el-autocomplete
              style="width:80px;margin-left: 10px"
              size="small"
              class="inline-input a"
              v-model="input_constraint_adp"
              :fetch-suggestions="querySearch2"
              placeholder="adp"
              clearable
            ></el-autocomplete>
            <el-autocomplete
              style="margin-left: 10px"
              size="small"
              class="a"
              v-model="input_constraint"
              :fetch-suggestions="querySearch3"
              placeholder="please input constraint"
              @select="handleSelect"
              @blur="handleSelect"
              @keyup.enter.native="handleEnter($event)"
              @clear="handleSelect"
              clearable
            ></el-autocomplete>
            <i class="el-icon-circle-plus-outline" @click="onAdd"></i>
            <el-form :model="form">
              <el-form-item style="margin-top: 2px;margin-bottom: -6px">
                <el-autocomplete
                  v-for="(item,i) of items " :key="i"
                  style="width:80px;margin-left: 10px"
                  size="small"
                  class="a"
                  v-model="adp_items[i]"
                  :fetch-suggestions="querySearch4"
                  placeholder="adp"
                  clearable
                ></el-autocomplete></el-form-item>
              <el-form-item>
                <el-autocomplete
                  id = "a"
                  v-for="(item,i) of items " :key="i"
                  style="margin-left: 10px"
                  size="small"
                  class="a"
                  v-model="items[i]"
                  :fetch-suggestions="querySearch5"
                  placeholder="please input constraint"
                  @select="handleSelect"
                  @blur="handleSelect"
                  @keyup.enter.native="handleEnter($event)"
                  @clear="handleSelect"
                  clearable
                ></el-autocomplete></el-form-item></el-form>
            <div style="margin: 10px auto;text-align: center;">
              <el-button @click="quit" type="info">reset</el-button>
              <el-button @click="confirm" type="info">confirm</el-button>
            </div>
            <div v-if="final_task" style="margin:20px auto;padding-top:20px;padding-bottom:10px;width: 64%;background:#e8e5e5;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 10px;">
              <div style="margin-top:8px;margin-bottom:10px;margin-left: 10px;color: #636262"> {{this.result}} </div>
              <i class="el-icon-document-copy" @click="copyShaneUrl(result)"></i>
            </div>
       </div>
        </div>


        <div style="float:right;margin:30px auto;padding-top:20px;padding-bottom:30px;width: 30%;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 10px;">
        <div v-show="suggestion_action.length>0" style="margin-top: 10px;margin-left: 6px">
          <p style="margin-bottom: 1px;margin-left: 4px;color: #747474">Missing Suggestions for Action:</p>
          <el-tag
              v-for="tag in suggestion_action"
              style="margin-left: 4px;margin-bottom: 2px"
              size="small"
              :key="tag.value"
              @click="action_tag(tag)"
              color="pink"
              >
              {{tag.value}}
            </el-tag>
        </div>
        <div v-show="re_action.length>0" style="margin-top: 10px;margin-left: 6px">
          <p style="margin-bottom: 1px;margin-left: 4px;color: #747474">Refinement Suggestions for Action:</p>
          <el-tag
            style="margin-left: 4px;margin-bottom: 2px"
            v-for="tag in re_action"
            :key="tag.value"
            size="small"
            color="pink"
            @click="action_tag(tag)"
          >
            {{tag.value}}
          </el-tag>
        </div>
          <div v-show="suggestion_object.length>0" style="margin-top: 10px;margin-left: 6px">
            <p style="margin-bottom: 1px;margin-left: 4px;color: #747474">Missing Suggestions for Object:</p>
            <el-tag
              v-for="tag in suggestion_object"
              style="margin-left: 4px;margin-bottom: 2px;"
              :key="tag.value"
              size="small"
              color="navajowhite"
              @click="object_tag(tag)"
            >
              {{tag.value}}
            </el-tag>
          </div>
          <div v-show="refine_object.length>0" style="margin-top: 10px;margin-left: 6px">
            <p style="margin-bottom: 1px;margin-left: 4px;color: #747474">Refinement Suggestions for Object:</p>
            <el-tag
              v-for="tag in refine_object"
              style="margin-left: 4px;margin-bottom: 2px;"
              :key="tag.value"
              size="small"
              color="navajowhite"
              @click="object_tag(tag)"
            >
              {{tag.value}}
            </el-tag>
          </div>
          <div v-show="refine_constraint.length>0" style="margin-top: 10px;margin-left: 6px">
          <p style="margin-bottom: 1px;margin-left: 4px;color: #747474">Refinement Suggestions for Constraint:</p>
          <el-tag
            style="margin-left: 4px;margin-bottom: 2px"
            v-for="tag in refine_constraint"
            :key="tag.value"
            size="small"
            @click="re_constraint_tag(tag)"
          >
            {{tag.value}}
          </el-tag>
        </div>
        <div v-show="suggestion_constraint.length>0" style="margin-top: 10px;margin-left: 6px">
          <p style="margin-bottom: 1px;margin-left: 4px;color: #747474">Missing Suggestions for Constraint:</p>
          <el-tag
            style="margin-left: 4px;margin-bottom: 2px"
            v-for="tag in suggestion_constraint"
            :key="tag.value"
            size="small"
            @click="constraint_tag(tag)"
          >
            {{tag.value}}
          </el-tag>
        </div>

      </div>
    </div>
  </template>

<script>
import axios from 'axios'
export default {
name: "taskkg",
    data(){
      return{
        tableData:[],
        final_task:false,
        result:'',
        content:false,
        items: [],
        adp_items: [],
        input_action: '',
        input_object:'',
        input_constraint:'',
        input_constraint_adp:'in',
        input_action1: '',
        input_object1:'',
        input_constraint1:'',
        answers:[],
        query:'',
        show:true,
        login:true,
        task:false,
        dialogTableVisible: false,
        dialogFormVisible: false,
        username:'',
        length1:0,
        item :'',
        objects:[],
        constraint:[],
        constraint1:[],
        suggestion_action:[],
        suggestion_constraint:[],
        re_object:[],
        re_constraint:[],
        re_constraint1:[],
        refine_object:[],
        refine_constraint:[],
        re_action:[],
        suggestion_object:[],
        adp:[],
      }
    },
    methods: {
      // handleCopy(result){
      //   this.copyData = result
      //   this.copy(this.copyData)
      // },
      // copy(data){
      //   let url = data;
      //   let oInput = document.createElement('input');
      //   oInput.value = url;
      //   document.body.appendChild(oInput);
      //   oInput.select(); // 选择对象;
      //   console.log(oInput.value)
      //   document.execCommand("Copy"); // 执行浏览器复制命令
      //   this.$message({
      //     message: '复制成功',
      //     type: 'success'
      //   });
      //   oInput.remove()
      // },
      copyShaneUrl(shareLink){
        var input = document.createElement("input");   // 直接构建input
        input.value = shareLink;  // 设置内容
        document.body.appendChild(input);    // 添加临时实例
        input.select();   // 选择实例内容
        document.execCommand("Copy");   // 执行复制
        document.body.removeChild(input); // 删除临时实例
      },
      action_tag(tag){
        console.log(tag)
        this.input_action=tag.value
        this.get_action()
        this.dialog()
        this.load()
      },
      object_tag(tag){
        console.log(tag)
        this.input_object=tag.value
        this.get_action()
        this.dialog()
        this.load()
      },
      constraint_tag(tag){
        console.log(tag)
        let modify_constraint
        modify_constraint = tag.value.trim().split(" ");
        if (this.input_constraint==''){
          this.input_constraint=modify_constraint[1]
          this.input_constraint_adp = modify_constraint[0]
        }else {
          this.onAdd()
          let len =this.items.length-1
          this.items[len]=modify_constraint[1]
          this.adp_items[len]=modify_constraint[0]
        }
        this.get_action()
        this.dialog()
        this.load()
      },
      re_constraint_tag(tag){
        console.log(tag)
        if (this.items.length===0){
          this.input_constraint=tag.value

        }else {
          let len =this.items.length-1
          this.items[len]=tag.value
        }
        this.dialog()
        this.load()
      },
      querySearch(queryString, cb) {
        var restaurants = this.objects[0];
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
        // var result = results.indexOf('(')
        // console.log(result)
      },
      querySearch1(queryString, cb) {
        var restaurants = this.objects[1];
        var concept = this.re_object
        console.log('&&&&')
        console.log(concept)
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        if (concept.length!==0){
          for (let i=0;i<concept.length;i++){
            results.push(concept[i])
          }
        }
        // 调用 callback 返回建议列表的数据
        cb(results);
        // }

      },
      querySearch2(queryString, cb) {
        var restaurants = this.adp;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      querySearch3(queryString, cb) {
        var restaurants = this.objects[2];
        var concept = this.re_constraint
        console.log('&&&&')
        console.log(concept)
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        // console.log('rrr')
        // console.log(results)
        if (concept.length!==0){
          for (let i=0;i<concept.length;i++){
            results.push(concept[i])
          }
        }
        cb(results);
      },
      querySearch4(queryString, cb) {
        var restaurants = this.adp;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      querySearch5(queryString, cb) {
        var restaurants = this.objects[2];
        // var concept = this.re_constraint1

        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        var concept = queryString ? this.re_constraint1.filter(this.createFilter(queryString)) : this.re_constraint1;
        console.log(concept)
        // 调用 callback 返回建议列表的数据
        if (concept.length!==0){
          for (let i=0;i<concept.length;i++){
            results.push(concept[i])
          }
        }
        console.log(restaurants)
        console.log(results)
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      first_load(){
        axios
          .post(
            'http://106.14.239.166/TaskKG/taskkg2/',{action: '',constraint :this.constraint, patient : '',concept:''})
          .then(response => {
            console.log(response.data)
            this.objects=response.data
          })
        axios
          .get(
            'http://106.14.239.166/TaskKG/get_adp/')
          .then(response => {
            console.log(response.data)
            this.adp=response.data
          })
      },
      load(){
        console.log('ooo')
        console.log(this.constraint)
        console.log(this.input_constraint)
        var concept
        let len = this.items.length-1
        if (this.input_constraint===''){
          concept = this.input_object
        }else if (this.input_constraint!=='' && this.items.length===0){
          concept = this.input_constraint
          console.log("jssss")
        }else{
          concept=this.items[len]
          console.log("dps[")
        }
        axios
          .post(
            'http://106.14.239.166/TaskKG/taskkg2/',{action: this.input_action,constraint :this.constraint, patient : this.input_object,username:"Xu",concept:concept})
          .then(response => {
            console.log(response.data)
            this.objects=response.data
            if (concept === this.input_object){
              this.re_object = response.data[4]
            }else if (concept===this.input_constraint){
              this.re_constraint = response.data[4]
              console.log(this.re_constraint)
            }else{
              for (let i=0;i<response.data[4].length;i++){
                this.re_constraint1.push(response.data[4][i])
              }

              console.log(this.re_constraint1)
            }

            console.log(this.tableData)
          }).catch(error => {
          console.log(error)
          console.log('jajajja')
        })
        // if (this.tableData.length>0){
        //   this.content = true
        // }
      },
      onAdd() {
        this.items.push('')
        this.adp_items.push('')
      },
      v_show(){
        this.dialogFormVisible = false
        this.show = true
        this.login = false
      },
      get_action(){
        this.suggestion_action=[]
        this.re_action=[]
        axios
          .post(
            'http://106.14.239.166/TaskKG/taskkg_action/',{patient : this.input_object,})
          .then(response => {
            console.log("---")
            if (this.input_action===''){
              this.suggestion_action=response.data[0]
              console.log(response.data[0])
            }else if(this.input_action!==''&&this.input_object===''){
              this.re_action=[]
              console.log("odefp")
            }else if(this.input_constraint!==''){
              console.log(this.input_constraint)
              console.log("opopop")
              this.re_action=[]
            }else{
              console.log(this.input_constraint)
              // this.suggestion_action=response.data[1]
              let k
              for(k=0;k<response.data[1].length;k++){
                console.log(this.input_action)
                console.log(response.data[1][k])
                if(this.input_action===response.data[1][k].value){
                  console.log('oooosasd')
                  break
                }
              }
              console.log(k)
              if (k===1){
                this.re_action=[]
              }else{
                for (let i=0;i<k;i++){
                  this.re_action.push(response.data[1][i])
                  console.log(i)
                }
              }
            }
          })
      },
      dialog() {
        this.suggestion_action=[]
        this.refine_constraint=[]
        this.refine_object=[]
        this.suggestion_constraint=[]
        this.suggestion_object=[]
        var concept
        if (this.input_constraint===''){
          concept = this.input_object
        }else if (this.items.length===0){
          concept = this.input_constraint
        }else if (this.input_object1!==this.input_object){
          concept = this.input_object
        }else if (this.input_constraint!==this.input_constraint1){
          concept = this.input_constraint
        }else {
        let i
        for (i=0;i<this.constraint.length;i++){
          if(this.constraint[i]!==this.constraint1[i]){
            concept=this.constraint1[i]
            console.log('---')
            break
          }
        }
          console.log(i)
          console.log(this.constraint.length)
        let len = this.items.length-1
        if(i===this.constraint.length){
          console.log('!!!!')
          concept=this.items[len]
        }console.log('rrr')

        }
        console.log(this.items.length)
        this.dialogFormVisible = false
        this.show = true
        axios
          .post(
            'http://106.14.239.166/TaskKG/task_kg/',{action: this.input_action,constraint :this.constraint, patient : this.input_object,concept:concept})
          .then(response => {
            if (this.input_object===''&&this.input_action!==''){
              this.suggestion_object = response.data[0]
            }else if(this.input_object1 !== this.input_object){
              this.suggestion_object = response.data[0]
            }
            if (this.input_object!==''&&this.input_constraint===''){
              this.get_action()
            }
            if (concept===this.input_object){
              this.refine_object =response.data[2]
            }else{
              this.refine_constraint = response.data[2]
            }
            if (this.input_object ===''){
              this.suggestion_constraint = []
            }else{
              this.dealt_response_data(response.data)
          }
          }).catch(error => {
          console.log(error)
          console.log('jajajja')
        })
        this.input_action1 = this.input_action
        this.input_object1 = this.input_object
        this.input_constraint1 = this.input_constraint
        this.length1 = this.items.length
        this.item = this.items[this.items.length-1]
        this.constraint1 = this.constraint

      },
      dealt_response_data(responseData) {

        for (let j=0;j<=responseData[1].length;j++){
          let use_constraint
          use_constraint = responseData[1][j].value
          // console.log(use_constraint)
          axios
            .post(
              'http://106.14.239.166/TaskKG/task_kg_adp/',{concept:use_constraint})
            .then(response => {
              this.suggestion_constraint.push(
                {'value':response.data[0]+' '+use_constraint}
              )
              // console.log(this.suggestion_constraint)
            }).catch(error => {
            console.log(error)
            console.log('ffffff')
          })
        }
      },
      handleEnter(event){
        event.target.blur();
        this.$message.success('success');
        this.handleSelect()
      },
      quit(){
        this.suggestion_constraint =[]
        this.suggestion_action=[]
        this.input_action = ''
        this.input_object = ''
        this.input_constraint = ''
        this.items = []
        this.suggestion_action=[]
        this.adp_items = []
        // this.content = false
        this.tableData =[]
        this.final_task=false
        this.first_load()
        this.dialog()
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.objects;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 100 * Math.random());
      },
      createStateFilter(queryString) {
        return (object) => {
          return (object.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(this.items)
        console.log('==')
        let len = this.items.length-1
        if (this.input_constraint == ''){
          this.constraint = []
        }else if (this.items.length==0){
          this.constraint[0]= this.input_constraint
          console.log(this.input_constraint)
          console.log("~~")
          console.log(this.constraint)
        }else if(this.items[len]==''){
          console.log('***')

        }else {
          console.log("---")
          console.log(this.items[len])
          console.log(this.input_constraint)
          this.constraint[0]=this.input_constraint
          console.log(this.items)
          for(let i=0;i<=len;i++){
            this.constraint[i+1] = this.items[i]
          }
          console.log(this.constraint)

        }
        this.get_action()
        this.dialog()
        this.load()

      },
      confirm(){
        if (this.items.length!==0){
          var re=this.input_action+' '+this.input_object+' '+this.input_constraint_adp+' '+this.input_constraint
          for (let i=0;i<this.items.length;i++){
            console.log(this.result)
            console.log(i)
            if (i===0){
              this.result=re+' '+this.adp_items[i]+' '+this.items[i]
            }else{
              console.log(this.result)
              this.result =this.result+' '+this.adp_items[i]+' '+this.items[i]
              console.log(this.result)
            }
          }
        }else{
          this.result=this.input_action+' '+this.input_object+' '+this.input_constraint_adp+' '+this.input_constraint
        }
        this.final_task=true
      }
    },
    mounted:function () {
      this.first_load();
      this.get_action()
    }
    }
</script>

<style>
    .a .el-input--small .el-input__inner {
      height: 32px;
      line-height: 32px;
      background-color: skyblue;
      font-weight: bold;
    }
    .p .el-input--small .el-input__inner {
      height: 32px;
      line-height: 32px;
      font-weight: bold;
      background-color: pink;
    }
    .y .el-input--small .el-input__inner {
      height: 32px;
      line-height: 32px;
      background-color: navajowhite;
      font-weight: bold;
    }
    .el-input__inner:-ms-input-placeholder {
      color: #a1a0a0;
      text-align:center;
    }
    .el-input__inner::placeholder {
      color: #a1a0a0;
      text-align:center;
    }
</style>
