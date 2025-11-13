---
title: HTML & CSS 基礎筆記
published: 2025-03-19
description: 從零開始的 HTML + CSS 完整筆記
tags: [HTML, CSS, 前端, 筆記]
category: 筆記
draft: false
---

### 第一個 HTML 範例

```html
<!DOCTYPE html>
<html>
<head>
    <title>我的第一個網頁</title>
</head>
<body>
    Hello HTML!
</body>
</html>
```

### 優化開發流程

- 將編輯器和瀏覽器並排，方便即時查看修改
- 安裝 **Live Server** 擴充功能，自動重新載入網頁
  - 在 HTML 檔案中按右鍵，選擇 "Open with Live Server"

## HTML 基本結構與元素

### 基本結構

```html
<!DOCTYPE html>
<html>
<head>
    <title>網頁標題</title>
    <!-- meta 資訊、CSS 連結等放在 head 中 -->
</head>
<body>
    <!-- 網頁的實際內容放在 body 中 -->
</body>
</html>
```

### 標題元素

```html
<h1>一級標題</h1>
<h2>二級標題</h2>
<h3>三級標題</h3>
<h4>四級標題</h4>
<h5>五級標題</h5>
<h6>六級標題</h6>
```

### 段落與換行

```html
<p>這是一個段落。</p>
<p>這是另一個段落。</p>

<!-- 換行 -->
一行文字<br>換到下一行
```

### 註解

```html
<!-- 這是 HTML 註解，不會顯示在網頁上 -->
```
- 在 VS Code 中使用 `Ctrl + /` (Windows) 或 `Cmd + /` (Mac) 快速添加/移除註解

### 空格處理

- HTML 中多個連續空格只會顯示為一個空格
- 使用特殊字元 `&nbsp;` 來顯示多個空格

### 列表

#### 無序列表 (圓點列表)

```html
<ul>
    <li>項目一</li>
    <li>項目二</li>
    <li>項目三</li>
</ul>
```

#### 有序列表 (編號列表)

```html
<ol>
    <li>第一步</li>
    <li>第二步</li>
    <li>第三步</li>
</ol>
```

### 表格

```html
<table>
    <tr>
        <th>標題 1</th>
        <th>標題 2</th>
    </tr>
    <tr>
        <td>資料 1</td>
        <td>資料 2</td>
    </tr>
</table>
```

### 超連結

```html
<!-- 基本連結 -->
<a href="https://www.example.com">連結文字</a>

<!-- 在新分頁開啟 -->
<a href="https://www.example.com" target="_blank">在新分頁開啟</a>

<!-- 連結到自己的頁面 -->
<a href="./page2.html">前往第二頁</a>

<!-- 電子郵件連結 -->
<a href="mailto:example@example.com">寄信給我</a>
```

### 錨點 (頁內連結)

```html
<!-- 先定義錨點 -->
<h2 id="section1">第一節</h2>

<!-- 連結到錨點 -->
<a href="#section1">跳到第一節</a>
```

### 圖片

```html
<!-- 基本圖片 -->
<img src="./images/photo.jpg" alt="風景照片">

<!-- 設定寬高 -->
<img src="./dog.jpg" alt="狗狗" width="300" height="200">

<!-- 圖片作為連結 -->
<a href="https://www.example.com">
    <img src="./logo.png" alt="Logo">
</a>
```

### 表單

```html
<form action="/submit" method="post">
    <!-- 文字輸入 -->
    <label for="username">用戶名:</label>
    <input type="text" id="username" name="username"><br>
    
    <!-- Email 輸入 -->
    <label for="email">電子郵件:</label>
    <input type="email" id="email" name="email"><br>
    
    <!-- 日期選擇器 -->
    <label for="birthdate">生日:</label>
    <input type="date" id="birthdate" name="birthdate"><br>
    
    <!-- 數字輸入 -->
    <label for="age">年齡:</label>
    <input type="number" id="age" name="age" min="1" max="120"><br>
    
    <!-- 多行文字 -->
    <label for="message">留言:</label><br>
    <textarea id="message" name="message" rows="4" cols="50"></textarea><br>
    
    <!-- 核取方塊 -->
    <input type="checkbox" id="subscribe" name="subscribe" value="yes">
    <label for="subscribe">訂閱電子報</label><br>
    
    <!-- 下拉選單 -->
    <label for="country">國家:</label>
    <select id="country" name="country">
        <option value="tw">台灣</option>
        <option value="jp">日本</option>
        <option value="us">美國</option>
    </select><br>
    
    <!-- 提交按鈕 -->
    <input type="submit" value="送出">
</form>
```

