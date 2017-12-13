const express = require("express");
const inventoryRoutes = express.Router();
const Item = require("../models/inventory");

inventoryRoutes.route("/")
  .get((req, res) => {
    Item.find((err, items) => {
      if(err) return res.status(500).send(err);
      res.send(items);
    });
  })
  .post((req, res) => {
    const newItem = new Item(req.body);
    newItem.save((err) => {
      if(err) return res.status(500).send(err);
      res.status(201).send(newItem);
    });
  })

inventoryRoutes.route("/:id")
  .get((req, res) => {
    Item.findById(req.params.id, (err, item) => {
      if(err) return res.status(500).send(err);
      res.status(200).send(item);
    })
  })
  .put((req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, item) => {
      if(err) return res.status(500).send(err);
      res.send(item);
    })
  })
  .delete((req, res) => {
    Item.findByIdAndRemove(req.params.id, (err, item) => {
      if(err) return res.status(500).send(err);
      res.send({message: "Successfully Deleted", item});
    })
  })

module.exports = inventoryRoutes;
