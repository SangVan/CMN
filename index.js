const express = require("express");
const app = express();
const port = 3001;

const multer = require("multer");
const upload = multer();

const AWS = require("aws-sdk");
const config = new AWS.Config({
  accessKeyId: "AKIAX3OII64MFRCV4LHE",
  secretAccessKey: "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",
  region: "ap-southeast-1",
});
AWS.config = config;

const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "BaiBao";
app.use(express.static("/views"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  const params = {
    TableName: tableName,
  };
  docClient.scan(params, (err, data) => {
    if (err) {
      res.send("Lỗi");
    } else {
      return res.render("index", { baiBao: data.Items });
    }
  });
});

app.post("/", upload.fields([]), (req, res) => {
  const {
    stt,
    ten_bai_bao,
    ten_nhom_tac_gia,
    chi_so_ISBN,
    so_trang,
    nam_xuat_ban,
  } = req.body;
  const params = {
    TableName: tableName,
    Item: {
      stt: stt,
      ten_bai_bao: ten_bai_bao,
      ten_nhom_tac_gia: ten_nhom_tac_gia,
      chi_so_ISBN: chi_so_ISBN,
      so_trang: so_trang,
      nam_san_xuat: nam_xuat_ban,
    },
  };
  docClient.put(params, (err, data) => {
    if (err) {
      res.send("Lỗi");
    } else {
      return res.redirect("/");
    }
  });
});

app.post("/delete", upload.fields([]), (req, res) => {
  const listItems = Object.keys(req.body);
  if (listItems.length === 0) {
    return res.redirect("/");
  }
  function onDeleteItem(index) {
    const params = {
      TableName: tableName,
      Key: {
        stt: listItems[index],
      },
    };
    docClient.delete(params, (err, data) => {
      if (err) {
        res.send("Lỗi");
      } else {
        if (index > 0) {
          onDeleteItem(index - 1);
        } else {
          return res.redirect("/");
        }
      }
    });
  }
  onDeleteItem(listItems.length - 1);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
