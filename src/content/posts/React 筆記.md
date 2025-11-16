---
title: React 筆記
published: 2025-04-13
description: '用 Vite 建立專案，學習 Component、Props、State 等核心概念，然後實作一個功能完整的 Todo App，包含新增、刪除、編輯、完成切換等操作。'
image: ''
tags: [React,前端,筆記]
category: '筆記'
draft: false 
lang: ''
---

筆記影片來源：https://youtu.be/aBTiZfShe-4

---

## 建立專案

用 Vite 建立 React 專案（比 Create React App 快很多）：

```bash
npm create vite@latest my-react-app
# 選 React
# 選 JavaScript
cd my-react-app
npm install
npm run dev
```

打開 http://localhost:5173 就能看到畫面了。

### 專案結構

```
my-react-app/
├── src/               # 主要寫程式的地方
│   ├── App.jsx       # 根組件
│   ├── main.jsx      # 進入點
│   └── App.css       # 樣式
├── public/            # 靜態檔案（圖片之類的）
├── index.html         # HTML 模板
└── package.json       # 專案設定
```

`index.html` 裡面有一個 `<div id="root"></div>`，React 會把整個應用程式掛載到這裡。

`main.jsx` 是程式的進入點：

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## React 基礎概念

### Component（組件）

React 的核心就是組件，把 UI 拆成一個個可重用的小單位。

```jsx
function Header() {
  return (
    <header>
      <h1>我的網站</h1>
      <nav>首頁 | 關於</nav>
    </header>
  )
}

function App() {
  return (
    <div>
      <Header />
      <main>內容區塊</main>
    </div>
  )
}
```

注意：
- 組件名稱要大寫開頭（`Header`，不是 `header`）
- 組件就是一個 function，回傳 JSX
- 使用時寫成 `<Header />` 這種標籤形式
- 建議一個檔案只放一個組件

### JSX 語法

JSX 看起來像 HTML，但其實是 JavaScript。

```jsx
const user = {
  name: '小明',
  age: 25
}

function UserCard() {
  return (
    <div className="card">  {/* 注意是 className 不是 class */}
      <h2>{user.name}</h2>
      <p>年齡：{user.age}</p>
      <p>{user.age >= 18 ? '成年' : '未成年'}</p>
    </div>
  )
}
```

在 JSX 裡面用 `{}` 可以執行 JavaScript：
- `{變數}`
- `{函數()}`
- `{條件 ? 值A : 值B}`

style 屬性要傳物件：

```jsx
<div style={{ 
  color: 'red', 
  fontSize: '20px',
  marginTop: '10px'  // CSS 屬性要用駝峰式
}}>
  紅色大字
</div>
```

如果不想多包一層 div，可以用 Fragment：

```jsx
function List() {
  return (
    <>
      <li>項目 1</li>
      <li>項目 2</li>
      <li>項目 3</li>
    </>
  )
}
```

### Props（屬性）

Props 讓你可以從父組件傳資料給子組件。

```jsx
// 父組件
function App() {
  return (
    <div>
      <Greeting name="小華" age={20} />
      <Greeting name="小美" age={22} />
    </div>
  )
}

// 子組件接收 props
function Greeting(props) {
  return <h1>哈囉 {props.name}，你 {props.age} 歲</h1>
}

// 更常見的寫法：直接解構
function Greeting({ name, age }) {
  return <h1>哈囉 {name}，你 {age} 歲</h1>
}
```

傳遞各種類型的資料：

```jsx
<Component 
  text="字串直接寫"
  number={123}
  boolean={true}
  array={[1, 2, 3]}
  object={{ key: 'value' }}
  function={() => console.log('hi')}
/>
```

### State（狀態）

State 是組件的記憶體，當 state 改變時，React 會自動重新渲染畫面。

```jsx
import { useState } from 'react'

function Counter() {
  // useState 回傳 [當前值, 更新函數]
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)  // 用 setCount 更新
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <h2>計數器：{count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={() => setCount(0)}>重置</button>
    </div>
  )
}
```

重要觀念：
- 永遠用 `setState` 更新，不要直接改 `count = count + 1`（這樣不會觸發重新渲染）
- `useState(0)` 的 `0` 是初始值
- 可以有多個 state：

```jsx
function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState(0)
  
  // ...
}
```

### 事件處理

```jsx
function Form() {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()  // 防止表單送出重新整理頁面
    console.log('送出：', text)
    setText('')  // 清空輸入框
  }

  const handleChange = (e) => {
    setText(e.target.value)  // 取得輸入框的值
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text}
        onChange={handleChange}
        placeholder="輸入文字"
      />
      <button type="submit">送出</button>
    </form>
  )
}
```

