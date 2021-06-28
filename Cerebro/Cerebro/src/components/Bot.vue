<template>
  <div class="wrapper" style="background-color: gainsboro;">
    <div class="main"  style="margin: 80px auto;">
      <div style="width:26%;margin-top:8px;height: 580px;margin-left:6%;background-color: white;float: left;">
        <div style="float: left">
          <a target="_blank"  href="http://10.176.34.73/CodeWisdom/index.html" style="margin-left: 20px;">
            <img alt="" src="http://106.14.239.166:8080/CodeWisdom/img/icon.jpg" style="margin-left: 18px;padding-top: 40px;width: 50px;filter: contrast(95%);">
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
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: dimgrey">Find Simple Code</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url"
                title="Click to see a larger image"
                :preview-src-list="srcList">
              </el-image>
              <!--              <img src="/static/image/simplecode1.png" class="carousel_image_type">-->
            </el-carousel-item>
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: #55595e">Learn about API</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url1"
                title="Click to see a larger image"
                :preview-src-list="srcList1">
              </el-image>
              <!--              <img src="/static/image/api1.png" class="carousel_image_type">-->
            </el-carousel-item>
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: dimgrey">Explain Concepts in Code</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url2"
                title="Click to see a larger image"
                :preview-src-list="srcList2">
              </el-image>
              <!--              <img src="/static/image/simplecode2.png" class="carousel_image_type">-->
            </el-carousel-item>
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: #55595e">Compare two APIs</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url3"
                title="Click to see a larger image"
                :preview-src-list="srcList3">
              </el-image>
              <!--              <img src="/static/image/api_vs1.png" class="carousel_image_type">-->
            </el-carousel-item>
            <el-carousel-item>
              <p style="text-align: center;font-size:15px;margin-bottom: -1px;color: #55595e">Explain Software-related Concept</p>
              <el-image
                style="width: 100%; height: 100%"
                :src="url4"
                title="Click to see a larger image"
                :preview-src-list="srcList4">
              </el-image>
              <!--              <img src="/static/image/api_vs1.png" class="carousel_image_type">-->
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>

      <!--      <h4 style="margin-top: 12px;color:dimgrey">Cerebro</h4>-->
      <iframe class="mapFrame" ref="mapFrame" id="bot" src="/static/FullScreenBot.html" style="margin-left:-2px;width:50%;height: 590px;float: left;" scrolling="no"
              frameborder="0" >
      </iframe>
      <div style="float:right;width:20%;margin-top:120px;margin-right:-40px;background:#efecec;box-shadow: 0 6px 6px rgba(0,0,0,0.12), 0 0 6px rgba(0, 0, 0, .04);border-radius: 10px;" >

        <div><h5 style="margin-top: 20px;font-weight:bold;margin-left: 8px;color: #195399">Tips:</h5>
          <el-collapse style="margin-top: 10px;font-weight:bold;margin-left: 10px;margin-right: 10px;margin-bottom: 10px;" v-model="activeName" accordion>
            <el-collapse-item>
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:14px;color:#878686;margin-left: 6px">Find Simple Code</span>
              </template>
              <div class="1" ref="tip1" style="margin-left:6px;font-size: 13px;color: #5d6265"  @click="sendMessage1">{{find_simple_code}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(find_simple_code)"></i>
              </div>
            </el-collapse-item>
            <el-collapse-item  >
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:14px;color:#878686;margin-left: 6px">Learn about API</span>
              </template>
              <div style="margin-left:6px;font-size: 13px;color: #5d6265"  @click="sendMessage2">{{learn_about_API}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(learn_about_API)"></i></div>
            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:14px;color:#878686;margin-left: 6px">Compare two APIs</span>
              </template>
              <div style="margin-left:6px;font-size: 13px;color: #5d6265"  @click="sendMessage3">{{compare_two_APIs}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(compare_two_APIs)"></i></div>

            </el-collapse-item>
            <el-collapse-item>
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:14px;color:#878686;margin-left: 6px">Explain Concepts in Code</span>
              </template>
              <div style="margin-left:6px;font-size: 13px;color: #5d6265"  @click="sendMessage4">{{explain_concepts_in_code}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(explain_concepts_in_code)"></i></div>
            </el-collapse-item>
            <el-collapse-item  >
              <template slot="title">
                <span style="float:left;font-weight:bold;font-size:14px;color:#878686;margin-left: 6px">Explain Concept</span>
              </template>
              <div style="margin-left:6px;font-size: 13px;color: #5d6265"  @click="sendMessage5">{{explain_software_related_concept}}
                <i class="el-icon-document-copy" @click="copyShaneUrl(explain_software_related_concept)"></i></div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>

    <div class="footer" style="text-align: center;margin-top: -40px">
      <div style>
        <el-button type="text" @click="dialogVisible1 = true" style="margin-left:8px;font-size: 1.0rem;color: #777777;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">Join Us</el-button>
        <el-dialog
          title="CodeWisdom"
          :visible.sync="dialogVisible1"

        >
          <span><h6 style="margin-left: 18px">Welcome to join us !</h6><img alt="CodeWisdom" src="http://47.116.194.87:8080/Cerebro/static/image/CodeWisdom.jpg"></span>
        </el-dialog>
        <span style="margin-left:8px;font-size: 1.0rem;color: #777777;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">|</span>
        <el-button type="text" @click="dialogVisible2 = true" style="margin-left:8px;font-size: 1.0rem;color: #777777;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">Contact Us</el-button>
        <el-dialog
          title="Contact Us"
          :visible.sync="dialogVisible2"
          width="40%"
        >
          <span><h6 style="margin-left: 18px">Your valuable comments are welcome at any time.</h6><p>Email:20212010075@fudan.edu.cn</p></span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<!--<script src="https://cdn.jsdelivr.net/npm/rasa-webchat/lib/index.min.js"></script>-->
<script>
export default {
  name: 'Bot',
  data() {
    return {
      dialogVisible: false,
      dialogVisible1:false,
      dialogVisible2:false,
      url: 'http://47.116.194.87:8080/Cerebro/static/image/simplecode1.png',
      url1: 'http://47.116.194.87:8080/Cerebro/static/image/api1.png',
      url2: 'http://47.116.194.87:8080/Cerebro/static/image/simplecode2.png',
      url3: 'http://47.116.194.87:8080/Cerebro/static/image/api_vs2.jpg',
      url4: 'http://47.116.194.87:8080/Cerebro/static/image/concept.png',
      srcList: [
        'http://47.116.194.87:8080/Cerebro/static/image/simplecode1.png',
      ],
      srcList1: [
        'http://47.116.194.87:8080/Cerebro/static/image/api1.png',
      ],
      srcList2: [
        'http://47.116.194.87:8080/Cerebro/static/image/simplecode2.png',
      ],
      srcList3: [
        'http://47.116.194.87:8080/Cerebro/static/image/api_vs1.png',
      ],
      srcList4: [
        'http://47.116.194.87:8080/Cerebro/static/image/concept.png',
      ],
      activeName:'1',
      find_simple_code:'int to string',
      learn_about_API:'I want to know StringBuffer\'s summary',
      compare_two_APIs:'StringBuffer vs StringBuilder',
      explain_software_related_concept:'java',
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
    },

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
