var jsChat = {
  helloUsername: document.getElementById('helloUsername'),
  updateButton: document.getElementById('updateButton'),
  clearButton: document.getElementById('clearButton'),
  username: document.getElementById('username'),
  comment: document.getElementById('comment'),
  output: document.getElementById('output')
};

function postData(){
  jsChat.output.innerHTML += '<div class="username" id="usernameId">' + jsChat.username.value + ':' + '</div>';
  jsChat.output.innerHTML += '<div class="comment">' + jsChat.comment.value + '</div>';
  clearContent();
  scrollToBottom();
}

function scrollToBottom(){
  var x = offset(jsChat.comment).left;
  console.log(x);
  var y = offset(jsChat.comment).top;
  jsChat.output.scrollTop(x, y);
}

function clearContent(){
  jsChat.comment.value = '';
}

window.onload = function commentEventListener(){
  jsChat.comment.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      postData();
      clearContent();
    }
  });
  jsChat.username.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
      e.preventDefault();
      helloUsername();
    }
    if (e.keyCode == 9) {
      helloUsername();
    }
  });
};

function helloUsername(){
  jsChat.helloUsername.className -= 'hide';
  jsChat.helloUsername.innerHTML = 'Welcome ' + jsChat.username.value + '. <div class="floatRight"><a href="javascript:void(0)" id="editUsername">change username</a></div> ';
  jsChat.username.className = 'hide';
}

function editUsername(){
  jsChat.username.className -= 'hide';
  jsChat.username.className = 'inputUsername';
  jsChat.helloUsername.className = 'hide';
}

function clearSession(){
  jsChat.output.innerHTML = '';
}

jsChat.updateButton.onclick = postData;
jsChat.comment.onclick = helloUsername;
jsChat.helloUsername.onclick = editUsername;
jsChat.clearButton.onclick = clearSession;
