
#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

class CodeSathi {
private:
    string studentName;

public:
    CodeSathi() {
        studentName = "Learner";
    }

    void setStudentName(string name) {
        studentName = name;
    }

    string getAnswer(string question) {
        transform(question.begin(), question.end(),
                  question.begin(), ::tolower);

        if (question.find("inheritance") != string::npos) {
            return "Inheritance allows a derived class to reuse "
                   "accessible members of a base class. "
                   "Types include single, multiple, multilevel, "
                   "hierarchical and hybrid inheritance.";
        }

        if (question.find("polymorphism") != string::npos) {
            return "Polymorphism means many forms. "
                   "Compile-time polymorphism includes function "
                   "overloading. Runtime polymorphism uses virtual "
                   "functions and overriding.";
        }

        if (question.find("constructor") != string::npos) {
            return "A constructor initializes an object. "
                   "It has the same name as the class and "
                   "does not have a return type.";
        }

        if (question.find("class") != string::npos ||
            question.find("object") != string::npos) {
            return "A class is a blueprint. An object is an "
                   "instance of that class. For example, "
                   "Student is a class and student1 is an object.";
        }

        if (question.find("encapsulation") != string::npos) {
            return "Encapsulation combines data and functions "
                   "inside a class and controls access to data "
                   "using public, private and protected members.";
        }

        if (question.find("abstraction") != string::npos) {
            return "Abstraction shows essential features and "
                   "hides unnecessary implementation details.";
        }

        if (question.find("oop") != string::npos) {
            return "OOP means Object-Oriented Programming. "
                   "Its four main principles are encapsulation, "
                   "abstraction, inheritance and polymorphism.";
        }

        return "Hello " + studentName +
               "! I am CodeSathi C++ Assistant. "
               "Ask me about OOP, classes, objects, "
               "inheritance, polymorphism or constructors.";
    }
};

int main() {
    CodeSathi bot;
    string question;

    while (getline(cin, question)) {
        if (question == "__QUIT__") {
            break;
        }

        cout << bot.getAnswer(question) << '\n';
    }

    return 0;
}
