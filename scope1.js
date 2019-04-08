var circleRadius = 3;
console.log("Radius: " + circleRadius);

var area = circleArea();
console.log("Radius after we call circleArea(): " + circleRadius);


function circleArea() {
    var circleRadius = 5;
    console.log("Radius in the function circleArea(): " + circleRadius);
    var area = Math.PI * Math.pow(circleRadius,2);
    return area;
}

// Nhận xét rằng biến cục bộ không thay đổi giá trị sau khi gọi hàm