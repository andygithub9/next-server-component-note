https://nextjs.org/docs/app/building-your-application/caching
https://www.youtube.com/watch?v=_yhSh4g0NSk
# 用 "next/link" 導航到 server component 再回到上一夜
快取不會被清除
# 用 a tag 導航到 server component 再回到上一夜
快取會被清除，因為整個頁面都被 refresh 了
# 用 "next/link" 導航到 client component 再回到上一夜
Error: Text content does not match server-rendered HTML.
# 用 a tag 導航到 client component 再回到上一夜
Error: Text content does not match server-rendered HTML.
# 用 "next/link" 導航到 react component 再回到上一夜
快取會被清除，因為 useEffect 會重新執行 Math.random()
# 用 a tag 導航到 client react 再回到上一夜
快取會被清除，因為整個頁面都被 refresh 了