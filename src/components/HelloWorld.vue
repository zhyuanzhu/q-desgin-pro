<template>
  <div class="hello">
    <Icon type="success" />
    <Icon type="error" />
    <Icon type="warning" />
    <Icon type="warning-circle" />
    <Icon type="question" />
    <Icon type="question-circle" />
    <Icon type="smile-fill" />
    <Icon type="meh-fill" />
    <Icon type="frown-fill" />
    <Icon type="frown" />
    <Icon type="meh" />
    <Icon type="check" />
    <Icon type="wrong" />
    <Icon type="woman" />
    <Icon type="man" />
    <Icon type="caret-up" />
    <Icon type="caret-right" />
    <Icon type="caret-down" />
    <Icon type="caret-left" />
    <Icon type="left" />
    <Icon type="right" />
    <Icon type="doubleright" />
    <Icon type="doubleleft" />
    <Icon type="arrow-up" />
    <Icon type="arrow-right" />
    <Icon type="arrow-down" />
    <Icon type="arrow-left" />
    <Icon type="plane" />
    <Icon type="plane-fill" />
    <Icon type="ellipsis" />
    <Icon type="search" />
    <Icon type="empty" />
    <Icon type="empty-box" />
    <Icon type="safe" />
    <Icon type="eyeclose-fill" />
    <Icon type="eye-fill" />
    <Icon type="eye-close" />
    <Icon type="eye" />
    <Icon type="logout" />
    <Icon type="YUAN-circle-fill" />
    <Icon type="YUAN" />
    <Icon type="propertysafety" />
    <Icon type="propertysafety-fill" />
    <Icon type="insurance" />
    <Icon type="insurance-fill" />
    <Icon type="wechat" />
    <Icon type="QQ" />
    <Icon type="QQ-fill" />
    <Icon type="weibo" />
    <Icon type="weibo-fill" />
    <Icon type="collect" />
    <Icon type="collected" />
    <Icon type="user" />
    <Icon type="team" />
    <Icon type="unlike-fill" />
    <Icon type="like-fill" />
    <Icon type="like" />
    <Icon type="unlike" />
    <Icon type="lock-fill" />
    <Icon type="unlock-fill" />
    <Icon type="unlock" />
    <Icon type="lock" />
    <Icon type="gift" />
    <Icon type="gift-fill" />
    <Icon type="camera-fill" />
    <Icon type="camera" />
    <Icon type="redenvelope-fill" />
    <Icon type="redenvelope" />
    <Icon type="bug" />
    <Icon type="bug-fill" />
    <Icon type="home" />
    <Icon type="home-fill" />
    <Icon type="bank-fill" />
    <Icon type="bank" />
    <Icon type="error_tip-fill" />
    <Icon type="error_tip" />
    <Icon type="android-fill" />
    <Icon type="android" />
    <Icon type="apple-fill" />
    <Icon type="apple" />
    <Icon type="save-fill" />
    <Icon type="save" />
    <Icon type="read-fill" />
    <Icon type="read" />
    <Icon type="email" />
    <Icon type="cloud-download" />
    <Icon type="cloud-upload" />
    <Icon type="idcard" />
    <Icon type="idcard-fill" />
    <Icon type="experiment" />
    <Icon type="experiment-fill" />
    <Icon type="delete" />
    <Icon type="net-error" />
    <Icon type="sliders-fill" />
    <Icon type="sliders" />
    <Icon type="printer-fill" />
    <Icon type="printer" />
    <Icon type="audit" />
    <Icon type="ie" />
    <Icon type="ie-fill" />
    <Icon type="bg-colors" />
    <Icon type="barchart" />
    <Icon type="linechart" />
    <Icon type="areachart" />
    <Icon type="piechart" />
    <Icon type="schedule" />
    <Icon type="Partition" />
    <Icon type="apartment" />
    <Icon type="Report" />
    <Icon type="monitor" />
    <Icon type="unorderedlist" />
    <Icon type="menu" />
    <Icon type="creditcard" />
    <Icon type="creditcard" />
    <Icon type="dollar" />
    <Icon type="shop" />
    <Icon type="cluster" />
    <Icon type="close" />
    <Icon type="time" />
    <Icon type="calendar" />
    <Icon type="cloud" />
    <Icon type="mobile" />
    <Icon type="phone" />
    <Icon type="notice" />
    <Icon type="notice-forbid" />
    <Icon type="horn" />
    <Icon type="empty-tips" />
    <Icon type="car" />
    <Icon type="verified" />
    <Icon type="safety" />
    <Icon type="safety-fill" />
    <Icon type="star" />
    <Icon type="starhalf" />
    <Icon type="staroutline" />
    <Icon type="setting" />
    <Icon type="setting-fill" />
    <Icon type="caveat" />
    <Icon type="plus" />
    <Icon type="rise" />
    <Icon type="fall" />
    <Icon type="heart" />
    <Icon type="heart-fill" />
    <Icon type="barcode" />
    <Icon type="flag-fill" />
    <Icon type="flag" />
    <Icon type="tools" />
    <Icon type="file-image-fill" />
    <Icon type="file-image" />
    <Icon type="file-word-fill" />
    <Icon type="file-word" />
    <Icon type="file-zip" />
    <Icon type="file-zip-fill" />
    <Icon type="file-pdf-fill" />
    <Icon type="file-pdf" />
    <Icon type="file-ppt-fill" />
    <Icon type="file-ppt" />
    <Icon type="file-excel-fill" />
    <Icon type="file-excel" />
    <Icon type="file-markdown-fill" />
    <Icon type="file-markdown" />
    <Icon type="file-text-fill" />
    <Icon type="file-text" />
    <Icon type="file-unknown-fill" />
    <Icon type="file-unknown" />
    <Icon type="diff-fill" />
    <Icon type="diff" />
    <Icon type="file-copy" />
    <Icon type="file-copy-fill" />

    <hr style="margin: 25px auto;" />

    <button @click="closeBtn">测试关闭按钮</button>
 -->
    <!-- <Modal :title="'这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊'"
        :hasCancel="false"
        @on-cancel="cancelModal"
        :value="false"
      >
        <h4>test</h4>
    </Modal>-->

    <button @click="closeBtn">测试关闭按钮</button>
    <button @click="modalShow = true">测试关闭按钮</button>
    <button @click="testBtn">测试Alert</button>
    <Modal
      :title="'这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊'"
      :hasCancel="true"
      @on-cancel="cancelModal"
      :visible="modalShow"
    >
      <h4>test</h4>
      <span slot="footer">1</span>
    </Modal>

    <RadioGroup v-model="radios">
      <Radio :label="123" :value="1" />
      <Radio :label="123" :value="2" disabled />
      <Radio :label="123" :value="3" />
      <Radio :label="123" :value="4" />
    </RadioGroup>
    <p>{{ radios }}</p>

    <Select v-model="selectValue" style="margin-bottom: 40px;" placeholder="131" filter>
      <!-- <Option v-for="item in list" :key="item.id" :value="item.value" :label="item.label"></Option> -->
    </Select>

    <Select v-model="selectValue" style="margin-bottom: 40px;">
      <Option v-for="item in list" :key="item.id" :value="item.value" :label="item.label"></Option>
    </Select>

    {{ selectValue }}
    <div style="width: 1200px;">
      <!-- <steps :data="steps" :direction="'row'" /> -->
      <!-- <Steps :data="steps" :direction="'row'" :current="3" > -->
      <!-- <Step v-for="(item, index) in steps" :index="index" :key="index" :title="item.title" :content="item.content"></Step> -->
      <!-- </Steps> -->
    </div>

    <CheckboxGroup v-model="cbox">
      <Checkbox :label="'checkbox'" :value="111" disabled />
      <Checkbox :label="'checkbox'" :value="222" />
      <Checkbox :label="'checkbox'" :value="333" disabled />
    </CheckboxGroup>
    <!-- 
      <div style="height: 600px;, color: 'red'">

        <time-line :data="times" />
      </div>

      <div style="height: 200px;, color: 'red'">

        <time-line :data="times" />
    </div>-->

    <!-- <pagination :total="126" :circle="false" :showSize="true" style="margin-bottom:50px;" /> -->

    <!-- <pagination :total="126" :circle="true" :showSize="true" /> -->

    <!-- <TextArea  v-model="selectValue" :error="true" :errText="'fffffffffffffffffffff'" /> -->

    <!-- <qSwitch @on-change="switchChange"  v-model="switchVal">
        <span slot="on">ON</span>
        <span slot="off">OFF</span>
      </qSwitch>

    {{ switchVal }}-->

    <!-- <button @click="testBtn">fsfs</button> -->

    <!-- <Empty :error="true" style="margin-bottom: 50px;" />



    <Empty :error="false" />-->

    <!-- <Radio :theme="'primary'" :label="123"  v-model="isActive" /> -->
    <!-- <p>{{ isActive }}</p> -->

    <!-- <CheckboxGroup v-model="cbox">
        <Checkbox :label="'checkbox'" :value="111" disabled  />   
        <Checkbox :label="'checkbox'" :value="222"  />  
        <Checkbox :label="'checkbox'" :value="333" disabled /> 
      </CheckboxGroup>


    <p>{{ cbox }}</p>-->

    <!-- <Button :type="'empty'" :disabled="false">empty</Button>
    <Button :type="'empty'" :disabled="true">empty</Button>
    <Button :type="'text'" :disabled="false">text</Button>
    <Button :type="'text'" :disabled="true">text</Button>
    <Button :type="'primary'" :disabled="false">primary</Button>
    <Button :type="'primary'" :disabled="false">primary</Button>
    <Button :type="'success'" :disabled="true">success</Button>
    <Button :type="'success'" :disabled="false">success</Button>
    <Button :type="'error'" :disabled="false">error</Button>
    <Button :type="'error'" :disabled="true">error</Button>
    <Button :type="'warning'" :disabled="false">warning</Button>
    <Button :type="'warning'" :disabled="true">warning</Button>
    <Button>main</Button>
    <Button :disabled="true">main</Button>
    <Button :to="'//www.baidu.com'">百度</Button>
    <Button :to="'//www.baidu.com'" :disabled="true">百度</Button>-->

    <!-- <Checkbox :label="'checkbox'"  v-model="isActive" />  -->
    <!-- <p>{{ isActive }}</p> -->

    <!-- <hr style="margin-bottom: 50px"/> -->

    <!-- <Input :theme="'primary'" v-model="selectValue" /> -->

    <hr style="margin-bottom: 50px" />
    <!-- <Select :theme="'primary'" v-model="selectValue" style="margin-bottom: 40px;">
      <Option v-for="item in list" :key="item.id" :value="item.value" :label="item.value"></Option>
    </Select>
    {{ selectValue }} -->
    <Tabs
      :primaryKey="'label'"
      :data="tabDatas"
      @on-change="changeTabs"
      style="margin-bottom:50px;"
    />
    {{ switchVal }}
    <qSwitch @on-change="switchChange" v-model="switchVal" :readonly="false" >
        <span slot="on">ON</span>
        <span slot="off">OFF</span>
      </qSwitch>


      <!-- <Menu :data="menuData"  /> -->

    <Input :unit="'元'" :placeholder="'测试placeholder'" v-model="iptVal" />
    {{ iptVal }}

    <!-- <upload :theme="'primary'" :type="'cloud'" @on-change="onChangeUpload" :disabled="true" /> -->

    <!-- <Menu :data="menuData" :theme="'light'" /> -->

    <!-- <Tabs :primaryKey="'label'" :data="tabDatas" @on-change="changeTabs" style="margin-bottom:50px;" />
    <Tabs :primaryKey="'label'" :data="tabDatas" @on-change="changeTabs" :type="'card'" />-->

    <!-- <Select :theme="'primary'" :data="list" @on-select="onSelect" :show="clickS" :size="'large'" style="margin-bottom: 40px;"  /> -->

    <!-- <Button :type="'empty'" :disabled="true">empty</Button>
    <Button :type="'empty'" :disabled="false">empty</Button>
    <Button :type="'text'" :disabled="false">text</Button>
    <Button :type="'text'" :disabled="true">text</Button>
    <Button :type="'primary'" :disabled="false">primary</Button>
    <Button :type="'primary'" :disabled="true">primary</Button>
    <Button :type="'success'" :disabled="false">success</Button>
    <Button :type="'success'" :disabled="true">success</Button>
    <Button :type="'error'" :disabled="false">error</Button>
    <Button :type="'error'" :disabled="true">error</Button>
    <Button :type="'warning'" :disabled="false">warning</Button>
    <Button :type="'warning'" :disabled="true">warning</Button>
    <Button>main</Button>
    <Button :disabled="true">main</Button>
    <Button :to="'//www.baidu.com'">百度</Button>
    <Button :to="'//www.baidu.com'" :disabled="true">百度</Button>
    <section style="width:200px; height: 50px;">
      <Button :size="'long'">测试long</Button>
    
    </section>

      
      <button-group>
          <Button >按钮</Button>
          <Button >按钮</Button>
          <Button >按钮</Button>
          <Button >按钮</Button>
          <Button >按钮</Button>
      
    </button-group>-->

    <!-- <radio-group>
        <Radio :value="12" :type="'primary'" :active="isActive" @on-change="doSom"  />
      <Radio :value="12" :type="'primary'" :active="isActive" @click.native="isActive = !isActive" :disabled="true" />
      <Radio :value="12" :type="'primary'" :active="!isActive" @click.native="isActive = !isActive" />
      <Radio :value="12"  :active="!isActive" @click.native="isActive = !isActive" />

        <Radio :value="12" :active="isActive" @click.native="isActive = !isActive" />
        <Radio :value="12" :active="isActive" @click.native="isActive = !isActive" />
        <Radio :value="12" :active="isActive" @click.native="isActive = !isActive" />

    </radio-group>-->

    <!-- <Checkbox :value="'checkbox'" :active="checkBoxActive" @click.native="checkBoxActive = !checkBoxActive"  />   
      <Checkbox :value="'checkbox'" :active="checkBoxActive" :disabled="true"  />  
      <Checkbox :value="'checkbox'" :active="checkBoxActive" :partial="true" />  

      <Empty :error="true" />
    <Empty :error="false" />-->

    <!-- <Alert   /> -->
    <!-- <Alert  :type="'error'" /> -->
    <!-- <Alert  :type="'success'" v-show="showAlert" /> -->
    <!-- <button  @click="showAlert = !showAlert" >click</button> -->
    <!-- <Input :unit="'元'" :placeholder="'测试placeholder'" :disabled="true" /> -->
    <!-- <Input :unit="'元'" :errPosition="'right'" :placeholder="'测试placeholder'" :error="true" :errText="'这是一些错误的信息'"  />
      <Input :unit="'元'" :size="'large'" :placeholder="'测试placeholder'" />
      <Input :unit="'元'" :size="'large'" :placeholder="'测试placeholder'" :error="true" 
        :errText="'这是一些错误的信息'"
        :errPosition="'right'"
        v-model="ipt"
      />
      <p>===============================================</p>
      <Input :unit="'元'"  :placeholder="'测试placeholder'" :error="true" :errText="'这是一些错误的信息'"  />
      <Input :unit="'元'"  :size="'small'" :placeholder="'测试placeholder'" :error="true" :errText="'这是一些错误的信息'" />
      <Input :unit="'元'" :size="'large'" :placeholder="'测试placeholder'" />
      <Input :unit="'元'" :size="'large'" :placeholder="'测试placeholder'" :error="true" 
        :errText="'这是一些错误的信息'"
        v-model="ipt"
    />-->
    <!-- <button @click="clickS = !clickS">clickS</button> -->
    <!-- <div style="width: 200px"> -->
    <!-- <Select :data="list" @on-select="onSelect" :show="clickS"  style="margin-bottom: 40px;" />
        <Select :data="list" @on-select="onSelect" :show="clickS" :size="'large'" style="margin-bottom: 40px;"  />
    <Select :data="list" @on-select="onSelect" :show="clickS" :size="'small'"  style="margin-bottom: 40px;" />-->

    <!-- </div> -->
    <!-- <button @click="clickFn">click</button> -->

    <!-- <div style="width: 200px"> -->

    <!-- <drop-down :data="list"  :show="clickF" @on-choose="onChoose" /> -->
    <!-- </div> -->
    <!-- <text-area :value="'sfsfs'" :resize="false" />
      <text-area :value="'sfsffsfsfss'"  />
      <text-area :value="'sfsffsfsfss'" :size="large" :disabled="true" />
      <text-area :value="'sfsffsfsfss'" :size="small" :readonly="true"  />
      <text-area :value="'sfsffsfsfss'" :error="true" :errText="'错误的提示信息'" :size="small" :readonly="true"  />
    <text-area :value="'sfsffsfsfss'" :error="true" :errText="'错误的提示信息'" :size="small" :errPosition="'right'" />-->

    <!-- <pagination :total="126" :circle="false" :showSize="true" /> -->

    <!-- <div style="height: 400px;">
        <loading />
    </div>-->
    <!-- <div style="width: 300px;">
        <steps :data="steps" :current="3" />

      </div>
      <div style="width: 1200px;">
        <steps :data="steps" :direction="'row'" />

      </div>

      <div style="width: 1200px;">
        <steps :data="steps" :direction="'row'" :error="2" />

    </div>-->
    <!-- <div style="height: 600px;, color: 'red'">

        <time-line :data="times" />
      </div>

      <div style="height: 200px;, color: 'red'">

        <time-line :data="times" />
    </div>-->

    <!-- <upload :fileList="file">
        <div slot="file">1</div>
    </upload>-->

    <!-- <upload :type="'cloud'" @on-change="onChangeUpload" :disabled="true" /> -->
    <!-- <upload @on-change="onChangeUpload" :disabled="true" /> -->

    <!-- <Table :total="158" @on-change="change" :header="header" :data="data" :rowSelection="true" /> -->

    <!-- <qSwitch @on-change="switchChange" :active="true">
        <span slot="on">ON</span>
        <span slot="off">OFF</span>
      </qSwitch>
      <qSwitch @on-change="switchChange" :size="'small'" >
        <span slot="on">1</span>
        <span slot="off">2</span>
      </qSwitch>
    <button @click="testBtn">测试按钮</button>-->
    <!-- <qSwitch @on-change="switchChange" :active="true" />
      <qSwitch @on-change="switchChange" :size="'large'" :active="true" />
    <qSwitch @on-change="switchChange" :size="'small'"  />-->
    <!-- <button @click="testBtn">测试按钮</button> -->
    <!-- <button @click="closeBtn">测试关闭按钮</button> -->

    <!-- <Tabs :primaryKey="'label'" :data="tabDatas" @on-change="changeTabs" /> -->
    <!-- <Button :to="'//www.baidu.com'" >百度</Button> -->

    <!-- <Badge :count="123" :maxCount="99" /> -->

    <!-- <Menu :data="menuData" :theme="'light'" /> -->
    <!-- <router-link :to="!isActive ? '' : urlTo">测试这个router-link</router-link> -->

    <!-- <input-number /> -->
    <!-- <button @click="modalShowEvent">点击显示modal</button>
      <Modal :title="'这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊'"
        :hasCancel="false"
        @on-cancel="cancelModal"
        :value="modalShow"
      >
        <h4>test</h4>
      </Modal>

      <div style="width: 300px;">
        <steps :data="steps" :current="3" />

      </div>
      <div style="width: 1200px;">
        <steps :data="steps" :direction="'row'" />

    </div>-->
    <!-- <div style="width: 300px;">
        <steps :data="steps" :current="3" :error="2" />

    </div>-->
    <!-- <div style="width: 1200px;">
      <steps :data="steps" :direction="'row'" />
    </div> -->
    <!-- <date-picker v-model="dateTime" @on-change="changeTime" /> -->
    <!-- {{ dateTime }} -->
    <!-- <hr style="margin:25px;" /> -->
    <!-- <date-picker type="daterange" split-panels confirm /> -->

    <!-- <hr style="margin:25px;" /> -->
    <!-- <date-picker type="datetime" confirm /> -->

    <!-- <Empty :error="true" style="margin-bottom: 50px;" />

    <Empty :error="false" /> -->
    <hr style="margin:25px;"  />
    <!-- <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :onError="onError" :data="fileData"> -->
    <Upload action="//jsonplaceholder.typicode.com/posts/" :onError="onError" :data="fileData">
      <Button type="primary">
        <Icon type="cloud" />upload</Button>
    </Upload>

    <!-- <date-picker type="daterange" confirm />
      <hr style="margin:25px;" />
    <date-picker type="datetime" confirm />-->

    <!-- <Table :total="158" @on-change="change" :header="header" :data="data" :rowSelection="true" /> -->

    <!-- <button @click="modalShowEvent">点击显示modal</button>
      <Modal :title="'这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊'"
        :hasCancel="false"
        @on-cancel="cancelModal"
        :value="modalShow"
      >
        <h4>test</h4>
    </Modal>-->
    <!-- <Progress :percent="25" status="active" text-inside :strokeWidth="20" />
    <hr style="margin:25px;" />
    <Progress :percent="100" :stroke-width="20" text-inside />
    <hr style="margin:25px;" />
    <Progress :percent="25" status="wrong" hide-text />
    <hr style="margin:25px;" /> -->
    <!-- <div style="height: 300px;">
      <Progress :percent="85" status="wrong" vertical />

    </div> -->
    <hr style="margin:25px;"  />
     <Badge status="success" />
      <Badge status="error" />
      <Badge status="default" />
      <!-- <Badge status="processing" /> -->
      <Badge status="warning" />


      <Badge color="blue" text="blue" />
        <Badge color="green" text="green" />
        <Badge color="red" text="red" />
        <Badge color="yellow" text="yellow" />
        <Badge color="pink" text="pink" />
        <Badge color="magenta" text="magenta" />
        <Badge color="volcano" text="volcano" />
        <Badge color="orange" text="orange" />
        <Badge color="gold" text="gold" />
        <Badge color="lime" text="lime" />
        <Badge color="cyan" text="cyan" />
        <Badge color="geekblue" text="geekblue" />
        <Badge color="purple" text="purple" />

      <br />
      <Badge :count="511" type="primary">
        <a href="#" class="demo-badge"></a>
    </Badge>

    <Badge :count="10"></Badge>

    <Badge dot>
        <a href="#" class="demo-badge"></a>
    </Badge>

    <Rate v-model="rateValue" :allowHalf="true" showText />
    <Rate v-model="rateValue" :allowHalf="true" showText disabled />

    <Avatar />
    <Avatar size="large" />
    <Avatar size="small" />
    <Avatar size="50" />


    <Avatar size="50" shape="square" />

    <Avatar size="50" shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
    <Avatar size="50" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />

    <Avatar>
      <span slot="avatar">ZHANG</span>
    </Avatar>

    <Badge :count="511">
      <Avatar size="50"  />
    </Badge>

    <qCircle :strokeColor="circleColor" :size="80" :percent="70" ></qCircle> 
    <qCircle  :size="80" :percent="70" strokeLinecap="square">
      <span>70%</span>  
    </qCircle> 
    <!-- <div style="height: 800px;"></div> -->

    <BackTop >
        <ul>
          <li>ettfsf2</li>
          <li>ettfsf3</li>
          <li>ettfsf4</li>
          <li>ettfsf5</li>
        </ul>
        <!-- <Icon type="arrow-up" size="30" slot="backtop"></Icon> -->
    </BackTop>

    <!-- <LoadingBar /> -->
    <button @click="loadingStart">start</button>
    <button @click="loadingError">error</button>
    <button @click="loadingFinsh">finish</button>

