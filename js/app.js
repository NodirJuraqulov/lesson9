// console.log("Hello world!");

// HOMEWORK:

console.log("1-malasa:");

{
    for (let i = 1; i < 10; i += 2) {
        console.log(i);
    }

    console.log("2-usul:");
    
    
    let i = 1;
    function recursive1() {
        if (i < 10) {
            console.log(i);
            i += 2;
            recursive1()
        }
    }
    
    recursive1()
}


console.log("2-masala:");

{
    for (let i = 100; i >= 10; i -= 10) {
        console.log(i);
    }

    console.log("2-usul:");
    

    let i = 100;
    function recursive2() {
        if (i >= 10) {
            console.log(i);
            i -= 10;
            recursive2();
        }
    }

    recursive2();
}


console.log("3-masala:");

{
    let sum = 0;

    for (let i = 0; i < 10; i++) {
        sum += i;    
    }
    console.log(sum);

    console.log("2-usul:");

    let total = 0;
    let i = 0;

    function recursive3() {
        if (i < 10) {
            total += i;
            i++;
            recursive3();
        }
    }
    
    recursive3();
    console.log(total);
}


console.log("4-masala:");

{
    // let n = Number(prompt("n sonini kiriting:"));
    let n = 4;

    for (let i = 1; i <= n; i++) {
        console.log("Laylo");
    }

    console.log("2-usul:");

    let i = 1;
    function recursive4(k) {
        if (i <= k) {
            console.log("Laylo");
            i++;
            recursive4(5);
        }
    }
    
    recursive4(5);
}


console.log("5-masala:");

{
    // let n = Number(prompt("n sonini kiriting:"));
    let n = 4;
    let a = 5;
    let mult = 1;

    for (let i = 1; i <= n; i++) {
        mult = mult * a;
    }

    console.log(mult);

    console.log("2-usul:");
    
    let multp = 1;
    let i = 0;

    function recursive5(k) {
        if (i < k) {
            multp = multp * a;
            i++;
            recursive5(3);
        }
    }
    
    recursive5(3);
    console.log(multp);
}










// // Callback function:

// function bar() {
//     console.log("Bar function");
// }

// function foo(callback) {
//     console.log("Foo function");
//     callback();
// }

// foo(bar);


// // Pure function:

// function pure(a) {
//     let n = 5;
//     return a * n;
// }

// console.log(pure(4));

// // Impure function:

// let n = 5;

// function impure(a) {
//     return a * n;
// }

// console.log(impure(4));


// // Recursive function:

// // function recursive() {
// //     console.log("infinity");
// //     recursive();
// // }
// // recursive();

// {

//     let arr = [2, 5, 1, 6];
//     let total = 0;

//     // for (let i = 0; i < arr.length; i++) {
//     //     total += arr[i];
//     // }
//     // console.log(total);

//     let i = 0;

//     function recursive() {
//         if (i < arr.length) {
//             total += arr[i];
//             i++;
//             recursive();
//         }
//     }
//     recursive();
//     console.log(total);
    
// }







