let jokeIndex = 0;
let jokes = [
  ["What did zero say to 8?", "Nice belt."],
  ["If the internet had a boat, where would they par it?",
"in Google Docs"]
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

function appendUserMessage() {
  const messageDiv = document.createElement("div");
  messageDiv.className = "message user-message";
  chatContent.append(messageDiv);

  const avatar = document.createElement("div");
  avatar.className = "fas fa-smile message-avatar";
  messageDiv.append(avatar);

  const contentDiv = document.createElement("div");
  contentDiv.className = "message-content";
  contentDiv.textContent = "Tell me a joke!";
  messageDiv.append(contentDiv);
}

function requestJoke() {
  appendUserMessage();
  if(jokeIndex >= jokes.length) {
    appendBotMessage("Sorry, I'm out of jokes for now!");
    return;
  }
  jokeButton.style.display = "none";
  
  setTimeout(function() {
  appendBotMessage("Ok, got one.");
}, 1000);

setTimeout(function() {
  appendBotMessage(jokes[jokeIndex][0]);
}, 1500);

setTimeout(function() {
  appendBotMessage(jokes[jokeIndex][1]);
  jokeIndex++;
  jokeButton.style.display = "inline-block";
}, 2000);
}

appendBotMessage("Hello! I am Comedian Bot, here to make you laugh. Let me think of a joke.");

let jokeButton = document.getElementById("requestJokeButton");

