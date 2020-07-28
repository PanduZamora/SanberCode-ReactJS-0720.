// Soal 1
{
    console.log("Soal No 1 \n")
    const arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992];

    const objDataPeserta = {
        nama: arrayDaftarPeserta[0],
        jenisKelamin: arrayDaftarPeserta[1],
        hobi: arrayDaftarPeserta[2],
        tahunLahir: arrayDaftarPeserta[3]
    }
    console.log(objDataPeserta);
}

// Soal 2
{
    data = [{
            nama: "strawberry",
            warna: "merah",
            berbiji: false,
            harga: 9000
        },
        {
            nama: "jeruk",
            warna: "oranye",
            berbiji: true,
            harga: 8000
        }, {
            nama: "Semangka",
            warna: "Hijau & Merah",
            berbiji: true,
            harga: 10000
        }, {
            nama: "Pisang",
            warna: "Kuning",
            berbiji: false,
            harga: 5000
        }
    ]
    console.log(data[0])
}

// Soal 3
{
    console.log("Soal No 3 \n")
    let dataFilm = [];

    function tambahdatafilm(nama, durasiFilm, genre, tahunFilm) {
        dataFilm.push({
            nama: nama,
            durasiFilm: durasiFilm,
            genre: genre,
            tahunFilm: tahunFilm
        });
    };
    tambahdatafilm("Spongebob Squarepants", "30 Menit", "Kartun", 1990);
    console.log(dataFilm);
}

// Soal 4
{
    console.log("Soal No 4 \n")
    class Animal {
        constructor(name) {
            this._name = name;
            this._legs = 4;
            this._cold_blooded = false;
        }

        get name() {
            return this._name;
        }

        get legs() {
            return this._legs;
        }

        get cold_blooded() {
            return this._cold_blooded;
        }
    }

    // release 0
    var sheep = new Animal("shaun");
    console.log(sheep.name);
    console.log(sheep.legs);
    console.log(sheep.cold_blooded);


    // release 1

    class Ape extends Animal {
        constructor(name) {
            super(name);
            this._legs = 2;
        }

        yell() {
            console.log('Auoooooooooooooo');
        }
    }

    class Frog extends Animal {
        constructor(name) {
            super(name);
        }

        jump() {
            console.log('hop hop');
        }
    }
    var sungokong = new Ape("kera sakti");
    sungokong.yell();

    var kodok = new Frog("buduk");
    kodok.jump();
}



// Soal 5
// {
//     console.log("Soal No 5 \n")
//     class Clock {
//         constructor({
//             template
//         }) {
//             this.timer;
//             this._template = template;
//         }

//         render(template) {
//             let date = new Date();

//             let hours = date.getHours();
//             if (hours < 10) hours = '0' + hours;

//             let mins = date.getMinutes();
//             if (mins < 10) mins = '0' + mins;

//             let secs = date.getSeconds();
//             if (secs < 10) secs = '0' + secs;

//             let output = this._template
//                 .replace('h', hours)
//                 .replace('m', mins)
//                 .replace('s', secs);

//             console.log(output);
//         }

//         stop() {
//             clearInterval(timer);
//         }

//         start() {
//             this.render(this._template);
//             this.timer = setInterval(() => this.render(this._template), 1000);
//         }

//     }
//     var clock = new Clock({
//         template: 'h:m:s'
//     });
//     clock.start();
// }