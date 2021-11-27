let words = document.querySelectorAll(".signWordAll")
let copyWords = Array.from(words)
let allCardsHolder = document.querySelector(".allHolder")
let input = document.getElementById("searchbar")

let deletedWordCards = []

let tabsHolder = document.getElementById("tabsHolder")
let allTab = document.getElementById("link-tab-0da5")
let allCategory = document.getElementById("tab-0da5")
let categoriesHolder = document.getElementsByClassName("u-tab-content")[0]

let videos = document.querySelectorAll(".allHolder .back video")
// let video = copyWords[0].parentElement.childNodes[1].childNodes[1].childNodes[1].childNodes[3].childNodes[7].childNodes[1]

function searchWord() {
    let inputVal = input.value
    inputVal = inputVal.toLowerCase()

    // deleting and adding cards
    for (i = 0; i < words.length; i++) {
        elem = copyWords[i].parentElement.parentElement

        if(copyWords[i].innerText.toLowerCase().includes(inputVal)) {
            // this card is part of the search
            if (deletedWordCards.includes(elem)) {
                allCardsHolder.append(elem)
                videos[i].play()
            }
        } else {
            // this card is not part of the search
            deletedWordCards.push(elem)
            elem.remove()
        }
    }
    

    // whenever user searches, check which tab is currently active based on tabsHolder
    // untoggle that active tab
    // toggle the All tab
    for (let i = 0; i < tabsHolder.children.length; i++) {
        let tab = tabsHolder.children[i].children[0]
        if(tab.classList.contains("active")) {

            // toggle the current tab
            tab.classList.toggle("active")
            tab.setAttribute("aria-selected", "false")

            // change category (toggle current category and toggle all category)
            for (let m = 0; m < categoriesHolder.children.length; m++) {
                currentCategory = categoriesHolder.children[m]
                if(currentCategory.classList.contains("u-tab-active")) {
                    currentCategory.classList.toggle("u-tab-active")
                    allCategory.classList.toggle("u-tab-active")
                }
            }

            // toggle the all cards tab
            allTab.classList.toggle("active")
            allTab.setAttribute("aria-selected", "true")
            break
        }
    }

}