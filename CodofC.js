class Room {
    #isBooked
    constructor(floorNum,roomNum,price){
        this.floorNum=floorNum
        this.roomNum=roomNum
        this.price=price
        this.#isBooked=false
    }
    printRoom(){
        console.log(`Room(floorNum = ${this.floorNum}, roomNum = ${this.roomNum}, price = ${this.price}, isBooked = ${this.#isBooked} )`)
    }
    book(){
        this.#isBooked=true
    }
    isBooked(){
        return this.#isBooked
    }
}
//////////////////
class Hotel {
    #minFloor
    #maxFloor
    constructor(Addres,NumberOfRooms,minFloor,maxFloor,rooms){
        this.Addres=Addres
        this.NumberOfRooms=NumberOfRooms
        this.#minFloor=minFloor
        this.#maxFloor=maxFloor
        this.rooms=rooms
    }
    printAdvertisemen(){
        console.log("Welcome in Tulkarm Hotel")
    }
    listBookedRooms(){
        for(let i=0; i<this.rooms.length ; i++){
            if(this.rooms[i].isBooked()===true){
                this.rooms[i].printRoom()
            }
        }
    }

}
/////////////////
class RoomWithView extends Room {
    view
    numberOfBeds
    constructor(floorNum,roomNum,price,isBooked,view,numberOfBeds){
        super(floorNum,roomNum,price,isBooked)
        this.view=view
        this.numberOfBeds=numberOfBeds
    }

    printRoom(){
        console.log(`Room(floorNum = ${this.floorNum}, roomNum = ${this.roomNum}, price = ${this.price}, isBooked = ${this.isBooked()}, View = ${this.view}, numberOfBeds = ${this.numberOfBeds} )`)
    }
}
/////////////////
class SleepingRoom extends Room {
    personCapacity
    constructor(floorNum,roomNum,price,isBooked,personCapacity){
        super(floorNum,roomNum,price,isBooked)
        this.personCapacity=personCapacity
    }
    printRoom(){
        console.log(`Room(floorNum = ${this.floorNum}, roomNum = ${this.roomNum}, price = ${this.price}, isBooked = ${this.isBooked()}, personCapacity = ${this.personCapacity} )`)

    }
}
const r1 = new Room(2,12,200,false)
r1.printRoom()
r1.book()
r1.printRoom()
const r2 = new SleepingRoom(3,13,400,false,3)
r2.printRoom()
const r3 = new RoomWithView(4,22,400,false,"Sea shore",3)
r3.printRoom()
r3.book()
const h1 = new Hotel('tulkarem',3,1,10,[r1,r2,r3])
h1.printAdvertisemen()
h1.listBookedRooms()