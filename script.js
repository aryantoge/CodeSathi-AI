
const chat = document.getElementById("chat");
const form = document.getElementById("chatForm");
const input = document.getElementById("userInput");

const knowledge = [
  {
    keys: ["hello", "hi", "hey"],
    answer: "Hello! 👋 I'm CodeSathi AI, your C++ learning companion. Ask me about OOP, programs, or viva questions!"
  },
  {
    keys: ["what is oop", "define oop", "oops", "object oriented"],
    answer: "OOP stands for Object-Oriented Programming. It organizes a program using classes and objects.\n\nThe four main principles are:\n1. Encapsulation\n2. Abstraction\n3. Inheritance\n4. Polymorphism\n\nExample: A Student class can contain a student's name and roll number."
  },
  {
    keys: ["class and object", "classes and objects", "what is a class", "what is an object"],
    answer: "CLASS: A blueprint used to create objects.\nOBJECT: An instance of a class.\n\nExample:\n\nclass Student {\npublic:\n    string name;\n    void display() {\n        cout << name;\n    }\n};\n\nint main() {\n    Student s1;\n    s1.name = \"Amit\";\n    s1.display();\n}\n\nHere, Student is the class and s1 is an object. Include <iostream> and <string> and use std:: or a suitable using declaration in a complete program."
  },
  {
    keys: ["inheritance", "types of inheritance"],
    answer: "Inheritance allows a derived class to use accessible members of a base class.\n\nTypes of inheritance:\n1. Single\n2. Multiple\n3. Multilevel\n4. Hierarchical\n5. Hybrid\n\nExample: Student can inherit common details from Person."
  },
  {
    keys: ["polymorphism"],
    answer: "Polymorphism means 'many forms'. The same interface can behave differently.\n\n1. Compile-time: function overloading and operator overloading.\n2. Runtime: virtual functions with overriding.\n\nIt makes programs flexible and reusable."
  },
  {
    keys: ["constructor", "destructor"],
    answer: "A CONSTRUCTOR initializes an object. It has the same name as its class and no return type.\n\nA DESTRUCTOR performs cleanup when an object is destroyed. Its name starts with ~ and it has no return type.\n\nExample:\nclass Demo {\npublic:\n    Demo() { cout << \"Created\"; }\n    ~Demo() { cout << \"Destroyed\"; }\n};"
  },
  {
    keys: ["encapsulation"],
    answer: "Encapsulation combines data and functions inside a class and controls access to them.\n\nExample: Keep a bank balance private and provide public deposit() and getBalance() functions."
  },
  {
    keys: ["abstraction"],
    answer: "Abstraction shows essential features and hides unnecessary implementation details.\n\nExample: You use an ATM without needing to understand its internal software."
  },
  {
    keys: ["overloading", "overriding", "name hiding"],
    answer: "OVERLOADING: Same function name with different parameter lists, usually in the same scope.\n\nOVERRIDING: A derived class provides a new implementation of a suitable base-class virtual function with a matching signature.\n\nNAME HIDING: A declaration in a derived class can hide base-class functions with the same name."
  },
  {
    keys: ["simple c++ program", "hello world", "first program"],
    answer: "Here is a simple C++ program:\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, World!\";\n    return 0;\n}\n\nExplanation:\n• #include <iostream> enables input/output.\n• main() is the program's starting point.\n• cout displays text.\n• return 0 indicates successful completion."
  },
  {
    keys: ["viva", "oral questions", "viva questions"],
    answer: "Let's practise OOP viva! 🎓\n\nQ1. What is a class?\nA blueprint for creating objects.\n\nQ2. What is an object?\nAn instance of a class.\n\nQ3. What is inheritance?\nReusing and extending a base class in a derived class.\n\nQ4. What is a constructor?\nA special member function used to initialize objects.\n\nQ5. What is polymorphism?\nOne interface with different forms of behaviour.\n\nAsk me 'more viva questions' for more practice."
  },
  {
    keys: ["more viva", "more questions", "quiz"],
    answer: "Quick OOP quiz! 🧠\n\n1. Which keyword declares a class in C++?\n2. Which access specifier hides members from ordinary outside access?\n3. Which keyword supports runtime polymorphism through virtual functions?\n4. Can constructors be overloaded?\n5. What symbol begins a destructor name?\n\nTry answering, and I'll help you review!"
  }
];

function addMessage(text, sender) {
  const row = document.createElement("div");
  row.className = `message ${sender}`;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = sender === "user" ? "👤" : "C++";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;

  row.append(avatar, bubble);
  chat.appendChild(row);
  chat.scrollTop = chat.scrollHeight;
}

function getAnswer(question) {
  const q = question.toLowerCase().replace(/[^\w\s+#]/g, " ");

  if (q.includes("more viva") || q.includes("more questions") ||
      q.includes("quiz")) {
    return knowledge.find(item =>
      item.keys.includes("more viva")
    ).answer;
  }

  const match = knowledge.find(item =>
    item.keys.some(key => q.includes(key))
  );

  if (match) return match.answer;

  return "Good question! 😊 I can currently help with OOP basics, classes and objects, inheritance, polymorphism, constructors, encapsulation, abstraction, C++ examples, and viva practice.\n\nTry asking: \"Explain inheritance\" or \"Give me OOP viva questions\".";
}

function sendMessage(question) {
  const cleanQuestion = question.trim();
  if (!cleanQuestion) return;

  const welcome = document.getElementById("welcome");
  if (welcome) welcome.remove();

  addMessage(cleanQuestion, "user");
  input.value = "";

  addMessage(getAnswer(cleanQuestion), "bot");
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  sendMessage(input.value);
});

function askTopic(topic) {
  sendMessage(topic);
}

function newChat() {
  chat.innerHTML = `
    <div class="welcome" id="welcome">
      <div class="welcome-icon">⌘</div>
      <h1>Hey, future coder! 👋</h1>
      <p>I'm CodeSathi AI. Let's make C++ easy, one concept at a time.</p>
      <div class="suggestions">
        <button onclick="askTopic('Explain OOP in simple language')">What is OOP?</button>
        <button onclick="askTopic('Give me a simple C++ program')">Show a C++ program</button>
        <button onclick="askTopic('Give me OOP viva questions')">Practice viva questions</button>
        <button onclick="askTopic('Explain function overloading and overriding')">Overloading vs overriding</button>
      </div>
    </div>`;
}
