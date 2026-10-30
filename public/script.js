"use strict";

/* =====================================
   CODESATHI AI - COMPLETE SCRIPT.JS
   ===================================== */

const chat = document.getElementById("chat");
const form = document.getElementById("chatForm");
const input = document.getElementById("userInput");

/* Knowledge Database */

const knowledge = [
  {
    keys: ["hello", "hi", "hey", "good morning"],
    answer: "Hello! 👋 Welcome to CodeSathi AI.\n\nI am your C++ learning companion. Ask me anything about C++, OOP, programs and viva questions."
  },
  {
    keys: ["what is oop", "define oop", "oops", "object oriented programming"],
    answer: "OOP stands for Object-Oriented Programming.\n\nIt is a programming approach based on classes and objects.\n\nFour main principles:\n1. Encapsulation\n2. Abstraction\n3. Inheritance\n4. Polymorphism\n\nReal-life Example: A car has properties like color, model and speed, and actions like start() and stop()."
  },
  {
    keys: ["class and object", "classes and objects", "what is a class", "what is an object"],
    answer: "CLASS:\nA class is a blueprint used to create objects.\n\nOBJECT:\nAn object is an instance of a class.\n\nC++ Example:\n\n#include <iostream>\nusing namespace std;\n\nclass Student {\npublic:\n    string name;\n    void display() {\n        cout << name;\n    }\n};\n\nint main() {\n    Student s1;\n    s1.name = \"Aryan\";\n    s1.display();\n    return 0;\n}\n\nHere Student is a class and s1 is an object."
  },
  {
    keys: ["inheritance", "types of inheritance"],
    answer: "INHERITANCE\n\nInheritance allows one class to acquire the properties and accessible functions of another class.\n\nTypes:\n1. Single Inheritance\n2. Multiple Inheritance\n3. Multilevel Inheritance\n4. Hierarchical Inheritance\n5. Hybrid Inheritance\n\nReal-life Example:\nA child inherits certain characteristics from parents.\n\nC++ Example:\n\nclass Animal {\npublic:\n    void eat() {\n        cout << \"Eating\";\n    }\n};\n\nclass Dog : public Animal {\npublic:\n    void bark() {\n        cout << \"Barking\";\n    }\n};"
  },
  {
    keys: ["polymorphism"],
    answer: "POLYMORPHISM\n\nPolymorphism means many forms.\n\nTypes:\n1. Compile-time Polymorphism\n   - Function Overloading\n   - Operator Overloading\n\n2. Runtime Polymorphism\n   - Function Overriding using virtual functions\n\nExample: The same function name can perform different tasks depending on the arguments or the object."
  },
  {
    keys: ["constructor", "constructors"],
    answer: "CONSTRUCTOR\n\nA constructor is a special member function that initializes an object.\n\nFeatures:\n1. Same name as class.\n2. No return type.\n3. Called automatically when an object is created.\n\nTypes:\n1. Default Constructor\n2. Parameterized Constructor\n3. Copy Constructor\n\nExample:\n\nclass Student {\npublic:\n    Student() {\n        cout << \"Constructor called\";\n    }\n};"
  },
  {
    keys: ["destructor", "destructors"],
    answer: "DESTRUCTOR\n\nA destructor is a special member function used to perform cleanup when an object is destroyed.\n\nFeatures:\n1. Same name as class with ~ symbol.\n2. No return type.\n3. Takes no parameters.\n4. Called automatically when an object is destroyed.\n\nExample:\n\nclass Demo {\npublic:\n    ~Demo() {\n        cout << \"Object destroyed\";\n    }\n};"
  },
  {
    keys: ["encapsulation"],
    answer: "ENCAPSULATION\n\nEncapsulation means wrapping data and functions together inside a class.\n\nIt helps protect data using access specifiers.\n\nExample:\nA bank account keeps its balance private and provides public deposit() and withdraw() functions."
  },
  {
    keys: ["abstraction"],
    answer: "ABSTRACTION\n\nAbstraction means showing essential information and hiding internal implementation details.\n\nReal-life Example:\nWhen you drive a car, you use the steering wheel and brakes without knowing all the internal working of the engine."
  },
  {
    keys: ["overloading", "function overloading"],
    answer: "FUNCTION OVERLOADING\n\nFunction overloading means defining multiple functions with the same name but different parameter lists.\n\nExample:\n\nvoid add(int a, int b) {\n    cout << a + b;\n}\n\nvoid add(double a, double b) {\n    cout << a + b;\n}\n\nIt is a type of compile-time polymorphism."
  },
  {
    keys: ["overriding", "function overriding"],
    answer: "FUNCTION OVERRIDING\n\nFunction overriding occurs when a derived class provides a new implementation of a suitable virtual function inherited from its base class.\n\nIt supports runtime polymorphism in C++."
  },
  {
    keys: ["access specifier", "access specifiers"],
    answer: "ACCESS SPECIFIERS IN C++\n\n1. Public: Accessible from outside the class.\n2. Private: Accessible within the class and its friends.\n3. Protected: Accessible within the class, friends and derived classes.\n\nThese control access to class members."
  },
  {
    keys: ["friend function"],
    answer: "FRIEND FUNCTION\n\nA friend function is not a member of a class but can access its private and protected members when declared as a friend.\n\nIt is declared using the friend keyword."
  },
  {
    keys: ["virtual function"],
    answer: "VIRTUAL FUNCTION\n\nA virtual function is a member function declared using the virtual keyword in a base class.\n\nIt supports runtime polymorphism when called through a base-class pointer or reference."
  },
  {
    keys: ["this pointer"],
    answer: "THIS POINTER\n\nThe this pointer refers to the current object of a class.\n\nIt is useful for accessing current object's members and resolving naming conflicts."
  },
  {
    keys: ["simple c++ program", "hello world", "first program", "c++ program"],
    answer: "SIMPLE C++ PROGRAM\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << \"Hello, World!\";\n    return 0;\n}\n\nExplanation:\n1. iostream is used for input and output.\n2. main() is the starting point.\n3. cout displays output.\n4. return 0 indicates successful execution."
  },
  {
    keys: ["viva", "oral questions", "viva questions"],
    answer: "OOP VIVA QUESTIONS 🎓\n\nQ1. What is OOP?\nAns: Object-Oriented Programming.\n\nQ2. What is a class?\nAns: A blueprint for creating objects.\n\nQ3. What is an object?\nAns: An instance of a class.\n\nQ4. What is inheritance?\nAns: Acquiring properties of another class.\n\nQ5. What is polymorphism?\nAns: One interface with many forms.\n\nQ6. What is a constructor?\nAns: A special function used to initialize objects.\n\nQ7. What is encapsulation?\nAns: Wrapping data and functions together."
  },
  {
    keys: ["more viva", "more questions", "quiz"],
    answer: "C++ QUICK QUIZ 🧠\n\n1. Which keyword is used to declare a class?\n2. Which access specifier hides members from ordinary outside access?\n3. Which keyword supports runtime polymorphism?\n4. Can constructors be overloaded?\n5. Which symbol is used in a destructor name?\n\nTry answering these questions!"
  }
];

