// Inheritance 

class A {

    m1() {

        console.log("this is M1 Mehtod")

    }

    m2() {

        console.log("this is M2 Mehtod")
    }

    m3() {

        console.log("this is M3 Mehtod")


    }


}

class B extends A {


    m4() {

        console.log("this is M4 Mehtod")

    }

    m5() {

        console.log("this is M5 Mehtod")
    }

    m6() {

        console.log("this is M6 Mehtod")


    }



}


class C extends A {


    m7() {

        console.log("this is M7 Mehtod")

    }

    m8() {

        console.log("this is M8 Mehtod")
    }

}

const obj = new B()

obj.m1() // A 

obj.m5() // B 

//obj.m8() //C