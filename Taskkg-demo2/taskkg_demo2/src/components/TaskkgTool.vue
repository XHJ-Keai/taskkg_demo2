<template>
  <div>
    <div style="margin: -26px auto;">
      <h2 style="text-align: center">Taskkg Tool</h2>
    </div>
    <div v-show="login" style="align-content:center;margin: 40px auto;width: 20%;height: 100px">
      <!--        <el-button type="primary" plain style="position: absolute;margin: 30px 10px" @click="dialogFormVisible = true">主要按钮</el-button>-->
      <el-button type="primary" plain style="margin:100px auto;width: 20%;height: 100px;position: absolute;" @click="dialogFormVisible = true">Click to enter the username</el-button>
      <el-dialog title="Information" :visible.sync="dialogFormVisible">
        <el-form :model="username">
          <el-form-item label="Username:" :label-width="formLabelWidth">
            <el-input v-model="username" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">cancel</el-button>
          <el-button type="primary" @click="dialog">submit</el-button>
        </div>
      </el-dialog>
    </div>
<!--    <div v-show="show">-->
<!--      <a href="http://106.14.239.166:8080/ChatBot/index.html?#/">-->
<!--        <el-button id="recently_apis" icon="el-icon-s-home" type="primary" style="margin-left:80px;" plain>log in</el-button>-->
<!--      </a>-->
<!--    </div>-->
    <div  v-show = "show">
<!--      <div style="margin-top: -20px;">-->
<!--        <h2>Taskkg Tool</h2>-->
<!--      </div>-->
      <a href="http://106.14.239.166:8080/ChatBot/index.html?#/">
        <el-button id="recently_apis" icon="el-icon-s-home" type="primary" style="margin-left:60px;" plain>log in</el-button>
      </a>
      <div style="font-size:16px;margin-top: 14px;text-align: center;">
        <p>Tell me what are you trying to do, in the following format:</p>
        <p style="margin-top: -8px">{{'I want to '}}<span style="background: pink"><i>{{'&lt&ltaction>>'}}</i></span><span style="margin-left:5px;background: navajowhite"><i>{{' <&ltobject>>' }}</i></span><span style="margin-left:5px;background:skyblue"><i>{{'<&ltconstraint/context>>.'}}</i></span></p>
        <p style="margin-top: 26px"><b>Example:</b>{{'I want to '}}<span style="background: pink">{{'convert'}}</span>{{' an'}}<span style="margin-left:5px;background: navajowhite">{{' integer' }}</span>{{' to'}}<span style="margin-left:5px;background:skyblue">{{'string'}} </span><span style="margin-left:5px;background:skyblue">{{'in Java'}} </span>{{'.'}}</p>
      </div>
      <div style="font-size:16px;margin-top: 22px;text-align: center;">
        {{'I want to'}}
<!--        <el-input class='noback' size="small"  style="width:13%;margin-left: 10px"-->
<!--          placeholder="please input action"-->
<!--          v-model="input_action"-->
<!--          @blur="load"-->
<!--          @keyup.enter.native="handleEnter($event)"-->
<!--          clearable>-->
<!--        </el-input>-->
<!--        <el-input size="small" style="color:goldenrod;width:13%;margin-left: 14px"-->
<!--          placeholder="please input object"-->
<!--          v-model="input_object"-->
<!--          @blur="dialog"-->
<!--          @keyup.enter.native="handleEnter($event)"-->
<!--          clearable>-->
<!--        </el-input>-->
            <el-autocomplete
              style="width:156px;margin-left: 10px"
              size="small"
              class="inline-input"
              v-model="input_action"
              :fetch-suggestions="querySearch"
              placeholder="please input action"
              @select="handleSelect"
              clearable
            ></el-autocomplete>
            <el-autocomplete
              style="width:156px;margin-left: 10px"
              size="small"
              class="inline-input"
              v-model="input_object"
              :fetch-suggestions="querySearch1"
              placeholder="please input object"
              @select="handleSelect"
              @keyup.enter.native="handleEnter($event)"
              clearable
            ></el-autocomplete>
        <el-autocomplete
          style="width:142px;margin-left: 10px"
          size="small"
          class="inline-input"
          v-model="input_constraint_adp"
          :fetch-suggestions="querySearch2"
          placeholder="please input adp"
          @select="handleSelect"
          clearable
        ></el-autocomplete>
        <el-autocomplete
          style="width:180px;margin-left: 10px"
          size="small"
          class="inline-input"
          v-model="input_constraint"
          :fetch-suggestions="querySearch3"
          placeholder="please input constraint"
          @select="handleSelect"
          @keyup.enter.native="handleEnter($event)"
          clearable
        ></el-autocomplete>

