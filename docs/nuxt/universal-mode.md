---
title: Universal Mode
---

# 유니버설(Universal) 모드란?
이번 글에서는 Nuxt의 렌더링 모드 중 하나인 유니버설 모드의 개념과 동작 원리에 대해서 설명해보겠습니다.

## Nuxt 모드

Nuxt를 처음 설치할 때 다음의 두 가지 렌더링 모드를 선택할 수 있습니다. 
  * **Universal**
  * **Single Page App**
  
![rendering-mode](./images/rendering-mode.png)

[공식문서](https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-mode)에서는 유니버설 모드를 서버 사이드 렌더링과 클라이언트 사이드 네비게이션(Client Side Navigation)의 조합으로 설명하고 있습니다. 클라이언트 사이드 네비게이션이란 브라우저에서 페이지 간 이동시 클라이언트 쪽 자바스크립트 라우팅으로 이동하는 방식을 의미합니다. 웹 서비스 페이지를 최초로 접근할 때는 서버 사이드 렌더링 방식으로 화면을 그려주지만 이후에 해당 서비스 내의 다른 페이지로 이동할 때는 자바스크립트 라우팅 방식을 사용하는 것이 유니버설 모드입니다. 

싱글 페이지 애플리케이션은 기존의 Vue가 제공하던 방식과 동일하니 본문에서 다루지 않겠습니다.


## 유니버설 모드의 등장

이전 포스트인 [Server Side Rendering](/nuxt/ssr.html)에서 서버 사이드 렌더링과 클라이언트 사이드 렌더링의 차이를 배웠습니다. 요약하면 기존의 싱글 페이지 애플리케이션이 가지고 있는 검색 엔진 최적화(Search Engine Optimization) 문제와 페이지 렌더링 속도 문제를 서버 사이드 렌더링이 해결할 수 있다는 것이 요점이었습니다. 

하지만 웹의 역사를 보면 서버 사이드 렌더링은 새로운 개념이 아닙니다. 대중적인 싱글 페이지 애플리케이션이 등장하기 전까지는 서버 사이드 렌더링을 기반으로 하는 멀티 페이지 애플리케이션이 대세였습니다. 다만, 화면 전체 또는 일부를 변경할 때마다 서버 측 렌더링이 완료될 때까지 기다리기 때문에 깜빡임이 발생할 수밖에 없었고, 결국 깜빡임이 없는 클라이언트 사이드 렌더링 기반의 싱글 페이지 애플리케이션에 밀려나게 되었습니다.

그렇다면 우리는 SEO를 포기하고 다시 클라이언트 사이드 렌더링으로 회귀해야 할까요? 아니면 사용자 경험을 포기하고 서버 사이드 렌더링을 고집해야 할까요? 둘의 장단점은 분명하기 때문에 한쪽만 선택하면 반드시 기회비용이 발생합니다. 

그래서 Nuxt는 서버 사이드 렌더링과 클라이언트 사이드 렌더링을 모두 선택하기로 했습니다. Nuxt 앱을 첫 방문할 때는 서버에서 그리고 이후 페이지 간 이동은 클라이언트 사이드에서 그리기로 말이죠. 이를 위해서 Nuxt는 클라이언트 사이드 하이드레이션(Client Side Hydration)과 코드 분할([Code Splitting](/advanced/code-splitting.html)), 프리패칭(Prefetching)을 활용하고 있습니다.

## 클라이언트 사이드 하이드레이션

하이드레이션은 간단하게 말하면 서버로부터 받은 정적 HTML을 사용자와 상호작용할 수 있는 다이나믹 DOM으로 바꾸는 방법입니다. 유니버설 모드에서 Nuxt 앱에 사용자가 최초 접근을 하면 서버로부터 정적 HTML을 받는 동시에 HTML을 다이나믹 DOM으로 바꿔줄 자바스크립트 번들을 함께 받아옵니다. 브라우저는 받아온 자바스크립트 번들을 통해 이미 그려진 정적 HTML을 리렌더링(Re-rendering) 없이 사용자와 상호작용 할 수 있는 다이나믹 DOM 상태로 바꿔줍니다.

## 코드 분할

코트 분할은 말 그대로 코드 전체를 로드하지 않고 분할해서 필요에 맞게 번들로 나눠 가져오는 것을 의미합니다. 필요한 번들만 가져오기 때문에 로딩 속도가 빨라지는 장점이 있습니다. 

Nuxt 앱에서는 최초 접근할 때 서버로부터 정적 HTML을 받았지만, 다른 페이지로 이동할 때는 클라이언트 사이드에서 렌더링을 합니다. 이때 렌더링용 자바스크립트 번들이 필요한데, 유니버설 모드에서는 자동 코드 분할을 통해 당장 방문할 페이지의 렌더링에 필요한 번들만 서버로부터 가져옵니다.

