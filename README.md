# btc-blockchain-search

## What's In This Document

- [General Info](#general-info)
- [Video Demo](#video-demo)
- [Technologies](#technologies)
- [How to run](#how-to-run)

## General Info

- This is an app that allows the user to search the blockchain for an address or a transaction by hash. 
- The top 5 searched addresses and transactions are saved and shown via Firestore, they are updated on a per search basis.
- Addresses can be subscribed to for notifications via a websocket.

## Video Demo

https://user-images.githubusercontent.com/50380598/203158055-35ee2b05-6fe1-41d9-85b6-78e4f3a121b0.mov



## Technologies

 Created with:

* React-Native
* Expo
* Typescript
* Fetch
* Firestore
* CSS

## How to run

*Make sure you have NodeJS, yarn and Xcode installed.*
```bash
git clone https://github.com/adampagels/btc-blockchain-search.git
cd btc-blockchain-search
yarn install
npx expo start
Press i to open the iOS simulator
```
