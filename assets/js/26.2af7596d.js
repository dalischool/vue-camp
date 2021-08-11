(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{474:function(t,s,a){t.exports=a.p+"assets/img/ts-error.c185525a.png"},576:function(t,s,a){"use strict";a.r(s);var n=a(59),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"왜-타입스크립트를-사용하는가"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#왜-타입스크립트를-사용하는가"}},[t._v("#")]),t._v(" 왜 타입스크립트를 사용하는가?")]),t._v(" "),n("p",[t._v("타입이 없는 자바스크립트는 애플리케이션이 실행되었을 때만 에러를 검출할 수 있습니다. 따라서, 실행 시점에만 발생하는 잠재적인 오류에 대해서는 특별한 조치를 취하기가 어렵습니다. 이러한 문제점을 해결하고자 대두되는 기술이 타입스크립트입니다.")]),t._v(" "),n("h2",{attrs:{id:"typescript-맛보기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typescript-맛보기"}},[t._v("#")]),t._v(" TypeScript 맛보기")]),t._v(" "),n("p",[t._v("뷰에 타입스크립트를 연동해보기 전에 간단하게 타입스크립트의 코드를 살펴보겠습니다. 먼저 아래와 같이 타입스크립트를 전역으로 설치합니다.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i typescript -g\n")])])]),n("p",[t._v("이제 명령어 입력 창에서 "),n("code",[t._v("tsc")]),t._v(" 라는 명령어를 실행할 수 있습니다. 이 명령어를 사용하면 타입스크립트로 작성된 코드를 브라우저에서 실행할 수 있는 자바스크립트 코드로 변환할 수 있게 되죠.")]),t._v(" "),n("p",[t._v("이제 타입스크립트 코드를 보겠습니다.")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.ts")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("두 숫자의 합을 구하는 sum 함수에 타입스크립트를 적용한 코드입니다. 함수의 인자는 숫자(number)만 받을 수 있게 됩니다. 위의 코드를 아래와 같이 변환할 수 있습니다.")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("tsc app.ts\n")])])]),n("p",[t._v("실행 결과로 같은 이름의 js 파일인 "),n("code",[t._v("app.js")]),t._v("를 생성합니다.")]),t._v(" "),n("h2",{attrs:{id:"typescript의-장점"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typescript의-장점"}},[t._v("#")]),t._v(" TypeScript의 장점")]),t._v(" "),n("p",[t._v("앞에서 살펴본 타입스크립트 코드의 장점은 위 코드를 브라우저에서 실행하기 전에 에러를 검출할 수 있다는 것입니다. 만약 코드가 아래와 같았다면 자바스크립트 코드로 변환할 때 어떤 일이 발생하였을까요?")]),t._v(" "),n("div",{staticClass:"language-ts extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ts"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// app.ts")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("sum")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("위 코드를 "),n("code",[t._v("tsc")]),t._v("로 변환하면 아래와 같은 에러가 발생됩니다.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(474),alt:"app.ts 변환 오류"}})]),t._v(" "),n("p",[t._v("만약 타입스크립트를 쓰지 않고 그냥 브라우저에서 실행했다면 두 숫자의 합이 아니라 숫자와 배열을 더했을 겁니다. 따라서, 숫자의 합을 구하려고 만든 함수의 본질이 흐려지게 되죠.")]),t._v(" "),n("p",[t._v("실행 시점에서 유연하게 타입을 바꾸는 자바스크립트의 특징이 때로는 이와 같이 예기치 못한 동작과 에러를 발생시킬 수 있습니다. 하지만, 타입스크립트를 사용함으로써 이런 에러들을 미리 잡아낼 수 있죠.")]),t._v(" "),n("p",[t._v("이처럼 "),n("strong",[t._v("브라우저에서 실행하고 잘못된 결과를 확인하기 전에 미리 컴파일(코드 변환) 시점에 타입 변환으로 인한 에러를 검출할 수 있는 것")]),t._v("이 타입스크립트의 장점입니다.")])])}),[],!1,null,null,null);s.default=r.exports}}]);