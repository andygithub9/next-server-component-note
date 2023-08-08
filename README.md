# 用不同的導航方式連到不同的 components 會發現什麼事

https://nextjs.org/docs/app/building-your-application/caching
https://www.youtube.com/watch?v=_yhSh4g0NSk

## 用 "next/link" 導航到 server component 再回到上一頁

快取不會被清除

## 用 a tag 導航到 server component 再回到上一頁

快取會被清除，因為整個頁面都被 refresh 了

## 用 "next/link" 導航到 client component 再回到上一頁

Error: Text content does not match server-rendered HTML.

## 用 a tag 導航到 client component 再回到上一頁

Error: Text content does not match server-rendered HTML.

## 用 "next/link" 導航到 react component 再回到上一頁

快取會被清除，因為 useEffect 會重新執行 Math.random()

## 用 a tag 導航到 client react 再回到上一頁

快取會被清除，因為整個頁面都被 refresh 了

# 如何 Opting out next.js 的 caching

![next 的 caching 機制](public/caching-overview.avif)

## Full Route Cache

opt-out: `export const dynamic = 'force-dynamic'`

## Full Route Cache

opt-out: `fetch('...', {cache: 'no-store'})`
opt-out: `export const dynamic = 'force-dynamic'`

## Memouzation

opt-out:  
https://nextjs.org/docs/app/building-your-application/caching#opting-out

```js
const { signal } = new AbortController();
fetch(url, { signal });
```

## Router cache (client side)

https://nextjs.org/docs/app/building-your-application/caching#opting-out-3  
It's not possible to opt out of the Router Cache.  
目前 next.js 沒有提供清除 client side cache 的方法，只能用 a tag 或是 window 本身的 api ，像是 window.open('...')，強制刷新頁面
