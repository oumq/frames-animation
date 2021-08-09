<template>
  <div class="frames-animation-wrap">
    <slot v-if="loading" name="loading">
      <div class="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </slot>
    <slot v-else-if="error" name="error">
      <div class="error"> 加载失败 </div>
    </slot>
    <canvas v-else id="canvas"></canvas>
  </div>
</template>

<script>
import raf from 'raf'

export default {
  name: 'frames-animation',
  computed: {
    frameNum() {
      return this.renderImg.length - 1
    }
  },
  props: {
    imageList: {
      type: Array,
      default: () => {
        return []
      },
      required: true,
      validator: val => {
        return val.length > 0
      }
    },
    frameAction: {
      type: Function,
      default: function () {}
    }
  },
  data() {
    return {
      canvas: null,
      ctx: null,
      ratio: 1,
      size: [0, 0],
      loading: true,
      error: false,
      renderImg: [],
      frameIndex: 0,
      hoverMouse: false,
      handleAnimation: null
    }
  },
  mounted() {
    if (this.imageList.length > 0) {
      this.loadAllImg()
    } else {
      this.loading = false
      this.error = true
    }
  },
  methods: {
    initCanvas() {
      this.canvas = document.getElementById('canvas')
      this.ctx = this.canvas.getContext('2d')
      this.ratio = this.getPixelRatio(this.ctx)
      this.getImgSize(this.renderImg[0])
      // 渲染第一帧
      this.convertImageToCanvas(this.renderImg[0])
      if (!this.isEmptyFun(this.frameAction)) {
        this.frameAction(this.canvas, this.ctx)
      } else {
        this.hoverEvent()
      }
    },

    getPixelRatio(context) {
      const backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1

      return (window.devicePixelRatio || 1) / backingStore
    },

    getImgSize(img) {
      this.size = [img.naturalWidth, img.naturalHeight]
      this.canvas.width = this.size[0] * this.ratio
      this.canvas.height = this.size[1] * this.ratio
    },

    loadImg(src) {
      return new Promise((resolve, reject) => {
        let img = new Image()
        img.src = src
        img.onload = () => {
          resolve(img)
        }
        img.onerror = () => {
          reject(null)
        }
      })
    },

    async loadAllImg() {
      this.loading = true
      let arr = []
      this.imageList.forEach(i => {
        arr.push(this.loadImg(i))
      })
      try {
        const res = await Promise.all(arr)
        this.renderImg = res
        this.loading = false
        this.$nextTick(() => {
          this.initCanvas()
        })
      } catch (err) {
        this.loading = false
        this.error = true
        this.renderImg = []
      }
    },

    convertImageToCanvas(image) {
      if (image) {
        this.ctx.clearRect(
          0,
          0,
          this.size[0] * this.ratio,
          this.size[1] * this.ratio
        )
        this.ctx.drawImage(
          image,
          0,
          0,
          this.size[0] * this.ratio,
          this.size[1] * this.ratio
        )
      }
    },

    hoverEvent() {
      this.canvas.addEventListener('mouseenter', this.hoverMouseenter)
      this.canvas.addEventListener('mouseleave', this.hoverMouseleave)
    },

    hoverMouseenter() {
      raf.cancel(this.handleAnimation)
      this.hoverMouse = true
      this.animate()
    },

    hoverMouseleave() {
      raf.cancel(this.handleAnimation)
      this.hoverMouse = false
      this.animate()
    },

    animate() {
      this.frameIndex += this.hoverMouse ? 1 : -1
      if (this.frameIndex > this.frameNum) {
        this.frameIndex--
        return
      }
      if (this.frameIndex < 0) {
        this.frameIndex++
        return
      }
      this.convertImageToCanvas(this.renderImg[this.frameIndex])
      this.handleAnimation = raf(this.animate)
    },

    /*
     * 空方法判断
     */
    isEmptyFun(f) {
      let fStr = f.toString()
      fStr = fStr
        .substr(fStr.indexOf(')'))
        .replace(/function|[(){};]/g, '')
        .trim()
      return fStr === ''
    },

    /*
     * 下一帧
     */
    next() {
      this.frameIndex++
      if (this.frameIndex > this.frameNum) {
        this.frameIndex--
      } else {
        this.convertImageToCanvas(this.renderImg[this.frameIndex])
      }
      return this.frameIndex
    },

    /*
     * 上一帧
     */
    prev() {
      this.frameIndex--
      if (this.frameIndex < 0) {
        this.frameIndex++
      } else {
        this.convertImageToCanvas(this.renderImg[this.frameIndex])
      }
      return this.frameIndex
    }
  }
}
</script>

<style lang="scss">
.frames-animation-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-flex;
  canvas {
    width: 100%;
    height: 100%;
  }
  .error {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    color: black;
  }
  .loading {
    position: absolute;
    width: 20%;
    height: 8%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    & > span {
      display: inline-block;
      width: 8%;
      height: 100%;
      background: #e7ecf1;
      animation: load 1s ease infinite;
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.4s;
      }
      &:nth-child(4) {
        animation-delay: 0.6s;
      }
      &:nth-child(5) {
        animation-delay: 0.8s;
      }
    }
  }
  @keyframes load {
    0%,
    100% {
      height: 100%;
      background: #e7ecf1;
    }
    50% {
      height: 150%;
      margin: -30% 0;
      background: #ff7752;
    }
  }
}
</style>
