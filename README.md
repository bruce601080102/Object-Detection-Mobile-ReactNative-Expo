### 作者:[bruce601080102](https://github.com/bruce601080102) / [nicharleys](https://github.com/nicharleys) 共同建置 


<img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/eagle705/Resact_YOLO" alt="Hits" data-canonical-src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://github.com/eagle705/Resact_YOLO" style="max-width:100%;"></a> 


<br><br><br>

<div align="center">
   <img src="https://github.com/bruce601080102/Expo_ReactNative_ObjectDection_CloudConnection/blob/master/img/136944.gif"  width="400" height="600" "  />
   <img src="https://github.com/bruce601080102/Expo_ReactNative_ObjectDection_CloudConnection/blob/master/img/136942.gif"  width="400" height="600" " />       </div>
  


**目录 (Table of Contents)**






# I、介紹

<div>
   <h3 styles={font-weight:bold;}>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp這是一個使用React Native來實現遠端連線深度學習的系統，讓使用者可以只需要攜帶手機，即可在室外使用最原生的模型，享受最快且無負擔的辨識結果，本系統以連結YOLOv 3為例。</<h3> 
</div> 


<br>
<div align="center">
<table border="1">
    <tr>
        <td>
            <div>
            <h3><b>優點:</b><br></h3>
            <b>&nbsp; 1.可以自由更換模型 </b><br>
            <b>&nbsp; 2.可自由更換訓練的目標物 </b><br>
            <b>&nbsp; 3.節省在手機上運算的負擔 </b><br>
            <b>&nbsp; 4.辨識能力可以更自由的調整 </b><br>
            <b>&nbsp; 5.使用電腦中原生的模型 </b>
           </div>
        </td>
        <td>
            <div>
            <h3><b>缺點:</b><br></h3><br>
            <b>&nbsp; 1.必須要有網路 </b><br>
            <b>&nbsp; 2.網路速度會影響辨識速度 </b>
               <br><br><br>
           </div>
        </td>
    </tr>
</table>
<br>
<br>
 </div>
 
 
 
 
 
# II、環境建置
<div>
   <h3 styles={font-weight:bold;}>(1)安裝NodeJS</<h3> 
</div> 
   
<div>    
<table border="1">
    <tr>
        <td>
            <div>
               <strong font-size:13px;>本機-->右鍵內容-->進階設定-->環境變數-->系統變數(path)-->C:\Program Files\nodejs\ </strong>
           </div>
        </td>
    </tr>
</table>
</div>   
   
   

<div>
   <h3 styles={font-weight:bold;}>(2)安裝python2.7</<h3> 
</div> 
   
<div>
   <h3 styles={font-weight:bold;}>(3)安裝Android Studio</<h3> 
</div>
      
<div>    
<table border="1">
    <tr>
        <td>
            <div>
               <b>1.</b><br>
               <strong font-size:13px;>選擇安裝磁碟位置</strong>  
           </div>
        </td>
    </tr>
</table>
</div>  
<div>    
<table border="1">
    <tr>
        <td>
            <div>
               <b>2.</b><br>
               <strong font-size:13px;>右下角點選Configure</strong>   
           </div>
        </td>
    </tr>
</table>
</div> 
<div>    
<table border="1">
    <tr>
        <td>
            <div>
               <b>3.</b><br>
               <strong font-size:13px;>開啟SDK Manager</strong
           </div>
        </td>
    </tr>
</table>
</div> 
<div>    
<table border="1">
    <tr>
        <td>
            <div>
               <b>4.</b><br>
               <strong font-size:13px;>選擇SDK Platforms</strong><br>
               <strong font-size:13px;>右下打勾Show Package Details</strong><br>  
               <strong font-size:13px;> 勾選Android 6.0 (Marshmallow)，項目如下:</strong><br><br>
               <strong font-size:10px;>●&nbsp Google APIs</strong><br>  
               <strong font-size:10px;>●&nbsp Android SDK Platform 23</strong><br>  
               <strong font-size:10px;>●&nbsp Intel x86 Atom System Image</strong><br>  
               <strong font-size:10px;>●&nbsp Google APIs Intel x86 Atom_64 System Image</strong>
           </div>
        </td>
    </tr>
</table>
</div> 
   
