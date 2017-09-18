// 예제 4-4 뷰의 상태를 조회하는 절차적 방식의 코드 예시

// DOM API를 활용
var isConfirmed1 = document.querySelector("#confirm-checkbox1").checked;
var isConfirmed2 = document.querySelector("#confirm-checkbox2").checked;
var isAllConfirmed = isConfirmed1 && isConfirmed2;
if ( isAllConfirmed ) {
    // 검증에 통과하여 다음 로직 수행
}

// 또는, jQuery 활용 시
var isConfirmed1 = jQuery("#confirm-checkbox1").prop("checked");
var isConfirmed2 = jQuery("#confirm-checkbox2").prop("checked");
var isAllConfirmed = isConfirmed1 && isConfirmed2;
if ( isAllConfirmed ) {
    // 검증에 통과하여 다음 로직 수행
}
