let Sharmacoin = new Blockchain();
console.log("Mining is in progress!!!!!!!");


Sharmacoin.Add_New_Block(
    new Block(1, "06.06.2022", {
        sender: "Sharma",
        recipient: "Das",
        quantity: 5
    })
);

Sharmacoin.Add_New_Block(
    new Block(2, "08.06.2022", {
        sender: "Das",
        recipient: "Subhankar",
        quantity: 10
    })
);
console.log(JSON.stringify(Sharmacoin, null, 4));