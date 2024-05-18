let inGame = false; // 遊戲是否為進行狀態，初始設為否
let times = 0; // 挑戰次數，初始設為0

// 等DOM元素都載入後，再進行動作
$(document).ready(() => {

    $('#gameStart').click(evt => { //ES6箭頭函式寫法 參數名為evt //以jQuery寫法抓取HTML元素
        evt.preventDefault(); //檔下預設動作
        countDown();
        inGameOrNot();
        times ++;
        showTimes();
    });

    $('#restart').click(evt => { //ES6箭頭函式寫法 參數名為evt //以jQuery寫法抓取HTML元素
        evt.preventDefault(); //檔下預設動作
        clearInput();
        countDown();
        times ++;
        showTimes();
    });
});

// 清除輸入框文字
function clearInput() {
    document.querySelector('#inputArea').value = "";
};

// 開始倒數，並判斷輸入文字是否正確，在時間到時，顯示判斷結果
function countDown() {
    inGame = true;
    
    let checkAnswer = new Promise ((reslove,reject) => { //ES6 let宣告變數寫法
        setTimeout(() => {
            if (document.querySelector('#inputArea').value == 'pneumonoultramicroscopicsilicovolcanoconiosis') {
                reslove('挑戰成功！');
            } else {
                reject('挑戰失敗...');
            }
        },10000)
    });

    checkAnswer
        .then(resultText => {
            $('.result').html(`${resultText}`)
        })
        .catch(resultText => {
            $('.result').html(`${resultText}`)
        });
}

// 判斷是否為遊戲進行狀態，html預設為 輸入框不可輸入文字，且重新開始的按鈕不可按
// 若遊戲進行中，則讓 輸入框可輸入文字，開始遊戲的按鈕不可按，重新開始的按鈕可按
function inGameOrNot() {
    if (inGame) {
        $('#inputArea').attr('disabled', false); //以jQuery操作HTML屬性之值（將輸入框的disabled屬性值更改為false，讓輸入框可以輸入）
        $('#gameStart').attr('disabled',true); //遊戲開始後，開始遊戲的按鈕變成不能按
        $('#restart').attr('disabled', false); //遊戲開始後，重新開始的按鈕變成可以按
    }
}

// 顯示挑戰次數
function showTimes() {
    $('.challengeTimes').html(`第${times}次挑戰`)
    console.log(times);
}