<!-- direction="vertical" -->
    <!-- <Carousel arrow="hover" loop height="150px" trigger="click" :indicatorPosition="'outside'" >
        <CarouselItem v-for="item in 4" :key="item">{{ item }}</CarouselItem>
    </Carousel>
    <hr style="margin: 25px auto;" />
    <Carousel arrow="hover" loop height="150px" trigger="click" direction="vertical" >
        <CarouselItem v-for="item in 4" :key="item">{{ item }}</CarouselItem>
    </Carousel> -->

  </div>
</template>

<script>
/**
 *   "peerDependencies": {
    "vue": "^2.5.2"
      },
 * 
 * "vue": "^2.5.2",
    "vue-router": "^3.0.1"
 * 
 */

import LoadingBar from './loading-bar'

import Button from "./button";
import ButtonGroup from "./button-group";

import Radio from "./radio";
// import RadioGroup  from './radio-group'

import Checkbox from "./checkbox";

import Empty from "./empty";

import Modal from "./modal";

import Alert from "./alert";

import Input from "./input";

import Select from "./select";

import DropDown from "./dropdown";

import TextArea from "./textarea";

import Pagination from "./pagination";

import Loading from "./loading";

import Steps from "./steps";

import TimeLine from "./timeline";

import Upload from "./upload";

