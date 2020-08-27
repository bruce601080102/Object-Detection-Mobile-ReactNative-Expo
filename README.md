<div align="center">
   <img src="https://github.com/bruce601080102/Expo_ReactNative_ObjectDection_CloudConnection/blob/master/img/136944.gif"  width="400" height="600" "  />
   <img src="https://github.com/bruce601080102/Expo_ReactNative_ObjectDection_CloudConnection/blob/master/img/136942.gif"  width="400" height="600" " />                         </div>
  


# 介紹
### **這是一個使用React Native來實現遠端連線深度學習的系統，讓使用者可以只需要攜帶手機，即可在室外使用最原生的模型，享受最快且無負擔的辨識結果，本系統以連結YOLOv3為例。**

# 環境建置
<div>
   <h3 styles={font-weight:bold;}>&nbsp&nbsp&nbsp(1)安裝NodeJS</<h3> 
</div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp本機-->右鍵內容-->進階設定-->環境變數-->系統變數(path)-->C:\Program Files\nodejs\ </strong>
<div>
   <h3 styles={font-weight:bold;}>&nbsp&nbsp&nbsp(2)安裝python2.7</<h3> 
</div> 
<div>
   <h3 styles={font-weight:bold;}>&nbsp&nbsp&nbsp(3)安裝Android Studio</<h3> 
</div>
<div> 
   <strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1.	選擇安裝磁碟位置</strong>  
</div>    
<div> 
   <strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.	右下角點選Configure</strong>  
</div>  
<div> 
   <strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3.	開啟SDK Manager</strong>  
</div>    
<div> 
   <strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp4.	選擇SDK Platforms</strong>  
</div>  
   
<div> 
   <strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp右下打勾Show Package Details</strong>  
</div> 
   
<div> 
   <strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp勾選Android 6.0 (Marshmallow)，項目如下</strong>  
</div> 
<div> 
   <strong font-size:9px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp (1)Google APIs</strong>  
</div> 
<div> 
   <strong font-size:9px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp (2)Android SDK Platform 23</strong>  
</div>
<div> 
   <strong font-size:9px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp (3)Intel x86 Atom System Image</strong> 
</div>
<div> 
   <strong font-size:9px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp (4)Google APIs Intel x86 Atom_64 System Image</strong>
</div>


<div> 
   <strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 5.	選擇SDK Tools</strong>  
</div> 
<div> 
   <strong font-size:9px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp (1)右下打勾Show Package Details</strong> 
</div>
<div> 
   <strong font-size:9px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp (2)在Android SDK Build Tools中勾選23.0.1版本</strong> 
</div>
<div> 
   <strong font-size:9px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp (3)最底部勾選Android Support Repository(沒有此選項，則底部全勾)</strong> 
</div>
<div> 
   <strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 6.	點選OK。</strong>  
</div>  


<div>
   <h3 styles={font-weight:bold;}>&nbsp&nbsp&nbsp(4)安裝JDK (Java SE Development Kit) </<h3> 
</div>
<div> 
   <strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 網址取得安裝檔，版本為1.8.0_162以上--> https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html   </strong> 
</div>
   
   
<div>
   <h3 styles={font-weight:bold;}>&nbsp&nbsp&nbsp(5)React Native安裝</<h3> 
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp1.本機-->右鍵內容-->進階設定-->環境變數-->4.	新增變數名稱：ANDROID_HOME-->C:\Users\XXX\AppData\Local\Android\SDK。</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp2.本機-->右鍵內容-->進階設定-->環境變數-->4.	新增變數名稱：JAVA_HOME-->C:\Program Files\Java\jdk1.8.0_162。</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp3.選擇安裝位置 輸入 npm install –g react-native-cli </strong>
</div>
<div>
   <h3 styles={font-weight:bold;}>&nbsp&nbsp&nbsp(6)建置模擬器(Android Studio)</<h3> 
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 1.開啟Android Studio </strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 2.開啟新專案(start a new Android Studio project) </strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 3.Phone and Table項目選擇Android Studio6.0 (Marshmallow) </strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 4.專案開啟後，開啟AVD Manager</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 5.如果沒有模擬器，請選擇Create Virtual Device，然後選擇任意型號</strong>
</div>
   

<div align="center">
   <h2 styles={font-weight:bold;}>本專案為使用EXPO建置</<h3> 
</div>
<div>
   <h3 styles={font-weight:bold;}>&nbsp&nbsp&nbsp(7-1)React Native連結手機模擬器</<h3> 
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 1.cmd到需您需要製作專案的資料位置</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 2.輸入react-native init XXX(專案資料夾名稱)來創建專案</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 3.輸入cd 您專案資料夾的名稱。</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 4.cmd輸入react-native run-android來開啟模擬器內的React Native專案</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 5.等待模擬器畫面出現Welcome to React Native!，代表整體建置成功</strong>
</div>

<div>
   <h3 styles={font-weight:bold;}>&nbsp&nbsp&nbsp(7-2)EXPO連線手機模擬器</<h3> 
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 1.cmd到需您需要製作專案的資料位置</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 2.輸入npm install expo-cli –global</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 4.輸入expo init XXX(專案資料夾名稱) 。</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 5.輸入cd 您專案資料夾的名稱</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 6.開啟Android Studio</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 7.開啟AVD Manager</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 8.cmd輸入expo start</strong>
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 9.EXPO網頁控制介面點選Run on Android device/emulator</strong>
</div>
   


   










   

   
  


   










   
 



# 建置流程

**1.載入本文件，並將MyWork/expo 與 MyWork/expo-shared 改為  *MyWork/.expo 與 MyWork/.expo-shared***

**2.在MyWork文件中開啟cmd，並輸入 **`npm install`** --> 此時文件內會生成node_modules。**

**3.需要開啟Xampp資料庫並設定欄位，環境設定連結:   [超链文字](#head3)** 

**4.在MyWork文件中開啟cmd，並輸入`node server.js` -->此時會出現 Open the database connection!**





<span id="head3">  <h1> 資料庫設定 </h1> </span>

