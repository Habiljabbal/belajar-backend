//buat var untuk menampung pkg
const express = require("express");
const app = express();

//middlaner untuk express dapat menerima request dari user
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routing

//1.membuat index route
app.get("/", function (req, res, next) {
  respons.json({
    message: "hello world dari express",
  });
});

app.post("/create", function (req, res, next) {
  const { username, email, WA } = req.body;

  //username
  //email
  //password
  console.log(req.body);
});

app.post("/register", function (req, res, next) {
  const { name, email, password } = req.body;

  //simple 1
  // if (name =="" || email =="" || password ==""){
  //     res.status(400).json({
  //         message:"harap semua data disi",
  //     })
  // } else{
  //     res.status(201).json({
  //         message: "registrasi berhasil",
  //     })
  // }

  //simple 2
if (!name || !email || !password)
    return res.status(400).json({
        message: "harap isi semua data",
    });
res.status(201).
    json({
        message: "register berhasil",
    });

  // if(name == "") {
  //     res.status(400).json({
  //         message: 'harap field name di isi',
  //     })
  // } else if(email == "") {
  //     res.status(400).json({
  //         message: 'harap field email di isi',
  //     })
  // } else if(password == "") {
  //         res.status(400).json({
  //             message: 'harap field password di isi',
  //         })
  //     }else{
  //         res.status(201).json({
  //             message: "register berhasil"
  //         })
  //     };
  /**
   * name
   * email
   * password
   */
  console.log(req.body);

  //harap name di isi

  //harap email di isi

  //harap passwaord di isi

  //memberikan respond kembali pada users
  // res.json ({
  //     message:'sukses',
  //     data:req.body,
  // });
});

//port
app.listen(3000, () => console.log("server berlajan pada kecepatan 3000"));
