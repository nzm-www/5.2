// 1
// class Car {
//   constructor(nomi, yilik) {
//     this.nomi = nomi;
//     this.yilik = yilik;
//   }
// }
// let car1 = new Car("GM", 2020);
// let car2 = new Car("BMW", 2018);
// let car3 = new Car("RR", 2022);
// console.log("Car 1:", car1.nomi, car1.yilik);
// console.log("Car 2:", car2.nomi, car2.yilik);
// console.log("Car 3:", car3.nomi, car3.yilik);

//===================================================
//2
// class Car {
//   constructor(brend, yilik) {
//     this.brend = brend;
//     this.yilik = yilik;
//   }
// }

// class elektrcar extends Car {
//   constructor(brend, yilik, batteryLife) {
//     super(brend, yilik);
//     this.batteryLife = batteryLife;
//   }
// }
// let elektrcar1 = new elektrcar("Tesla", 2023, 100000);
// let elektrcar2 = new elektrcar("BYD", 2024, 2500000);

// console.log(
//   "Electric Car 1:",
//   elektrcar1.brend,
//   elektrcar1.yilik,
//   elektrcar1.batteryLife
// );
// console.log(
//   "Electric Car 2:",
//   elektrcar2.brend,
//   elektrcar2.yilik,
//   elektrcar2.batteryLife
// );
//=====================================================
//3
class Car {
  constructor(marka, yilik) {
    this.marka = marka;
    this.yilik = yilik;
  }
  displayInfo() {
    console.log("marka:", this.marka);
    console.log("yilik:", this.yilik);
  }
}
class ElectricCar extends Car {
  constructor(marka, yilik, batteryLife) {
    super(marka, yilik);
    this.batteryLife = batteryLife;
  }
}
let car = new Car("Toyota", 2020);
car.displayInfo();
let electricCar = new ElectricCar("Tesla", 2023, 300);
electricCar.displayInfo();
