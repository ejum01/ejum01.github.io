// 비밀번호/비밀번호 체크 일치여부 검사
document.querySelector("#pwdCheck").onblur = isEqualPwd;
/**
 *
 */

document.memberFrm.onsubmit = function () {
  const userId = document.getElementById("userId");
  const pwd = document.getElementById("pwd");
  const pwdCheck = document.getElementById("pwdCheck");
  const userName = document.getElementById("userName");
  const email = document.getElementById("email");
  const ssn1 = document.getElementById("ssn1");
  const ssn2 = document.getElementById("ssn2");
  const tel1 = document.getElementById("tel1");
  const tel2 = document.getElementById("tel2");
  const tel3 = document.getElementById("tel3");



  //비밀번호일치여부
  if (!isEqualPwd()) {
    return false;
  }

  //3.이름검사
  //한글2글자 이상만 허용.
  const regExp3 = /^[가-힣]{2,}$/;
  if (!regExpTest(regExp3, userName, "한글2글자이상 입력하세요.")) return false;

  //5.이메일 검사
  // 4글자 이상(\w = [a-zA-Z0-9_], [\w-\.]) @가 나오고
  // 1글자 이상(주소). 글자 가 1~3번 반복됨
  if (
    !regExpTest(
      /^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/,
      email,
      "이메일 형식에 어긋납니다."
    )
  )
    return false;

  //6. 전화번호 검사
  // 전화번호 앞자리는 두자리이상, 두번째 자리는 3~4자리 숫자, 세번째 자리는 4자리 숫자
  if (!regExpTest(/^0\d{1,2}$/, tel1, "번호 2자리 이상 입력")) return false;
  if (!regExpTest(/^[0-9]{3,4}$/, tel2, "번호 3자리 이상 입력")) return false;
  if (!regExpTest(/^[0-9]{4}$/, tel3, "4자리 번호 입력")) return false;

  return true;
};

function isEqualPwd() {
  if (pwd.value === pwdCheck.value) {
    return true;
  } else {
    alert("비밀번호가 일치하지 않습니다.");
    pwd.select();
    return false;
  }
}

/**
 * regExp 정규식객체
 * e1 검사할 태그객체
 * msg 유효하지 않은 경우 노출할 사용자 피드백
 */

function regExpTest(regExp, el, msg) {
  if (regExp.test(el.value)) return true;
  //적합한 문자열이 아닌 경우
  alert(msg);
  el.value = "";
  el.focus();
  return false;
}

