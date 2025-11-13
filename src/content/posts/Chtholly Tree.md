---
title: Chtholly Tree 題解
published: 2025-02-08
description: 珂朵莉樹完整教學 + CF896C 隨機數據騙分神器實作
image: './Chtholly.jpg'
tags: [競程, 資料結構, ODT, Chtholly Tree, Codeforces,C++]
category: '題解'
draft: false
---

> 珂朵莉樹（Chtholly Tree / ODT）—— 名字來自《末日三問》的珂朵莉‧諾塔‧賽尼歐里斯，  
> 是一種「暴力美學」的區間資料結構，在隨機數據下表現極為優秀，常被稱為**騙分神器**。


## 什麼時候使用珂朵莉樹？

**適合**  
- 區間賦值、區間加法  
- 區間第 k 小、區間冪和  
- 操作隨機、數據隨機（最重要！）

**不適合**  
- 單點修改/查詢  
- 惡意構造測資（區間會退化成 O(n)）

## Codeforces 896C 題目簡介

給定長度 n 的數列與 m 個操作（由 seed 隨機生成）：

1. 區間加法 `[l,r] += x`  
2. 區間賦值 `[l,r] = x`  
3. 區間第 k 小  
4. 區間 x 次方和對 y 取模

**隨機數據 → 珂朵莉樹完美通過！**

## 珂朵莉樹核心實作（C++）

```cpp
#include <bits/stdc++.h>
using namespace std;
#define int long long

struct Node {
    int l, r;
    mutable int v;               // mutable 讓 set 可以修改 v
    Node(int L, int R = 0, int V = 0) : l(L), r(R), v(V) {}
    bool operator<(const Node& o) const { return l < o.l; }
};

set<Node> ct;
using iter = set<Node>::iterator;

int n, m, seed, vmax;

// 關鍵：把位置 x 拆成一個區間的左端點
iter split(int pos) {
    if (pos > n) return ct.end();
    auto it = ct.lower_bound(Node(pos));
    if (it != ct.end() && it->l == pos) return it;
    --it;                                    // 找到涵蓋 pos 的區間
    int l = it->l, r = it->r, v = it->v;
    ct.erase(it);
    ct.insert(Node(l, pos - 1, v));
    return ct.insert(Node(pos, r, v)).first;
}

// 區間賦值 [l,r] = v
void assign_val(int l, int r, int v) {
    auto itr = split(r + 1), itl = split(l);
    ct.erase(itl, itr);
    ct.insert(Node(l, r, v));
}

// 區間加法 [l,r] += v
void add_val(int l, int r, int v) {
    auto itr = split(r + 1), itl = split(l);
    for (; itl != itr; ++itl)
        itl->v += v;
}

// 區間第 k 小
int kth(int l, int r, int k) {
    vector<pair<int, int>> vec;
    auto itr = split(r + 1), itl = split(l);
    for (auto it = itl; it != itr; ++it)
        vec.emplace_back(it->v, it->r - it->l + 1);
    sort(vec.begin(), vec.end());
    for (auto& p : vec) {
        k -= p.second;
        if (k <= 0) return p.first;
    }
    return -1;
}

// 快速冪
int powmod(int a, int b, int mod) {
    int res = 1; a %= mod;
    for (; b; b >>= 1) {
        if (b & 1) res = res * a % mod;
        a = a * a % mod;
    }
    return res;
}

// 區間冪和
int query_pow(int l, int r, int x, int y) {
    auto itr = split(r + 1), itl = split(l);
    int res = 0;
    for (; itl != itr; ++itl) {
        int len = itl->r - itl->l + 1;
        res = (res + len * powmod(itl->v, x, y)) % y;
    }
    return res;
}

signed main() {
    cin >> n >> m >> seed >> vmax;
    auto rnd = [&]() -> int {
        int ret = seed;
        seed = (seed * 7 + 13) % 1000000007LL;
        return ret;
    };

    for (int i = 1; i <= n; ++i)
        ct.insert(Node(i, i, rnd() % vmax + 1));

    for (int i = 1; i <= m; ++i) {
        int op = rnd() % 4 + 1;
        int l = rnd() % n + 1, r = rnd() % n + 1;
        if (l > r) swap(l, r);
        int x, y = 0;
        if (op == 3) x = rnd() % (r - l + 1) + 1;
        else x = rnd() % vmax + 1;
        if (op == 4) y = rnd() % vmax + 1;

        if (op == 1) add_val(l, r, x);
        else if (op == 2) assign_val(l, r, x);
        else if (op == 3) cout << kth(l, r, x) << '\n';
        else cout << query_pow(l, r, x, y) << '\n';
    }
    return 0;
}
```
#### 為什麼珂朵莉樹能騙分？
隨機操作 → 區間數量期望 O(log n)
每次 split 只拆 O(log n) 個節點
整體期望時間複雜度 O(m log n log log n)，比線段樹還快！
惡意數據會退化到 O(n) → 超時，所以只用在「題目保證隨機」的時候！
#### 總結
項目珂朵莉樹（ODT）區間賦值Extremely fast區間加法Extremely fast區間第 k 小Extremely fast（收集後排序）區間冪和Extremely fast隨機數據Extremely fast惡意構造數據Extremely slow（會 TLE）

