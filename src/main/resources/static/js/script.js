function deletecomp(){
	if(window.confirm('完了済みタスクを削除します')){
		return true;
	}
	else{
		return false;
	}
}

function deleteall(){
	if(window.confirm('すべての内容を削除します')){
		if(window.confirm('本当に実行しますか？')){
			return true;
		}
		else{
			return false;
		}
	}
	else{
		return false;
	}
}