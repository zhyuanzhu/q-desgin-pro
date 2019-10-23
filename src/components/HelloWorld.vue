<template>
  <div class="hello">
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
      
      </button-group> -->

      <!-- <Radio :value="12" :active="isActive" @on-change="doSom"  /> -->
      <!-- <Radio :value="12" :active="isActive" @click.native="isActive = !isActive" :disabled="true" />
      <Radio :value="12" :active="!isActive" @click.native="isActive = !isActive" /> -->

      <!-- <radio-group>

        <Radio :value="12" :active="isActive" @click.native="isActive = !isActive" />
        <Radio :value="12" :active="isActive" @click.native="isActive = !isActive" />
        <Radio :value="12" :active="isActive" @click.native="isActive = !isActive" />

      </radio-group> -->

      <!-- <CheckBox :value="'checkbox'" :active="checkBoxActive" @click.native="checkBoxActive = !checkBoxActive"  />   
      <CheckBox :value="'checkbox'" :active="checkBoxActive" :disabled="true"  />  
      <CheckBox :value="'checkbox'" :active="checkBoxActive" :partial="true" />  

      <Empty :error="true" />
      <Empty :error="false" /> -->

      <!-- <Modal :title="'这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊这是个标题啊哈啊'"
        :hasCancel="false"
        :value="true"
      >
        <h4>test</h4>
      </Modal> -->
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
      /> -->
      <!-- <button @click="clickS = !clickS">clickS</button> -->
      <!-- <div style="width: 200px"> -->
        <!-- <Select :data="list" @on-select="onSelect" :show="clickS"  style="margin-bottom: 40px;" />
        <Select :data="list" @on-select="onSelect" :show="clickS" :size="'large'" style="margin-bottom: 40px;"  />
        <Select :data="list" @on-select="onSelect" :show="clickS" :size="'small'"  style="margin-bottom: 40px;" /> -->

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
      <text-area :value="'sfsffsfsfss'" :error="true" :errText="'错误的提示信息'" :size="small" :errPosition="'right'" /> -->
      
      <!-- <pagination :total="126" :circle="false" :showSize="true" /> -->

      <!-- <div style="height: 400px;">
        <loading />
      </div> -->
      <!-- <div style="width: 300px;">
        <steps :data="steps" :current="3" />

      </div>
      <div style="width: 1200px;">
        <steps :data="steps" :direction="'row'" />

      </div>

      <div style="width: 1200px;">
        <steps :data="steps" :direction="'row'" :error="2" />

      </div> -->
      <!-- <div style="height: 600px;, color: 'red'">

        <time-line :data="times" />
      </div>

      <div style="height: 200px;, color: 'red'">

        <time-line :data="times" />
      </div> -->

      <!-- <upload :fileList="file">
        <div slot="file">1</div>
      </upload> -->

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
      <button @click="testBtn">测试按钮</button> -->
      <!-- <qSwitch @on-change="switchChange" :active="true" />
      <qSwitch @on-change="switchChange" :size="'large'" :active="true" />
      <qSwitch @on-change="switchChange" :size="'small'"  /> -->
      <!-- <button @click="testBtn">测试按钮</button> -->
      <!-- <button @click="closeBtn">测试关闭按钮</button> -->

      <!-- <Tabs :primaryKey="'label'" :data="tabDatas" :type="'card'" /> -->
      <!-- <Button :to="'//www.baidu.com'" >百度</Button> -->

      <!-- <Badge :count="123" :maxCount="99" /> -->

      <Menu :data="menuData" />
      
  </div>
</template>

<script>

import Button from './button'
import ButtonGroup from './button-group'

import Radio from './radio'
import RadioGroup  from './radio-group'

import CheckBox from './checkbox'

import Empty from './empty'

import Modal from './modal'

import Alert from './alert'

import Input from './input'

import Select from './select'

import DropDown from './dropdown'

import TextArea from './textarea'


import Pagination from './pagination'

import Loading from './loading'

import Steps from './steps'

import TimeLine from './timeline'

import Upload from './upload'

import Table from './table'

import qSwitch from './switch'

import Message from './message'

import Tabs from './tabs'

import Badge from './badge'

import Menu from './menu'