<!--        <el-input size="small" style="width:14%;margin-left: 14px"-->
<!--                  placeholder="please input constrain"-->
<!--                  v-model="input_constraint"-->
<!--                  @blur="dialog"-->
<!--                  @keyup.enter.native="handleEnter($event)"-->
<!--                  clearable>-->
<!--        </el-input>-->
<!--        <el-input size="small" v-for="(item,i) of items " :key="i" style="width:14%; margin-left: 14px;margin-top: 6px"-->
<!--          placeholder="please input constrain"-->
<!--          v-model="items[i]"-->
<!--          @blur="dialog"-->
<!--          @keyup.enter.native="handleEnter($event)"-->
<!--          clearable>-->
<!--        </el-input>--><i class="el-icon-circle-plus-outline" @click="onAdd"></i>
        <el-form :model="form">
          <el-form-item style="margin-top: 2px;margin-bottom: -6px">
          <el-autocomplete
            v-for="(item,i) of items " :key="i"
            style="width:142px;margin-left: 10px"
            size="small"
            class="inline-input"
            v-model="adp_items[i]"
            :fetch-suggestions="querySearch4"
            placeholder="please input adp"
            @select="handleSelect"
            clearable
          ></el-autocomplete></el-form-item>
          <el-form-item>
          <el-autocomplete
            v-for="(item,i) of items " :key="i"
            style="width:180px;margin-left: 10px"
            size="small"
            class="inline-input"
            v-model="items[i]"
            :fetch-suggestions="querySearch3"
            placeholder="please input constraint"
            @select="handleSelect"
            clearable
          ></el-autocomplete></el-form-item></el-form>

      </div>
<!--      <div v-if="task" style="margin:20px auto;padding-top:20px;padding-bottom:30px;width: 64%;background:lightgray;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 10px;">-->
<!--        <div style="margin-top:16px;margin-left: 10px"> {{answers[1].content}} </div>-->
<!--      </div>-->
<!--      <div style="margin:30px auto;padding-top:20px;padding-bottom:30px;width: 68%;background:lightgray;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 10px;">-->
<!--        <div style="margin-top:16px;margin-left: 10px" v-for ="item in answers"> {{item.content}} </div>-->
        <div v-show="content" style="width: 50%;margin: 20px auto;">
          <el-table
            border
            :data="tableData"
            stripe
            style="align-content:center;width: 100%;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 10px;">
            <el-table-column
              prop="content"
              label="content"
              width="270px">
            </el-table-column>
            <el-table-column
              prop="number"
              label="number"
              >
            </el-table-column>
          </el-table>
      </div></div>
      <div style="margin: 10px auto;text-align: center;">
        <el-button @click="skip" type="info">skip</el-button>
        <el-button @click="quit" type="info">quit</el-button>
     </div>
