<div align="center">
   <img src="https://github.com/bruce601080102/Expo_ReactNative_ObjectDection_CloudConnection/blob/master/img/136944.gif"  width="400" height="600" "  />
   <img src="https://github.com/bruce601080102/Expo_ReactNative_ObjectDection_CloudConnection/blob/master/img/136942.gif"  width="400" height="600" " />       </div>
  


# I、介紹
### **這是一個使用React Native來實現遠端連線深度學習的系統，讓使用者可以只需要攜帶手機，即可在室外使用最原生的模型，享受最快且無負擔的辨識結果，本系統以連結YOLOv3為例。**


<table border="1">
    <tr>
        <td>
            <div>
            <b>優點:</b><br>
            <b>&nbsp; 1.可以自由更換模型 </b><br>
            <b>&nbsp; 2.可自由更換訓練的目標物 </b><br>
            <b>&nbsp; 3.節省在手機上運算的負擔 </b><br>
            <b>&nbsp; 4.辨識能力可以更自由的調整 </b>
           </div>
        </td>
        <td>
            <div>
            <b>缺點:</b><br>
            <b>&nbsp; 1.必須要有網路 </b><br>
            <b>&nbsp; 2.網路速度會影響辨識速度 </b>
           </div>
        </td>
    </tr>
</table>
<br>
<br>

# II、環境建置
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
   



# III、建置流程

<table border="1">
    <tr>
        <td>
            <div>
            <b> 1.</b><br>
            <b>載入本文件，並將MyWork/expo 與 MyWork/expo-shared 改為MyWork/.expo 與 MyWork/.expo-shared。 </b>
           </div>
        </td>
    </tr>
</table>
<br>
<br>
<table border="1">
    <tr>
        <td>
            <div>
            <b> 2.</b><br>
            <b>在MyWork文件中開啟cmd，並輸入 npm install  --> 此時文件內會生成node_modules。 </b>
           </div>
        </td>
    </tr>
</table>
<br>
<br>
<table border="1">
    <tr>
        <td>
            <div>
            <b> 3.</b><br>
             <b>需要開啟Xampp資料庫並設定欄位。 </b>
           </div>
        </td>
    </tr>
</table>

--> 環境設定連結:     [請點我](#head1)
<br>
<br>
<table border="1">
    <tr>
        <td>
            <div>
            <b> 4.</b><br>
            <b>在MyWork文件中開啟cmd，並輸入 node server.js -->此時會出現 Open the database connection! </b>
           </div>
        </td>
    </tr>
</table>

--> [server.js文件說明連結](#head2) 
<br>
<br>
<table border="1">
    <tr>
        <td>
            <div>
            <b> 5.</b><br>
            <b>開啟ngrok，輸入本機ip位置，並在ngrok裡輸入 ngrok htpp http://自己的IP:3000  ， 會出現對外的網址，將其放入src / screen / Detail.js 中第17行。 </b>
           </div>
        </td>
    </tr>
</table>

--> [ngrok連結說明參見股票機器人](https://github.com/bruce601080102/Line_Web_Stock)
<br>
<br>
<table border="1">
    <tr>
        <td>
            <div>
            <b> 6.</b><br>
            <b>請至YOLO官網點選YOLOv3-416中weights的按鈕，並將權重檔放在Expo _ ReactNative _ ObjectDection _ CloudConnection / MyWork / Object_Dection / yolov3 / checkpoints / 中的資料夾。 </b>
           </div>
        </td>
    </tr>
</table>

--> [權重檔連結下載](https://pjreddie.com/darknet/yolo/) 
<br>
<br>
<table border="1">
    <tr>
        <td>
            <div>
            <b> 7.</b><br>
            <b>建置tensorflow2.x版環境，需要建置anaconda虛擬環境，並在環境中點選Open Terminal，並到Expo _ ReactNative _ ObjectDection _ CloudConnection / MyWork / Object_Dection / 中，輸入`python python_test.py`，即可連線使用YOLO模型 </b>
           </div>
        </td>
    </tr>
</table>

--> [強化YOLO辨識能力連結](https://github.com/bruce601080102/YOLO_v3-splite)
<br>
<br>
<table border="1">
    <tr>
        <td>
            <div>
            <b> 8.</b><br> 
            <b>在http://localhost:19002/ 中會出現expo頁面，並將會看見Starting Metro Bundler.字眼，表示建置已成功，點選Connection中Tunnel，將會出現一張QR code。 </b>
           </div>
        </td>
    </tr>
</table>

<br>
<br>
<table border="1">
    <tr>
        <td>
            <div>
            <b> 9.</b><br> 
             <b>在實體手機上開啟expo app，並掃描QR code，即可及時使用此功能。 </b>
           </div>
        </td>
    </tr>
</table>
<br>
<div align="center">
   <img src="https://github.com/bruce601080102/Expo_ReactNative_ObjectDection_CloudConnection/blob/master/img/137325.jpg"  width="300" height="500" " />       
</div> 




# IV、文件說明
<span id="head1">  <h2>(1) 資料庫設定 </h1> </span>

<span id="head2">  <h2>(2) server.js 介紹 </h1> </span>


