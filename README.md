# 希伯崙之家網站

基隆「希伯崙之家」的單頁網站。頁面有首頁經文、關於我們、聚會時間、最新活動、相簿、影片、聯絡方式與地圖。

文字全部是繁體中文。還沒有公開的資料（例如聚會時間、教會簡介）會標成「（待補）」，確定內容後再改掉即可。

## 線上網站

正式網址：

[https://benjhongyang-art.github.io/hebron-house/](https://benjhongyang-art.github.io/hebron-house/)

程式放在 [github.com/benjhongyang-art/hebron-house](https://github.com/benjhongyang-art/hebron-house)。

### 改完怎麼更新線上網站

1. 改 `src/content.js`（或其他檔案）並存檔。
2. 把修改提交後，推送到 GitHub 的 `main` 分支。
3. GitHub Actions 會自動執行 `npm run build`，再把 `dist` 發佈到 GitHub Pages。
4. 約一兩分鐘後，重新整理上面的網址即可看到新內容。部署進度在專案的 Actions 分頁。

若網址一直顯示找不到頁面，請到 GitHub 專案的 **Settings → Pages → Build and deployment**，把 **Source** 選成 **GitHub Actions**，存檔後再等一次部署完成。

這個網站是 GitHub Pages 的專案網站，網址路徑是 `/hebron-house/`。建置時已用這個路徑，圖片與樣式才載入得了。

## 平常只要改一個檔案

網站上的文字都在：

`src/content.js`

用記事本、記事本（Notepad）、或 Visual Studio Code 打開這個檔案。只改雙引號 `"` 裡面的字，然後存檔。

請不要刪掉這些符號，否則網站會無法開啟：

- 雙引號 `"`
- 逗號 `,`
- 大括號 `{ }`
- 中括號 `[ ]`

還不確定的內容，請維持這種寫法：

```text
（聚會時間待補）
```

某一格文字裡不再有「待補」兩個字，頁面上的待補標記就會自動消失。

建議修改前先把 `src/content.js` 複製一份備份。如果存檔後畫面全白，多半是引號或逗號被刪掉了，把備份貼回去再改一次即可。

## 在自己的電腦上看網站

需要先安裝 [Node.js](https://nodejs.org/) 20 或以上。

在這個專案資料夾開啟終端機，依序輸入：

```bash
npm install
npm run dev
```

接著用瀏覽器打開：

[http://127.0.0.1:4721/hebron-house/](http://127.0.0.1:4721/hebron-house/)

改完 `src/content.js` 並存檔後，重新整理瀏覽器。若畫面沒有更新，在終端機按 `Ctrl + C` 停掉，再輸入一次 `npm run dev`。

## 各欄位怎麼改

| 想改的內容 | 在 `src/content.js` 的哪裡 |
| --- | --- |
| 瀏覽器分頁標題、搜尋結果說明 | `meta` |
| 教會名稱 | `name` |
| 首頁小字、經文 | `eyebrow`、`motto`、`mottoCitation` |
| 地址、電話、電子郵件、臉書 | `address`、`phone`、`email`、`facebook` |
| 關於我們 | `about` |
| 聚會時間 | `gatherings` |
| 最新活動 | `events` |
| 相簿 | `gallery` |
| 影片 | `videos` |
| 聯絡我們的說明文字 | `contact` |
| 頁尾提醒 | `footer` |

電話請保留開頭的 0，例如 `02-2434-6933`。網站會自動變成可以點擊撥打的連結。

地址會同時用在頁面文字和 Google 地圖。修改 `address` 後，地圖搜尋的位置也會跟著改。

## 修改聚會時間

找到 `gatherings` 裡的 `items`。每一組 `{ ... }` 是一列，有三格：

- `name`：聚會名稱
- `time`：時間
- `note`：地點或其他備註

例如把待補換成實際時間：

```js
{
  name: "主日崇拜",
  time: "每週日 10:00",
  note: "武嶺街教會",
},
```

上面只是格式範例。確定之前，不要寫上還沒有核對過的時間或名稱。

要再加一列，就複製一整組 `{ ... }`，貼到上一組後面。上一組最後的 `}` 後面要有一個逗號。

## 新增或修改活動

找到 `events` 裡的 `items`。現有的一則是 2026 年 7 月 26 日 Facebook 貼文：「家庭園藝、種子盆栽」。

每一則活動有這些欄位：

- `date`：日期，寫成 `2026-07-26` 這種格式
- `dateKind`：只能寫 `"posted"` 或 `"held"`
  - `posted` 表示這是貼文日期，不代表活動就在這一天舉辦
  - `held` 表示這一天舉辦活動
- `tag`：短分類，例如課程
- `title`：活動名稱
- `summary`：一句話說明
- `note`：時間、地點。還不知道就寫 `（上課時間與地點待補）`
- `image`：活動圖片，寫 `public/` 裡面的相對路徑，例如 `gallery/2026-gardening-poster.webp`。沒有圖片就刪掉這三行，或把 `image` 留成 `""`
- `imageWidth`、`imageHeight`：圖片的寬和高，用數字
- `imageAlt`：圖片說明，給讀不到圖的人看，請寫這張圖實際有的內容
- `href`：相關連結，不需要連結就寫 `""`
- `hrefLabel`：連結上的文字

## 修改相簿

照片分組在 `gallery` 的 `groups`。每一組是一個活動，裡面的 `photos` 是那一組的照片。

每一張照片：

- `src`：放大後看的圖，檔案放在 `public/gallery/`
- `thumb`：列表上的小圖，檔案放在 `public/gallery/thumbs/`
- `width`、`height`：小圖的寬和高
- `alt`：這張照片裡看得到的內容，用繁體中文寫
- `href`：這張照片在臉書的網址。沒有就寫 `""`

新增一張時，先把圖檔放進上面兩個資料夾，再複製一整組 `{ ... }` 貼到同一組的 `photos` 裡。要新開一個活動，就複製一整組 `groups` 的 `{ title, dateLabel, photos }`。

圖請先縮到寬度大約 1600 像素以內，存成 WebP。小圖寬度大約 720 像素。不要放原相機大圖。

## 修改影片

影片在 `videos` 的 `items`。每一則有：

- `title`：影片標題，用臉書上的名稱
- `href`：臉書影片網址，像 `https://www.facebook.com/hebron.klch/videos/123/`
- `embed`：寫 `true` 會在頁面上嵌入臉書播放器，同時保留「在 Facebook 觀看」連結。寫 `false` 只顯示連結

播放器是臉書提供的，訪客若沒有登入臉書，有時只看得到連結，這是正常的。

沒有活動要顯示時，改成：

```js
items: []
```

## 做成可以上傳的網頁

推送到 GitHub 的 `main` 就會自動部署，平常不必自己上傳。

若要在自己的電腦先做出靜態檔：

```bash
npm run build
```

完成後會產生 `dist` 資料夾。本機預覽建置結果：

```bash
npm run preview
```

然後打開 [http://127.0.0.1:4721/hebron-house/](http://127.0.0.1:4721/hebron-house/)。

若要把網站放到別的網址、而且不是 `/hebron-house/` 這個路徑，建置前先設定 `VITE_BASE`。放到網域根目錄時用：

```bash
VITE_BASE=/ npm run build
```

## 其他說明

- 地圖使用 Google 地圖，需要網路才看得到。地圖沒有出現時，頁面上仍有地址，也可以點「在 Google 地圖開啟」。
- 中文字型使用 Google Fonts 的 Noto Sans TC 與 Noto Serif TC。若電腦連不上 Google，會改用系統內建的中文字型，內容不受影響。
- 手機寬度會改成選單按鈕。沒有開啟 JavaScript 時，選單會直接列在頁首，仍然可以點。
- 請不要在這個檔案以外編造牧師姓名、聚會時間或教會歷史。還沒有的資料就留著「待補」。
