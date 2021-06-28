<template>
  <div class="wrapper" style="background-color: gainsboro;">
    <!--    <div id="navigation" style="width: 100%;z-index: 200000;">-->
    <!--      <nav class="navbar navbar-default" style="padding: 0px;background-color: #F8F8F8;border: 1px solid transparent;box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);">-->
    <!--        <div class="container">-->
    <!--          <div class="navbar-header">-->
    <!--            &lt;!&ndash;              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">&ndash;&gt;-->
    <!--            &lt;!&ndash;                <span class="sr-only">Toggle navigation</span>&ndash;&gt;-->
    <!--            &lt;!&ndash;                <span class="icon-bar"></span>&ndash;&gt;-->
    <!--            &lt;!&ndash;                <span class="icon-bar"></span>&ndash;&gt;-->
    <!--            &lt;!&ndash;                <span class="icon-bar"></span>&ndash;&gt;-->
    <!--            &lt;!&ndash;              </button>&ndash;&gt;-->
    <!--            <img alt="" src="/static/image/fdlogo.png" style="width: 40px;filter: contrast(95%);">-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </nav>-->
    <!--    </div>-->

    <!--    <img alt="" src="/static/image/fdlogo.png" style="margin-left: 10%;margin-top:20px;margin-bottom:-40px;width: 70px;filter: contrast(95%);">-->
    <div class="main"  style="margin: 80px auto;">
      <div style="width:25%;margin-top:8px;height: 580px;margin-left:5%;background-color: white;float: left;">
        <div style="float: left">
          <img alt="" src="http://47.116.194.87:8080/Cerebro/static/image/fdlogo.png" style="margin-left: 28px;padding-top: 40px;width: 50px;filter: contrast(95%);">
          <a target="_blank"  href="http://10.176.34.73/CodeWisdom/index.html" style="margin-left: 4px;">
            <img alt="" src="http://106.14.239.166:8080/CodeWisdom/img/icon.jpg" style="padding-top: 40px;width: 50px;filter: contrast(95%);">
          </a>
        </div>
        <!--        <a target="_blank" href="http://10.176.34.73/CodeWisdom/index.html" style="text-decoration:none;padding-right: 5px;font-size: 1.2rem;color: #777777;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">Cerebro</a>-->
        <div style="float: left;text-align: center;">
          <el-button type="text" @click="dialogVisible = true" style="margin-left:8px;margin-top: 50px;font-size: 1.2rem;color: #777777;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">Cerebro</el-button>

          <el-dialog
            title="CodeWisdom"
            :visible.sync="dialogVisible"
          >
            <span><h6 style="margin-left: 18px">Welcome to join us !</h6><img alt="CodeWisdom" src="http://47.116.194.87:8080/Cerebro/static/image/CodeWisdom.jpg"></span>
          </el-dialog>
        </div>
        <div style="margin-top: 120px;width: 76%;margin-left: 12%;color: #555353;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">
          Hi, I am Cerebro, which means brain in Spanish. Looking forward to helping you in programming.
        </div>
        <div class="block" style="width: 76%;text-align: center;margin: 30px auto;border-radius: 25px">
          <span class="demonstration"></span>
          <el-carousel indicator-position="none" >
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: dimgrey">Concept Explanation</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url"
                title="Click to see a larger image"
                :preview-src-list="srcList">
              </el-image>
              <!--              <img src="/static/image/simplecode1.png" class="carousel_image_type">-->
            </el-carousel-item>
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: #55595e">API Usage Learning</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url1"
                title="Click to see a larger image"
                :preview-src-list="srcList1">
              </el-image>
              <!--              <img src="/static/image/api1.png" class="carousel_image_type">-->
            </el-carousel-item>
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: dimgrey">API Knowledge Query</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url2"
                title="Click to see a larger image"
                :preview-src-list="srcList2">
              </el-image>
              <!--              <img src="/static/image/simplecode2.png" class="carousel_image_type">-->
            </el-carousel-item>
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: #55595e">API Comparison</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url3"
                title="Click to see a larger image"
                :preview-src-list="srcList3">
              </el-image>
              <!--              <img src="/static/image/api_vs1.png" class="carousel_image_type">-->
            </el-carousel-item>
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: #55595e">Task-based API Search</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url4"
                title="Click to see a larger image"
                :preview-src-list="srcList4">
              </el-image>
              <!--              <img src="/static/image/api_vs1.png" class="carousel_image_type">-->
            </el-carousel-item>
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: #55595e">Task-based Code Search</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url5"
                title="Click to see a larger image"
                :preview-src-list="srcList5">
              </el-image>
              <!--              <img src="/static/image/api_vs1.png" class="carousel_image_type">-->
            </el-carousel-item>
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: #55595e">Task-based Library Search</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url6"
                title="Click to see a larger image"
                :preview-src-list="srcList6">
              </el-image>
              <!--              <img src="/static/image/api_vs1.png" class="carousel_image_type">-->
            </el-carousel-item>
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: #55595e">Library Knowledge Query</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url7"
                title="Click to see a larger image"
                :preview-src-list="srcList7">
              </el-image>
              <!--              <img src="/static/image/api_vs1.png" class="carousel_image_type">-->
            </el-carousel-item>
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: #55595e">Learning Resources Recommend</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url8"
                title="Click to see a larger image"
                :preview-src-list="srcList8">
              </el-image>
              <!--              <img src="/static/image/api_vs1.png" class="carousel_image_type">-->
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <!--      <h4 style="margin-top: 12px;color:dimgrey">Cerebro</h4>-->
      <iframe class="mapFrame" ref="mapFrame" id="bot" src="http://47.116.194.87:8080/Cerebro/static/FullScreenBot.html" style="margin-left:-2px;width:48%;height: 590px;float: left;" scrolling="no"
              frameborder="0" >
      </iframe>
      <div style="float:right;width:24%;margin-top:58px;margin-right:-38px;background:#efecec;box-shadow: 0 6px 6px rgba(0,0,0,0.12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 10px;" >

        <div>
          <p style="margin-top: 20px;font-weight:bold;font-size:16px;margin-left: 8px;color: #195399">Tips:</p>
          <el-collapse style="margin-top: 5px;font-weight:bold;margin-left: 10px;margin-right: 10px;margin-bottom: 10px;" v-model="activeName" accordion>
            <el-collapse-item  >
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:12px;color:#878686;margin-left: 6px">Concept Explanation</span>
              </template>
              <div style="margin-left:6px;font-size: 12px;color: #5d6265" >{{explain_concept}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(explain_concept)"></i></div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:12px;color:#878686;margin-left: 6px">API Comparison</span>
              </template>
              <div style="margin-left:6px;font-size: 12px;color: #5d6265">{{compare_two_APIs}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(compare_two_APIs)"></i></div>
            </el-collapse-item>
            <el-collapse-item  >
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:12px;color:#878686;margin-left: 6px">API Knowledge Query</span>
              </template>
              <div style="margin-left:6px;font-size: 12px;color: #5d6265">{{learn_about_API}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(learn_about_API)"></i></div>
            </el-collapse-item>

            <el-collapse-item>
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:12px;color:#878686;margin-left: 6px">API Usage Learning</span>
              </template>
              <div style="margin-left:6px;font-size: 12px;color: #5d6265">{{API_usage}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(API_usage)"></i></div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:12px;color:#878686;margin-left: 6px">Task-based API Search</span>
              </template>
              <div style="margin-left:6px;font-size: 12px;color: #5d6265">{{taskbased_api_search}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(taskbased_api_search)"></i></div>

            </el-collapse-item>


            <el-collapse-item>
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:12px;color:#878686;margin-left: 6px">Task-based Code Search</span>
              </template>
              <div style="margin-left:6px;font-size: 12px;color: #5d6265">{{taskbased_code_search}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(taskbased_code_search)"></i></div>

            </el-collapse-item>

            <el-collapse-item>
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:12px;color:#878686;margin-left: 6px">Task-based Library Search</span>
              </template>
              <div style="margin-left:6px;font-size: 12px;color: #5d6265">{{taskbased_library_search}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(taskbased_library_search)"></i></div>

            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:12px;color:#878686;margin-left: 6px">Library Knowledge Query</span>
              </template>
              <div class="1" ref="tip1" style="margin-left:6px;font-size: 12px;color: #5d6265" >{{library_knowledge_query}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(library_knowledge_query)"></i>
              </div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:12px;color:#878686;margin-left: 6px">Learning Resources Recommend</span>
              </template>
              <div style="margin-left:6px;font-size: 12px;color: #5d6265" >{{learning_resources_recommend}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(learning_resources_recommend)"></i></div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
    <iframe class="mapFrame" ref="mapFrame" src="http://47.116.194.87:8080/Cerebro/static/index1.html" style="margin-left:-2px;width:48%;height: 590px;float: left;" scrolling="no"
            frameborder="0" >
    </iframe>

    <div class="footer" style="text-align: center;margin-top: -40px">
      <div style>
        <el-button type="text" @click="dialogVisible1 = true" style="margin-left:8px;font-size: 1.0rem;color: #777777;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">Follow Us</el-button>
        <i class="el-icon-user-solid"></i>
        <el-dialog
          title="CodeWisdom"
          :visible.sync="dialogVisible1"

        >

          <span><h6 style="margin-left: 18px">Welcome to follow us !</h6><img alt="CodeWisdom" src="http://47.116.194.87:8080/Cerebro/static/image/CodeWisdom.jpg"></span>
        </el-dialog>
        <span style="margin-left:8px;font-size: 1.0rem;color: #777777;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">|</span>
        <el-button type="text" @click="dialogVisible2 = true" style="margin-left:8px;font-size: 1.0rem;color: #777777;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">Contact Us</el-button>
        <i class="el-icon-message"></i>
        <el-dialog
          title="Contact Us"
          :visible.sync="dialogVisible2"
          width="40%"
        >
          <span><h6 style="margin-left: 18px">Your valuable comments are welcome at any time.</h6><p>Email: 19110240019@fudan.edu.cn</p>
          <p style="margin-left: 18px;margin-right: 18px">You can also tell Cerebro what you want it to improve, and it will continue to grow. (ง ˙o˙)ง</p>
          </span>
        </el-dialog>

        <span style="margin-left:8px;font-size: 1.0rem;color: #777777;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">|</span>
        <el-button type="text" @click="dialogFormVisible= true" style="margin-left:8px;font-size: 1.0rem;color: #777777;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">Feedback</el-button>
        <i class="el-icon-edit-outline"></i>
        <el-dialog
          title="Feedback"
          :visible.sync="dialogFormVisible"
          width="40%"
        >
          <form style="width: 90%; margin-left:5%">
            <div class="form-group">
              <!--                          <label for="Name">Name</label>-->
              <input style="margin-bottom: 6px" type="text" class="form-control" id="Name" placeholder="Title" v-model="feedbackInfo.title">
            </div>
            <!--                        <div class="form-group">-->
            <!--                          <label for="Affilation">Affilation</label>-->
            <!--                          <input type="text" class="form-control" id="Affilation" placeholder="Affilation">-->
            <!--                        </div>-->
            <div class="form-group">
              <!--                          <label for="Email">Email</label>-->
              <input style="margin-bottom: 6px" type="email" class="form-control" id="Email" placeholder="Email" v-model="feedbackInfo.email">
            </div>
            <div class="form-group">
              <!--                          <label for="YourFeedback">Your Feedback</label>-->
              <textarea type="textarea" class="form-control" id="YourFeedback" placeholder="Your Feedback" rows="5" v-model="feedbackInfo.text"></textarea>
            </div>
          </form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button type="primary" @click="feedback">Submit</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Cerebro_new',
  data() {
    return {
      dialogVisible: false,
      dialogVisible1:false,
      dialogVisible2:false,
      dialogFormVisible:false,
      iframeWin: {},
      feedbackInfo: {
        title: '',
        text: '',
        email: ''
      },
      url: 'http://47.116.194.87:8080/Cerebro/static/image/concept_explanation.png',
      url1: 'http://47.116.194.87:8080/Cerebro/static/image/api_usage.png',
      url2: 'http://47.116.194.87:8080/Cerebro/static/image/api_knowledge.png',
      url3: 'http://47.116.194.87:8080/Cerebro/static/image/api_vs2.jpg',
      url4: 'http://47.116.194.87:8080/Cerebro/static/image/task_api_search.png',
      url5: 'http://47.116.194.87:8080/Cerebro/static/image/task_code_search.png',
      url6: 'http://47.116.194.87:8080/Cerebro/static/image/task_library_search.png',
      url7: 'http://47.116.194.87:8080/Cerebro/static/image/library_knowledge_query.png',
      url8: 'http://47.116.194.87:8080/Cerebro/static/image/learning_resources_recommend.png',
      srcList: [
        'http://47.116.194.87:8080/Cerebro/static/image/concept_explanation.png',
      ],
      srcList1: [
        'http://47.116.194.87:8080/Cerebro/static/image/api_usage.png',
      ],
      srcList2: [
        'http://47.116.194.87:8080/Cerebro/static/image/api_knowledge.png',
      ],
      srcList3: [
        'http://47.116.194.87:8080/Cerebro/static/image/api_vs1.png',
      ],
      srcList4: [
        'http://47.116.194.87:8080/Cerebro/static/image/task_api_search.png',
      ],
      srcList5: [
        'http://47.116.194.87:8080/Cerebro/static/image/task_code_search.png',
      ],
      srcList6: [
        'http://47.116.194.87:8080/Cerebro/static/image/task_library_search.png',
      ],
      srcList7: [
        'http://47.116.194.87:8080/Cerebro/static/image/library_knowledge_query.png',
      ],
      srcList8: [
        'http://47.116.194.87:8080/Cerebro/static/image/learning_resources_recommend.png',
      ],
      activeName:'1',
      taskbased_code_search:'int to String',
      taskbased_api_search:'I want to find an API for my task.',
      taskbased_library_search:'I want to find a library for my task.',
      find_simple_code:'int to string',
      library_knowledge_query:'What language is Spotbugs written by?',
      learn_about_API:'StringBuffer\'s functionality',
      API_usage:'How can I use StringBuffer?',
      compare_two_APIs:'StringBuffer vs StringBuilder',
      learning_resources_recommend:'Where can I find some learning resources for Python?',
      explain_concept:'What is java?',
      explain_concepts_in_code:'public class HelloWorld {\n' +
        '    public static void main(String[] args) {\n' +
        '        System.out.println("Hello World");\n' +
        '    }\n' +
        '}'
    };
  },
  methods: {
    copyShaneUrl(shareLink){
      var input = document.createElement("input");   // 直接构建input
      input.value = shareLink;  // 设置内容
      document.body.appendChild(input);    // 添加临时实例
      input.select();   // 选择实例内容
      document.execCommand("Copy");   // 执行复制
      document.body.removeChild(input); // 删除临时实例
      this.$message({
        message: 'Congratulations on your successful copy~  Go and talk to Cerebro quickly!   ੭ ˙ᗜ˙ )੭',
        type: 'success'
      });
    },
    feedback () {
      console.log(this.feedbackInfo)
      this.dialogFormVisible = false
      axios
        .post('http://47.116.194.87/Cerebro/insert/',
          {
            title: this.feedbackInfo.title,
            text: this.feedbackInfo.text,
            email: this.feedbackInfo.email
          })
        .then(response => {
          console.log("jajaj")
          // if (response.data["success"]) {
          alert("Feedback success, thank you very much.")
          // this.hide_feedback()
          this.feedbackInfo.title = ''
          this.feedbackInfo.text = ''
          this.feedbackInfo.email = ''
          // }
        })
        .catch(error => console.log(error))
    },
    // sendMessage1(){
    //   let mapFrame = this.$refs['mapFrame']
    //     console.log(mapFrame)
    //     let iframeWin = mapFrame.contentWindow
    //     var getText = this.$refs.tip1.innerText;
    //     console.log(getText)
    //     iframeWin.postMessage({
    //           cmd:'getDate',
    //           data:getText
    //         },'*')
    //   },
    // sendMessage2(){
    //   let mapFrame = this.$refs['mapFrame']
    //   console.log(mapFrame)
    //   let iframeWin = mapFrame.contentWindow
    //   iframeWin.postMessage({
    //     cmd:'getDate',
    //     data:this.learn_about_API
    //   },'*')
    // },
    // sendMessage3(){
    //   let mapFrame = this.$refs['mapFrame']
    //   console.log(mapFrame)
    //   let iframeWin = mapFrame.contentWindow
    //   iframeWin.postMessage({
    //     cmd:'getDate',
    //     data:this.compare_two_APIs
    //   },'*')
    // },
    // sendMessage4(){
    //   let mapFrame = this.$refs['mapFrame']
    //   console.log(mapFrame)
    //   let iframeWin = mapFrame.contentWindow
    //
    //   iframeWin.postMessage({
    //     cmd:'getDate',
    //     data:this.explain_concepts_in_code
    //   },'*')
    // },
    // sendMessage5(){
    //   let mapFrame = this.$refs['mapFrame']
    //   console.log(mapFrame)
    //   let iframeWin = mapFrame.contentWindow
    //   iframeWin.postMessage({
    //     cmd:'getDate',
    //     data:this.explain_software_related_concept
    //   },'*')
    // },
  },
  updated(){
    // 聊天定位到底部
    let ele = document.getElementById('bot');
    ele.scrollTop = ele.scrollHeight;
  },
  // watch: {
  //   chatlog() {
  //     var container = this.$el.querySelector("#bot");
  //     console.log(container);
  //     container.scrollTop = container.scrollHeight;
  //   }
  // }
}
// window.frames["iframeName"].scrollTo(0,window.frames["iframeName"].document.body.scrollHeight)
</script>

<style>
html {
  /*height: 100%;*/
  /*display: table;*/
  background-color: gainsboro;
  display: flex;
  /*justify-content: center;*/
  /*align-items: center;*/
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.carousel_image_type{
  width: 100%;
  height: 100%;
}
.wrapper {
  display: flex;
  flex-direction: column;
  /*min-height: 100%;*/
}
.main{
  flex: 1;
  /*background-color:saddlebrown;*/
  width: 90%;
}
.footer {
  flex: 0;
}
</style>

