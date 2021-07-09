<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
type ValidateFunc = () => boolean
export const mitter = mitt()
export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup (props, context) {
    const funArr: ValidateFunc[] = []
    const submitForm = () => {
      const result = funArr.map((func) => func()).every(el => el)
      console.log(result)
      context.emit('form-submit', result)
    }
    const callback = (fun: any) => {
      funArr.push(fun)
    }
    mitter.on('form-item-created', callback)
    onUnmounted(() => {
      mitter.off('form-item-created', callback)
    })
    return {
      submitForm
    }
  }
})
</script>
