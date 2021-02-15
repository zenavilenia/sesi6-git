var nama = prompt("masukan nama anda");
var umur = prompt("masukan umur anda");

document.write("<h1> Welcome " + nama + "!</h1>");

if (umur > 17) {
    document.write("<h1> Umur di atas 17 tahun </h1>");
} else {
    document.write("<h1> Maaf umur anda belum mencukupi </h1>");
}

const phi = 3.14;
var r = 4;
var luas;
var keliling;

luas = phi * r * r;
keliling = 2 * phi * r;

console.log(luas);
console.log(keliling);