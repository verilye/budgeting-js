import Goal from "./Goal";

export default interface Category{

    user_id:String, 
    category_id:String, 
    goals:Goal[],

}