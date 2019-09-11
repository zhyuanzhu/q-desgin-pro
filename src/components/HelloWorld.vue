<template>
  <div class="hello">
    <Button :type="'empty'" :disabled="true">empty</Button>
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
  </div>
</template>

<script>

import Button from './button'

export default {
  name: 'HelloWorld',
  components: {
    Button
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