/* Add Message */

function addMessage(message, sender) {
  const row = document.createElement("div");
  row.className = "message " + sender;

  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = sender === "user" ? "👤" : "C++";

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = message;

  row.append(avatar, bubble);
  chat.appendChild(row);

  chat.scrollTop = chat.scrollHeight;
}

/* Find Answer */

function getAnswer(question) {
  const q = question.toLowerCase()
    .replace(/[^\w\s+#]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const match = knowledge.find(item =>
    item.keys.some(key => q.includes(key))
  );

  if (match) {
    return match.answer;
  }

  return "Good question! 😊\n\nI am CodeSathi AI. I can help you with:\n\n• C++ Basics\n• OOP Concepts\n• Classes and Objects\n• Inheritance\n• Polymorphism\n• Constructors and Destructors\n• Encapsulation and Abstraction\n• C++ Programs\n• Viva Questions\n\nPlease try asking a question about these topics.";
}

/* Send Message */

function sendMessage(question) {
  const cleanQuestion = question.trim();

  if (!cleanQuestion) return;

  const welcome = document.getElementById("welcome");

  if (welcome) {
    welcome.remove();
  }

  addMessage(cleanQuestion, "user");

  input.value = "";

  const answer = getAnswer(cleanQuestion);

  addMessage(answer, "bot");

  input.focus();
}

/* Form Submit */

if (form && input && chat) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    sendMessage(input.value);
  });
}

/* Learn C++ Topic */

function askTopic(topic) {
  sendMessage(topic);
}

/* New Chat */

function newChat() {
  if (!chat) return;

  chat.innerHTML = `
    <div class="welcome" id="welcome">
      <div class="welcome-icon">⌘</div>

      <h1>Hey, future coder! 👋</h1>

      <p>
        I'm CodeSathi AI.
        Let's make C++ easy, one concept at a time.
      </p>

      <div class="suggestions">
        <button onclick="askTopic('Explain OOP in simple language')">
          What is OOP?
        </button>

        <button onclick="askTopic('Give me a simple C++ program')">
          Show a C++ program
        </button>

        <button onclick="askTopic('Give me OOP viva questions')">
          Practice viva questions
        </button>

        <button onclick="askTopic('Explain function overloading and overriding')">
          Overloading vs overriding
        </button>
      </div>
    </div>`;

  if (input) {
    input.value = "";
    input.focus();
  }
}

/* Make Functions Available to HTML */

window.askTopic = askTopic;
window.newChat = newChat;

/* Welcome Message in Console */

console.log("CodeSathi AI loaded successfully! 🚀");