export default {
  name: 'HelloWorld',
  components: {
    Button,
    ButtonGroup,
    Radio,
    RadioGroup,
    CheckBox,
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
    TimeLine,
    Upload,
    Table,
    qSwitch,
    Message,
    Tabs,
    Badge,
    Menu
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isActive: false,
      checkBoxActive: true,
      ipt: '',
      clickF: false,
      clickS: false,
      showAlert: false,
      large: 'large',
      small: 'small',
      list: [
        {'active': false, 'disabled': false, 'value': 'Welcome to Your Vue.js App123Welcome to Your Vue.js App', id: 1},
        {'active': false, 'disabled': false, 'value': '123', id: 2},
        {'active': false, 'disabled': false, 'value': '123', id: 3},
        {'active': false, 'disabled': false, 'value': '123', id: 4},
        {'active': false, 'disabled': false, 'value': '123', id: 5},
        {'active': false, 'disabled': false, 'value': '123', id: 13},
        {'active': false, 'disabled': false, 'value': '123', id: 35},
        {'active': true, 'disabled': false, 'value': '123115', id: 115},
        {'active': false, 'disabled': false, 'value': '123', id: 50},
      ],
      steps: [
        {title: '第一步', content: '测试的content数据', id: 1},
        {title: '第一步', content: '测试的content数据', id: 2},
        {title: '第一fsfsfs步', content: '测试的content数据', id: 3},
        {title: '第一步', content: '测试的content数据', id: 4},
      ],
      times: [
        { time: '1974年', content: 'Apple I 问世'},
        { time: '1984年', content: '发布 Macintosh'},
        { time: '2007年', content: '发布 iPhone'},
        { time: '2010年', content: '发布 iPad'},
        { time: '2011年10月5日', content: '史蒂夫·乔布斯去世' }
      ],
      file: [
        {url: '1313A'},
        {url: '1313B'},
        {url: '1313C'},
        {url: '1313D'},
        {url: '1313E'},
      ],
      header: [
        {'tableKey': 'name', 'tableVal': '用户名'},
        {'tableKey': 'age', 'tableVal': '年龄'},
        {'tableKey': 'place', 'tableVal': '籍贯'},
        {'tableKey': 'gender', 'tableVal': '性别'},
        {'tableKey': 'career', 'tableVal': '职业'},
        {'tableKey': 'hobby', 'tableVal': '兴趣爱好'}
      ],
      data: [
        {name: 'James', age: '18', place: 'China', gender: '男', career: '不知道是什么职业', hobby: '没啥爱好', checked: false, id: 1},
        {name: 'James', age: '18', place: 'China', gender: '男', career: '不知道是什么职业', hobby: '没啥爱好', checked: true, id: 2},
        {name: 'James', age: '18', place: 'China', gender: '男', career: '不知道是什么职业', hobby: '没啥爱好', checked: true, id: 3},
        {name: 'James', age: '18', place: 'China', gender: '男', career: '不知道是什么职业', hobby: '没啥爱好', checked: false, id: 4},
        {name: 'James', age: '18', place: 'China', gender: '男', career: '不知道是什么职业', hobby: '没啥爱好', checked: true, id: 5},
        {name: 'James', age: '18', place: 'China', gender: '男', career: '不知道是什么职业', hobby: '没啥爱好', checked: false, id: 6},
      ],
      tabDatas: [
        {label: '标签1', id: '1', active: true, disabled: false, iconf: 'http://p0.qhimg.com/t0104826990b6fb9bfa.png'},
        {label: '标签2', id: '2', active: false, disabled: true, iconf: 'http://p0.qhimg.com/t0104826990b6fb9bfa.png'},
        {label: '标签3', id: '3', active: false, disabled: false, iconf: 'http://p0.qhimg.com/t0104826990b6fb9bfa.png'},
      ],
      menuData: [
        {
          label: '数据报表',
          id: 'dataSource',
          active: true,
          children: [
            {label: '手机助手', id: 'phone', active: false},
            {label: '清理大师', id: 'ds', active: false},
            {label: '手机清理管理', id: 'gj', active: false},
            {label: '手机清理管理', id: 'gjd', active: false},
            {label: '手机清理管理', id: 'gjf', active: true},
            {label: '手机清理管理', id: 'gjs', active: false},
          ]
        },
        {
          label: '其他数据报表',
          id: 'dataSource1',
          active: false,
          children: [
            {label: '手机助手1', id: 'phone1', active: false},
            {label: '清理大师1', id: 'ds1', active: false},
            {label: '手机清理管理1', id: 'gj1', active: false},
          ]
        },
        {
          label: '没有children',
          id: 'noChild',
          active: false
        }
      ]
    }
  },
  methods: {
    doSom (v) {
      this.isActive = true
    },
    clickFn () {
      this.clickF = !this.clickF;
    },
    onChoose (v) {
      this.list.map( item => item.active = false )
      v.active = !v.active;
      this.clickF = !this.clickF;
    },
    onSelect (v) {
      this.clickS = !this.clickS;
    },
    change (page) {
      console.log(`当前页数是${page}`)
    },
    switchChange (v) {
      console.log(`switch的值现在是：${v}`)
    },
    testBtn () {
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
      Alert({'type': 'success', text: '这是一个alert弹窗咯'})
    },
    closeBtn () {
      // Loading.hide();
      Message.warning({
        text: '看看这个会咋样23', 
        onOk() {
          console.log(1) 
          return 1
        }, 
        onCancel () {} });
    },
    onChangeUpload (data) {
      console.log(data)
    }
  },
}
</script>

