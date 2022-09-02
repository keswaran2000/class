let product = [
    {
        device: "iPhone 1st generation",
        version: "3.1.3",
        releaseDate: "February 2, 2010",
        features: ["Faster boot up time and various speed improvements"],
        bugId: ["#111A"],
        author: ["Professor Paradox"],
        type: "Major"
    },
    {
        device: "iPhone 3rd generation",
        version: "4.2.1",
        releaseDate: "November 22, 2010",
        features: ["Ability to initiate FaceTime calls from Voice Control"],
        bugId: ["#222B"],
        author: ["Profesor Bora"],
        type: "Patch"
    },
    {
        device: "iPad 1st generation",
        version: "5.1.1",
        releaseDate: "May 7, 2012",
        features: ["Fixes battery drain bug and stability"],
        bugId: ["#333C"],
        author: ["Professor Paradox"],
        type: "Patch"
    },
    {
        device: "iPhone 3G S",
        version: "6.1.6",
        releaseDate: "February 21, 2014",
        features: ["New music controls on lock screen when the home button is double-pressed"],
        bugId: ["#444D"],
        author: ["Jerry"],
        type: "Major"
    },
    {
        device: "iPhone 4",
        version: "7.1.2",
        releaseDate: "June 30, 2014",
        features: ["stability"],
        bugId: ["#555E"],
        author: ["Tom"],
        type: "Patch"

    },
    {
        device: "iPad mini",
        version: "9.3.5",
        releaseDate: "August 25, 2016",
        features: ["Siri support for Finnish, Hebrew, and Malay"],
        bugId: ["666F"],
        author: ["Professor Paradox"],
        type: "Major"
    },
    {
        device: "iPhone 4S",
        version: "9.3.6",
        releaseDate: "July 22, 2019",
        features: ["Fixes a GPS Week Number Rollover issue"],
        bugId: ["777G"],
        author: ["Gwen Tennyson"],
        type: "Patch"
    },
]
const listsOfBugs = [
    {
        Bug_Id: "#111A",
        BugName: "Alpha"
    },
    {
        Bug_Id: "#222B",
        BugName: "Beta"
    },
    {
        Bug_Id: "#333C",
        BugName: "Gamma"
    },
    {
        Bug_Id: "#444D",
        BugName: "Sigma"
    },
    {
        Bug_Id: "#555E",
        BugName: "NovaX"
    },
    {
        Bug_Id: "#666F",
        BugName: "Ceirus"
    },
    {
        Bug_Id: "#777G",
        BugName: "Melanin"
    }
]
// console.log(product)

//How many products released in the year?

function versionsReleaseInYear(year: any) {
    let releasedProductVersions = (product.filter(n => n.releaseDate.includes(year)))
    console.log(`1.How many products released in the year ${year}? : ${releasedProductVersions.length} Products`)
    //console.log(releasedProductVersions);

}
versionsReleaseInYear("2010")

//In which release the specific bug id is present

function bugsInVersion(bugIn: any) {
    let count = 0
    listsOfBugs.forEach(elements => {
        if (elements.Bug_Id == bugIn) {
            count++
            console.log("Bug Name :", " ", elements.BugName)
        }
    })
    // console.log(product[0].bugId)
    let bugBuild = product.filter(n => n.bugId.includes(bugIn))
    console.log(`2.In which release specific bugId is present? BugID:${bugIn}`)
    console.log(`Total Number of bugs : ${bugBuild.length}`)
    //console.log(bugBuild);

}
bugsInVersion("#111A")
//------------------------------------------------------------------------------

function mostUpdatesByAuthor() {
    let author_update: any = []
    product.forEach(elements => {
        for (let i of elements.author) {
            author_update.push(i)
        }
    })
    let count = 1
    let author_version = 0
    let max_value = 1
    for (let i = 0; i < author_update.length; i++) {
        for (let j = 1; j < author_update.length; j++) {
            if (author_update[i] == author_update[j]) {
                count++
            }
            if (max_value < count) {
                max_value = count
                author_version = author_update[i]
            }

        }
        count = 0
    }
    console.log(`3.Which Author has worked in many releases? : ${author_version} and his total develop version is ${max_value}`)
}
mostUpdatesByAuthor()

//How many Number of products has the types of Major

function otherTypeOfProduct(majors: any) {
    let majortype = (product.filter(maj => maj.type.includes(majors)))
    console.log(`4.How many releases were type of ${majors}? : ${majortype.length} types`)
    //console.log(majortype);

}
otherTypeOfProduct("Major")


function featuresOftheProduct(specification: any) {
    let updatefeatures = (product.filter(n => n.features.includes(specification)))
    console.log(`5.How many versions have the specific feature name ? : ${updatefeatures.length} version is specific `)
    console.log(`Specification Features is : ${specification}`)
    //console.log(updatefeatures)

}
featuresOftheProduct("stability")