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
      <Radio :value="12" :active="isActive" @click.native="isActive = !isActive" :disabled="true" />
      <Radio :value="12" :active="!isActive" @click.native="isActive = !isActive" />

      <!-- <radio-group>

        <Radio :value="12" :active="isActive" @click.native="isActive = !isActive" />
        <Radio :value="12" :active="isActive" @click.native="isActive = !isActive" />
        <Radio :value="12" :active="isActive" @click.native="isActive = !isActive" />

      </radio-group> -->

      <CheckBox :value="'checkbox'" :active="checkBoxActive" @click.native="checkBoxActive = !checkBoxActive"  />  
      <CheckBox :value="'checkbox'" :active="checkBoxActive" @click.native="checkBoxActive = !checkBoxActive"  />  
      <CheckBox :value="'checkbox'" :active="checkBoxActive" :disabled="true"  />  
      <CheckBox :value="'checkbox'" :active="checkBoxActive" :partial="true" />  


  </div>
</template>

<script>

import Button from './button'
import ButtonGroup from './button-group'

import Radio from './radio'
import RadioGroup  from './radio-group'

import CheckBox from './checkbox'


export default {
  name: 'HelloWorld',
  components: {
    Button,
    ButtonGroup,
    Radio,
    RadioGroup,
    CheckBox
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      isActive: false,
      checkBoxActive: true
    }
  },
  methods: {
    doSom (v) {
      console.log(v)
    }
  },
}
</script>

