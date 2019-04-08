function test()
{
    var chocolateBars = 3;
    if (chocolateBars > 0) {
        console.log("I've still got some chocolate left!");
    }
    else {
        console.log("Oh no! I'm out of chocolate!");
    }}

    test();

function test1()
{
    var chocolateBars = 3;
    var hungry = true;
    if (chocolateBars > 0) {
        console.log("I've still got some chocolate left!");
        if (hungry == true) {
            console.log("Eat a chocolate bar!");
            chocolateBars--;
        }
    }
    else {
    console.log("Oh no! I'm out of chocolate!");
}
}
test1();