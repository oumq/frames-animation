<template>
  <div id="app" class="app">
    <FramesAnimation :imageList="imageList"></FramesAnimation>
  </div>
</template>

<script>
import FramesAnimation from '../src/frames-animation'
export default {
  name: 'App',
  components: {
    FramesAnimation
  },
  data() {
    return {
      imageList: [
        'https://cdn-static.chanmama.com/sub-module/static-file/e/0/6a0ed332e3',
        'https://cdn-static.chanmama.com/sub-module/static-file/0/6/bbc286eed0',
        'https://cdn-static.chanmama.com/sub-module/static-file/5/c/ac4936d9f7',
        'https://cdn-static.chanmama.com/sub-module/static-file/6/0/c42caa588a',
        'https://cdn-static.chanmama.com/sub-module/static-file/9/2/28b6d9cc99',
        'https://cdn-static.chanmama.com/sub-module/static-file/d/d/c3ccf1b712',
        'https://cdn-static.chanmama.com/sub-module/static-file/e/c/524b9cefcb',
        'https://cdn-static.chanmama.com/sub-module/static-file/6/c/e980365c5a',
        'https://cdn-static.chanmama.com/sub-module/static-file/c/7/48f072b632',
        'https://cdn-static.chanmama.com/sub-module/static-file/8/c/2212903f61',
        'https://cdn-static.chanmama.com/sub-module/static-file/3/c/0721268c51',
        'https://cdn-static.chanmama.com/sub-module/static-file/0/2/f5581accfa',
        'https://cdn-static.chanmama.com/sub-module/static-file/5/a/98fa6de602',
        'https://cdn-static.chanmama.com/sub-module/static-file/f/6/9cd8b05dd4',
        'https://cdn-static.chanmama.com/sub-module/static-file/8/d/f38cf1357a',
        'https://cdn-static.chanmama.com/sub-module/static-file/7/1/a62e73fa15',
        'https://cdn-static.chanmama.com/sub-module/static-file/0/c/ac33ee5481',
        'https://cdn-static.chanmama.com/sub-module/static-file/4/c/bfeada8dcc',
        'https://cdn-static.chanmama.com/sub-module/static-file/5/4/f52806e720',
        'https://cdn-static.chanmama.com/sub-module/static-file/b/4/8c097f6a3f',
        'https://cdn-static.chanmama.com/sub-module/static-file/b/6/6cfa07d248',
        'https://cdn-static.chanmama.com/sub-module/static-file/3/3/9f3941ba26',
        'https://cdn-static.chanmama.com/sub-module/static-file/1/d/5a29f9e0dc',
        'https://cdn-static.chanmama.com/sub-module/static-file/c/f/e270c26c7f',
        'https://cdn-static.chanmama.com/sub-module/static-file/a/3/6a7f4df8ef',
        'https://cdn-static.chanmama.com/sub-module/static-file/e/9/c9c6c119e8',
        'https://cdn-static.chanmama.com/sub-module/static-file/1/f/76e7f99c41',
        'https://cdn-static.chanmama.com/sub-module/static-file/b/a/32b2333d50',
        'https://cdn-static.chanmama.com/sub-module/static-file/f/5/5751cb0574',
        'https://cdn-static.chanmama.com/sub-module/static-file/f/5/5751cb0574'
      ]
    }
  }
}
</script>

<style lang="scss">
.app {
  width: 300px;
  height: 300px;
}
</style>
