//Task 1

//Selecting riskDashboard Container
const riskDashboard = document.getElementById(`riskDashboard`)
console.log(`Risk Dashboard Loaded`);                       // Printing to console

//Task 2
function addRiskItem(riskName, riskLevel, department) {

    //Create new card
    const riskCard = document.createElement (`div`)         
    riskCard.classList.add(`riskCard`)


//----------------------------------------------------------------//
//Task 4
    //Designating background colors to risk levels
    if (riskLevel === 'Low') {
        riskCard.style.backgroundColor = 'green' 
    } else if (riskLevel === 'Medium') {
        riskCard.style.backgroundColor = 'yellow' 
    } else if (riskLevel === 'High') {
        riskCard.style.backgroundColor = 'red'
    }
//-----------------------------------------------------------------//

//(Task 2 continued)
    //Risk card style
    riskCard.style.padding = "15px"
    riskCard.style.margin = "10px 0"                        
    riskCard.style.border = "1px solid lightgray"
    riskCard.style.borderRadius = "8px"
    riskCard.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.1)"

    //Adding risk name, level, and department to Risk Card
    const riskNameElement = document.createElement(`h3`)    
    riskNameElement.textContent = riskName

    const riskLevelElement = document.createElement(`p`)    
    riskLevelElement.textContent = `Risk Level: ${riskLevel}`

    const departmentElement = document.createElement(`p`)  
    departmentElement.textContent = `Department: ${department}`


    //Appending to Dashboard
    riskCard.appendChild(riskNameElement)
    riskCard.appendChild(riskLevelElement)
    riskCard.appendChild(departmentElement)
    //new card to dashboard
    document.getElementById(`riskDashboard`).appendChild(riskCard)

//-----------------------------------------------------------------//

//Task 6
    //stopPropagation() in risk card
riskCard.addEventListener('click', function(event) {
        event.stopPropagation()
    })

    
//-----------------------------------------------------------------//
//Task 3
    //Resolve button                                                
    const resolveButton = document.createElement(`button`)
    resolveButton.textContent = `Resolve`
    resolveButton.addEventListener(`click`,function(event) {
    event.stopPropagation()          
    document.getElementById(`riskDashboard`).removeChild(riskCard)           
})
    //Append resolve button
    riskCard.appendChild(resolveButton)
}          
//-----------------------------------------------------------------//

//Task 5
    //Creating increase risk button
    const increaseRiskButton = document.createElement('button')
    increaseRiskButton.textContent = 'Increase Risk Levels'
    document.getElementById('riskDashboard').appendChild(increaseRiskButton)

    increaseRiskButton.addEventListener('click', function() {
    const riskCards = document.querySelectorAll('.riskCard')

    //Retrieve risk level input
    riskCards.forEach(card => {
        const riskLevelElement = card.querySelector('p')
    //Retriece current/ updated level
        let currentLevel = riskLevelElement.textContent.replace('Risk Level: ', '') 

        if (currentLevel === 'Low') {
            riskLevelElement.textContent = 'Risk Level: Medium'
            card.style.backgroundColor = 'yellow'
        } else if (currentLevel === 'Medium') {
            riskLevelElement.textContent = 'Risk Level: High'
            card.style.backgroundColor = 'red'
        }
    })
})
//------------------------------------------------------------------//


//(Task 2 continued)
    //Inputting new risk to form
    const riskForm = document.getElementById(`riskForm`)
    riskForm.addEventListener('submit', function(event) {
        event.preventDefault()

    const riskName = document.getElementById(`riskName`).value
    const riskLevel = document.getElementById(`riskLevel`).value
    const department = document.getElementById(`department`).value

    addRiskItem(riskName, riskLevel, department)

    //Clear inputs for next entry
    document.getElementById('riskName').value = ''
    document.getElementById('riskLevel').value = 'Low'
    document.getElementById('department').value = ''
})



//Test Case (Task 2)
addRiskItem("Data Breach", "High", "IT")
addRiskItem("Supply Chain Disruption", "Medium", "Operations")
//Test Case (Task 3)
addRiskItem("Market Fluctuations", "High", "Finance") 
//Test Case (Task 4)
addRiskItem("Cybersecurity Threat", "High", "IT")
addRiskItem("HR Compliance Issue", "Low", "Human Resources")