#include <bits/stdc++.h>
#include <cstdio>
#include<cassert>
using namespace std;

int main() {
    // Complete the code.
    int a,b;
    cin>>a;
    cin>>b;
    assert(a<=b);
    for(int i=a;i<=b;i++)
    {
        if(i>=1 && i<=9)
        {
            if(i==1)
                cout<<"one"<<endl;
             if(i==2)
                cout<<"two";
                 if(i==3)
                    cout<<"three"<<endl;
                     if (i==4) {
                    cout<<"four"<<endl;
                    }
                     if (i==5) {
                    cout<<"five"<<endl;
                    }
                     if (i==6) {
                    cout<<"six"<<endl;
                    }
                     if (i==7) {
                    cout<<"seven"<<endl;
                    }
                     if (i==8) {
                    cout<<"eight"<<endl;
                    }
                     if (i==9) {
                    cout<<"nine"<<endl;
                    }
        }
        else if(i>9){
            if(i%2==0)
            {
                cout<<"even"<<endl;
            }
             if(i%2!=0)
            {
                cout<<"odd"<<endl;
            }
        }
    }
    return 0;
}