<div>  
<table border="1">
    <tr>
        <td>
            <div>
               <b>5.</b><br>
               <strong font-size:13px;>選擇SDK Tools</strong>
           </div>
        </td>
    </tr>
</table>
</div> 
   
<div>  
<table border="1">
    <tr>
        <td>
            <div>
               <b>6.</b><br>
               <strong font-size:13px;>右下打勾Show Package Details</strong>
           </div>
        </td>
    </tr>
</table>
</div> 

<div> 
<table border="1">
    <tr>
        <td>
            <div>
               <b>7.</b><br>
                <strong font-size:13px;>在Android SDK Build Tools中勾選23.0.1版本</strong>
           </div>
        </td>
    </tr>
</table>
</div> 

<div> 
<table border="1">
    <tr>
        <td>
            <div>
               <b>8.</b><br>
                <strong font-size:10px;>最底部勾選Android Support Repository(沒有此選項，則底部全勾)</strong>
           </div>
        </td>
    </tr>
</table>
</div> 

<div> 
<table border="1">
    <tr>
        <td>
            <div>
               <b>9.</b><br>
                <strong font-size:10px;>點選OK</strong>
           </div>
        </td>
    </tr>
</table>
</div> 

<div>
   <h3 styles={font-weight:bold;}>(4)安裝JDK (Java SE Development Kit)</<h3> 
</div> 

<div> 
<table border="1">
    <tr>
        <td>
            <div>
                 <strong font-size:13px;>網址取得安裝檔，版本為1.8.0_162以上 </strong> 
           </div>
        </td>
    </tr>
</table>
</div>

--> [JDK安裝檔](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) 

<div>
   <h3 styles={font-weight:bold;}>(5)React Native安裝</<h3> 
</div> 
   
<div> 
<table border="1">
    <tr>
        <td>
            <div>
               <b>1.</b><br>
                 <strong font-size:13px;> 本機-->右鍵內容-->進階設定-->環境變數-->  </strong> <br>
               <strong font-size:13px;> 新增變數名稱：ANDROID_HOME-->C:\Users\XXX\AppData\Local\Android\SDK </strong> 
           </div>
        </td>
    </tr>
</table>
</div>

<div> 
<table border="1">
    <tr>
        <td>
            <div>
               <b>2.</b><br>
                 <strong font-size:13px;> 本機-->右鍵內容-->進階設定-->環境變數-->  </strong> <br>
               <strong font-size:13px;> 新增變數名稱：JAVA_HOME-->C:\Program Files\Java\jdk1.8.0_162 </strong> 
           </div>
        </td>
    </tr>
</table>
</div>

<div> 
<table border="1">
    <tr>
        <td>
            <div>
               <b>3.</b><br>
                 <strong font-size:13px;> 選擇安裝位置 輸入 npm install –g react-native-cli  </strong> 
           </div>
        </td>
    </tr>
</table>
</div>

<div>
   <h3 styles={font-weight:bold;}>(6)建置模擬器(Android Studio)</<h3> 
</div> 
<div> 
<table border="1">
    <tr>
        <td>
            <div>
               <b>1.</b><br>
                 <strong font-size:13px;> 開啟Android Studio</strong> 
           </div>
        </td>
    </tr>
</table>
</div>
   
   
<div> 
<table border="1">
    <tr>
        <td>
            <div>
               <b>2.</b><br>
                 <strong font-size:13px;> 開啟新專案(start a new Android Studio project)  </strong> 
           </div>
        </td>
    </tr>
</table>
</div>

<div> 
<table border="1">
    <tr>
        <td>
            <div>
               <b>3.</b><br>
                 <strong font-size:13px;> Phone and Table項目選擇Android Studio6.0 (Marshmallow)  </strong> 
           </div>
        </td>
    </tr>
</table>
</div>

<div> 
<table border="1">
    <tr>
        <td>
            <div>
               <b>4.</b><br>
                 <strong font-size:13px;> 專案開啟後，開啟AVD Manager </strong> 
           </div>
        </td>
    </tr>
</table>
</div>

<div> 
<table border="1">
    <tr>
        <td>
            <div>
               <b>5.</b><br>
                 <strong font-size:13px;> 如果沒有模擬器，請選擇Create Virtual Device，然後選擇任意型號</strong> 
           </div>
        </td>
    </tr>
