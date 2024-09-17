let rectabgle = {
    a: "",
    b: "",
    c: "",
    d: "",
};

function set_rectangle(o) {
    A = prompt("Введите координаты первой точки (через запятую)")
    o.A = A;
    B = prompt("Введите координаты первой точки (через запятую)")
    o.B = B;
    C = prompt("Введите координаты первой точки (через запятую)")
    o.C = C;
    D = prompt("Введите координаты первой точки (через запятую)")
    o.D = D;
}

function rectangleInfo(o) {
    alert(
       `Точка A: (${o.A})\nТочка B: (${o.B})\nТочка c:(${o.C})\nТочка D: c:(${o.D})`
    );
}

function getWidth(o) {
    alert(`Ширина прямоугольника : ${Number(o.B[0])} - ${Number(o.A[0])}`);
}

function getHeight(o) {
    alert(`Высота прямоугольника : ${Number(o.B[2])} - ${Number(o.A[2])}`);
}

function getArea(o) {
    alert(`Площадь равна: ${Number(o.B[0])} - ${Number(o.A[0])}`);
}
function getPerimetrt(o) {
    alert(`Периметр равна: ${Number(o.B[0])} - ${Number(o.A[0])}`);
}