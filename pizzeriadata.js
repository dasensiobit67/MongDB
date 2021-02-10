cnx = new Mongo("localhost");
db = cnx.getDB('pizzeria');
db.dropDatabase();


db.createCollection('product');
db.createCollection('customer');
db.createCollection('employee');
db.createCollection('store');
db.createCollection('category');

db.store.insertOne({name:'Moxin Co.',adress:{street:'Calabria 59',city:'Barcelona',province:'Barcelona',zip:'08014'},phone:'785555666',nif:'3456287Q'});
db.store.insertOne({name:'Tech Optik',adress:{street:'Segre 107',city:'Cervera',province:'Lleida',zip:'25146'},phone:'902126942010',nif:'32456789A'});
db.store.insertOne({name:'MHR Fasion',adress:{street:'St.Nicolau 32',city:'Figueres',province:'Girona',zip:'17059'},phone:'91589666',nif:'74185296F'});

db.category.insertOne({name:'Pizza'});
db.category.insertOne({name:'Burguer'});
db.category.insertOne({name:'Drink'});

//category selection simulation
var category1 = db.category.findOne({name:"Pizza"});
var Id1 = category1._id;
var category3 = db.category.findOne({name:"Drink"});
var Id3 = category3._id;

db.product.insertOne({name:'Margarita', description:'Tomate, Mozzarella, Albahaca', imageUrl:'http://margarita.jpg',price:10, category_id:Id1 });
db.product.insertOne({name:'Proscciuto', description:'Tomate, Mozzarella, Jamon', imageUrl:'http://proscciuto.jpg',price:12,category_id:Id1 });
db.product.insertOne({name:'Siciliana', description:'Tomate, Mozzarella, Anchoas', imageUrl:'http://siciliana.jpg',price:15,category_id:Id1 });
db.product.insertOne({name:'Cerveza', description:'Cerveza Red Ale', imageUrl:'http://cerveza.jpg',price:5,category_id:Id3 });


db.customer.insertOne({name:'Adrian Benjamin',adress:{street:'Calabria 59',city:'Barcelona',province:'Barcelona',zip:'08014'},phone:'958455762',email:'adrian1965@hotmail.com'});
db.customer.insertOne({name:'Ana Tornero',adress:{street:'Moyanes 27',city:'Terrassa',province:'Barcelona',zip:'08527'},phone:'91589666',email:'anita28@yahoo.es'});
db.customer.insertOne({name:'Virtudes Martinez',adress:{street:'Segre 107',city:'Cervera',province:'Lleida',zip:'25146'},phone:'936584712',email:'vmartinez@gmail.com'});

db.employee.insertOne({coockOrDrive: true,name:'Pedro Gomez', phone:'123456789', nif:'784512K'});
db.employee.insertOne({coockOrDrive: false,name:'Ana Sanchez',phone:'456789123', nif:'584721F'});
db.employee.insertOne({coockOrDrive: true,name:'Beatriz Parla',phone:'321456987', nif:'324568Q'});
