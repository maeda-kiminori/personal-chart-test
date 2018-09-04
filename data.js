// 次の質問のデータ呼び出し
function callData(nextId) {
	if (nextId == 0) return null;
  for(var i = 0; i < dataList.length; i++) {
    if(dataList[i].id == nextId) {
      return dataList[i];
    }
  }
}

var dataList = [
{
'id': 1, 
'question': '翌日、家に不在の時、「明日、家におらん」と言うことがありますか？', 
'yes': 2, 
'no': 3, 
'isGoal': false
},
{
'id': 2, 
'question': '良い物に対して、「でーじ上等」と言うことがありますか？', 
'yes': 4, 
'no': 5, 
'isGoal': false
},
{
'id': 3, 
'question': '授業で先生にあてられる時、「先生にかけられる」と言うことがありますか？', 
'yes': 6, 
'no': 9, 
'isGoal': false
},
{
'id': 4, 
'question': 'あなたの出身地は沖縄県ですね？', 
'yes': 0, 
'no': 0, 
'isGoal': true
},
{
'id': 5, 
'question': 'あなたの出身地は 富山県ですね!?', 
'yes': 0, 
'no': 0, 
'isGoal': true
},
{
'id': 6, 
'question': '「宿題を終わらせる」ことを「宿題をおわす」と言うことがありますか？', 
'yes': 7, 
'no': 8, 
'isGoal': false
},
{
'id': 7, 
'question': 'あなたの出身地は 山形県ですね!?', 
'yes': 0, 
'no': 0, 
'isGoal': true
},
{
'id': 8, 
'question': 'あなたの出身地は 新潟県ですね!?', 
'yes': 0, 
'no': 0, 
'isGoal': true
},
{
'id': 9, 
'question': '「そんなことしん」または「せん」と言うことがありますか？', 
'yes': 10, 
'no': 11, 
'isGoal': false
},
{
'id': 10, 
'question': '「とてもすごい」と強調する時、「しにすごい」と言うことがありますか？', 
'yes': 4, 
'no': 12, 
'isGoal': false
},
{
'id': 11, 
'question': 'ノートを使い切った時、「ノートが 詰まった 」と 言うことがありますか？', 
'yes': 13, 
'no': 14, 
'isGoal': false
},
'id': 12, 
'question': '自転車を「ケッタ」と言うことがありますか？', 
'yes': 5, 
'no': 13, 
'isGoal': false
},
{
'id': 13, 
'question': 'わからんわ', 
'yes': 0, 
'no': 0, 
'isGoal': true
},
{
'id': 14, 
'question': 'わからんわ', 
'yes': 0, 
'no': 0, 
'isGoal': true
},
];