:::tip
참고로, 다운로드한 번들들은 캐싱이 돼서 재활용이 가능하기 때문에 서버에 재요청할 필요가 없습니다.
:::

## 프리패칭

그렇다면 Nuxt는 렌더링을 당장 준비해야 하는 페이지를 어떻게 구분하고 있을까요? 사용자가 `<NuxtLink>`를 클릭하면 이동할 페이지를 위한 렌더링용 자바스크립트 번들을 서버로부터 받아올까요? 서버에서 완전히 렌더링된 HTML 파일을 불러오는 것보다 렌더링에 필요한 번들만 가져오는 것이 더 빠르겠지만 그래도 네트워크 지연은 발생합니다.  

그래서 Nuxt는 좀 더 매끄러운 페이지 이동을 위해서 **화면에 보이는 `<NuxtLink>`들**에 한해서 해당 페이지들을 렌더링하는데 필요한 파일들을 **미리 서버에 요청**합니다. 실제로 인터섹션 옵저버(Intersection Observer)를 사용하기 때문에 뷰포트(Viewport)에 이동할 페이지 링크가 보이기만 하면 서버에 바로 번들을 요청합니다. 덕분에 사용자가 링크를 인지하고 클릭하기도 전에 이미 클라이언트 사이드 렌더링을 할 준비가 되어있는 것이죠. 이렇게 사용자가 패칭을 요구하기 전에 미리 패칭하기 때문에 프리패칭이라고 합니다.

아래의 영상은 뷰포트에 새로운 `<NuxtLink>`가 등장할 때마다 서버로부터 렌더링에 필요한 자바스크립트를 받아오는 장면입니다. 이 덕분에 보시는 것처럼 빠르게 페이지를 이동할 수 있습니다.
![prefetching](./images/prefetching.gif)

위의 데모 사이트는 [Prefetching Demo](https://nuxt-prefetch.surge.sh)에서 확인 가능합니다.

## 유니버설 배포

위에서 설명한 내용들을 요약하면 유니버설 모드는 하이드레이션, 코드 분할, 프리패칭을 통해 웹 서비스 페이지 첫 접근 시 서버 사이드 렌더링을 사용하고 이후 페이지 간 이동에는 클라이언트 사이드 렌더링을 사용하는 모드라는 것입니다.

추가적으로, 유니버설은 배포 대상 설정에 따라 서버 측에서 렌더링하는 방식인 서버 사이드 렌더링과 빌드 단계에서 프리렌더링(Pre-rendering)하는 방식인 정적 사이트 제네레이션(Static Site Generation)으로 한 번 더 나뉩니다. 서버 사이드 렌더링은 클라이언트 측으로부터 요청이 올 때마다 렌더링에 필요한 데이터들을 서버에서 `asyncData` 와 `fetch`를 통해 새롭게 가져와서 페이지를 렌더링합니다.  

```js
// nuxt.config.js
export default {
  target: 'server' // 서버 사이드 렌더링
}
```
반면에 정적 사이트 제네레이션은 빌드 단계에서 렌더링에 필요한 데이터들을 가져와 페이지를 렌더링 해놓기 때문에 클라이언트가 요청하기 전에 이미 정적 HTML을 가지고 있습니다. 이후 클라이언트로부터 요청이 오면 서버에서 리렌더링없이 빌드 단계에서 이미 만들어진 정적 HTML을 반환하므로 서버 사이드 렌더링보다 더 빠르게 반응할 수 있습니다.

```js
// nuxt.config.js
export default {
  target: 'static' // 정적 사이트 제네레이션
}
```

이러한 성질들 때문에 데이터가 자주 변하는 웹사이트를 구축한다면 서버 사이드 렌더링이 적합하고 블로그와 같이 데이터가 자주 바뀌지 않는 경우에는 정적 사이트 제네레이션이 더 적합합니다.

더 자세한 내용은 [Nuxt 배포](/nuxt/deployment.html)에서 확인할 수 있습니다.

## 참고 자료
- [Client Side Hydration](https://ssr.vuejs.org/guide/hydration.html)
- [Why Nuxt.js?](https://blog.logrocket.com/server-side-rendering-with-vue-and-nuxt-js-64a6d99f5a82/)
- [Smart Prefetching](https://nuxtjs.org/docs/2.x/features/nuxt-components#prefetchlinks) 
- [Going Full Static](https://nuxtjs.org/blog/going-full-static#smarter-nuxt-generate)