常見事件：
- `onClick`
- `onChange`
- `onSubmit`
- `onKeyDown`
- `onMouseEnter` / `onMouseLeave`

注意是 `onClick` 不是 `onclick`，要用駝峰式。

### 條件渲染

根據條件決定要顯示什麼。

```jsx
function LoginButton({ isLoggedIn, username }) {
  // 方法 1：三元運算子
  return (
    <div>
      {isLoggedIn ? (
        <p>歡迎回來，{username}！</p>
      ) : (
        <button>登入</button>
      )}
    </div>
  )
}

function Notification({ count }) {
  // 方法 2：&& 運算子（只有 true 才顯示）
  return (
    <div>
      {count > 0 && <span className="badge">{count}</span>}
    </div>
  )
}

function Dashboard({ user }) {
  // 方法 3：提早 return
  if (!user) {
    return <p>請先登入</p>
  }
  
  return (
    <div>
      <h1>儀表板</h1>
      <p>用戶：{user.name}</p>
    </div>
  )
}
```

### 列表渲染

用 `map()` 把陣列轉成 JSX。

```jsx
function TodoList() {
  const todos = [
    { id: 1, text: '寫程式', done: false },
    { id: 2, text: '吃飯', done: true },
    { id: 3, text: '睡覺', done: false }
  ]

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span style={{ 
            textDecoration: todo.done ? 'line-through' : 'none' 
          }}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  )
}
```

**key 很重要！**
- 每個項目都要有唯一的 `key`
- 通常用 `id`，不要用 `index`（會有效能問題）
- React 用 key 來追蹤哪些項目改變了

---

## Todo App 實作

現在來做一個完整的 Todo App，會用到上面所有概念。

### 安裝圖示套件

```bash
npm install react-icons
```

這個套件有超多圖示可以用：

```jsx
import { MdDelete, MdEdit, MdCheck, MdAdd } from 'react-icons/md'
import { FaTrash, FaEdit } from 'react-icons/fa'
```

### 基本結構

```jsx
import { useState } from 'react'
import { MdDelete, MdEdit, MdCheck } from 'react-icons/md'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '學習 React', isCompleted: false },
    { id: 2, text: '做專案', isCompleted: false }
  ])
  const [input, setInput] = useState('')

  return (
    <div className="container">
      <h1>待辦清單</h1>
      {/* 新增表單 */}
      {/* 待辦列表 */}
    </div>
  )
}

export default App
```

### 新增待辦

```jsx
const addTodo = (e) => {
  e.preventDefault()
  
  // 檢查是否為空
  if (input.trim() === '') {
    alert('請輸入待辦事項')
    return
  }
  
  // 建立新的 todo 物件
  const newTodo = {
    id: Date.now(),  // 用時間戳當 id
    text: input,
    isCompleted: false
  }
  
  // 更新 state（加到陣列最前面）
  setTodos([newTodo, ...todos])
  
  // 清空輸入框
  setInput('')
}

// JSX
<form onSubmit={addTodo}>
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="輸入新的待辦事項..."
  />
  <button type="submit">新增</button>
</form>
```

### 顯示待辦列表

```jsx
<ul className="todo-list">
  {todos.length === 0 ? (
    <p className="empty">目前沒有待辦事項</p>
  ) : (
    todos.map(todo => (
      <li key={todo.id} className={todo.isCompleted ? 'completed' : ''}>
        <div className="todo-content">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleComplete(todo.id)}
          />
          <span>{todo.text}</span>
        </div>
        <div className="todo-actions">
          <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
            <MdDelete />
          </button>
        </div>
      </li>
    ))
  )}
</ul>
```

### 刪除待辦

```jsx
const deleteTodo = (id) => {
  // 用 filter 過濾掉要刪除的項目
  const newTodos = todos.filter(todo => todo.id !== id)
  setTodos(newTodos)
}

// 或是更簡潔的寫法
const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
}
```

### 切換完成狀態

```jsx
const toggleComplete = (id) => {
  // 用 map 找到對應的 todo，切換它的 isCompleted
  const newTodos = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, isCompleted: !todo.isCompleted }
    }
    return todo
  })
  setTodos(newTodos)
}

// 更簡潔的寫法
const toggleComplete = (id) => {
  setTodos(todos.map(todo =>
    todo.id === id 
      ? { ...todo, isCompleted: !todo.isCompleted }
      : todo
  ))
}
```

這裡用到展開運算子 `...todo`，它會複製整個物件，然後只改變 `isCompleted`。

### 編輯待辦

