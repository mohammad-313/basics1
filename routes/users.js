import express from "express";


const router = express.router();
let users = [];
   [ {
    firstname:"ali",
    lastName:"mortada",
    age:"30"
    },
    {
        firstname: "mohammad",
        lastname: "hamod",
        age:"18"
    }
]

router.get("/", (req, res) => {
   
res.send("users");
});
router.post("/",(req, res) =>{

    const user = req.body;

users.push({ ...user, id: uuidv4()});
res.send("user with the name ${user.firstname} added to the database!");
});
// /users/2 => req.params { id: 2 }

router.get("/:id", (req, res) => {
   const { id } = req.params;

  const founduser = users.find((user) => user.id = id)

    res.send(req.params);
});

router.delete("/:id" , (req, res)=> {
    const { id } = req.params;


    users= user.filter((user) => user.id != id );

    res.send("user with the id ${id} deleted from the database.");
})

router.patch("/:id", (req, res)=> {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;

    const user = users.find((user)=> user.id = id );

    if(firstname) user.firstname = firstname;

    if(lastname) user.lastname = lastname;

    if(age) user.age = age;

res.send(`user with the id ${id} has been updated`);
})

export default router;