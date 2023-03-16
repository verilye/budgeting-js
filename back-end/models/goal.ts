
// target date should automatically be set for the end of the next month
// but be editable by the user

interface Goal{

    user_id:String,
    category_id:String, 
    name:String,
    targetAmount:number,
    allocatedAmount:number,
    targetDate:Date,

}