編輯功能比較複雜，需要多一個 state 來記錄正在編輯哪一個。

```jsx
const [editingId, setEditingId] = useState(null)
const [editText, setEditText] = useState('')

const startEdit = (todo) => {
  setEditingId(todo.id)
  setEditText(todo.text)
}

const saveEdit = (id) => {
  if (editText.trim() === '') {
    alert('待辦事項不能是空的')
    return
  }
  
  setTodos(todos.map(todo =>
    todo.id === id 
      ? { ...todo, text: editText }
      : todo
  ))
  
  setEditingId(null)
  setEditText('')
}

const cancelEdit = () => {
  setEditingId(null)
  setEditText('')
}
```

在 JSX 裡判斷是否正在編輯：

```jsx
<li key={todo.id}>
  {editingId === todo.id ? (
    // 編輯模式
    <div className="edit-mode">
      <input
        type="text"
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        autoFocus
      />
      <button onClick={() => saveEdit(todo.id)}>儲存</button>
      <button onClick={cancelEdit}>取消</button>
    </div>
  ) : (
    // 一般模式
    <div className="todo-content">
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleComplete(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => startEdit(todo)}>
        <MdEdit />
      </button>
      <button onClick={() => deleteTodo(todo.id)}>
        <MdDelete />
      </button>
    </div>
  )}
</li>
```

### 完整程式碼

```jsx
import { useState } from 'react'
import { MdDelete, MdEdit, MdCheck } from 'react-icons/md'
import './App.css'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState('')

  // 新增
  const addTodo = (e) => {
    e.preventDefault()
    if (input.trim() === '') return
    
    setTodos([{
      id: Date.now(),
      text: input,
      isCompleted: false
    }, ...todos])
    
    setInput('')
  }

  // 刪除
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  // 切換完成
  const toggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id 
        ? { ...todo, isCompleted: !todo.isCompleted }
        : todo
    ))
  }

  // 編輯相關
  const startEdit = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  const saveEdit = (id) => {
    if (editText.trim() === '') return
    
    setTodos(todos.map(todo =>
      todo.id === id 
        ? { ...todo, text: editText }
        : todo
    ))
    
    setEditingId(null)
  }

  const cancelEdit = () => {
    setEditingId(null)
  }

  // 統計
  const totalTodos = todos.length
  const completedTodos = todos.filter(t => t.isCompleted).length
  const activeTodos = totalTodos - completedTodos

  return (
    <div className="app">
      <div className="container">
        <h1>📝 待辦清單</h1>
        
        <div className="stats">
          <span>全部：{totalTodos}</span>
          <span>未完成：{activeTodos}</span>
          <span>已完成：{completedTodos}</span>
        </div>

        <form onSubmit={addTodo} className="add-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="輸入新的待辦事項..."
          />
          <button type="submit">新增</button>
        </form>

        <ul className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-message">還沒有待辦事項，開始新增吧！</p>
          ) : (
            todos.map(todo => (
              <li 
                key={todo.id} 
                className={todo.isCompleted ? 'completed' : ''}
              >
                {editingId === todo.id ? (
                  <div className="edit-mode">
                    <input
                      type="text"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') saveEdit(todo.id)
                        if (e.key === 'Escape') cancelEdit()
                      }}
                      autoFocus
                    />
                    <button onClick={() => saveEdit(todo.id)}>
                      <MdCheck />
                    </button>
                    <button onClick={cancelEdit}>取消</button>
                  </div>
                ) : (
                  <>
                    <div className="todo-content">
                      <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => toggleComplete(todo.id)}
                      />
                      <span onClick={() => toggleComplete(todo.id)}>
                        {todo.text}
                      </span>
                    </div>
                    <div className="todo-actions">
                      <button 
                        onClick={() => startEdit(todo)}
                        className="edit-btn"
                      >
                        <MdEdit />
                      </button>
                      <button 
                        onClick={() => deleteTodo(todo.id)}
                        className="delete-btn"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
```

### 基本樣式

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  background: #f5f5f5;
}

.app {
  min-height: 100vh;
  padding: 40px 20px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
}

.stats span {
  font-size: 14px;
  color: #666;
}

.add-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.add-form input {
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
}

.add-form input:focus {
  outline: none;
  border-color: #4CAF50;
}

.add-form button {
  padding: 12px 24px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
}

.add-form button:hover {
  background: #45a049;
}

.todo-list {
  list-style: none;
}

.todo-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
}

.todo-list li:last-child {
  border-bottom: none;
}

.todo-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.todo-content input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.todo-content span {
  flex: 1;
  cursor: pointer;
  user-select: none;
}

