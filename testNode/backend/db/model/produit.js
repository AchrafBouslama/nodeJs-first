const mongoose=require('mongoose');
 
const {Category} = require('./category');
const produitSchema= mongoose.Schema({

name:{

type:String,
required:true

},

description:{

    type:String,
    required:true
    
    },
    category:  [   {

        type:mongoose.Schema.Types.ObjectId,
        ref:'Category'
        
        }]
});
const categorySchema= mongoose.Schema({

    name:{
    
    type:String,
    required:true
    
    },
    
    type:{
    
        type:String,
        required:true
        
        },
        qualite:{
    
            type:String,
            required:true
            
            }
    
    
        });
        

const Produit= mongoose.model('Produit',produitSchema);
module.exports ={Produit,Category}



