import express from "express";
const PORT = 3000; // declaramos el puerto
const app = express(); // inicializamos express

app.use(express.json()); // parsea la informacion que se envia al body a formato json asi puede ser compatible

// Creamos un endpoint llamado home y mandamos por el body el string home page endpoint

app.get("/home", (req, res) => {
   console.log("home page endpoint");

   res.send("Home Page Endpoint");
});

// Creamos un endpoint llamado products y le enviamos un arreglo de objetos al body

app.get("/products", (req, res) => {
   res.send([
      {
         title: "Product1",
         price: "1200",
      },
      {
         title: "Product2",
         price: "1400",
      },
   ]);
});

//  creamos un endpoint dinamico llamado user  para  OBTENER DATOS DE UN USUARIO mediante el id

app.get("/user/:id", (req, res) => {
   const { id } = req.params;

   res.send(`el usuario con el ${id} ha sido encontrado`);
});

// creamos un endpoint dinamico para guardar un producto por id y respondemos el mensaje con un objeto

app.post("/product/:id", (req, res) => {
   const { id } = req.params;

   console.log(`el producto con el id ${id} ha sido guardado exitosamente`);

   res.send([
      {
         title: "Product1",
         price: "1200",
      },
      {
         message: `el producto con el id ${id} ha sido guardado exitosamente`,
      },
   ]);
});

// creamos un endpoint register y enviamos data x el body solicitando username y email

app.post("/register", (req, res) => {
   const { username, email } = req.body;

   try {
      res.send("usuario registrado exitosamente");
   } catch (error) {
      if (!username && !email) {
         return res.status(418).send("Usuario y email con obligatorios");
      }
   }
});

// creamos un endpoint login y enviamos data x el body solicitando username y password

app.post("/login", (req, res) => {
   const { username } = req.body;

   if (!username) {
      console.log("usuario y clave son obligatorios");
      return res.send({
         message: "usuario y clave son obligatorios!",
      });
   }

   console.log("usuario logeado exitosamente");
   res.send("usuario logeado exitosamente");
});

app.listen(3000, () => {
   console.log(`servidor conectado al puerto ${PORT}`);
});
