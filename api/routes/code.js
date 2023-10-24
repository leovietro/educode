const router = require("express").Router();
const express = require("express");
const cardModel = require("../models/cardModel");
var ObjectId = require("mongodb").ObjectId;

router.post("/api/code", (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body missing");
  }

  let model = new cardModel(req.body);
  model
    .save()
    .then((doc) => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc);
      }

      res.status(201).send(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/api/code", (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body missing");
  }

  if (!req.query.id) {
    cardModel.find({ codeLang: req.query.codeLang }, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  } else {
    cardModel.find({ _id: new ObjectId(req.query.id) }, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    });
  }
});

router.put("/api/code", (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body missing");
  }

  const { name, username, code, codeLang } = req.body;

  cardModel
    .updateOne(
      { _id: new ObjectId(req.query.id) },
      { $set: { name, username, code, codeLang } }
    )
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete("/api/code", (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body missing");
  }

  const formattedId = new ObjectId(req.query.id);

  cardModel
    .deleteOne({
      _id: formattedId,
    })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
