cnx = new Mongo("localhost");
db = cnx.getDB('optica');
db.dropDatabase();

db.createCollection('suplier');
db.createCollection('glasses');
db.createCollection('customer');
db.createCollection('employee');
db.createCollection('sales');

db.suplier.insertOne({name:'Moxin Co.',adress:'Spathenstrash 23',phone:'785555666',fax:'785555666',nif:'3456287Q'});
db.suplier.insertOne({name:'Tech Optik',adress:'Reşitpaşa cad 125',phone:'902126942010',fax:'902126942010',nif:'32456789A'});
db.suplier.insertOne({name:'MHR Fasion',adress:'Castellana 186',phone:'91589666',fax:'91589666',nif:'74185296F'});

//supplier selection simulation
var suplier1 = db.suplier.findOne({name:"Moxin Co."});
var Id1 = suplier1._id;
var suplier2 = db.suplier.findOne({name:"Tech Optik"});
var Id2 = suplier2._id;
var suplier3 = db.suplier.findOne({name:"MHR Fasion"});
var Id3 = suplier3._id;

db.glasses.insertOne({trademark:'Ray-Ban',leftgrad:'1',rightgrad:'1',frame:'Metal',colorframe:'Dorado',colorlenses:'Verde',price:100,idsuplier:Id1});
db.glasses.insertOne({trademark:'Gucci',leftgrad:'1.5',rightgrad:'1.5',frame:'Madera',colorframe:'Caoba',colorlenses:'Ambar',price:150,idsuplier:Id2});
db.glasses.insertOne({trademark:'DKNY',leftgrad:'2',rightgrad:'2',frame:'Pasta',colorframe:'Rojo',colorlenses:'Negro',price:200,idsuplier:Id3});

db.customer.insertOne({name:'Adrian Benjamin',adress:'Calabria 59',phone:'958455762',email:'adrian1965@hotmail.com',datereg:'2017-04-27',recomended:''});
db.customer.insertOne({name:'Ana Tornero',adress:'Castellana 186',phone:'91589666',email:'anita28@yahoo.es',datereg:'2015-10-05',recomended:''});
db.customer.insertOne({name:'Virtudes Martinez',adress:'Moyanes 18',phone:'936584712',email:'vmartinez@gmail.com',datereg:'2018-11-18',recomended:''});

db.employee.insertOne({name:'Pedro Gomez'});
db.employee.insertOne({name:'Ana Sanchez'});
db.employee.insertOne({name:'Beatriz Parla'});
