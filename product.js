overall = [
    {device     : "iPhone 1st generation",
    version     : "3.1.3",
    releaseDate  : "February 2, 2010",
    features     : "Faster boot up time and various speed improvements",
    bugs         : "Crash sometimes",
    author      : "Albert Einstein"
},  
   {device       : "iPhone 3rd generation",
    version      : "4.2.1",
    releaseDate  : "November 22, 2010",
    features     : "Ability to initiate FaceTime calls from Voice Control",
    bugs         : "abcdefghi",
    author      : "Profesor Bora"
},
   {
    device       : "iPod 1st generation",
    version      : "5.1.1",
    releaseDate  : "May 7, 2012",
    features     : "Fixes battery drain bug",
    bugs         : "AZSXDCFV",
    author      : "Kevin",
},
   {device       : "iPhone 3G S",
    version      : "6.1.6",
    releaseDate  : "February 21, 2014",
    features     : "New music controls on lock screen when the home button is double-pressed.",
    bugs         : "SXAZDCFV",
    author      : "Jerry",
},
    {device       : "iPhone 4",
    version      : "7.1.2",
    releaseDate  : "June 30, 2014",
    features     : "Bug fixes and security improvements",
    bugs         : "ZXSADCVF",
    author      : "Tom",
    
},
    {device       : "iPod mini",
    version      : "9.3.5",
    releaseDate  : "August 25, 2016",
    features     : "Siri support for Finnish, Hebrew, and Malay",
    bugs         : "SZAXDVFC",
    author      : "Professor Paradox",
},
    {device       : "iPhone 4S",
    version      : "9.3.6",
    releaseDate  : "July 22, 2019",
    features     : "Fixes a GPS Week Number Rollover issue",
    bugs         : "ZSXADCCF",
    author      : "Gwen Tennyson",
},
]
// console.log(overall)
function numberOfVersionsInYear (year)
 count = 0
 for (i in overall){
    if(i.releaseDate == year)
    count++
    console.log(i)
 }