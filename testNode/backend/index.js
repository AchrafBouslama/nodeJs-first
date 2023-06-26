const express=require('express');
const app=express();

const {mongoose}=require('./db/mongoose');
const {Produit} = require('./db/model/produit');
const {Category} = require('./db/model/category');
const {User} = require('./db/model/user');
const bcrypt = require('bcrypt');
var password = 'password';
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
app.use(express.json());

var cors = require('cors') ;
app.use(cors());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // Update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id'
    );
    res.header(
        'Access-Control-Expose-Headers',
        'x-access-token, x-refresh-token'
    );
    next();
});



app.use(express.json())

app.get('/',function(req,res){
    res.send('hii');
});

app.listen(3000,() =>{

    console.log("Server is listening on port 3000");


})

app.get('/api/produit',(req,res)=>{
    Produit.find({}).then((listProduit)=>{
        res.send(listProduit);
    })
    
}
);
/*app.get('/api/produit', async (req, res) => {
    try {
  
      Produit.find({}).then((listProduit)=>{
        res.send(listProduit),{ include: Category }
    })
  
      if (!produit) {
        return res.status(404).json({ message: 'Product not found' });
      }
  
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


*/
app.post('/addproduit',(req,res) =>{

    let name=req.body.name;
    let description=req.body.description;

    let category=req.body.category;
    let newClass = new Produit({
        name,description,category
    });
    newClass.save().then((listDoc)=>{
        res.send(listDoc);
    })
    
}

)

app.put('/update/:id',async(req,res) =>{


    try{

        const {id}=req.params;
        const produit= await Produit.findByIdAndUpdate(id,req.body);

        if(!produit){
            return res.status(404).json({message:`cannot find   any product with id ${id}`})
        }

        const updatedproduit = await Produit.findById(id);
        res.status(200).json(updatedproduit);

    }catch(error) {
        res.status(500).json({message:error.message})
    }

   
    
}

)


app.delete('/ :id',async(req,res) =>{


    try{

        const {id}=req.params;
        const produit= await Produit.findByIdAndDelete(id);

        if(!produit){
            return res.status(404).json({message:`cannot find   any product with id ${id}`})
        }

        
        res.status(200).json(produit);

    }catch(error) {
        res.status(500).json({message:error.message})
    }

   
    
}

)

//////////////////// category /////////////////////////////


app.get('/api/category',(req,res)=>{
    Category.find({}).then((listCategory)=>{
        res.send(listCategory);
    })
    
}
);

app.post('/addCategory',(req,res) =>{

    let name=req.body.name;
    let type=req.body.type;
    let qualite=req.body.qualite;

    let newClass = new Category({
        name,type,qualite
    });
    newClass.save().then((listDoc)=>{
        res.send(listDoc);
    })
    
}

)

/*app.put('/updateC/:id',async(req,res) =>{


    try{

        const {id}=req.params;
        const category= await Category.findByIdAndUpdate(id,req.body);

        if(!category){
            return res.status(404).json({message:`cannot find   any product with id ${id}`})
        }

        const updatedCategory = await Category.findById(id);
        res.status(200).json(updatedCategory);

    }catch(error) {
        res.status(500).json({message:error.message})
    }

   
    
}

)*/
app.patch('/updateC/:id',(req, res)=>{
    Category.findOneAndUpdate({_id:req.params.id},{
        $set:req.body
    }).then(()=> {
       // res.sendStatus(200);
        res.send({'message':'updated successfully'});


    });



});






app.get('/getById/:id',(req,res) =>{
    let id = req.params.id
    Category.findOne({_id: id}).then(
(category)=>{


    res.status(200).send(category);
}

    ).catch(
        (err)=>{


            res.status(400).send(err);
        }

    )

    
}
)

app.delete('/deleteC/:id',async(req,res) =>{


    try{

        const {id}=req.params;
        const category= await Category.findByIdAndDelete(id);

        if(!category){
            return res.status(404).json({message:`cannot find   any category with id ${id}`})
        }

        
        res.status(200).json(category);

    }catch(error) {
        res.status(500).json({message:error.message})
    }

   
    
}

)

/// USER ////////////

app.post('/register',(req,res)=>{
 let data= req.body;

const user = new User(data);
const salt = bcrypt.genSaltSync(10);
user.password=bcrypt.hashSync(data.password,salt);
console.log('Hashed password:', user.password);
user.save().then(

(savedUser)=>{
res.status(200).send(savedUser);

}
).catch (
err=>{
    res.send(err);
}

)
})


app.post('/login',(req,res)=>{
    let data = req.body;

   User.findOne({email:data.email}).then(

(user)=> {
let valid =bcrypt.compareSync(data.password, user.password);

if (!valid){
    res.send('email or password invalid ');
}else {
    let payload = {

        _id:user._id,
        name:user.name,
        email:user.email 
    }
    let token = jwt.sign(payload,'123456789');
    res.send({mytoken:token})    

}

}

   ).catch(
    err=>{
        res.send(err);
    }
   )
}
) 

// get all users

app.get('/allusers',(req,res)=>{
    User.find({}).then(

        (users)=>{

            res.status(200).send(users)
        }
    ).catch(

        (err)=>{
            res.status(400).send(err);
        }
    )
}
)

// find by id //

app.get('/getById/:id',(req,res) =>{
    let id = req.params.id
    User.findOne({_id: id}).then(
(user)=>{


    res.status(200).send(user);
}

    ).catch(
        (err)=>{


            res.status(400).send(err);
        }

    )

    
}


)


