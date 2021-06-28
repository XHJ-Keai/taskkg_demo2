<template>
  <div style="background-color: gainsboro;height: 100%">
    <div id="navigation" style="width: 100%;z-index: 200000;">
      <nav class="navbar navbar-default" style="padding: 0px;background-color: #F8F8F8;border: 1px solid transparent;box-shadow: inset 0 1px 0 rgba(255, 255, 255, .15), 0 1px 5px rgba(0, 0, 0, .075);">
        <div class="container">
          <div class="navbar-header">
            <!--              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">-->
            <!--                <span class="sr-only">Toggle navigation</span>-->
            <!--                <span class="icon-bar"></span>-->
            <!--                <span class="icon-bar"></span>-->
            <!--                <span class="icon-bar"></span>-->
            <!--              </button>-->
            <a target="_blank" class="navbar-brand" href="http://10.176.34.73/CodeWisdom/index.html" style="padding: 2px;margin: 2px 0.2rem 2px 2px;">
              <img alt="" src="http://106.14.239.166:8080/CodeWisdom/img/icon.jpg" style="width: 40px;filter: contrast(95%);">
            </a>
            <a target="_blank" href="http://10.176.34.73/CodeWisdom/index.html" style="text-decoration:none;padding-right: 5px;vertical-align: middle;font-size: 1.2rem;color: #777777;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">CodeWisdom</a>
          </div>
          <div id="bs-example-navbar-collapse-1">
            <ul style="float: right;list-style: none;margin: 0px;">
              <li style="float: left;"><a target="_blank" href="http://106.14.239.166:8080/CodeWisdom/#services" style="text-decoration:none;color: #777;font-size: 15px;padding: 10px 15px;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">Services</a></li>
              <li style="float: left;"><a target="_blank" href="http://106.14.239.166:8080/CodeWisdom/#team" style="text-decoration:none;color: #777;font-size: 15px;padding: 10px 15px;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">Team</a></li>
              <li style="float: left;"><a @click="changeHash('#contact')" style="cursor: pointer;color: #777;font-size: 15px;padding: 10px 15px;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div style="height: 100%;
    width:100%;
            vertical-align:middle;
            text-align: center;">
      <h4 style="margin-top: 12px;color:dimgrey">Cerebro</h4>
    <iframe id="bot" class="rw-widget-embedded rw-conversation-container" src="http://47.116.194.87:8080/Cerebro/static/FullScreenBot.html" style="margin-left:34px;width:56%;display:inline-block;height: 90%"
            frameborder="0"
            scrolling="auto" >
    </iframe>
    </div>
  </div>
</template>
<!--<script src="https://cdn.jsdelivr.net/npm/rasa-webchat/lib/index.min.js"></script>-->
<script>
export default {
  name: 'Cerebro'
}
</script>

<style scoped>
/*#app{*/
/*  background-color: gainsboro;*/
/*  height: 100%;*/
/*  display: table;*/
/*  width: 100%;*/
/*  !*position: relative;*!*/
/*}*/
html {
  height: 100%;
  display: table;
  background-color: gainsboro;
  /*display: flex;*/
  justify-content: center;
  align-items: center;
}

body {
  display: table-cell;
  height: 100%;
}
</style>