### Meta 元素

```html
<head>
    <!-- 字符集 -->
    <meta charset="UTF-8">
    
    <!-- 視口設定，對響應式網頁很重要 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- 網頁描述 -->
    <meta name="description" content="這是一個描述網頁內容的簡短摘要">
    
    <!-- 關鍵字 -->
    <meta name="keywords" content="HTML, CSS, 網頁設計">
    
    <!-- Open Graph 標籤，用於社交媒體分享 -->
    <meta property="og:title" content="網頁標題">
    <meta property="og:description" content="網頁描述">
    <meta property="og:image" content="https://example.com/image.jpg">
</head>
```

### 特殊字元 (字元實體)

- `&nbsp;` - 空格
- `&lt;` - 小於符號 (<)
- `&gt;` - 大於符號 (>)
- `&amp;` - 和符號 (&)
- `&quot;` - 雙引號 (")
- `&apos;` - 單引號 (')
- `&copy;` - 版權符號 (©)
- `&trade;` - 商標符號 (™)

### 文字格式化

```html
<!-- 加粗 -->
<b>粗體文字</b>
<strong>重要文字</strong> <!-- 語義上更強調重要性 -->

<!-- 斜體 -->
<i>斜體文字</i>
<em>強調文字</em> <!-- 語義上表示強調 -->
```

### iframe 元素

```html
<!-- 嵌入其他網頁 -->
<iframe src="https://www.example.com" width="600" height="400"></iframe>

<!-- 嵌入 YouTube 影片 -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

### 音訊元素

```html
<audio controls>
    <source src="music.mp3" type="audio/mpeg">
    您的瀏覽器不支援音訊元素。
</audio>
```

### div 和 span 元素

```html
<!-- div 是區塊級元素 -->
<div>這是一個區塊</div>

<!-- span 是行內元素 -->
<p>這段文字中的<span>這部分</span>可以單獨設定樣式。</p>
```

### 按鈕元素

```html
<!-- 基本按鈕 -->
<button>點我</button>

<!-- 帶有 JavaScript 事件的按鈕 -->
<button onclick="alert('Hello!')">點我顯示提醒</button>

<!-- 作為連結的按鈕 -->
<a href="https://www.example.com">
    <button>前往網站</button>
</a>
```

### 語義化標籤

```html
<header>
    <h1>網站標題</h1>
    <nav>
        <ul>
            <li><a href="#">首頁</a></li>
            <li><a href="#">關於我們</a></li>
            <li><a href="#">聯絡我們</a></li>
        </ul>
    </nav>
</header>

<main>
    <article>
        <h2>文章標題</h2>
        <p>文章內容...</p>
    </article>
    
    <aside>
        <h3>相關資訊</h3>
        <p>側邊欄內容...</p>
    </aside>
</main>

<footer>
    <p>&copy; 2025 我的網站</p>
</footer>
```

## CSS 基礎

### CSS 的基本觀念

- CSS 用於描述 HTML 元素如何在螢幕上呈現
- CSS 規則由選擇器和聲明區塊組成：
  ```css
  選擇器 {
    屬性: 值;
    屬性: 值;
  }
  ```

### CSS 使用方式

#### 行內樣式

```html
<p style="color: blue; font-size: 16px;">這是藍色文字。</p>
```

#### 內部樣式表

```html
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
```

#### 外部樣式表 (推薦)

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

```css
/* styles.css */
p {
    color: blue;
    font-size: 16px;
}
```

### CSS 顏色單位

```css
/* 顏色名稱 */
color: red;

/* RGB 值 */
color: rgb(255, 0, 0);  /* 紅色 */
color: rgb(0, 255, 0);  /* 綠色 */
color: rgb(0, 0, 255);  /* 藍色 */

/* 十六進制顏色代碼 */
color: #ff0000;  /* 紅色 */
color: #00ff00;  /* 綠色 */
color: #0000ff;  /* 藍色 */

/* HSL (色相、飽和度、亮度) */
color: hsl(0, 100%, 50%);    /* 紅色 */
color: hsl(120, 100%, 50%);  /* 綠色 */
color: hsl(240, 100%, 50%);  /* 藍色 */
```

### CSS 字體

```css
/* 指定字體 */
font-family: Arial, Helvetica, sans-serif;

/* 使用 Google Fonts */
/* 先在 HTML 的 head 中添加: */
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">

/* 然後在 CSS 中使用: */
font-family: 'Roboto', sans-serif;

/* 自定義字體 */
@font-face {
    font-family: 'MyCustomFont';
    src: url('fonts/custom-font.woff2') format('woff2');
}

font-family: 'MyCustomFont', Arial, sans-serif;
```

### CSS 邊框

```css
/* 單獨設定各屬性 */
border-width: 2px;
border-style: solid;
border-color: black;

/* 縮寫 */
border: 2px solid black;

/* 圓角邊框 */
border-radius: 5px;

/* 單獨設定各邊 */
border-top: 1px solid red;
border-right: 2px dashed green;
border-bottom: 3px dotted blue;
border-left: 4px double yellow;
```

### CSS 背景

```css
/* 背景顏色 */
background-color: #f0f0f0;

/* 背景圖片 */
background-image: url('background.jpg');

/* 背景重複 */
background-repeat: no-repeat;  /* 不重複 */
background-repeat: repeat-x;   /* 水平重複 */
background-repeat: repeat-y;   /* 垂直重複 */

/* 背景尺寸 */
background-size: cover;    /* 覆蓋整個容器 */
background-size: contain;  /* 確保整張圖片可見 */
background-size: 200px 100px;  /* 指定寬高 */

/* 背景位置 */
background-position: center;
background-position: top left;
background-position: 50% 25%;

/* 縮寫 */
background: #f0f0f0 url('background.jpg') no-repeat center / cover;
```

### CSS 浮動排版

```css
/* 向左浮動 */
float: left;

/* 向右浮動 */
float: right;

/* 清除浮動 */
clear: both;
```

### CSS Overflow

```css
/* 預設值，內容超出容器會顯示 */
overflow: visible;

/* 內容超出容器會被隱藏 */
overflow: hidden;

/* 總是顯示捲軸 */
overflow: scroll;

/* 需要時才顯示捲軸 */
overflow: auto;
```

### CSS Display

```css
/* 區塊元素 */
display: block;

/* 行內元素 */
display: inline;

/* 行內區塊元素 */
display: inline-block;

/* 隱藏元素 */
display: none;

/* Flex 容器 */
display: flex;

/* Grid 容器 */
display: grid;
```

### CSS 寬度和高度

```css
/* 固定值 */
width: 300px;
height: 200px;

/* 百分比 */
width: 50%;
height: 100%;

/* 視窗寬高百分比 */
width: 50vw;  /* 視窗寬度的 50% */
height: 50vh; /* 視窗高度的 50% */

/* 最小最大值 */
min-width: 100px;
max-width: 500px;
min-height: 100px;
max-height: 500px;
```

### CSS 定位

```css
/* 靜態定位（預設） */
position: static;

/* 相對定位（相對於自己的原始位置） */
position: relative;
top: 10px;
left: 20px;

/* 絕對定位（相對於最近的已定位祖先） */
position: absolute;
top: 0;
right: 0;

/* 固定定位（相對於視窗） */
position: fixed;
bottom: 20px;
right: 20px;

/* 黏性定位 */
position: sticky;
top: 0;  /* 滾動到頂部時會固定 */
```

### CSS 盒模型

```css
/* 內容區域 */
width: 300px;
height: 200px;

/* 內邊距 */
padding: 20px;  /* 四邊都是 20px */
padding: 10px 20px;  /* 上下 10px，左右 20px */
padding: 10px 20px 30px 40px;  /* 上右下左 */

/* 邊框 */
border: 1px solid black;

/* 外邊距 */
margin: 10px;  /* 四邊都是 10px */
margin: 10px auto;  /* 上下 10px，左右自動居中 */
margin: 10px 20px 30px 40px;  /* 上右下左 */

/* 改變盒模型計算方式 */
box-sizing: border-box;  /* 寬高包含 padding 和 border */
```

### CSS 選擇器

```css
/* 元素選擇器 */
p {
    color: blue;
}

/* ID 選擇器 */
#header {
    background-color: black;
}

/* 類別選擇器 */
.highlight {
    background-color: yellow;
}

/* 通用選擇器 */
* {
    margin: 0;
    padding: 0;
}

/* 群組選擇器 */
h1, h2, h3 {
    font-family: Arial, sans-serif;
}
```

### CSS 選擇器組合器

```css
/* 後代選擇器 */
article p {  /* article 內的所有 p */
    color: gray;
}

/* 子選擇器 */
article > p {  /* article 的直接子元素 p */
    color: blue;
}

/* 相鄰兄弟選擇器 */
h2 + p {  /* 緊跟在 h2 後的第一個 p */
    font-weight: bold;
}

/* 一般兄弟選擇器 */
h2 ~ p {  /* h2 後的所有同層級 p */
    color: green;
}
```

### CSS 屬性選擇器

```css
/* 具有特定屬性的元素 */
[class] {
    color: blue;
}

/* 屬性值等於指定值的元素 */
[type="email"] {
    border: 1px solid blue;
}

/* 屬性值以指定值開頭的元素 */
[href^="https"] {
    color: green;
}

/* 屬性值以指定值結尾的元素 */
[href$=".pdf"] {
    color: red;
}

/* 屬性值包含指定值的元素 */
[title*="hello"] {
    font-weight: bold;
}
```

### CSS 偽類別

```css
/* 連結狀態 */
a:link {  /* 未訪問的連結 */
    color: blue;
}
a:visited {  /* 已訪問的連結 */
    color: purple;
}
a:hover {  /* 滑鼠懸停的連結 */
    text-decoration: underline;
}
a:active {  /* 點擊中的連結 */
    color: red;
}

/* 元素狀態 */
input:focus {  /* 獲得焦點的輸入框 */
    border: 2px solid blue;
}
button:disabled {  /* 禁用的按鈕 */
    opacity: 0.5;
}

/* 結構偽類 */
li:first-child {  /* 第一個子元素 */
    font-weight: bold;
}
li:last-child {  /* 最後一個子元素 */
    color: red;
}
li:nth-child(odd) {  /* 奇數位置的子元素 */
    background-color: #f0f0f0;
}
li:nth-child(even) {  /* 偶數位置的子元素 */
    background-color: #e0e0e0;
}
p:empty {  /* 沒有內容的元素 */
    display: none;
}

/* 否定偽類 */
:not(.highlight) {  /* 不具有 highlight 類別的元素 */
    color: gray;
}
```

### CSS 偽元素

```css
/* 第一個字母 */
p::first-letter {
    font-size: 2em;
    font-weight: bold;
}

/* 第一行 */
p::first-line {
    color: blue;
}

/* 選中的文字 */
::selection {
    background-color: yellow;
    color: black;
}

/* 在元素內容前插入 */
.info::before {
    content: "⚠️ ";
}

/* 在元素內容後插入 */
.external-link::after {
    content: " 🔗";
}

/* 列表項目符號 */
li::marker {
    color: red;
}
```

### CSS 權重 (Specificity)

權重從低到高:
1. 元素、偽元素選擇器: `p`, `div`, `::before` (權值: 001)
2. 類別、屬性、偽類選擇器: `.class`, `[type="text"]`, `:hover` (權值: 010)
3. ID 選擇器: `#id` (權值: 100)
4. 行內樣式: `style="..."` (權值: 1000)
5. !important: `color: red !important;` (最高權重)

### CSS 過渡 (Transitions)

```css
/* 單獨設定 */
transition-property: background-color;  /* 要過渡的屬性 */
transition-duration: 0.3s;              /* 過渡時間 */
transition-timing-function: ease-in-out; /* 過渡速度曲線 */
transition-delay: 0.1s;                 /* 延遲時間 */

/* 縮寫 */
transition: background-color 0.3s ease-in-out 0.1s;

/* 多個屬性過渡 */
transition: color 0.3s, background-color 0.5s;

/* 所有可過渡屬性 */
transition: all 0.3s;
```

### CSS 動畫 (Animations)

```css
/* 定義關鍵影格 */
@keyframes slide-in {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

/* 應用動畫 */
.box {
    /* 單獨設定 */
    animation-name: slide-in;           /* 動畫名稱 */
    animation-duration: 1s;             /* 動畫時間 */
    animation-timing-function: ease;    /* 速度曲線 */
    animation-delay: 0.5s;              /* 延遲時間 */
    animation-iteration-count: 3;       /* 重複次數 */
    animation-direction: alternate;     /* 播放方向 */
    animation-fill-mode: forwards;      /* 結束後保持最後狀態 */

    /* 縮寫 */
    animation: slide-in 1s ease 0.5s 3 alternate forwards;
}
```

### Font Awesome 使用

```html
<!-- 在 head 中添加 Font Awesome -->
<head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>

<!-- 使用 Font Awesome 圖示 -->
<i class="fas fa-star"></i>           <!-- 實心星星 -->
<i class="far fa-star"></i>           <!-- 空心星星 -->
<i class="fab fa-twitter"></i>        <!-- Twitter 圖示 -->

<!-- 調整大小 -->
<i class="fas fa-star fa-lg"></i>     <!-- 大一點 -->
<i class="fas fa-star fa-2x"></i>     <!-- 兩倍大 -->
```

### 響應式網頁設計 (RWD)

```css
/* 媒體查詢 */
@media screen and (max-width: 600px) {
    /* 小螢幕的樣式 */
    .container {
        width: 100%;
    }
    .sidebar {
        display: none;
    }
}

@media screen and (min-width: 601px) and (max-width: 1024px) {
    /* 中型螢幕的樣式 */
    .container {
        width: 80%;
    }
}

@media screen and (min-width: 1025px) {
    /* 大螢幕的樣式 */
    .container {
        width: 1000px;
    }
}

/* 響應式圖片 */
img {
    max-width: 100%;
    height: auto;
}
```


### CSS Flexbox

```css
/* 容器設定 */
.container {
  display: flex;
  
  /* 主軸方向 */
  flex-direction: row; /* 水平排列 (默認) */
  /* flex-direction: row-reverse; */ /* 水平反向排列 */
  /* flex-direction: column; */ /* 垂直排列 */
  /* flex-direction: column-reverse; */ /* 垂直反向排列 */
  
  /* 換行設定 */
  flex-wrap: nowrap; /* 不換行 (默認) */
  /* flex-wrap: wrap; */ /* 換行 */
  /* flex-wrap: wrap-reverse; */ /* 反向換行 */
  
  /* 縮寫: flex-direction + flex-wrap */
  /* flex-flow: row wrap; */
  
  /* 主軸對齊 */
  justify-content: flex-start; /* 靠左/靠上 (默認) */
  /* justify-content: flex-end; */ /* 靠右/靠下 */
  /* justify-content: center; */ /* 居中 */
  /* justify-content: space-between; */ /* 兩端對齊 */
  /* justify-content: space-around; */ /* 均勻分布 (項目周圍) */
  /* justify-content: space-evenly; */ /* 均勻分布 (所有間距相等) */
  
  /* 交叉軸對齊 */
  align-items: stretch; /* 拉伸填滿 (默認) */
  /* align-items: flex-start; */ /* 靠上/靠左 */
  /* align-items: flex-end; */ /* 靠下/靠右 */
  /* align-items: center; */ /* 居中 */
  /* align-items: baseline; */ /* 基線對齊 */
  
  /* 多行對齊 (需設定 flex-wrap: wrap) */
  align-content: stretch; /* 拉伸填滿 (默認) */
  /* align-content: flex-start; */ /* 靠上 */
  /* align-content: flex-end; */ /* 靠下 */
  /* align-content: center; */ /* 居中 */
  /* align-content: space-between; */ /* 兩端對齊 */
  /* align-content: space-around; */ /* 均勻分布 */
}

/* 項目設定 */
.item {
  /* 排序 */
  order: 0; /* 預設值 (數字越小越靠前) */
  
  /* 放大比例 */
  flex-grow: 0; /* 預設不放大 */
  
  /* 縮小比例 */
  flex-shrink: 1; /* 預設會等比縮小 */
  
  /* 初始大小 */
  flex-basis: auto; /* 預設大小 */
  
  /* 縮寫: flex-grow + flex-shrink + flex-basis */
  flex: 0 1 auto; /* 默認值 */
  /* flex: 1; */ /* 等同於 flex: 1 1 0%; (常用於均分空間) */
  
  /* 個別交叉軸對齊 (覆蓋容器的 align-items) */
  align-self: auto; /* 跟隨容器設定 (默認) */
  /* align-self: flex-start; */ /* 靠上/靠左 */
  /* align-self: flex-end; */ /* 靠下/靠右 */
  /* align-self: center; */ /* 居中 */
  /* align-self: stretch; */ /* 拉伸填滿 */
}
```

### Flexbox 實例應用

```css
/* 基本導航欄 */
.navbar {
  display: flex;
  justify-content: space-between; /* 項目間均勻分布 */
  align-items: center; /* 垂直居中 */
  padding: 1rem;
  background-color: #333;
}

/* 均等分布的卡片容器 */
.card-container {
  display: flex;
  flex-wrap: wrap; /* 允許卡片換行 */
  gap: 20px; /* 卡片間距 */
}

.card {
  flex: 1 1 300px; /* 放大比例1, 縮小比例1, 基本寬度300px */
  min-width: 300px; /* 最小寬度 */
  padding: 20px;
  border: 1px solid #ddd;
}

/* 聖杯布局 (Header, Sidebar, Main, Footer) */
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 至少佔滿整個視窗高度 */
}

.header, .footer {
  background-color: #f0f0f0;
  padding: 20px;
}

.content-container {
  display: flex;
  flex: 1; /* 佔用所有可用空間 */
}

.sidebar {
  flex: 0 0 200px; /* 不放大, 不縮小, 固定寬度200px */
  background-color: #e0e0e0;
  padding: 20px;
}

.main-content {
  flex: 1; /* 佔用所有剩餘空間 */
  padding: 20px;
}

/* 響應式布局: 在小螢幕上改變排列方向 */
@media (max-width: 768px) {
  .content-container {
    flex-direction: column; /* 改為垂直排列 */
  }
  
  .sidebar {
    flex-basis: auto; /* 重置固定寬度 */
  }
}
```

### CSS Grid 布局

```css
/* 容器設定 */
.grid-container {
  display: grid;
  
  /* 定義網格列 */
  grid-template-columns: 200px 1fr 2fr; /* 三列: 固定寬度, 1份剩餘空間, 2份剩餘空間 */
  /* grid-template-columns: repeat(3, 1fr); */ /* 三列等寬 */
  /* grid-template-columns: minmax(100px, 1fr) 2fr 1fr; */ /* 第一列最小100px, 最大1fr */
  
  /* 定義網格行 */
  grid-template-rows: 100px auto 100px; /* 三行: 固定高度, 自動高度, 固定高度 */
  /* grid-template-rows: repeat(3, minmax(100px, auto)); */ /* 三行最小高度100px */
  
  /* 網格間距 */
  gap: 20px; /* 行和列間距都是20px */
  /* column-gap: 20px; */ /* 僅列間距 */
  /* row-gap: 10px; */ /* 僅行間距 */
  
  /* 簡寫: 區域命名 */
  grid-template-areas: 
    "header header header"
    "sidebar main main"
    "footer footer footer";
    
  /* 項目對齊 (水平方向) */
  justify-items: stretch; /* 拉伸填滿 (默認) */
  /* justify-items: start; */ /* 靠左 */
  /* justify-items: end; */ /* 靠右 */
  /* justify-items: center; */ /* 居中 */
  
  /* 項目對齊 (垂直方向) */
  align-items: stretch; /* 拉伸填滿 (默認) */
  /* align-items: start; */ /* 靠上 */
  /* align-items: end; */ /* 靠下 */
  /* align-items: center; */ /* 居中 */
  
  /* 整體內容對齊 (當網格大小小於容器) */
  justify-content: start; /* 靠左 (默認) */
  /* justify-content: end; */ /* 靠右 */
  /* justify-content: center; */ /* 居中 */
  /* justify-content: space-between; */ /* 兩端對齊 */
  /* justify-content: space-around; */ /* 均勻分布 */
  
  align-content: start; /* 靠上 (默認) */
  /* align-content: end; */ /* 靠下 */
  /* align-content: center; */ /* 居中 */
  /* align-content: space-between; */ /* 兩端對齊 */
  /* align-content: space-around; */ /* 均勻分布 */
}

/* 項目設定 */
.grid-item {
  /* 指定項目位置 (基於網格線編號) */
  grid-column-start: 1;
  grid-column-end: 3; /* 或 span 2 (橫跨2列) */
  grid-row-start: 1;
  grid-row-end: 2;
  
  /* 縮寫 */
  grid-column: 1 / 3; /* 從第1條列線到第3條列線 */
  /* grid-column: 1 / span 2; */ /* 從第1條列線開始橫跨2列 */
  grid-row: 1 / 2; /* 從第1條行線到第2條行線 */
  
  /* 更簡潔的縮寫: grid-row-start / grid-column-start / grid-row-end / grid-column-end */
  grid-area: 1 / 1 / 2 / 3;
  
  /* 使用命名區域 */
  grid-area: header;
  
  /* 個別項目對齊 */
  justify-self: stretch; /* 水平拉伸 (默認) */
  /* justify-self: start; */ /* 靠左 */
  /* justify-self: end; */ /* 靠右 */
  /* justify-self: center; */ /* 水平居中 */
  
  align-self: stretch; /* 垂直拉伸 (默認) */
  /* align-self: start; */ /* 靠上 */
  /* align-self: end; */ /* 靠下 */
  /* align-self: center; */ /* 垂直居中 */
}
```

### CSS Grid 實例應用

```css
/* 照片牆布局 */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* 自動填充, 每列最小250px */
  gap: 15px;
  padding: 20px;
}

.gallery-item {
  overflow: hidden;
  border-radius: 8px;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 經典網頁布局 */
.page-layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav content sidebar"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.content { grid-area: content; }
.sidebar { grid-area: sidebar; }
.footer { grid-area: footer; }

/* 響應式布局 */
@media (max-width: 768px) {
  .page-layout {
    grid-template-areas:
      "header"
      "nav"
      "content"
      "sidebar"
      "footer";
    grid-template-columns: 1fr; /* 單列 */
  }
}

/* 網格中的網格 (嵌套網格) */
.nested-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.nested-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: 5px;
}
```

### CSS 動畫與過渡

```css
/* 過渡效果 */
.transition-element {
  width: 100px;
  height: 100px;
  background-color: blue;
  
  /* 單一屬性過渡 */
  transition: background-color 0.5s ease;
  
  /* 多屬性過渡 */
  /* transition: background-color 0.5s ease, transform 0.3s ease-in-out; */
  
  /* 所有可過渡屬性 */
  /* transition: all 0.5s ease; */
  
  /* 延遲過渡 */
  /* transition: background-color 0.5s ease 0.2s; */ /* 延遲0.2秒 */
}

.transition-element:hover {
  background-color: red;
  transform: scale(1.2); /* 放大1.2倍 */
}

/* 動畫 */
@keyframes slide-in {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.animated-element {
  animation-name: slide-in; /* 動畫名稱 */
  animation-duration: 1s; /* 持續時間 */
  animation-timing-function: ease-out; /* 時間函數 */
  animation-delay: 0s; /* 延遲 */
  animation-iteration-count: 1; /* 重複次數 (infinite為無限重複) */
  animation-direction: normal; /* 方向 (normal, reverse, alternate, alternate-reverse) */
  animation-fill-mode: forwards; /* 結束後保持最後一幀 */
  
  /* 縮寫 */
  /* animation: slide-in 1s ease-out 0s 1 normal forwards; */
}

/* 多步驟動畫 */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.pulse-element {
  animation: pulse 2s infinite ease-in-out;
}
```

### CSS 變數 (自定義屬性)

```css
/* 全局變數定義 */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --padding-standard: 15px;
  --border-radius: 8px;
  --font-main: 'Roboto', sans-serif;
}

/* 使用變數 */
.button {
  background-color: var(--primary-color);
  padding: var(--padding-standard);
  border-radius: var(--border-radius);
  font-family: var(--font-main);
  color: white;
}

.button-secondary {
  background-color: var(--secondary-color);
}

/* 作用域變數 */
.card {
  --card-padding: 20px;
  padding: var(--card-padding);
}

/* 變數計算與備用值 */
.element {
  margin: calc(var(--padding-standard) * 2);
  color: var(--text-color, #333); /* 如果--text-color未定義, 使用#333 */
}
```