</table>
</div>
        
              
               
   


<br>
<br>
<div>
   <h2 styles={font-weight:bold;}>本專案為使用EXPO建置</<h3> 
</div>
<div>
   <h3 styles={font-weight:bold;}> React Native連結手機模擬器</<h3> 
</div> 
<div>  
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>1.</b><br>
            <strong font-size:13px;> cmd到需您需要製作專案的資料位置</strong>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>2.</b><br>
            <strong font-size:13px;> 輸入react-native init XXX(專案資料夾名稱)來創建專案</strong>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>3.</b><br>
            <strong font-size:13px;> 輸入cd 您專案資料夾的名稱。</strong>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>4.</b><br>
            <strong font-size:13px;> cmd輸入react-native run-android來開啟模擬器內的React Native專案</strong>
           </div>
        </td>
    </tr>
</table>
</div> 
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>5.</b><br>
            <strong font-size:13px;> 等待模擬器畫面出現Welcome to React Native!，代表整體建置成功</strong>
           </div>
        </td>
    </tr>
</table>
</div> 


<br>
<br>

   
<div>
   <h3 styles={font-weight:bold;}> EXPO連線手機模擬器</<h3> 
</div> 
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>1.</b><br>
            <strong font-size:13px;> cmd到需您需要製作專案的資料位置</strong>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>2.</b><br>
            <strong font-size:13px;> 輸入npm install expo-cli –global</strong>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>3.</b><br>
            <strong font-size:13px;> 輸入expo init XXX(專案資料夾名稱) 。</strong>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>4.</b><br>
            <strong font-size:13px;> 輸入cd 您專案資料夾的名稱</strong>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>5.</b><br>
            <strong font-size:13px;>開啟Android Studio</strong>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>6.</b><br>
            <strong font-size:13px;>開啟AVD Manager</strong>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>7.</b><br>
            <strong font-size:13px;>cmd輸入expo start</strong>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>8.</b><br>
            <strong font-size:13px;>EXPO網頁控制介面點選Run on Android device/emulator</strong>
           </div>
        </td>
    </tr>
</table>
</div>






<br>
<br>


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
<br>
<br>
                                                                                                                                                     



# IV、文件說明
<span id="head1">  <h2> 資料庫設置 </h2> </span>

<div> 
<strong font-size:13px;>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 本系統使用XAMPP作為Apache HTTP伺服器，並以MySQL功能作為資料庫，以此處理移動端在執行拍照功能後的圖片存取，因此在執行系統前需要建置資料庫環境，建置內容包含建立資料庫與建立資料表，
過程需要使用NodeJS來建立頁面，藉此才能夠以Post、Get的方式傳輸移動端的資料內容。
</strong>
</div> 
<br/>
<div> 
<strong font-size:13px;>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp XAMPP安裝版本為7.4.9，安裝作業系統為Windows，若建置過程失敗或介面問題可以參考此版本，以下是XAMPP的下載網址：
https://www.apachefriends.org/zh_tw/index.html
</strong>
</div>
<div>
   <h3 styles={font-weight:bold;}>(1)XAMPP設定</<h3> 
</div>

<table border="1">
    <tr>
        <td>
            <div>
            <b>1.</b><br>
            <b>安裝後開啟XAMPP Controll Panal介面，點選Apache的Config選項，並選擇phpMyAdmin(config.ini.php)，在設定中找到以下三行:</b><br>
            <b>$cfg['Servers'][$i]['auth_type'] = 'config';</b><br> 
            <b>$cfg['Servers'][$i]['user'] = 'root';</b><br> 
            <b>$cfg['Servers'][$i]['password'] = '';</b>
           </div>
        </td>
    </tr>
</table>   
<table border="1">
    <tr>
        <td>
            <div>
            <b>2.</b><br>
            <b>將auth_type項目中的config改為cookie，接著將密碼輸入至password的右方單引號後儲存。</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>3.</b><br>
            <b>開啟XAMPP Controll Panal介面，點選MySQL的Config選項，並選擇my.ini，在設定中找到以下一行:</b><br/>
            <b>max_allowed_packet = 16M</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>4.</b><br>
            <b>將數值改為1024M。</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>5.</b><br>
            <b>設定完成後，啟動XAMPP，並按下Apache與MySQL的Start選項。</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>6.</b><br>
            <b>打開網頁輸入網址：127.0.0.1 或 localhost，並點選phpMyAdmin便可進入操作頁面。</b>
           </div>
        </td>
    </tr>
