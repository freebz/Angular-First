// 예제 13-47 컴포넌트에 구현한 canDeactivate 메서드

canDeactivate() {
    if ( this.submitted || this.categoryForm.pristine ) return true;
    return confirm('저장하지 않고 돌아가면 수정사항이 반영되지 않습니다.');
}
