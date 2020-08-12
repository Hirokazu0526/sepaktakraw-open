function confirmFunction1() {
    //ret変数に確認ダイアログの結果を代入する。
    ret = confirm("日本セパタクロー協会のページへ移動します。よろしいですか？");
    //確認ダイアログの結果がOKの場合外部リンクを開く
    if (ret == true){
    open("https://jstaf-jp.ssl-xserver.jp/contact/", "_blank" );
    }
    }