.completed span {
  text-decoration: line-through;
  color: #999;
}

.todo-actions {
  display: flex;
  gap: 8px;
}

.todo-actions button {
  padding: 8px 12px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #666;
  transition: color 0.2s;
}

.edit-btn:hover {
  color: #2196F3;
}

.delete-btn:hover {
  color: #f44336;
}

.edit-mode {
  display: flex;
  gap: 8px;
  width: 100%;
}

.edit-mode input {
  flex: 1;
  padding: 8px 12px;
  border: 2px solid #2196F3;
  border-radius: 4px;
}

.edit-mode button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #2196F3;
  color: white;
}

.empty-message {
  text-align: center;
  color: #999;
  padding: 40px 0;
}
```

---

## 進階技巧

### LocalStorage 持久化

讓資料重新整理後不會消失：

```jsx
import { useState, useEffect } from 'react'

function App() {
  // 從 localStorage 讀取初始資料
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  // 當 todos 改變時，存到 localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // ... 其他程式碼
}
```

### 過濾功能

顯示全部/未完成/已完成：

```jsx
const [filter, setFilter] = useState('all') // 'all', 'active', 'completed'

const filteredTodos = todos.filter(todo => {
  if (filter === 'active') return !todo.isCompleted
  if (filter === 'completed') return todo.isCompleted
  return true
})

// JSX
<div className="filters">
  <button 
    className={filter === 'all' ? 'active' : ''}
    onClick={() => setFilter('all')}
  >
    全部 ({todos.length})
  </button>
  <button 
    className={filter === 'active' ? 'active' : ''}
    onClick={() => setFilter('active')}
  >
    未完成 ({activeTodos})
  </button>
  <button 
    className={filter === 'completed' ? 'active' : ''}
    onClick={() => setFilter('completed')}
  >
    已完成 ({completedTodos})
  </button>
</div>

<ul>
  {filteredTodos.map(todo => (
    // ...
  ))}
</ul>
```

### 清除已完成

```jsx
const clearCompleted = () => {
  setTodos(todos.filter(todo => !todo.isCompleted))
}

<button onClick={clearCompleted}>
  清除已完成項目
</button>
```

---

## 常見問題

**Q: 為什麼不能直接改 state？**

```jsx
// ❌ 錯誤
todos.push(newTodo)
setTodos(todos)

// ✅ 正確
setTodos([...todos, newTodo])
```

因為 React 是比較記憶體位址來判斷有沒有改變，直接修改陣列不會改變位址，所以 React 不會重新渲染。

**Q: 為什麼 key 不能用 index？**

```jsx
// ❌ 不好
{todos.map((todo, index) => (
  <Todo key={index} todo={todo} />
))}

// ✅ 好
{todos.map(todo => (
  <Todo key={todo.id} todo={todo} />
))}
```

當你刪除中間的項目時，index 會重新排列，React 會誤以為是不同的項目，造成錯誤或效能問題。

**Q: useState 可以放物件嗎？**

可以，但更新時要注意：

```jsx
const [user, setUser] = useState({
  name: '小明',
  age: 25
})

// ❌ 這樣只會改變 name，age 會消失
setUser({ name: '小華' })

// ✅ 用展開運算子保留其他屬性
setUser({ ...user, name: '小華' })

// ✅ 或是用函數式更新
setUser(prev => ({ ...prev, name: '小華' }))
```

**Q: 事件處理函數要不要加括號？**

```jsx
// ❌ 會立刻執行
<button onClick={deleteTodo(todo.id)}>刪除</button>

// ✅ 用箭頭函數包起來
<button onClick={() => deleteTodo(todo.id)}>刪除</button>

// ✅ 如果不需要傳參數，可以直接傳
<button onClick={handleClick}>點我</button>
```

---

## 下一步學習

這個 Todo App 已經包含 React 最基礎的概念了。接下來可以學：

**useEffect**  
處理副作用，像是 API 呼叫、訂閱、計時器等。

```jsx
useEffect(() => {
  // 做一些事情
  
  return () => {
    // 清理（如果需要）
  }
}, [依賴項目])
```

**Custom Hooks**  
把重複的邏輯抽出來變成自己的 Hook。

```jsx
function useTodos() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (text) => {
    // ...
  }
  
  return { todos, addTodo }
}
```

**React Router**  
多頁面路由。

**Context API**  
跨組件傳遞資料，不用一層層傳 props。

**其他工具**
- TypeScript：加上型別檢查
- Tailwind CSS：快速寫樣式
- Zustand / Redux：狀態管理
- React Query：管理 API 資料

先把基礎打好，這些東西之後都會簡單很多。