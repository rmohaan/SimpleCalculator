# product-catalog-sample

## Summary

product-catalog-sample module

## Install

```sh
$ npm product-catalog-sample --save
```
## Install dependencies
```sh
$ npm install
```

## Build package and start server
```sh 
$ npm run start 
```

## Build package
```sh 
$ npm run buildDev 
```

## Run server
```sh
$ npm run startDev
```

## Open website
```sh
localhost:4000
```

## Usage
This package is an npm package.

## Technologies Used

1. React
1. Redux
1. Node
1. Express
1. MongoDB
1. GraphQL
1. SASS
1. Mocha
1. Webpack
1. Babel


## Testing
Mocha-Enzyme is used for testing the React modules. To run tests, use the following command
```sh
mocha
```
For time being testing has been completed only for View Product component.

## DB Details
This demo is using Mongo DB. 
DB Name: suventure
Collection Name: Products

Sample Products to insert
```sh
db.products.insert({ name: "iPhone 7", description: "Take your iPhone experience to the next level with iPhone 7. Featuring new camera systems, a better battery-life, an efficient processor and powerful stereo speakers, this smartphone will drastically enhance your iPhone experience. With a sharp and vibrant display, and a sleek water-resistant body, this phone is as powerful as it is attractive.", brand: "iPhone", price: 56000, url: "https://rukminim1.flixcart.com/image/832/832/mobile/b/g/z/apple-iphone-7-mn9c2hn-a-original-imaerm2gugbjfjvg.jpeg?q=70", availability: 5, category: "electronics" });

db.products.insert({ name: "Samsung On5", description: "Take your Samsung experience to the next level with Samsung on5. With a sharp and vibrant display, and a sleek water-resistant body, this phone is as powerful as it is attractive.", brand: "Samsung", price: 16000, url: "https://rukminim1.flixcart.com/image/832/832/mobile/h/k/z/samsung-galaxy-on-nxt-sm-g610fzkgins-original-imaenkzp2qtzjbhz.jpeg?q=70", availability: 5, category: "electronics" });

db.products.insert({ name: "Rodid Men's Solid Casual Black Shirt", description: "RODID stylish jet black slim fit shirt is perfect for the casual / semi-formal outing. Featured with trendy double pockets on the front along with piping panels of the same color. This shirt also features flapped button holders at the sleeves. The cotton fabric keeps you comfortable throughout the day.", brand: "Rodid", price: 500, url: "https://rukminim1.flixcart.com/image/832/832/shirt/q/2/p/rodsdph-b-rodid-l-original-imaeyvytzzx5hbhg.jpeg?q=70", availability: 5, category: "clothing"});

db.products.insert({ name: "S.R.Agencies Printed Leheria Georgette Sari - Orange", description: "This model has a Height of 5 feet 10 inches Bust 32 inches and is wearing a of Size S", brand: "Leheria", price: 1019.50, url: "https://rukminim1.flixcart.com/image/832/832/sari/j/t/x/1-1-sjm319m-8-s-r-agencies-free-original-imaehbk6mqwjsqcz.jpeg?q=70", availability: 3, category: "clothing"});

db.products.insert({ name: "Toyhouse Metal Helicopter with Gyroscope and LED Lights", description: "The next generation of toy helicopters has finally arrived and it comes in the form of the S107G. This particular toy helicopter can be controlled from your mobile smartphone. Just attach the transmitter to your phone and you are all set to have some good fun. The helicopter comes with a Gyro technology which helps stabilize the toy while it is still in mid-air. This makes flying more easier for your child.", brand: "Toyhouse", price: 1259, url: "https://rukminim1.flixcart.com/image/832/832/remote-control-toy/a/z/c/toyhouse-speed-helicopter-3-channel-infrared-remote-control-with-original-imaedhfc35hndtgc.jpeg?q=70", availability: 0, category: "toys"});


```