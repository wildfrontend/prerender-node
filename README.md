# Prerender 簡介

## 1. 建立 Prerender.io 帳號並取得 Token

首先，前往 [Prerender.io](https://dashboard.prerender.io/) 註冊帳號，並獲取專屬的 API Token。

---

## 2. 部署專案並取得 Production Domain

使用 [Render](https://dashboard.render.com/) 平台部署專案，成功後可獲取 `prod domain`。

![Render 部署](https://github.com/user-attachments/assets/6ca95517-cd23-448d-8b83-f83f6a6b3780)

---

## 3. 完成 Prerender.io 設定

返回 [Prerender.io](https://dashboard.prerender.io/)，完成相關設定並綁定 Production Domain。

---

## 4. 測試 Prerender 是否成功運作

### 方法一：使用 Postman 測試

1. **未設定前 Server 端無法取得資料**

   ![未設定前](https://github.com/user-attachments/assets/cf735ada-3364-477f-b9dc-65d55b760f95)

2. **模擬 Googlebot 訪問**
   - 在 Postman 中修改 `User-Agent`，模擬 Googlebot：
![Googlebot 訪問](https://github.com/user-attachments/assets/347172ed-c9a6-4455-9d8c-d01ef4498ab4)

---

### 方法二：使用 Chrome 模擬 Googlebot 訪問

1. **開啟開發者工具 (F12)**
2. **切換至 Network 分頁，並啟用 Network conditions**

![開啟 Network conditions](https://github.com/user-attachments/assets/84c5f0da-f0ed-49e2-abbc-513c12cd4768)

3. **修改 `User-Agent` 為 Googlebot**

![修改 User-Agent](https://github.com/user-attachments/assets/32d1a646-108f-4a6d-83f2-97f23fc74ee9)

---

透過上述方法，即可確認 Prerender 是否成功運作！ 🚀
