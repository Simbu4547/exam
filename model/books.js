const mongose=reqiure('mongose');
const BookSchema=new mongose.Schema({
  title: {
    type:String, required:true},
  author:{
    type:String, required:true},
  publisher:{
    type:String, required:true},
  publishedDate:{
    type:Date, required:true},
  description:{
    type:String, required:true},
  pageCount:{
    type:Number, required:true};
const Book=mongose.model('Book',BookSchema);
module.exports=Book;
