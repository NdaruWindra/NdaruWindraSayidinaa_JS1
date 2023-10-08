// 1. if else dan nested if

// if else
let nilai = prompt('Masukkan nilai bro : ');

if (nilai >= 90 && nilai <= 100) {
    alert('Nilai kamu A');
}else if (nilai >= 80 && nilai <= 89) {
    alert('Nilai kamu B');
}else if (nilai >= 70 && nilai <= 79) {
    alert('Nilai kamu C');
} else if (nilai >= 60 && nilai <= 69) {
    alert('Nilai kamu D');
} else if (nilai >= 0 && nilai <= 59) {
    alert('Nilai kamu E');
} else {
    alert('Gaada nilai kamuuu');
}

// nested if
let username = prompt('Masukkan username : ');
let password = prompt('Masukkan password : ');

if (username == "ndaru") {
    if (password == "123") {
        alert('Login berhasil');
    } else {
        alert('Password salah');
    }
}

// 2. switch case
let jawab = prompt('lumayan dapat doorprize, pilih angka 1-3');

switch (jawab) {
    case '1':
        alert('Selamat dapat sapi bro');
        break;
    case '2':
        alert('Selamat dapat kulkas bro');
        break;
    case '3':
        alert('Selamat dapat hidayah bro');
        break;
    default:
        alert('Dibilang cuman angka 1-3 oiii');
}

// 3. for statament
for (let i = 0; i < 5; i++){
    if (i == 3) {
        console.log("Makanlah sikit nanti sakit");
    } else {
        console.log("Gausah makan");
    }
}

// 4. while dan do while
let nilai2 = 1;

while(nilai2 <= 5){
    console.log("Angka ke " + nilai);
    nilai2++;
}

let angka = 1;

do {
    console.log("Angka ke " + angka);
    angka++;

} while (angka <=20);

// 5. function
function jumlah(a, b) {
    hasil = a + b;
    return hasil;
}

let nilaiA = 10;
let nilaiB = 20;
let penjumlahan = jumlah(nilaiA, nilaiB);

console.log(penjumlahan);