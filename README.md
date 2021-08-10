<p algin="center">
  <h1>frames-animation</h1>
</p>

## Introduction

> vue component

## Install

```
npm install frames-animation -S

or

yarn add frames-animation -S
```

## Quick Start

```
<div id="app" class="fa-wrap">
  <FramesAnimation :imageList="imgList">
    <!-- slot -->
    <template #loading>loading</template>
    <template #error>error</template>
  </FramesAnimation>
</div>

import FramesAnimation from 'frames-animation'

export default {
  data() {
    return {
      imgList: [
        'http://www.aaa.com/image1.png',
        'http://www.aaa.com/image2.png',
        'http://www.aaa.com/image3.png',
        'http://www.aaa.com/image4.png',
      ]
    }
  }
}

```
