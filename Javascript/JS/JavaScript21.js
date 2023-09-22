// フォームの検証をする所
function validateForm() {
  const UserName = document.getElementById("username");
  const Address = document.getElementById("address");
  const TelephoneNum = document.getElementById("number");
  const ErrorMessages = document.getElementById("errormessages");

  ErrorMessages.innerHTML = ""; // エラーメッセージの初期化
  let hasErrors = false; // フォームのバリデーション

  // ユーザー名の入力がなかった場合
  if (UserName.value.trim() === "")
  {
    UserName.classList.add("error");
    ErrorMessages.innerHTML += "名前は必須です。<br>";
    hasErrors = true;
  }
  else
  {
    UserName.classList.remove("error");
  }

  // 住所の入力がなかった場合
  if(Address.value.trim() === "")
  {
    Address.classList.add("error");
    ErrorMessages.innerHTML += "住所は必須です。<br>";
    hasErrors = true;
  }
  else 
  {
    Address.classList.remove("error");
  }

  // 電話番号の入力がなかった場合
  if(TelephoneNum.value.trim() === "")
   {
    TelephoneNum.classList.add("error");
    ErrorMessages.innerHTML += "電話番号は必須です。<br>";
    hasErrors = true;
  }
  
  else 
  {
    TelephoneNum.classList.remove("error");
  }

  // 未入力がない場合、「登録完了」画面に遷移させる
  if (!hasErrors)
  {
    window.location.href = "JavaScript21Next.html";
  }
}

document.getElementById("username").addEventListener("blur", removeErrorClass);
document.getElementById("address").addEventListener("blur", removeErrorClass);
document.getElementById("number").addEventListener("blur", removeErrorClass);

function removeErrorClass(event) {
  const input = event.target;

  if (input.value.trim() !== "") {
    input.classList.remove("error");
  }
}





