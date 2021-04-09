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
        <p style="margin-top: -8px">{{'I want to '}}<span style="background: pink">{{'&lt&ltaction>>'}}</span><span style="margin-left:5px;background: navajowhite">{{' <&ltobject>>' }}</span><span style="margin-left:5px;background:skyblue">{{'<&ltconstraint/context>>.'}} </span></p>
        <p style="margin-top: 26px"><b>Example:</b>{{'I want to '}}<span style="background: pink">{{'convert'}}</span>{{' an'}}<span style="margin-left:5px;background: navajowhite">{{' integer' }}</span>{{' to'}}<span style="margin-left:5px;background:skyblue">{{'string'}} </span><span style="margin-left:5px;background:skyblue">{{'in Java'}} </span></p>
      </div>
      <div style="font-size:16px;margin-top: 22px;text-align: center;">
        {{'I want to'}}
        <el-input class='noback' size="small"  style="width:13%;margin-left: 10px"
          placeholder="please input action"
          v-model="input_action"
          @blur="dialog"
          @keyup.enter.native="handleEnter($event)"
          clearable>
        </el-input>
<!--        <el-input size="small" style="color:goldenrod;width:13%;margin-left: 14px"-->
<!--          placeholder="please input object"-->
<!--          v-model="input_object"-->
<!--          @blur="dialog"-->
<!--          @keyup.enter.native="handleEnter($event)"-->
<!--          clearable>-->
<!--        </el-input>-->
        <el-autocomplete
          size="small"
          style="color:goldenrod;width:13%;margin-left: 14px"
          v-model="input_object"
          :fetch-suggestions="querySearchAsync"
          placeholder="please input object"
          @select="handleSelect"
          @blur="dialog"
          @keyup.enter.native="handleEnter($event)"
          clearable
        ></el-autocomplete>

        <el-input size="small" style="width:14%;margin-left: 14px"
                  placeholder="please input constrain"
                  v-model="input_constraint"
                  @blur="dialog"
                  @keyup.enter.native="handleEnter($event)"
                  clearable>
        </el-input>
        <el-input size="small" v-for="(item,i) of items " :key="i" style="width:14%; margin-left: 14px;margin-top: 6px"
          placeholder="please input constrain"
          v-model="items[i]"
          @blur="dialog"
          @keyup.enter.native="handleEnter($event)"
          clearable>
        </el-input>
        <i class="el-icon-circle-plus-outline" @click="onAdd"></i>
      </div>
      <div v-if="task" style="margin:20px auto;padding-top:20px;padding-bottom:30px;width: 64%;background:lightgray;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 10px;">
        <div style="margin-top:16px;margin-left: 10px"> {{answers[1].content}} </div>
      </div>
      <div style="margin:30px auto;padding-top:20px;padding-bottom:30px;width: 64%;background:lightgray;box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 10px;">
        <div style="margin-top:16px;margin-left: 10px" v-for ="item in answers"> {{item.content}} </div>
      </div>
      <div style="margin: 10px auto;text-align: center;">
        <el-button @click="skip" type="info">skip</el-button>
        <el-button @click="quit" type="info">quit</el-button>
     </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "TaskkgTool",
  data(){
    return{
      items: [],
      input_action: '',
      input_object:'',
      input_constraint:'',
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
      objects:[{ "value": "file", "address": "长宁区新渔路144号" },
        { "value": "to", "address": "上海市长宁区淞虹路661号" },
        { "value": "python", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },]
    }
  },
  methods: {
    onAdd() {
      this.items.push('')
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
      console.log(item);
    }
  },
  // mounted:function () {
  //   this.getJson();
  // }
}
</script>

<style scoped>
/*.el-input__inner{*/
/*  */
/*}*/
</style>
