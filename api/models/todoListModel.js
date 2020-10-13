'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Post = new Schema({
  title: {
    type: String
  },
  body:{
    type:String  
  },
  featured:{
      type:Boolean,
      default:false
  },
  public:{
    type:Boolean,
    default: false
  },
  tags: {
    type: [{
      type: String,
    }],
    default: ['nessun_tag']
  }
});

module.exports = mongoose.model('Post', Post);