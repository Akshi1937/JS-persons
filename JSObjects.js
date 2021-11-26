function person(first_name,last_name,office_address){
    this.first_name = first_name;
    this.last_name = last_name;
    this.office_address = office_address;
}
var p1 = new person ("person","1","o1");
var p2 = new person ("person","2","o2");
var p3 = new person ("person","3","o3");
console.log(p1);
console.log(p2);
console.log(p3);