</table>

<div>
   <h3 styles={font-weight:bold;}>(2)資料表設定</<h3> 
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 在創建資料表前需要先創建資料庫，本系統使用的資料庫名稱為banana_test，資料表的名稱需要對應NodeJS頁面的內容設定，這邊的資料表名稱僅供參考，如果需要請自行更改，資料庫與資料表的創建方式如下所示：</strong>
</div>
<br/>
<table border="1">
    <tr>
        <td>
            <div>
            <b>1.</b><br>
            <b>點選左邊最上方的新增選項，並輸入資料庫名稱與選擇編碼與排序類型。</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>2.</b><br>
            <b>創建資料庫後，點選左邊的資料庫名稱，並點選該資料庫的新增選項，之後依照下方的資料表內容來新增資料表名稱與欄位內容。</b>
           </div>
        </td>
    </tr>
</table>
<br/>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 資料表總共分為三個部分，各別為banana、banana_python、controll_cam，類型皆為InnoDB，編碼與排序皆為utf8_unicode_ci，以下是各部分的欄位說明：</strong>
</div>
<br/>
<table border="1">
    <tr>
        <td>
            <div>
            <b>1.</b><br>
            <b>banana 資料表 & banana_python 資料表</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td><div><b>名稱</b><br></div></td>
        <td><div><b>型態</b><br></div></td>
        <td><div><b>長度值</b><br></div></td>
        <td><div><b>預設值</b><br></div></td>
        <td><div><b>編碼與排序</b><br></div></td>
        <td><div><b>屬性</b><br></div></td>
        <td><div><b>A_I</b><br></div></td>
    </tr>
    <tr>
        <td><div><b>id</b><br></div></td>
        <td><div><b>INT</b><br></div></td>
        <td><div><b>7</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>V</b><br></div></td>
    </tr>
    <tr>
        <td><div><b>id_ran</b><br></div></td>
        <td><div><b>INT</b><br></div></td>
        <td><div><b>5</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>X</b><br></div></td>
    </tr>
    <tr>
        <td><div><b>pic_num</b><br></div></td>
        <td><div><b>INT</b><br></div></td>
        <td><div><b>3</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>X</b><br></div></td>
    </tr>
    <tr>
        <td><div><b>pic</b><br></div></td>
        <td><div><b>mediumtext</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>utf8_unicode_ci</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>X</b><br></div></td>
    </tr>
    <tr>
        <td><div><b>time</b><br></div></td>
        <td><div><b>timestamp</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>CURRENT_TIMESTAMP</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>on updateCURRENT_TIMESTAMP</b><br></div></td>
        <td><div><b>X</b><br></div></td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>2.</b><br>
            <b>controll_cam 資料表</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td><div><b>名稱</b><br></div></td>
        <td><div><b>型態</b><br></div></td>
        <td><div><b>長度值</b><br></div></td>
        <td><div><b>預設值</b><br></div></td>
        <td><div><b>編碼與排序</b><br></div></td>
        <td><div><b>屬性</b><br></div></td>
        <td><div><b>A_I</b><br></div></td>
    </tr>
    <tr>
        <td><div><b>id</b><br></div></td>
        <td><div><b>INT</b><br></div></td>
        <td><div><b>11</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>V</b><br></div></td>
    </tr>
    <tr>
        <td><div><b>user</b><br></div></td>
        <td><div><b>VARCHAR</b><br></div></td>
        <td><div><b>10</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>utf8_unicode_ci</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>X</b><br></div></td>
    </tr>
    <tr>
        <td><div><b>state</b><br></div></td>
        <td><div><b>INT</b><br></div></td>
        <td><div><b>1</b><br></div></td>
        <td><div><b>0</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>無</b><br></div></td>
        <td><div><b>X</b><br></div></td>
    </tr>
