var tipuesearch = {"pages": [{'title': 'About', 'text': '\xa0倉儲鏈結: https://github.com/41223150/cp2023_ag5 \n 組員網站: \n 41223150: https://41223150.github.io/cp2023/content/index.html \n 41223142: https://41223142.github.io/cp2023/content/index.html \n 41223145: https://lyy41223145.github.io/cp2023/content/index.html \n 41223140: https://41223140.github.io/cp2023/content/index.html \n 41223144: https://41223144.github.io/cp2023/content/index.html \n 41223143: https://41223143.github.io/cp2023/content/index.html \n 41223147: https://41223147.github.io/cp2023/content/index.html \n 41223149: https://otakuyoyo.github.io/cp2023/content/index.html \n', 'tags': '', 'url': 'About.html'}, {'title': '個人學習心得', 'text': '41223150: \n 對於計算機概論，剛開始聽不太懂，透過慢慢請教同學，看老師拍的影片去學習，雖然還是有很多我目前沒辦法理解的，但是我會慢慢跟上的。第一次接觸到計算機概論時我理解到這門課非常的重要，但是在學習的過程當中並沒有我想像中那麼順利，我知道學習這門課程需要一些時間去理解，因為對我來說是一個全新的東西，以前從來沒有接觸過，所以對我來說非常的陌生，剛開始都聽不懂，後來我才慢慢跟上的。有一次聽到老師說要多多善用網路上的資訊，我才意識到也許我可以透過網路來學習，不管是計算機概論還是其他課程，也許我能自己查資料自己學習，會學得更快更有效率，因為畢竟現在網路非常發達，基本上每種資料，都應該查的到，所以我應該要自己學習，培養自主學習的能力。 \n 41223144: \n 老師上課速度教得太快有點聽不太懂，還好有錄影可以回家慢慢看，上課時聽得不是很懂，還好有朋友可以幫忙，才能了解這堂課教的東西。', 'tags': '', 'url': '個人學習心得.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};