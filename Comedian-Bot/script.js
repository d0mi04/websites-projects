let joke = [
    "What did zero say to 8?", 
    "Nice belt."
  ];
  
  let chatContent = document.querySelector(".chat-content");
  
  function appendBotMessage(messageText) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message bot-message";
    chatContent.append(messageDiv);
  
    const avatar = document.createElement("div");
    avatar.className = "fas fa-robot message-avatar";
    messageDiv.append(avatar);
  
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.textContent = messageText;
    messageDiv.append(contentDiv);
  }
  
  appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");
  
  setTimeout(function() {
    appendBotMessage("Ok, got one.");
  }, 1000);
  
  setTimeout(function() {
    appendBotMessage(joke[0]);
  }, 1500);
  
  setTimeout(function() {
    appendBotMessage(joke[1]);
  }, 2000);