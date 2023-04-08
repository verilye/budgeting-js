import Goal from "./goal";

export default interface Category{

    user_id:String, 
    category_id:String, 
    goals:Goal[],

}