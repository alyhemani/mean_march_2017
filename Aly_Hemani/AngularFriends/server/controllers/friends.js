console.log('friends controller');
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
module.exports = {
  index: function(req,res){
    Friend.find({}, function(err, friend) {
    res.json(friend);
  })
  },
  create: function(req,res){
    var friend = new Friend({
      fname : req.body.fname,
      lname : req.body.lname,
      bday : req.body.bday
    })

    friend.save(function(err, friend){
      if(err){
        return res.json(err);

      }
      else{
        console.log('Create Friend Successs')
        res.json(friend);
      };
    })
  },
  update: function(req,res){
    Friend.update({_id: req.params.id},{fname: req.body.fname, lname: req.body.lname, bday: req.body.bday}, function(err){

    if(err){
      console.log("Edit Error")
    }

    else{
      console.log('edit success')
    }
  });

  },
  delete: function(req,res){
    // console.log(req.perams.id)
    console.log("delete factory func")
    Friend.remove({_id: req.params.id}, function(err){
    if(err){
    console.log('delete error')
    }
    else{
      console.log("success")
    }
    })

  },
  show: function(req,res){
    Friend.findById(req.params.id, function(err, friend) {
      if(err){
        console.log('show error')
      }
      else{
        res.json(friend);
      }


  })
}
}
