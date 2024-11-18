// FUNCTION WAY

document.querySelector("h1").textContent = "🥗 Zoe's Cooking Blog! 🥙";

const body = document.querySelector("body");

const addRecipe = (title, steps) =>{
    const newTitle = document.createElement("p");
    newTitle.innerText = title
    body.appendChild(newTitle)
    
    const newRecipeList = document.createElement("ol"); 
    
    const recipeSteps =steps
    recipeSteps.map(step =>{
        const newItem = document.createElement("li")
        newItem.innerText = step
        newRecipeList.appendChild(newItem)
    })
    
    body.append(newRecipeList)
}

addRecipe("Toast", ["Toast some bread","Spread butter on the toast"])
addRecipe("Make tea", ["Boil Kettle","Add teabag to cup","Add boiling water to cup","Squeeze and remove teabag after a minute or two","Add milk and / or sugar as desired"])

//MAPPED / DRY METHOD

// const recipeListEl = document.createElement("ol"); 

// const toastSteps =["Toast some bread","Spread butter on the toast"]
// toastSteps.map(step =>{
//     const listItem = document.createElement("li")
//     listItem.innerText = step
//     recipeListEl.appendChild(listItem)
// })

// body.append(recipeListEl)

// const newPara = document.createElement("p");
// newPara.innerText = "Make tea"
// body.appendChild(newPara)

// const teaList = document.createElement("ol"); 

// const teaSteps =["Boil Kettle","Add teabag to cup","Add boiling water to cup","Squeeze and remove teabag after a minute or two","Add milk and / or sugar as desired"]
// teaSteps.map(step =>{
//     const teaItem = document.createElement("li")
//     teaItem.innerText = step
//     teaList.appendChild(teaItem)
// })

// body.append(teaList)

