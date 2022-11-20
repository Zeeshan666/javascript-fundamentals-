let data = [
  { model: "Sentra", doors: 4 },
  { model: "Maxima", doors: 4 },
  { model: "Skyline", doors: 2 },
];


const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];






//Map filter and find


let newData=companies.map((val,i)=>{
    return{
       CompanyType:val.category,
       CompanyName:val.name,
       CompanyTenure:val.end - val.start,
       index:i
    }
})
.filter(a=>a.CompanyTenure>=10)
.find(v=>v.CompanyTenure>=10&&v.CompanyType==="Retail")


//findIndex
let Index =companies.findIndex(a=>a.name==="Company Five")

// some or every
   //boolean
let some =companies.some(a=>a.CompanyTenure>=10)
let every = newData.every(a=>(a.end - a.start)>=10)

console.log(some,every)


//filter
//Find
//some 
//every
//reduce
