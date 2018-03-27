
export class Constant {
    public static apiEndpoint = 'http://localhost:3000/api'; //'https://hidden-reaches-10384.herokuapp.com/api';
    public static loginUrl = Constant.apiEndpoint + '/Accounts/login';
    public static registerUrl = Constant.apiEndpoint + '/Accounts';
    public static getUserById = Constant.apiEndpoint + '/Accounts';
    public static getCategoriesInRange = Constant.apiEndpoint + '/Categories/getCategory';
    public static getTopCategories = Constant.apiEndpoint + '/Categories/getTopCategory';
    public static searchTypeAhead = Constant.apiEndpoint + '/Categories/searchTypeHead';
}