import Table from "./table";

import qSwitch from "./switch";

import Message from "./message";

import Tabs from "./tabs";

import Badge from "./badge";

import Menu from "./menu";

import InputNumber from "./inputnumber";

import Option from "./option";

import Icon from "./icon";

import DatePicker from "./date-picker";

import Progress from './progress'

import Rate from './rate'

import Avatar from './avatar'

import Circle from './circle'

import BackTop from './back-top'

import Carousel from './carousel'

import CarouselItem from './carousel-item'

export default {
  name: "HelloWorld",
  components: {
    Carousel,
    CarouselItem,
    BackTop,
    qCircle: Circle,
    Avatar,
    Rate,
    Progress,
    Button,
    ButtonGroup,
    Radio,
    RadioGroup: Radio.Group,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    Empty,
    Modal,
    Alert,
    Input,
    Select,
    DropDown,
    TextArea,
    Pagination,
    Loading,
    Steps,
    // Step: Steps.Step,
    TimeLine,
    Upload,
    Table,
    qSwitch,
    Message,
    Tabs,
    Badge,
    Menu,
    InputNumber,
    Option,
    Icon,
    DatePicker,
    LoadingBar
  },
  data() {
    return {
      circleColor: ['red', 'green'],
      rateValue: 3.7,
      fileData: { a: 1 },
      dateTime: "2019-12-04",
      msg: "Welcome to Your Vue.js App",
      switchVal: true,
      selectValue: "1",
      cbox: [111, 222],
      radios: "1",
      modalShow: false,
      isActive: true,
      checkBoxActive: true,
      ipt: "",
      clickF: false,
      clickS: false,
      showAlert: false,
      large: "large",
      small: "small",
      urlTo: "/131/fs",
      iptVal: "",
      options1: {
        shortcuts: [
          {
            text: "Today",
            value() {
              return new Date();
            },
            onClick: picker => {
              // this.$Message.info('Click today');
            }
          },
          {
            text: "Yesterday",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              return date;
            },
            onClick: picker => {
              // this.$Message.info('Click yesterday');
            }
          },
          {
            text: "One week",
            value() {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              return date;
            },
            onClick: picker => {
              // this.$Message.info('Click a week ago');
            }
          }
        ]
      },
      list: [
        {
          active: false,
          disabled: false,
          value: "0",
          id: 1,
          label: '下拉菜单哈哈哈0'
        },
        { active: false, disabled: false, value: "1", id: 2, label: '超级下拉菜单哈哈哈1' },
        { active: false, disabled: false, value: "2", id: 3, label: '下拉菜单哈哈哈2' },
        { active: false, disabled: false, value: "3", id: 4, label: '下拉菜单哈哈哈3' },
        { active: false, disabled: false, value: "4", id: 5, label: '下拉菜单哈哈哈4' },
        { active: false, disabled: false, value: "5", id: 13, label: '下拉菜单哈哈哈5' },
        { active: false, disabled: false, value: "6", id: 35, label: '下拉菜单哈哈哈6' },
        { active: true, disabled: false, value: "7", id: 115, label: '下拉菜单哈哈哈7' },
        { active: false, disabled: false, value: "8", id: 50, label: '下拉菜单哈哈哈8' }
      ],
      steps: [
        { title: "第一步", content: "测试的content数据", id: 1, icon: "user" },
        {
          title: "第一步",
          content: "测试的content数据",
          id: 2,
          icon: "mobile"
        },
        {
          title: "第一fsfsfs步",
          content: "测试的content数据",
          id: 3,
          icon: "phone"
        },
        { title: "第一步", content: "测试的content数据", id: 4, icon: "delete" }
      ],
      times: [
        { time: "1974年", content: "Apple I 问世" },
        { time: "1984年", content: "发布 Macintosh" },
        { time: "2007年", content: "发布 iPhone" },
        { time: "2010年", content: "发布 iPad" },
        { time: "2011年10月5日", content: "史蒂夫·乔布斯去世" }
      ],
      file: [
        { url: "1313A" },
        { url: "1313B" },
        { url: "1313C" },
        { url: "1313D" },
        { url: "1313E" }
      ],
      header: [
        { tableKey: "name", tableVal: "用户名" },
        { tableKey: "age", tableVal: "年龄" },
        { tableKey: "place", tableVal: "籍贯" },
        { tableKey: "gender", tableVal: "性别" },
        { tableKey: "career", tableVal: "职业" },
        { tableKey: "hobby", tableVal: "兴趣爱好" }
      ],
      data: [
        {
          name: "James",
          age: "18",
          place: "China",
          gender: "男",
          career: "不知道是什么职业",
          hobby: "没啥爱好",
          checked: false,
          id: 1
        },
        {
          name: "James",
          age: "18",
          place: "China",
          gender: "男",
          career: "不知道是什么职业",
          hobby: "没啥爱好",
          checked: true,
          id: 2
        },
        {
          name: "James",
          age: "18",
          place: "China",
          gender: "男",
          career: "不知道是什么职业",
          hobby: "没啥爱好",
          checked: true,
          id: 3
        },
        {
          name: "James",
          age: "18",
          place: "China",
          gender: "男",
          career: "不知道是什么职业",
          hobby: "没啥爱好",
          checked: false,
          id: 4
        },
        {
          name: "James",
          age: "18",
          place: "China",
          gender: "男",
          career: "不知道是什么职业",
          hobby: "没啥爱好",
          checked: true,
          id: 5
        },
        {
          name: "James",
          age: "18",
          place: "China",
          gender: "男",
          career: "不知道是什么职业",
          hobby: "没啥爱好",
          checked: false,
          id: 6
        }
      ],
      tabDatas: [
        {
          label: "标签1",
          id: "1",
          active: true,
          disabled: false,
          icon: "mobile"
        },
        {
          label: "标签2",
          id: "2",
          active: false,
          disabled: false,
          icon: "phone"
        },
        {
          label: "标fsfs签3",
          id: "3",
          active: false,
          disabled: false,
          icon: "delete"
        }
      ],
      menuData: [
        {
          label: "数据报表",
          id: "dataSource",
          active: true,
          icon: 'mobile',
          children: [
            { label: "手机助手", id: "phone", active: false, to: "/akjhf" },
            { label: "清理大师", id: "ds", active: false, to: "/akjhf" },
            { label: "手机清理管理", id: "gj", active: false, to: "/akjhf" },
            { label: "手机清理管理", id: "gjd", active: false, to: "/akjhf" },
            { label: "手机清理管理", id: "gjf", active: true, to: "/akjhf" },
            { label: "手机清理管理", id: "gjs", active: false, to: "/akjhf" }
          ]
        },
        {
          label: "其他数据报表",
          id: "dataSource1",
          active: false,
          icon: 'phone',
          children: [
            { label: "手机助手1", id: "phone1", active: false, to: "/akjhf" },
            { label: "清理大师1", id: "ds1", active: false, to: "/akjhf" },
            { label: "手机清理管理1", id: "gj1", active: false, to: "/akjhf" }
          ]
        },
        {
          label: "没有children2",
          id: "noChildf",
          active: false,
          to: "/fsj",
          icon: 'delete'
        },
        {
          label: "没有children",
          id: "noChild",
          active: false,
          to: "/fsj",
          icon: 'person'
        }
      ]
    };
  },
  created () {
    LoadingBar.config({
    color: '#5cb85c',
    errorColor: '#f0ad4e',
    height: 5
  })},
  methods: {
    loadingStart () {
      LoadingBar.start()
    },
  loadingError() {
    LoadingBar.error()
  },
  loadingFinsh() {
    LoadingBar.finish()
  },
    onError(err, msg, f) {
      console.log('---------------------')
      console.log(err)
      console.log(msg)
      console.log(f)
      console.log('----------')
    },
    changeTime(v) {
      this.dateTime = v;
    },
    testIpt() {
      console.log(this.iptVal);
    },
    modalShowEvent() {
      this.modalShow = !this.modalShow;
    },
    cancelModal() {
      this.modalShow = !this.modalShow;
    },
    doSom(v) {
      // this.isActive = true
      console.log(v);
    },
    clickFn() {
      this.clickF = !this.clickF;
    },
    onChoose(v) {
      this.list.map(item => (item.active = false));
      v.active = !v.active;
      this.clickF = !this.clickF;
    },
    onSelect(v) {
      this.clickS = !this.clickS;
    },
    change(page) {
      console.log(`当前页数是${page}`);
    },
    switchChange(v) {
      console.log(`switch的值现在是：${v}`);
    },
    testBtn() {
      // Loading.show();
      // setTimeout(() => {
      //   Loading.destroy()
      // }, 5000)
      // Message.error({
      //   text: '看看这个会咋样',
      //   onOk() {
      //     console.log(1)
      //     return 1
      //   }, });
      Alert({
        type: "warning",
        text: "这是一个alert弹窗咯这是一个alert弹窗咯"
      });
    },
    closeBtn() {
      // Loading.hide();

      this.$Message.warning({
        text: "看看这个会咋样23",
        onOk() {
          console.log(1);
          return 1;
        },
        onCancel() {}
      });
    },
    onChangeUpload(data) {
      console.log(data);
    },
    changeTabs(v) {
      console.log(v);
    }
  }
};
</script>
<style lang="scss">
  .demo-badge {
        width: 54px;
    height: 54px;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
  }
</style>