<!--    </div>-->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "TaskkgTool",
  data(){
    return{
      tableData:[],
      content:false,
      items: [],
      adp_items: [],
      input_action: '',
      input_object:'',
      input_constraint:'',
      input_constraint_adp:'',
      input_action1: '',
      input_object1:'',
      input_constraint1:'',
      answers:[],
      query:'',
      show:false,
      login:true,
      task:false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      username:'',
      length1:0,
      item :'',
      objects:[]
    }
  },
  methods: {
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
      var concept = this.objects[6]
      console.log('&&&&')
      console.log(concept)
      // if(concept.length==0){
      //   var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      //   // 调用 callback 返回建议列表的数据
      //   cb(results);
      //   console.log(results)
      // }else{
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      if (concept.length!=0){
        for (let i=0;i<concept.length;i++){
          results.push(concept[i])
        }
      }
        // 调用 callback 返回建议列表的数据
        cb(results);
      // }

    },
    querySearch2(queryString, cb) {
      var restaurants = this.objects[2];
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    querySearch3(queryString, cb) {
      var restaurants = this.objects[3];
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      // console.log('rrr')
      // console.log(results)
      cb(results);
    },
    querySearch4(queryString, cb) {
      var restaurants = this.objects[2];
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    querySearch5(queryString, cb) {
      var restaurants = this.objects[3];
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
      // console.log('pppp')
      // console.log(results)
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    load(){
      // this.dialog()
      // console.log(this.input_action)
      // console.log(this.input_object)
      if (this.input_action){
        this.content = true
      }
      var input_action
      var input_object
      var input_constraint
      console.log(this.items)
      console.log('==')
      if (this.input_action == ''){
        input_action = ''
      }else{
        input_action = this.input_action.trim().split(" ");
        input_action = input_action[0]
        this.input_action = input_action
      }
      if (this.input_object == ''){
        input_object = ''
      }else{
        input_object = this.input_object.trim().split(" ");
        input_object = input_object[0]
        this.input_object = input_object
      }
      if(this.input_constraint_adp != ''){
        var a = this.input_constraint_adp.trim().split(" ")
        console.log(a)
        this.input_constraint_adp =a[0]
      }
      if(this.adp_items.length!=0){
        let adp_len = this.adp_items.length-1
        let b =this.adp_items[adp_len].trim().split(" ")
        this.adp_items[adp_len] = b[0]
      }

      if (this.input_constraint == ''){
        input_constraint = []
      }else if (this.items.length==0){
        // input_constraint = this.input_constraint.trim().split(" ");
        var index = this.input_constraint.lastIndexOf(' ')
        console.log(index)
        input_constraint = this.input_constraint.substring(0,index)
        // input_constraint = this.input_constraint_adp+' '+input_constraint
        // var index1 = this.input_constraint.indexOf(' ')
        // console.log(index1)
        // this.input_constraint = input_constraint.substring(index1-1,input_constraint.length)
        // this.input_constraint = input_constraint.split(this.input_constraint_adp)[1]
        this.input_constraint = input_constraint
        console.log(this.input_constraint)
        console.log("~~")
        console.log(input_constraint)
      }else {
        let len = this.items.length-1
        let adp_len = this.adp_items.length-1
        console.log("---")
        console.log(this.items[len])
        // var index = this.items[len].lastIndexOf(' ')
        // console.log(index)
        // input_constraint = this.items[len].substring(0,index)
        // input_constraint = this.adp_items[adp_len]+' '+input_constraint
        // this.items[len] = input_constraint.split(this.adp_items[adp_len])[1]

        // var index1 = this.input_constraint.indexOf(' ')
        // console.log(index1)
        // this.input_constraint = input_constraint.substring(index1-1,input_constraint.length)

        // var index = this.items[len].lastIndexOf(' ')
        // console.log(index)
        // input_constraint = this.items[len].substring(0,index)
        // input_constraint = this.adp_items[adp_len]+' '+input_constraint
        // input_constraint = this.items[len].substring(items[len].lastIndexOf(' ')+1)
        // this.items[len] = input_constraint.split(this.adp_items[adp_len])[1]
        var index = this.items[len].lastIndexOf(' ')
        console.log(index)
        console.log(this.items[len])
        input_constraint = this.items[len].substring(0,index)
        // // this.items[len] = input_constraint
        // input_constraint = this.adp_items[adp_len]+' '+input_constraint
        // var a= input_constraint.split(this.adp_items[adp_len])[1]
        // console.log(a)
        this.items[len] =input_constraint
      }
      // console.log(input_action)
console.log('ooo')
      // console.log(input_object)
      console.log(input_constraint)
      var concept
      if (this.input_constraint!=''){
        concept = this.input_object+ ' '+this.input_constraint
      }else{
        concept = this.input_object
      }
      axios
        .post(
          'http://127.0.0.1:5000/taskkg/',{action: input_action,constraint : input_constraint, patient : input_object,username:"Xu",concept:concept})
        .then(response => {
          console.log(response.data)
          this.objects=response.data
          this.tableData=[]
          var keys =Object.keys(response.data[4])
          console.log(keys)
          for(let i = 0;i<keys.length;i++){
            this.tableData.push({
              "content" : Object.keys(response.data[4])[i],
              "number" : Object.values(response.data[4])[i]
            })
          }
          console.log(this.tableData)
        }).catch(error => {
        console.log(error)
        console.log('jajajja')
      })
    },
    onAdd() {
      this.items.push('')
      this.adp_items.push('')
    },
    dialog() {
      if(this.input_action !== '' && this.input_action !== this.input_action1){
        this.query = this.input_action
      }else if (this.input_object !== ''&& this.input_object !== this.input_object1){
        this.query = this.input_object
      }else if (this.input_constraint !== '' && this.input_constraint !== this.input_constraint1) {
        this.query = this.input_constraint
      }else if (this.items !== [] && this.items.length!== this.length1) {
        let len = this.items.length-1
        this.query = this.items[0]
        console.log(this.items[0])
        console.log(this.items[len])
      }else if(this.items.length !== 0 && this.items[this.items.length-1]!== this.item){
        let len = this.items.length-1
        this.query = this.items[len]
        console.log('---')
        console.log(this.items[len])
      }
      console.log(this.items.length)
      this.dialogFormVisible = false
      this.show = true
      this.login = false
      this.answers=[]
      axios
        .post(
          'http://127.0.0.1:5000/task_kg/',{question: this.query,username:this.username})
        .then(response => {
          console.log(response.data)
          console.log(this.query)
          console.log(this.username)
          if(response.data.length==3){
            this.task = true
          }
          for(let i=0;i<response.data.length;i++){
            this.answers.push({
              content: response.data[i]
            });
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

    },
    dealt_response_data(responseData) {
      for (let i = 1; i <= responseData.length; i++)
        this.category.push({
          cate_name: i + '#' + responseData[i]['name'],
          c_name: responseData[i]['name'],
          example: responseData[i]['example']
        })
      // let arr1 = this.unique(this.verb);
      // console.log(arr1);
    },
    handleEnter(event){
      event.target.blur();
      // this.dialog()
      this.$message.success('success');
    },
    quit(){
      this.query='q'
      this.input_action = ''
      this.input_object = ''
      this.input_constraint = ''
      this.items = ''
      this.dialog()
    },
    skip(){
      this.query='no'
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
      // console.log(item);
      // console.log(this.input_object)
      this.load()
      // this.dialog()
    }
  },
  mounted:function () {
    this.load();
  }
}
</script>

<style scoped>
/*.el-input__inner{*/
/*  */
/*}*/
</style>