</table>
<br/>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp controll_cam 資料表創建後，請在該資料表內新增一筆資料，資料新增方式如下所示： </strong>
</div>
<br/>
<table border="1">
    <tr>
        <td>
            <div>
            <b>1.</b><br>
            <b>點選controll_cam 資料表，並點選上方SQL選項。</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>2.</b><br>
            <b>接著輸入INSERT INTO `banana`(`state`) VALUES (0)。</b>
           </div>
        </td>
    </tr>
</table>

<div id='head2'>
   <h3 styles={font-weight:bold;}>(3)NodeJS頁面設定</<h3> 
</div>
<table border="1">
    <tr>
        <td>
            <div>
            <b>1.</b><br>
            <b>在XAMPP設定內的更改需要對應NodeJS頁面，而在MySQL創建的資料庫名稱也需要對應，相關設定在server.js的內容可以找到。</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>2.</b><br>
            <b>打開server.js後，在內容中找到以下四行：</b><br/>
            <b>host     : 'localhost',</b><br/>
            <b>user     : 'root',</b><br/>
            <b>password : '1234',</b><br/>
            <b>database : 'banana_test'</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>3.</b><br>
            <b>在user、password的項目中，輸入與XAMPP設定內一樣的名稱與密碼。</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>4.</b><br>
            <b>在database的項目中，輸入MySQL創建的資料庫名稱。</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>5.</b><br>
            <b>儲存後關閉檔案。</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>6.</b><br>
            <b>cmd到server.js所在的資料位置。</b><br/>
            <b>cmd輸入node server.js。</b><br/>
            <b>即可開啟server.js檔，並且與資料庫連接</b>
           </div>
        </td>
    </tr>
</table>
<div>
   <h3 styles={font-weight:bold;}>(4)NodeJS頁面說明</<h3> 
</div>
<div> 
<strong font-size:13px;>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 在server.js的內容可以找到app.get或app.post開頭的函式，各函式名稱代表連接網址，若有更動則需要對應更改Detail.js內的設置網址，因此建議不作更改，各項說明如下所示：</strong>
</div>
<br/>
<table border="1">
    <tr>
        <td>
            <div>
            <b>1.</b><br>
            <b>select</b><br/>
            <b>查詢python處理辨識後所產生的錨點圖，並只搜尋最新一筆資料。</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>2.</b><br>
            <b>select_camstate</b><br/>
            <b>查詢使用者頁面切換的狀態，即時停止頁面更新的效果，防止程式效能降低。</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>3.</b><br>
            <b>select_camstate</b><br/>
            <b>上傳手機所拍攝的圖片至MySQL資料庫，提供python處理辨識。</b>
           </div>
        </td>
    </tr>
</table>
<table border="1">
    <tr>
        <td>
            <div>
            <b>4.</b><br>
            <b>select_camstate</b><br/>
            <b>上傳使用者切換頁面的狀態，提供頁面切換時的更新查詢。</b>
           </div>
        </td>
    </tr>
</table>
</div>
<br>
<br>
<span id="head3">  <h2> Python </h2> </span>
<div> 
<strong font-size:13px;>
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 本系統不採用官方釋出的TensorFlow.js，原因在於調整上不自由，且出來的結果太過陽春，而將模型塞入手機中，必須使用Tiny版本，辨識的結果勢必不如複雜的模型結果，而使用資料庫作為連線橋梁，即可以在手機上顯示電腦的結果。
</strong>
</div> 

<div>
   <h3 styles={font-weight:bold;}>python_test.py</<h3> 
</div>
   
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>1.</b><br>
            <b>連線至本機端MYSQL</b>
           </div>
        </td>
    </tr>
</table>
</div>

<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>2.</b><br>
            <b>解決了資料庫時間差的錯誤</b>
           </div>
        </td>
    </tr>
</table>
</div>

<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>3.</b><br>
            <b>將base64轉為圖片</b>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>4.</b><br>
            <b>放進模型辨識成果</b>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>5.</b><br>
            <b>產製出一個透明背景的圖片將結果劃入透明圖片中</b>
           </div>
        </td>
    </tr>
</table>
</div>
<div>    
<table border="1">
    <tr>
        <td>
            <div>
            <b>6.</b><br>
            <b>將繪製完的透明圖片轉化為base64，並上傳資料庫</b>
           </div>
        </td>
    </tr>
</table>
</div>



