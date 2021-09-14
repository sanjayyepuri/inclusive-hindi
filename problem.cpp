#include <variant>
#include <iostream>
#include <string>
#include <stack>
using namespace std;
bool is_int(string s){
    for(char c: s){
        if (c > '9' || c < '0') return false;
    }
    return true;
}

string my_to_string(int i){
    return to_string(i);
}

string my_to_string(string s){
    return s;
}
template<class T, class U>
string my_add*T a, U b){
    return my_to_string(a)+my_to_string(b);
}

template<>
string my_add(int a, int b){
    return to_string(a+b);
}

template<class... Ts> struct overload : Ts... { using Ts::operator()...; };
template<class... Ts> overload(Ts...) -> overload<Ts...>;
int main(){
    stack<variant<int, string>> s;
    while (true){
        string in;
        cin >> in;
        if (in == "pop"){
            variant<int, string> a,b;
            a = s.top();
            s.pop();
            b = s.top();
            s.pop();
            visit(
                [](auto&& a, auto&& b){ cout << add(a, b) << endl;},
                a,
                b
            );
        }
        else {
            variant<int, string> pushed;
            if (is_int(in)) pushed = stoi(in);
            else pushed = in;
            s.push(pushed);
        }

    }
}

/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

// #include <variant>
// #include <iostream>
// #include <string>

// using namespace std;
// template<class... Ts> struct overload : Ts... { using Ts::operator()...; };
// template<class... Ts> overload(Ts...) -> overload<Ts...>; // line not needed in C++20...
// int main()
// {
//     variant<int, string> a,b;
//     a = 23;
//     b = "ABC";
//     visit(
//         overload{
//             [](int& a, int& b){cout << a+b;}, 
//             [](int& a, string b){cout << to_string(a)+b;},
//             [](string a, int b){cout << a+to_string(b);},
//             [](string a, string b) { return a+b;}
//         },
//         a,
//         b
//     );
// }
// #include <iostream>
// #include <variant>

// struct Fluid { };
// struct LightItem { };
// struct HeavyItem { };
// struct FragileItem { };

// template<class... Ts> struct overload : Ts... { using Ts::operator()...; };
// template<class... Ts> overload(Ts...) -> overload<Ts...>; // line not needed in C++20...

// int main() {
//     std::variant<Fluid, LightItem, HeavyItem, FragileItem> package, package2;
//     package = Fluid();
//     package2 = Fluid();

//     std::visit(overload{
//         [](Fluid&, Fluid&)       { std::cout << "fluid\n"; },
//         [](LightItem& )   { std::cout << "light item\n"; },
//         [](HeavyItem& )   { std::cout << "heavy item\n"; },
//         [](FragileItem& ) { std::cout << "fragile\n"; }
//     }, package);
// }